export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://nusaproperty.syndual.cloud";

export interface PropertyItem {
    id: string;
    title: string;
    location: string;
    price: number;
    priceFormatted: string;
    installmentEstimate: string;
    bedrooms: number;
    bathrooms: number;
    carports: number;
    buildingArea: number;
    surfaceArea: number;
    electricityVa: number;
    certificateType: string;
    tagText: string;
    tagType: string;
    imageUrl: string;
    developerName?: string;
    addressDetail?: string;
    isFavorite: boolean;
    isFeatured?: boolean;
}

export interface KprCalculationRequest {
    propertyPrice: number;
    dpPercent: number;
    tenorYears: number;
    isSyariah: boolean;
}

export interface KprCalculationResponse {
    propertyPrice: number;
    dpPercent: number;
    dpAmount: number;
    loanAmount: number;
    tenorYears: number;
    isSyariah: boolean;
    interestRate: number;
    monthlyInstallment: number;
    totalPayment: number;
    totalInterest: number;
    principalPercentage: number;
    interestPercentage: number;
    recommendedMinIncome: number;
}

interface RawProperty {
    id?: string | number;
    title?: string;
    location?: string;
    price?: number;
    price_formatted?: string;
    priceFormatted?: string;
    installment_estimate?: string;
    installmentEstimate?: string;
    bedrooms?: number;
    bathrooms?: number;
    carports?: number;
    building_area?: number;
    buildingArea?: number;
    surface_area?: number;
    surfaceArea?: number;
    electricity_va?: number;
    electricityVa?: number;
    certificate_type?: string;
    certificateType?: string;
    tag_text?: string;
    tagText?: string;
    tag_type?: string;
    tagType?: string;
    image_url?: string;
    imageUrl?: string;
    developer_name?: string;
    developerName?: string;
    address_detail?: string;
    addressDetail?: string;
    is_favorite?: boolean;
    isFavorite?: boolean;
    is_featured?: boolean;
    isFeatured?: boolean;
}

export function formatRupiah(val: number): string {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    })
        .format(val)
        .replace("IDR", "Rp");
}

// Helper to normalize property response handling both camelCase and snake_case
export function normalizeProperty(raw: RawProperty): PropertyItem {
    const price = Number(raw.price || 0);
    return {
        id: String(raw.id || ""),
        title: String(raw.title || ""),
        location: String(raw.location || ""),
        price,
        priceFormatted: raw.price_formatted || raw.priceFormatted || formatRupiah(price),
        installmentEstimate:
            raw.installment_estimate ||
            raw.installmentEstimate ||
            `Cicilan mulai Rp ${Math.round(price / 195_000_000)},${Math.round((price % 195_000_000) / 20_000_000)} Jt/bln`,
        bedrooms: Number(raw.bedrooms ?? 2),
        bathrooms: Number(raw.bathrooms ?? 1),
        carports: Number(raw.carports ?? 1),
        buildingArea: Number(raw.building_area ?? raw.buildingArea ?? 36),
        surfaceArea: Number(raw.surface_area ?? raw.surfaceArea ?? 60),
        electricityVa: Number(raw.electricity_va ?? raw.electricityVa ?? 1300),
        certificateType: raw.certificate_type || raw.certificateType || "SHM",
        tagText: raw.tag_text || raw.tagText || "Tersedia",
        tagType: raw.tag_type || raw.tagType || "PROMO",
        imageUrl: raw.image_url || raw.imageUrl || "/images/cluster-tropical.png",
        developerName: raw.developer_name || raw.developerName || "Nusa Partner",
        addressDetail: raw.address_detail || raw.addressDetail || raw.location,
        isFavorite: Boolean(raw.is_favorite ?? raw.isFavorite ?? false),
        isFeatured: Boolean(raw.is_featured ?? raw.isFeatured ?? false),
    };
}

/**
 * Fetch non-featured properties with optional filters
 */
export async function fetchProperties(params?: {
    tag_type?: string;
    is_favorite?: boolean;
    search?: string;
}): Promise<PropertyItem[]> {
    try {
        const query = new URLSearchParams();
        if (params?.tag_type && params.tag_type !== "ALL") {
            query.append("tag_type", params.tag_type.toUpperCase());
        }
        if (params?.is_favorite !== undefined) {
            query.append("is_favorite", String(params.is_favorite));
        }
        if (params?.search) {
            query.append("search", params.search);
        }

        const queryString = query.toString() ? `?${query.toString()}` : "";
        const res = await fetch(`${API_BASE_URL}/api/properties${queryString}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch properties: ${res.statusText}`);
        }

        const data: RawProperty[] = await res.json();
        return Array.isArray(data) ? data.map((item) => normalizeProperty(item)) : [];
    } catch (err) {
        console.error("Error fetching properties:", err);
        return [];
    }
}

/**
 * Fetch featured property
 */
export async function fetchFeaturedProperty(): Promise<PropertyItem | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/api/properties/featured`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            return null;
        }

        const data: RawProperty = await res.json();
        const prop = normalizeProperty(data);
        prop.isFeatured = true;
        return prop;
    } catch (err) {
        console.error("Error fetching featured property:", err);
        return null;
    }
}

/**
 * Fetch all properties combined (featured + regular list)
 */
export async function fetchAllPropertiesCombined(): Promise<PropertyItem[]> {
    try {
        const [featured, list] = await Promise.all([
            fetchFeaturedProperty(),
            fetchProperties(),
        ]);

        const allMap = new Map<string, PropertyItem>();

        if (featured) {
            allMap.set(featured.id, featured);
        }

        for (const item of list) {
            if (!allMap.has(item.id)) {
                allMap.set(item.id, item);
            }
        }

        return Array.from(allMap.values());
    } catch (err) {
        console.error("Error fetching combined properties:", err);
        return [];
    }
}

/**
 * Calculate KPR via backend API
 */
export async function calculateKpr(
    payload: KprCalculationRequest
): Promise<KprCalculationResponse> {
    const res = await fetch(`${API_BASE_URL}/api/kpr/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error(`Failed to calculate KPR: ${res.statusText}`);
    }

    return await res.json();
}
