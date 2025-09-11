"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const subcategoriesData = {
  "sliding-windows-and-doors": [
    {
      id: "economy-sliding-system",
      name: "Economy Sliding System",
      description:
        "Cost-effective sliding solutions for residential and light commercial applications",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      products: ["MSE63", "MSE22"],
    },
    {
      id: "medium-premiums-sliding-system",
      name: "Medium Premium Sliding System",
      description:
        "Enhanced sliding systems with improved performance and aesthetics",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      products: [
        "MS20",
        "MS27",
        "MS40",
        "MS40 Monorail",
        "MS27 Gulf System",
        "MS50 Vertical sliding",
      ],
    },
    {
      id: "premium-doors-sliding-system",
      name: "Premium Doors Sliding System",
      description: "High-end sliding door systems for luxury applications",
      image:
        "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      products: ["MS11", "MS18", "MS22 Minimal", "MS25"],
    },
    {
      id: "hybrid-premiums-sliding-system",
      name: "Hybrid Premium Sliding System",
      description: "Advanced hybrid technology for maximum performance",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      products: [
        "MS16 Minimal",
        "MS18 Panoramic sliding door",
        "MS22 Panoramic",
        "MS30 Slim Heavy-Duty lift and Slide",
      ],
    },
  ],
  "casement-windows-and-doors": [
    {
      id: "economy-casement",
      name: "Economy Casement",
      description: "Affordable casement solutions with reliable performance",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      products: [
        "MCE28 Economy Casement",
        "MCE92 (Economy 3in1 Glass, Grill & Mesh)",
      ],
    },
    {
      id: "premium-casement",
      name: "Premium Casement",
      description: "High-performance casement systems with advanced features",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      products: ["MC45", "MC105 (3in1 Glass, Grill & Mesh)", "MD45"],
    },
  ],
  "sliding-folding": [
    {
      id: "folding-systems",
      name: "Sliding Folding Systems",
      description: "Versatile folding door systems for large openings",
      image:
        "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      products: ["MSFD50", "MSFD58 Premium Folding Door"],
    },
  ],
  "thermal-brake-system": [
    {
      id: "thermal-sliding",
      name: "Thermal Sliding Systems",
      description:
        "Energy-efficient sliding systems with thermal break technology",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      products: [
        "MSTH75 Sliding",
        "150 Panoramic Sliding Doors",
        "MSTH35 Slim Sliding",
      ],
    },
    {
      id: "thermal-casement",
      name: "Thermal Casement Systems",
      description: "Insulated casement windows and doors with thermal break",
      image:
        "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      products: ["MCTH50 Casement Windows", "MDTH50 Casement Doors"],
    },
  ],
};

export default function SubCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const subcategories =
    category in subcategoriesData
      ? subcategoriesData[category as keyof typeof subcategoriesData]
      : [];

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
            <span className="text-neutral-600 capitalize">
              {category?.replace(/-/g, " ")}
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2 capitalize">
            {category?.replace(/-/g, " ")}
          </h1>
          <p className="text-amber-700">
            Choose from our range of specialized systems
          </p>
        </div>
      </div>

      {/* Subcategories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((subcategory, idx) => (
              <Link
                key={idx}
                href={`/products/${category}/${subcategory.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-48 bg-neutral-200 overflow-hidden">
                  <Image
                    src={subcategory.image}
                    alt={subcategory.name}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-600 mb-3">
                    {subcategory.name}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                    {subcategory.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500">
                      {subcategory.products.length} Products
                    </span>
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
