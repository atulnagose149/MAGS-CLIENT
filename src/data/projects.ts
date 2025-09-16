export interface Project {
  slug: string;
  title: string;
  location: string;
  productInstalled: string;
  overview: string;
  keyFeatures: string[];
  valueToClient: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "classic-hi-land",
    title: "Classic Hi Land",
    location: "Makarba, Ahmedabad",
    productInstalled: "MSTH75 (Thermal Break) System Sliding",
    overview:
      "Classic Hi Land project utilized MSTH75 sliding systems, engineered for high thermal performance and energy efficiency.",
    keyFeatures: [
      "Superior thermal insulation for energy savings",
      "Strong structural capacity for large glazed areas",
      "Modern slim-profile aesthetics",
    ],
    valueToClient:
      "Delivered unmatched comfort with reduced energy costs, while enhancing the architectural beauty of the project.",
    images: ["/project/ClassicHiLand.jpg", "/project/ClassicHiLand.jpg"],
  },
  {
    slug: "vinayak-garden-villa",
    title: "Vinayak Garden Villa",
    location: "Pdpu Road, Gandhinagar",
    productInstalled: "MS25, MC45 & MCW38",
    overview:
      "For the Vinayak Garden Villa project, MAGS provided a comprehensive façade and window solution by integrating MS25 sliding systems, MC45 casement systems, and MCW38 curtain wall solutions.",
    keyFeatures: [
      "MS25 Sliding System: Compact, versatile sliding frames offering smooth operation",
      "MC45 Casement System: High-performance casement windows ensuring superior sealing",
      "MCW38 Curtain Wall System: Sleek curtain wall solution designed for expansive glazing",
    ],
    valueToClient:
      "Harmonized architectural façade with maximum daylight penetration, strong thermal and acoustic insulation, and blend of functionality with design excellence.",
    images: [
      "/project/VinayakGardenVilla.jpg",
      "/project/VinayakGardenVilla.jpg",
    ],
  },
  {
    slug: "fortune-kimberly",
    title: "Fortune Kimberly",
    location: "Raysan, Pdpu Road, Gandhinagar",
    productInstalled: "MS65",
    overview:
      "Fortune Kimberly features the MS65 system, chosen for its ability to cover expansive openings while maintaining structural strength and visual appeal.",
    keyFeatures: [
      "High-strength aluminium sections",
      "Enhanced weather protection",
      "Smooth, effortless sliding",
    ],
    valueToClient:
      "Maximized openness and natural ventilation, bringing in luxury living standards.",
    images: ["/project/FortuneKimberly.jpg", "/project/FortuneKimberly.jpg"],
  },
  {
    slug: "samarth-villa-7",
    title: "Samarth Villa – 7",
    location: "PDPU Road, Gandhinagar",
    productInstalled: "MSG 27",
    overview:
      "MAGS brought in the MSG27 sliding systems, built for strength and precision, to elevate this villa project.",
    keyFeatures: [
      "Heavy-duty design for larger panels",
      "Superior noise and water resistance",
      "Premium finish for contemporary facades",
    ],
    valueToClient:
      "Provided both performance and elegance, creating a seamless indoor-outdoor lifestyle.",
    images: ["/project/SamarthVilla7.jpg", "/project/SamarthVilla7.jpg"],
  },
  {
    slug: "samarth-villa-6",
    title: "Samarth Villa – 6",
    location: "Koba Gandhinagar",
    productInstalled: "MS20",
    overview:
      "For Samarth Villa – 6, MAGS installed compact yet efficient MS20 sliding systems, ideal for modern residential spaces.",
    keyFeatures: [
      "Sleek, space-saving design",
      "Easy operation and reliable functionality",
      "Weather-resistant aluminium profiles",
    ],
    valueToClient:
      "Delivered comfort and performance in a modern design envelope, suited for residential aesthetics.",
    images: ["/project/SamarthVilla6.jpg", "/project/SamarthVilla6.jpg"],
  },
  {
    slug: "samarth-villa",
    title: "Samarth Villa",
    location: "Raysan Gandhinagar",
    productInstalled: "MS65",
    overview:
      "This luxury villa project features MS65 sliding systems, engineered for wide openings and structural stability. The solution seamlessly blends modern architecture with high-performance fenestration.",
    keyFeatures: [
      "Wide-span sliding doors for panoramic openings",
      "Superior thermal insulation and energy efficiency",
      "Minimalist aesthetics with robust performance",
    ],
    valueToClient:
      "Created open, airy interiors with uninterrupted access to outdoor spaces, while ensuring strength and performance.",
    images: ["/project/SamarthVilla.jpg", "/project/SamarthVilla.jpg"],
  },
  {
    slug: "samarth-haven-5",
    title: "Samarth Haven 5",
    location: "Gandhinagar",
    productInstalled: "MS40 (40mm Slim Sliding System)",
    overview:
      "Samarth Haven 5 is a premium residential development where MAGS delivered high-performance MS40 aluminium sliding systems. Designed to bring maximum daylight and seamless views.",
    keyFeatures: [
      "Slimline frames for unobstructed views",
      "Noise-reduction and weather sealing",
      "Smooth sliding operation for effortless everyday use",
    ],
    valueToClient:
      "Enhanced natural lighting, energy efficiency, and a premium lifestyle upgrade with long-lasting durability.",
    images: ["/project/SamarthHaven5.jpg", "/project/SamarthHaven5.jpg"],
  },
];
