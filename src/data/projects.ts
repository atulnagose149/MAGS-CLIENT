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
    overview: "Classic Hi Land project utilized MSTH75 sliding systems, engineered for high thermal performance and energy efficiency.",
    keyFeatures: [
      "Superior thermal insulation for energy savings",
      "Strong structural capacity for large glazed areas",
      "Modern slim-profile aesthetics"
    ],
    valueToClient: "Delivered unmatched comfort with reduced energy costs, while enhancing the architectural beauty of the project.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    slug: "vinayak-garden-villa",
    title: "Vinayak Garden Villa",
    location: "Pdpu Road, Gandhinagar",
    productInstalled: "MS25, MC45 & MCW38",
    overview: "For the Vinayak Garden Villa project, MAGS07 provided a comprehensive façade and window solution by integrating MS25 sliding systems, MC45 casement systems, and MCW38 curtain wall solutions.",
    keyFeatures: [
      "MS25 Sliding System: Compact, versatile sliding frames offering smooth operation",
      "MC45 Casement System: High-performance casement windows ensuring superior sealing",
      "MCW38 Curtain Wall System: Sleek curtain wall solution designed for expansive glazing"
    ],
    valueToClient: "Harmonized architectural façade with maximum daylight penetration, strong thermal and acoustic insulation, and blend of functionality with design excellence.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    slug: "fortune-kimberly",
    title: "Fortune Kimberly",
    location: "Raysan, Pdpu Road, Gandhinagar",
    productInstalled: "MS65",
    overview: "Fortune Kimberly features the MS65 system, chosen for its ability to cover expansive openings while maintaining structural strength and visual appeal.",
    keyFeatures: [
      "High-strength aluminium sections",
      "Enhanced weather protection",
      "Smooth, effortless sliding"
    ],
    valueToClient: "Maximized openness and natural ventilation, bringing in luxury living standards.",
    images: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    slug: "samarth-villa-7",
    title: "Samarth Villa – 7",
    location: "PDPU Road, Gandhinagar",
    productInstalled: "MSG 27",
    overview: "MAGS brought in the MSG27 sliding systems, built for strength and precision, to elevate this villa project.",
    keyFeatures: [
      "Heavy-duty design for larger panels",
      "Superior noise and water resistance",
      "Premium finish for contemporary facades"
    ],
    valueToClient: "Provided both performance and elegance, creating a seamless indoor-outdoor lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da02f3f?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    slug: "samarth-villa-6",
    title: "Samarth Villa – 6",
    location: "Koba Gandhinagar",
    productInstalled: "MS20",
    overview: "For Samarth Villa – 6, MAGS installed compact yet efficient MS20 sliding systems, ideal for modern residential spaces.",
    keyFeatures: [
      "Sleek, space-saving design",
      "Easy operation and reliable functionality",
      "Weather-resistant aluminium profiles"
    ],
    valueToClient: "Delivered comfort and performance in a modern design envelope, suited for residential aesthetics.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    slug: "samarth-villa",
    title: "Samarth Villa",
    location: "Raysan Gandhinagar",
    productInstalled: "MS65",
    overview: "This luxury villa project features MS65 sliding systems, engineered for wide openings and structural stability. The solution seamlessly blends modern architecture with high-performance fenestration.",
    keyFeatures: [
      "Wide-span sliding doors for panoramic openings",
      "Superior thermal insulation and energy efficiency",
      "Minimalist aesthetics with robust performance"
    ],
    valueToClient: "Created open, airy interiors with uninterrupted access to outdoor spaces, while ensuring strength and performance.",
    images: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    slug: "samarth-haven-5",
    title: "Samarth Haven 5",
    location: "Gandhinagar", // Location not specified in your data
    productInstalled: "MS40 (40mm Slim Sliding System)",
    overview: "Samarth Haven 5 is a premium residential development where MAGS delivered high-performance MS40 aluminium sliding systems. Designed to bring maximum daylight and seamless views.",
    keyFeatures: [
      "Slimline frames for unobstructed views",
      "Noise-reduction and weather sealing",
      "Smooth sliding operation for effortless everyday use"
    ],
    valueToClient: "Enhanced natural lighting, energy efficiency, and a premium lifestyle upgrade with long-lasting durability.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];
