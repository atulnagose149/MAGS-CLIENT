"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const productsData = {
  "economy-sliding-system": [
    {
      id: "mse63",
      name: "MSE63",
      description:
        "Non-insulated sliding system for warm climates and indoor applications",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      specs: "Max weight: 100kg • Glass: 4-8mm",
    },
    {
      id: "mse22",
      name: "MSE22",
      description:
        "Minimalistic sliding system with 2-, 3- to 4-rail solutions for aesthetic applications",
      image:
        "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      specs: "Max weight: 100kg • Glass: 4-8mm • Minimalistic design",
    },
  ],
  "medium-premiums-sliding-system": [
    {
      id: "ms20",
      name: "MS20",
      description:
        "SLIM sliding system with minimalistic design offering 2-, 3- to 4-rail solutions",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      specs: "Max weight: 200kg • Glass: 5-24mm • Up to 4-rail solutions",
    },
    {
      id: "ms27",
      name: "MS27",
      description:
        "GULF SLIM sliding system with 2 and 3-rail solutions, optimized for Gulf climate applications",
      image:
        "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      specs: "Max weight: 200kg • Glass: 5-24mm • Gulf climate optimized",
    },
    {
      id: "ms27-gulf",
      name: "MS27 Gulf",
      description:
        "GULF SLIM sliding system specifically designed for hot climates with enhanced durability",
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      specs: "Max weight: 200kg • Glass: 5-24mm • Gulf climate optimized",
    },
    {
      id: "ms40",
      name: "MS40",
      description:
        "Robust sliding system with monorail option and enhanced interlocking for warm climates",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      specs: "Max weight: 200kg • Glass: 5-24mm • Monorail depth: 101mm",
    },
    {
      id: "ms40-monorail",
      name: "MS40 Monorail",
      description:
        "Specialized monorail sliding system with 101mm depth for enhanced structural performance",
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      specs: "Max weight: 200kg • Glass: 5-24mm • Monorail depth: 101mm",
    },
    {
      id: "ms50-vertical-sliding",
      name: "MS50 Vertical Sliding",
      description:
        "Heavy-duty vertical sliding system for large openings with superior insulation and performance",
      image:
        "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      specs: "Max weight: 600kg • Glass: 5-30mm • Large span capability",
    },
  ],
};

export default function ProductsListPage() {
  const params = useParams();
  const category = params.category as string;
  const subcategory = params.subcategory as string;
  const products =
    subcategory in productsData
      ? productsData[subcategory as keyof typeof productsData]
      : [];

  if (!products) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link
              href="/products"
              className="text-amber-600 hover:text-amber-700"
            >
              Products
            </Link>
            <span className="text-neutral-400">/</span>
            <Link
              href={`/products/${category}`}
              className="text-amber-600 hover:text-amber-700 capitalize"
            >
              {category?.replace(/-/g, " ")}
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600 capitalize">
              {subcategory?.replace(/-/g, " ")}
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2 capitalize">
            {subcategory?.replace(/-/g, " ")}
          </h1>
          <p className="text-amber-700">
            Select a specific product for detailed information
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Link
                key={idx}
                href={`/products/${category}/${subcategory}/${product.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-48 bg-neutral-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-600 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <p className="text-xs text-neutral-500 italic mb-4">
                    {product.specs}
                  </p>
                  <div className="flex justify-end">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
