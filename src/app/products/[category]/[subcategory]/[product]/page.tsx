"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

const productData = {
  mse63: {
    name: "MSE63",
    fullName: "MAGS Economy Sliding MSE63",
    description:
      "MAGS Economy Sliding MSE63 is a non-insulated sliding system offering a wide range of solutions ideal for applications in warm climates, winter gardens or the partitioning of indoor office spaces. MSE63 applies the latest techniques, designed according to the highest European quality standards. This sliding system offers a complete range of opening possibilities, from sliding elements in the wall to 2- and 3-solutions. MSE63 realises an aesthetic solution for your building. In addition, the sliding elements can easily be integrated with different types of windows, conservatory systems, sunscreens, and screen doors.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "2100 mm",
        maxWidthOfVent: "1500 mm",
        maxWeightOfVent: "100 kg",
      },
      sightlines: {
        frameHeight: "38 mm",
        visibleVentWidth: "63 mm",
        visibleMeetingSection: "131 mm",
        ventSystemDepth: "65 mm",
        depthFrame2Rail: "46 mm, 67 mm",
        depthFrame3Rail: "83 mm, 104 mm",
        interlockingView: "65 mm",
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "4 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "8 mm",
      },
    },
  },
  // ADD THIS NEW ENTRY:
  mse22: {
    name: "MSE22",
    fullName: "MAGS Sliding MSE22",
    description:
      "MAGS Sliding MSE22 is a non-insulated sliding system offering a wide range of solutions ideal for applications in warm climates, winter gardens or the partitioning of indoor office spaces. MSE22 applies the latest techniques, designed according to the highest European quality standards. This sliding system offers a complete range of opening possibilities, from sliding elements in the wall, over 2-, 3- to even 4-rail solutions. With its minimalistic design, MSE22 realises an aesthetic solution for your building. In addition, the sliding elements can easily be integrated with different types of windows, conservatory systems, sunscreens, and screen doors.",
    images: [
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "2100 mm",
        maxWidthOfVent: "1500 mm",
        maxWeightOfVent: "100 kg",
      },
      sightlines: {
        frameHeight: "38 mm",
        visibleVentWidth: "63 mm",
        visibleMeetingSection: "131 mm",
        ventSystemDepth: "25 mm", // Different from MSE63
        depthFrame2Rail: "46 mm, 67 mm",
        depthFrame3Rail: "83 mm, 104 mm",
        interlockingView: "22 mm", // Different from MSE63
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "4 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "8 mm",
      },
    },
  },
  // ADD THIS NEW ENTRY:
  ms20: {
    name: "MS20",
    fullName: "MAGS Sliding SLIM MS20",
    description:
      "MAGS Sliding SLIM MS20 is a non-insulated sliding system offering a wide range of solutions ideal for applications in warm climates, winter gardens or the partitioning of indoor office spaces. MS20 applies the latest techniques, designed according to the highest European quality standards. This sliding system offers the complete range of opening possibilities, from sliding elements in the wall, over 2-, 3- to even 4- rail solutions. With the minimalistic design, MS20 realises an aesthetic solution for your building. In addition, the sliding elements can easily be integrated with different types of windows, conservatory systems, sun screenings and screen doors.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "3000 mm", // Higher than MSE series
        maxWidthOfVent: "2400 mm", // Wider than MSE series
        maxWeightOfVent: "200 kg", // Double the capacity
      },
      sightlines: {
        frameHeight: "41 mm",
        visibleVentWidth: "68 mm",
        visibleMeetingSection: "140 mm, 51 mm", // Multiple options
        ventSystemDepth: "34 mm",
        interlockingView: "20 mm",
        depthFrame2Rail: "55 mm, 77 mm",
        depthFrame3Rail: "95 mm, 110 mm, 119 mm", // Multiple 3-rail options
        depthFrame4Rail: "136 mm, 160 mm", // 4-rail option available
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "5 mm", // Thicker minimum glass
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "24 mm", // Much thicker maximum glass
      },
    },
  },
  ms27: {
    name: "MS27",
    fullName: "MAGS Sliding GULF SLIM MS27",
    description:
      "MAGS Sliding GULF SLIM MS27 is a non-insulated sliding system offering a wide range of solutions ideal for applications in warm climates, winter gardens or the partitioning of indoor office spaces. MS27 applies the latest techniques, designed according to the highest European quality standards. This sliding system offers a complete range of opening possibilities, from sliding elements in the wall to 2, 3, and 4-rail solutions. With its minimalistic design, MS27 realises an aesthetic solution for your building. In addition, the sliding elements can easily be integrated with different types of windows, conservatory systems, sunscreens, and screen doors.",
    images: [
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "2400 mm",
        maxWeightOfVent: "200 kg",
      },
      sightlines: {
        frameHeight: "41 mm",
        visibleVentWidth: "68 mm",
        visibleMeetingSection: "140 mm", // Single value (vs MS20's dual values)
        ventSystemDepth: "34 mm",
        interlockingView: "27 mm", // Different from MS20 (20mm)
        depthFrame2Rail: "55 mm, 77 mm",
        depthFrame3Rail: "95 mm, 110 mm, 119 mm",
        depthFrame4Rail: "136 mm, 160 mm",
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "24 mm",
      },
    },
  },
  "ms27-gulf": {
    name: "MS27 Gulf",
    fullName: "MAGS Sliding GULF SLIM MS27",
    description:
      "MAGS Sliding GULF SLIM MS27 is a non-insulated sliding system offering a wide range of solutions ideal for applications in warm climates, winter gardens or the partitioning of indoor office spaces. MS27 applies the latest techniques, designed according to the highest European quality standards. This sliding system offers a complete range of opening possibilities, from sliding elements in the wall to 2 and 3-rail solutions. With its minimalistic design, MS27 realises an aesthetic solution for your building. In addition, the sliding elements can easily be integrated with different types of windows, conservatory systems, sunscreens, and screen doors.",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "2400 mm",
        maxWeightOfVent: "200 kg",
      },
      sightlines: {
        frameHeight: "41 mm",
        visibleVentWidth: "50 mm", // Different from standard MS27 (68mm)
        visibleMeetingSection: "108 mm, 51 mm", // Different from standard MS27 (140mm)
        ventSystemDepth: "34 mm",
        interlockingView: "27 mm",
        depthFrame2Rail: "89 mm", // Gulf-specific depth
        depthFrame3Rail: "131 mm", // Gulf-specific depth (no 4-rail option)
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "24 mm",
      },
    },
  },
  ms40: {
    name: "MS40",
    fullName: "MAGS Sliding MS40",
    description:
      "MAGS Sliding MS40 is a non-insulated sliding system offering a wide range of solutions ideal for applications in warm climates, winter gardens, or the partitioning of indoor office spaces. MS40 applies the latest techniques, designed according to the highest European quality standards. This sliding system offers a complete range of opening possibilities, from sliding elements in the wall solutions. With its minimalistic design, MS40 realises an aesthetic solution for your building. In addition, the sliding elements can easily be integrated with different types of windows, conservatory systems, sun screenings and screen doors.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "2400 mm",
        maxWeightOfVent: "200 kg",
      },
      sightlines: {
        frameHeight: "41 mm",
        visibleVentWidth: "68 mm",
        visibleMeetingSection: "140 mm, 51 mm",
        ventSystemDepth: "34 mm",
        interlockingView: "40 mm",
        depthMonorail: "101 mm", // ← NEW: Added Monorail depth specification
        depthFrame2Rail: "55 mm, 77 mm",
        depthFrame3Rail: "95 mm, 110 mm, 119 mm",
        depthFrame4Rail: "136 mm, 160 mm",
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "24 mm",
      },
    },
  },
  "ms40-monorail": {
    name: "MS40 Monorail",
    fullName: "MAGS Sliding MS40 Monorail",
    description:
      "MAGS Sliding MS40 is a non-insulated sliding system offering a wide range of solutions ideal for applications in warm climates, winter gardens, or the partitioning of indoor office spaces. MS40 applies the latest techniques, designed according to the highest European quality standards. This sliding system offers a complete range of opening possibilities, from sliding elements in the wall solutions. With its minimalistic design, MS40 realises an aesthetic solution for your building. In addition, the sliding elements can easily be integrated with different types of windows, conservatory systems, sun screenings and screen doors.",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "2400 mm",
        maxWeightOfVent: "200 kg",
      },
      sightlines: {
        frameHeight: "41 mm",
        visibleVentWidth: "68 mm",
        visibleMeetingSection: "140 mm, 51 mm",
        ventSystemDepth: "34 mm",
        interlockingView: "40 mm",
        depthMonorail: "101 mm", // Key differentiator - Monorail specific depth
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "24 mm",
      },
    },
  },
  "ms50-vertical-sliding": {
    name: "MS50 Vertical Sliding",
    fullName: "MAGS MS50 VERTICAL SLIDING SYSTEM",
    description:
      "MAGS CASEMENT DOORS SYSTEM MDTH50 is a insulated system for inward and outward opening doors, designed according to the highest European quality standards. To guarantee superior quality and performance in every situation, the system has three gasket levels for inward and outward opening doors. Through intelligent application, these multiple gaskets meet even the high air- and water tightness requirements of tropical regions. This simple, yet highly innovative design offers a very cost-efficient solution thanks to its optimised fabrication process. MDTH50 can be realised with all types of inward and outward opening doors, with an extensive choice of accessories the perfect match of building concepts.",
    images: [
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "2100 mm", // Much larger than other systems
        minWidthOfVent: "1500 mm", // Much wider than other systems
        maxHeightOfVent: "4500 mm", // Significantly taller capability
        maxWidthOfVent: "3000 mm", // Much wider than other systems
        maxWeightOfVent: "600 kg", // Triple the capacity of other systems
      },
      sightlines: {
        frameHeight: "71 mm", // Larger frame than other systems
        visibleVentWidth: "32 mm", // Narrower visible width
        ventSystemDepth: "42 mm",
        interlockingView: "18 mm",
        visibleMeetingSection: "71 mm, 42 mm", // Heavy-duty meeting section
        depthFrame2Rail: "110 mm", // Single rail depth option
        depthFrame3Rail: "165 mm", // Single rail depth option
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "30 mm", // Thicker glass capability than other systems
      },
    },
  },
  ms11: {
    name: "MS11",
    fullName: "MAGS LA VISTA SLIDING SYSTEM MS11",
    description:
      "MAGS LA VISTA SLIDING SYSTEM MS11 Enjoy view with ultimate performances! The ultra-slim design of the MS11 sliding door creates large transparent surfaces, with a light, sleek and elegant appearance. This fully transparent and accessible sliding door seamlessly extends the house's interior to the outside. Despite the minimal visual sidelines, the systems high strength allows MS11 to carry the weight of a large sliding glass pane up to 300 kilograms. Fixed panels up to 600 kg. This in combination with the high energy performance and the minimalistic look makes this product the best solution architecture. Available in bottom SS track and aluminum track system.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "650 mm", // Wider minimum than other systems
        maxHeightOfVent: "3600 mm", // Taller than standard MS systems
        maxWidthOfVent: "3000 mm", // Same as MS50 but lighter weight
        maxWeightOfVent: "300 kg", // 50% more capacity than standard MS systems
      },
      sightlines: {
        frameHeight: "31 mm", // Ultra-slim frame (smallest in the series)
        visibleVentWidth: "45 mm",
        visibleMeetingSection: "81 mm, 42 mm", // Dual meeting section options
        ventSystemDepth: "42 mm",
        interlockingView: "11 mm", // Minimal interlocking (smallest in series)
        depthFrame2Rail: "110 mm", // Standard 2-rail depth
        depthFrame3Rail: "165 mm", // Standard 3-rail depth
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "30 mm", // Premium glass thickness capability
      },
    },
  },
  ms18: {
    name: "MS18",
    fullName: "MAGS PREMIUM SLIM SLIDING SYSTEM MS18",
    description:
      "MAGS PREMIUM SLIM SLIDING SYSTEM MS18 Enjoy view with ultimate performances! The ultra-slim design of the MS18 sliding door creates large transparent surfaces, with a light, sleek and elegant appearance. This fully transparent and accessible sliding door seamlessly extends the house's interior to the outside. Despite the minimal visual sidelines, the systems high strength allows MS18 to carry the weight of a large sliding glass pane up to 300 kilograms. Fixed panels up to 600 kg. This in combination with the high energy performance and the minimalistic look makes this product the best solution architecture.",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "650 mm", // Same as MS11
        maxHeightOfVent: "4500 mm", // Taller than MS11 (3600mm)
        maxWidthOfVent: "3000 mm", // Same width capability
        maxWeightOfVent: "500 kg", // Higher capacity than MS11 (300kg)
      },
      sightlines: {
        frameHeight: "31 mm", // Same ultra-slim frame as MS11
        visibleVentWidth: "45 mm", // Same as MS11
        visibleMeetingSection: "81 mm, 42 mm", // Same dual options as MS11
        ventSystemDepth: "42 mm", // Same as MS11
        interlockingView: "18 mm", // Slightly larger than MS11 (11mm)
        depthFrame2Rail: "110 mm", // Same as MS11
        depthFrame3Rail: "165 mm", // Same as MS11
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "30 mm", // Same premium glass capability as MS11
      },
    },
  },
  "ms22-minimal": {
    name: "MS22 Minimal",
    fullName: "MAGS PREMIUM MINIMAL SLIDING SYSTEM MS22",
    description:
      "MAGS PREMIUM MINIMAL SLIDING SYSTEM MS22 Enjoy ultimate performance! The minimalist panoramic design of the MS22 sliding door creates large transparent surfaces with a light, sleek, and elegant appearance. This fully transparent and accessible sliding door seamlessly extends the house's interior to the outside. Despite the minimal visual sidelines, the system's high strength allows MS22 to carry the weight of a large sliding glass pane of up to 300 kilograms. Fixed panels up to 600 kg. This in combination with the high energy performance and the minimalistic look makes this product the best solution architecture.",
    images: [
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "1000 mm", // Larger minimum than MS11/MS18 (600mm)
        minWidthOfVent: "1000 mm", // Much larger minimum than MS11/MS18 (650mm)
        maxHeightOfVent: "3200 mm", // Lower than MS11 (3600mm) and MS18 (4500mm)
        maxWidthOfVent: "2400 mm", // Narrower than MS11/MS18 (3000mm)
        maxWeightOfVent: "300 kg", // Same as MS11, lower than MS18 (500kg)
      },
      sightlines: {
        frameHeight: "48 mm", // Thicker than MS11/MS18 (31mm)
        visibleVentWidth: "29 mm", // Narrowest in the entire series
        ventSystemDepth: "42 mm", // Same as MS11/MS18
        interlockingView: "22 mm", // Between MS11 (11mm) and MS18 (18mm)
        visibleMeetingSection: "81 mm, 42 mm", // Same dual options as MS11/MS18
        depthFrame2Rail: "114 mm", // Slightly deeper than MS11/MS18 (110mm)
        depthFrame3Rail: "170 mm", // Slightly deeper than MS11/MS18 (165mm)
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "34 mm", // Thicker than MS11/MS18 (30mm)
      },
    },
  },
  ms25: {
    name: "MS25",
    fullName: "MAGS PREMIUM SLIM SLIDING SYSTEM MS25",
    description:
      "MAGS PREMIUM SLIM SLIDING SYSTEM MS25 Enjoy view with ultimate performances! The slim design of the sliding door creates large transparent surfaces, with a light, sleek and elegant appearance. This fully transparent and accessible sliding door seamlessly extends the house's interior to the outside. Despite the minimal visual sidelines, the systems high strength allows MS25 to carry the weight of a large sliding glass pane up to 300 kilograms. Fixed panels up to 600 kg. This in combination with the high energy performance and the minimalistic look makes this product the best solution architecture.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm", // Same as MS11/MS18
        minWidthOfVent: "650 mm", // Same as MS11/MS18
        maxHeightOfVent: "4000 mm", // Between MS11 (3600mm) and MS18 (4500mm)
        maxWidthOfVent: "3000 mm", // Same as MS11/MS18
        maxWeightOfVent: "300 kg", // Same as MS11, lower than MS18 (500kg)
      },
      sightlines: {
        frameHeight: "31 mm", // Same ultra-slim as MS11/MS18
        visibleVentWidth: "45 mm", // Same as MS11/MS18
        ventSystemDepth: "42 mm", // Same as MS11/MS18
        interlockingView: "25 mm", // Unique - highest in premium series
        visibleMeetingSection: "81 mm, 42 mm", // Same dual options as others
        depthFrame2Rail: "110 mm", // Same as MS11/MS18
        depthFrame3Rail: "165 mm", // Same as MS11/MS18
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "30 mm", // Same as MS11/MS18
      },
    },
  },
  "ms16-minimal": {
    name: "MS16 Minimal",
    fullName: "MAGS ULTRA SLIM MS16",
    description:
      "MAGS ULTRA SLIM MS16 is a high insulated sliding system with slim profiles and a concealed frame that combines comfort with elegance. Thanks to the ultra slim design, this sliding window allows for maximum natural light and provides an optimal panoramic view. The integrated innovative technologies guarantee ultimate performances with regard to wind and water tightness and thermal insulation, meeting with the highest standards. The sliding system MS16 offers you all the design freedom to create contemporary living spaces, combining ultimate brightness with maximum comfort. This sliding system provides a wide range of opening possibilities, from elements that slide over 2- and 3-rail solutions, allowing you to open up to 6 leaves, over a very slim central closing option of only 42 mm wide.",
    images: [
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "1000 mm", // Larger minimum than premium series
        minWidthOfVent: "800 mm", // Different from premium series (650mm)
        maxHeightOfVent: "3600 mm", // Same as MS11
        maxWidthOfVent: "3000 mm", // Standard width
        maxWeightOfVent: "300 kg", // Standard capacity
      },
      sightlines: {
        frameHeight: "45 mm", // Larger than premium series (31mm)
        visibleVentWidth: "20 mm", // Narrowest in entire product range
        ventSystemDepth: "36 mm", // Shallower than premium series (42mm)
        interlockingView: "16 mm", // Named after this measurement (MS16)
        visibleMeetingSection: "52 mm", // Single option, narrower than others
        depthFrame2Rail: "121 mm", // Deeper than premium series (110mm)
        depthFrame3Rail: "181 mm", // Deeper than premium series (165mm)
      },
      glazing: {
        rebateHeight: "17 mm", // Slightly higher than premium series (15mm)
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "24 mm", // Lower than premium series (30mm)
      },
    },
  },
  "ms18-panoramic-sliding-door": {
    name: "MS18 Panoramic Sliding Door",
    fullName: "MAGS PREMIUM SLIM SLIDING SYSTEM MS18",
    description:
      "MAGS PREMIUM SLIM SLIDING SYSTEM MS18 Enjoy view with ultimate performances! The ultra-slim design of the MS18 sliding door creates large transparent surfaces with a light, sleek, and elegant appearance. This fully transparent and accessible sliding door seamlessly extends the house's interior to the outside. Despite the minimal visual sidelines, the system's high strength allows MS18 to carry the weight of a large sliding glass pane up to 300 kilograms. Fixed panels up to 600 kg. This, in combination with the high energy performance and the minimalistic look, makes this product the best solution architecture.",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "2100 mm", // Much larger minimums for panoramic applications
        minWidthOfVent: "1500 mm", // Much larger minimums for panoramic applications
        maxHeightOfVent: "4500 mm", // Same as premium MS18
        maxWidthOfVent: "3000 mm", // Same as premium MS18
        maxWeightOfVent: "600 kg", // Higher capacity than premium MS18 (500kg)
      },
      sightlines: {
        frameHeight: "71 mm", // Much thicker than premium MS18 (31mm)
        visibleVentWidth: "32 mm", // Narrower than premium MS18 (45mm)
        ventSystemDepth: "42 mm", // Same as premium MS18
        interlockingView: "18 mm", // Same as premium MS18
        visibleMeetingSection: "71 mm, 42 mm", // Different from premium MS18
        depthFrame2Rail: "110 mm", // Same as premium MS18
        depthFrame3Rail: "165 mm", // Same as premium MS18
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "30 mm", // Same as premium MS18
      },
    },
  },
  "ms22-panoramic": {
    name: "MS22 Panoramic",
    fullName: "MAGS PREMIUM MINIMAL PANORAMIC SLIDING SYSTEM MS22",
    description:
      "MAGS PREMIUM MINIMAL PANORAMIC SLIDING SYSTEM MS22 Enjoy ultimate performance! The minimalist panoramic design of the MS22 sliding door creates large transparent surfaces with a light, sleek, and elegant appearance. This fully transparent and accessible sliding door seamlessly extends the house's interior to the outside. Despite the minimal visual sidelines, the system's high strength allows MS22 to carry the weight of a large sliding glass pane of up to 300 kilograms. Fixed panels up to 600 kg. This in combination with the high energy performance and the minimalistic look makes this product the best solution architecture.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "1000 mm", // Large minimums for panoramic applications
        minWidthOfVent: "1000 mm", // Large minimums for panoramic applications
        maxHeightOfVent: "3200 mm", // Same as MS22 Minimal
        maxWidthOfVent: "2400 mm", // Same as MS22 Minimal
        maxWeightOfVent: "300 kg", // Same as MS22 Minimal
      },
      sightlines: {
        frameHeight: "48 mm", // Same as MS22 Minimal
        visibleVentWidth: "29 mm", // Same narrowest profile as MS22 Minimal
        ventSystemDepth: "42 mm", // Same as MS22 Minimal
        interlockingView: "22 mm", // Same as MS22 Minimal
        visibleMeetingSection: "81 mm, 42 mm", // Same dual options as MS22 Minimal
        depthFrame2Rail: "114 mm", // Same as MS22 Minimal
        depthFrame3Rail: "170 mm", // Same as MS22 Minimal
      },
      glazing: {
        rebateHeight: "15 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "34 mm", // Same thickest glass capability as MS22 Minimal
      },
    },
  },
  "ms30-slim-heavy-duty-lift-and-slide": {
    name: "MS30 Slim Heavy-Duty Lift and Slide",
    fullName: "MAGS Slim Heavy-Duty Lift and Slide MS30",
    description:
      "MS30 Slim Heavy-Duty lift and Slide system provides lifting sliding for better seating performance. Positioned at will, easy to adjust the ventilation area. Offers sound and heat insulation, making it energy efficient. This advanced system combines the convenience of sliding doors with the sealing performance of lift-and-slide technology, providing superior thermal and acoustic insulation.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "2100 mm", // Large minimums for heavy-duty applications
        minWidthOfVent: "1500 mm", // Large minimums for heavy-duty applications
        maxHeightOfVent: "3500 mm", // Shorter than MS18 Panoramic (4500mm)
        maxWidthOfVent: "3600 mm", // Widest in the entire MAGS range
        maxWeightOfVent: "300 kg, 400 kg, 600 kg", // Multiple capacity options
      },
      sightlines: {
        frameHeight: "45 mm", // Between slim (31mm) and structural (71mm)
        visibleVentWidth: "75 mm", // Widest visible profile in the range
        ventSystemDepth: "53 mm", // Deepest system depth for lift mechanism
        visibleMeetingSection: "160 mm", // Largest meeting section (single option)
        depthFrame2Rail: "131 mm", // Deeper than standard systems for lift mechanism
        interlockingView: "30 mm", // Highest interlocking in entire range
      },
      glazing: {
        rebateHeight: "20 mm", // Highest rebate height for heavy glass
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "45 mm", // Thickest glass capability in entire range
      },
    },
  },
  mce28: {
    name: "MCE28 Economy Casement",
    fullName: "MAGS MCE28 Economy Casement System",
    description:
      "MCE28 Economy casement system - Coming Soon. This economy casement system provides reliable outward opening functionality for residential applications. Designed for cost-effective solutions while maintaining quality performance standards. Features outward opening mechanism with standard glazing options suitable for basic window applications.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "500 mm", // Much smaller than sliding systems
        minWidthOfVent: "300 mm", // Much narrower than sliding systems
        maxHeightOfVent: "2100 mm", // Standard height for casement
        maxWidthOfVent: "700 mm", // Much narrower than sliding systems
        maxWeightOfVent: "60 kg", // Much lighter than sliding systems
      },
      sightlines: {
        minFrameWidthOutward: "48 mm", // Outward opening specific
        minVentWidthOutward: "41 mm", // Outward opening specific
        minFrameVentWidthOutward: "88 mm", // Combined frame-vent width
        depthFrame: "28 mm", // Frame depth
        depthVent: "28 mm", // Vent depth
        minWidthTProfile: "61 mm", // T-profile minimum width
      },
      glazing: {
        rebateHeight: "12 mm", // Lower than sliding systems (15mm)
        minGlassThickness: "4 mm", // Same as economy sliding systems
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "8 mm", // Same as economy sliding systems
      },
    },
  },
  mce92: {
    name: "MCE92 (Economy 3in1 Glass, Grill & Mesh)",
    fullName: "MAGS CASEMENT SYSTEM 3in1 MCE92",
    description:
      "MAGS CASEMENT SYSTEM 3in1 MCE92 is a non-insulated system for inward and outward opening windows and doors, designed according to the highest European quality standards. To guarantee superior quality and performance in every situation, the system has three gasket levels for inward and outward opening windows and doors. Through intelligent application, these multiple gaskets meet even the high air- and water tightness requirements of tropical regions. This simple, yet highly innovative design offers a very cost-efficient solution thanks to its optimised fabrication process. MCE92 can be realised with all types of inward and outward opening windows and doors, with security grill and mosquito net an extensive choice of accessories the perfect match of building concepts.",
    images: [
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "500 mm", // Same as MCE28
        minWidthOfVent: "300 mm", // Same as MCE28
        maxHeightOfVent: "2100 mm", // Same as MCE28
        maxWidthOfVent: "700 mm", // Same as MCE28
        maxWeightOfVent: "60 kg", // Same as MCE28
      },
      sightlines: {
        minFrameWidthOutward: "48 mm", // Same as MCE28
        minVentWidthOutward: "41 mm", // Same as MCE28
        minFrameVentWidthOutward: "88 mm", // Same as MCE28
        depthFrame: "92 mm", // DIFFERENT: Much deeper than MCE28 (28mm)
        depthVent: "28 mm", // Same as MCE28
        minWidthTProfile: "61 mm", // Same as MCE28
      },
      glazing: {
        rebateHeight: "12 mm", // Same as MCE28
        minGlassThickness: "4 mm", // Same as MCE28
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "8 mm", // Same as MCE28
      },
    },
  },
  mc45: {
    name: "MC45",
    fullName: "MAGS CASEMENT SYSTEM MC45",
    description:
      "MAGS CASEMENT SYSTEM MC45 is a non-insulated system for inward and outward opening windows and doors, designed according to the highest European quality standards. To guarantee superior quality and performance in every situation, the system has three gasket levels for inward and outward opening windows and doors. Through intelligent application, these multiple gaskets meet even the high air- and water tightness requirements of tropical regions. This simple, yet highly innovative design offers a very cost-efficient solution thanks to its optimised fabrication process. MC45 can be realised with all types of inward and outward opening windows and doors, with an extensive choice of accessories the perfect match of building concepts.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "500 mm", // Same minimums as economy series
        minWidthOfVent: "300 mm", // Same minimums as economy series
        maxHeightOfVent: "3000 mm", // Much taller than economy (2100mm)
        maxWidthOfVent: "900 mm", // Much wider than economy (700mm)
        maxWeightOfVent: "150 kg", // 2.5x capacity of economy (60kg)
      },
      sightlines: {
        minFrameWidthOutward: "45 mm", // Slightly smaller than economy (48mm)
        minVentWidthOutward: "45 mm", // Slightly larger than economy (41mm)
        minFrameVentWidthOutward: "90 mm", // Slightly larger than economy (88mm)
        depthFrame: "45 mm", // Much smaller than MCE92 (92mm), larger than MCE28 (28mm)
        depthVent: "45 mm, 51 mm", // Dual depth options vs single option in economy
        minWidthTProfile: "66 mm, 72 mm", // Dual T-profile options vs single (61mm) in economy
      },
      glazing: {
        rebateHeight: "21 mm", // Much higher than economy (12mm)
        minGlassThickness: "5 mm", // Thicker minimum than economy (4mm)
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "35 mm", // Much thicker than economy (8mm)
      },
    },
  },
  mc105: {
    name: "MC105 (3in1 Glass, Grill & Mesh)",
    fullName: "MAGS CASEMENT SYSTEM 3in1 MC105",
    description:
      "MAGS CASEMENT SYSTEM 3in1 MC105 is a non-insulated system for inward and outward opening windows and doors, designed according to the highest European quality standards. To guarantee superior quality and performance in every situation, the system has three gasket levels for inward and outward opening windows and doors. Through intelligent application, these multiple gaskets meet even the high air- and water tightness requirements of tropical regions. This simple, yet highly innovative design offers a very cost-efficient solution thanks to its optimised fabrication process. MC105 can be realised with all types of inward and outward opening windows and doors, with security grill and mosquito net an extensive choice of accessories the perfect match of building concepts.",
    images: [
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "500 mm", // Same as MC45
        minWidthOfVent: "300 mm", // Same as MC45
        maxHeightOfVent: "3000 mm", // Same as MC45
        maxWidthOfVent: "900 mm", // Same as MC45
        maxWeightOfVent: "150 kg", // Same as MC45
      },
      sightlines: {
        minFrameWidthOutward: "105 mm", // DIFFERENT: Much deeper than MC45 (45mm)
        minVentWidthOutward: "45 mm", // Same as MC45
        minFrameVentWidthOutward: "90 mm", // Same as MC45
        depthFrame: "105 mm", // DIFFERENT: Much deeper than MC45 (45mm)
        depthVent: "45 mm, 51 mm", // Same dual options as MC45
        minWidthTProfile: "66 mm, 72 mm", // Same dual options as MC45
      },
      glazing: {
        rebateHeight: "21 mm", // Same as MC45
        minGlassThickness: "5 mm", // Same as MC45
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "35 mm", // Same as MC45
      },
    },
  },
  msfd50: {
    name: "MSFD50",
    fullName: "MAGS Sliding Folding MSFD50",
    description:
      "MAGS Sliding folding MSFD50 is high insulation and comfort with maximal transparency and aesthetics, allowing for large and heavy glass spans to really open up the space while ensuring optimal insulation. This high performance system offers different opening types, both inward and outward to meet all possible requirements. Apart from the standard folding element, this can feature a main door principle, in which the first leaf is used as an entrance door without affecting the other elements. MAGS Sliding Folding MSFD50 is available with zero threshold solutions, from high performance to low and even flush thresholds, in order to perfectly match all comfort requirements. Additionally, the concept can be perfectly combined with the concept system for windows and doors.",
    images: [
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "400 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "1200 mm",
        maxWeightOfVent: "90 kg",
      },
      sightlines: {
        minWidthMeetingSection: "163 mm, 104 mm",
        minWidthTProfile: "72 mm",
        minHeightThreshold: "5 mm",
        depthFrame: "71 mm",
        depthVent: "50 mm",
        depthFrameVent: "71 mm",
      },
      glazing: {
        rebateHeight: "21 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "35 mm",
      },
    },
  },
  "msfd58-premium-folding-door": {
    name: "MSFD58 Premium Folding Door",
    fullName: "MAGS MSFD58 Premium Folding Door",
    description:
      "MAGS MSFD58 Premium Folding Door features anti-pinch design with enhanced noise reduction and multiple opening options. This premium folding system can be designed as one-piece or thermal break configuration to meet specific project requirements. The system offers superior performance with advanced safety features and acoustic properties, making it ideal for high-end residential and commercial applications where both functionality and comfort are paramount.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "400 mm",
        maxHeightOfVent: "3600 mm",
        maxWidthOfVent: "1200 mm",
        maxWeightOfVent: "120 kg",
      },
      sightlines: {
        minWidthMeetingSection: "106 mm",
        minWidthTProfile: "58 mm",
        minHeightThreshold: "15 mm",
        depthFrame: "67 mm",
        depthVent: "58 mm",
        depthFrameVent: "67 mm",
      },
      glazing: {
        rebateHeight: "21 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "35 mm",
      },
    },
  },
  "msth75-sliding": {
    name: "MSTH75 Sliding",
    fullName: "MAGS MSTH75 Thermal Break Sliding System",
    description:
      "MAGS MSTH75 is a highly-insulated sliding system that combines elegance with performance and security. This unique sliding system is characterised by thermal break profiles, allowing the integration of large windows and doors for maximum views, in combination with burglary resistance. The integrated innovative technologies guarantee ultimate performances with regard to wind and water tightness and thermal insulation, meeting with the highest standards. The sliding system MSTH75 offers you all design freedom to create contemporary living spaces, combining ultimate brightness with maximum comfort and security.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "2400 mm",
        maxWeightOfVent: "200 kg",
      },
      sightlines: {
        frameHeight: "41 mm",
        visibleVentWidth: "75 mm",
        visibleMeetingSection: "155 mm",
        ventSystemDepth: "34 mm, 77 mm",
        depthFrame2Rail: "53 mm",
        depthFrame3Rail: "95 mm, 135 mm",
        interlockingView: "75 mm",
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "20 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "24 mm",
      },
    },
  },
  "150-panoramic-sliding-doors": {
    name: "150 Panoramic Sliding Doors",
    fullName: "MAGS 150 PANORAMIC SLIDING DOORS (Imported Hybrid System)",
    description:
      "MAGS 150 PANORAMIC SLIDING DOORS is an advanced thermal brake system featuring imported hybrid technology. The visible surface of the vertical door frame is only 25mm, creating an ultra-minimal aesthetic. This premium system features double rows of customized stainless steel pulleys, with the load-bearing capacity of a single fan reaching up to 1500kg. The micro-slit lower track design provides superior drainage performance. This high-performance panoramic sliding system combines cutting-edge engineering with thermal break technology for ultimate energy efficiency and structural integrity.",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "1500 mm",
        minWidthOfVent: "1500 mm",
        maxHeightOfVent: "4500 mm",
        maxWidthOfVent: "3000 mm",
        maxWeightOfVent: "1500 kg",
      },
      sightlines: {
        frameHeight: "60 mm",
        visibleVentWidth: "40 mm",
        ventSystemDepth: "50 mm",
        interlockingView: "25 mm",
        visibleMeetingSection: "130 mm",
        depthFrame2Rail: "115 mm",
        depthFrame3Rail: "234 mm",
      },
      glazing: {
        rebateHeight: "14 mm",
        minGlassThickness: "5 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "45 mm",
      },
    },
  },
  "msth35-slim-sliding": {
    name: "MSTH35 Slim Sliding",
    fullName: "MAGS MSTH35 Slim Thermal Break Sliding System",
    description:
      "MAGS MSTH35 is a highly-insulated sliding system that combines elegance with performance and security. This unique sliding system is characterised by thermal break profiles, allowing the integration of large windows and doors for maximum views, in combination with burglary resistance. The integrated innovative technologies guarantee ultimate performances with regard to wind and water tightness and thermal insulation, meeting with the highest standards. The sliding system MSTH35 offers you all design freedom to create contemporary living spaces, combining ultimate brightness with maximum comfort and security.",
    images: [
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "600 mm",
        minWidthOfVent: "450 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "2400 mm",
        maxWeightOfVent: "200 kg",
      },
      sightlines: {
        frameHeight: "41 mm",
        visibleVentWidth: "63 mm",
        visibleMeetingSection: "147 mm",
        ventSystemDepth: "40 mm",
        interlockingView: "35 mm",
        depthFrame2Rail: "67 mm",
        depthFrame3Rail: "122 mm, 177 mm",
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "20 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "27 mm",
      },
    },
  },
  "mcth50-casement-windows": {
    name: "MCTH50 Casement Windows",
    fullName: "MAGS CASEMENT SYSTEM MCTH50",
    description:
      "MAGS CASEMENT SYSTEM MCTH50 is a insulated system for inward and outward opening windows and doors, designed according to the highest European quality standards. To guarantee superior quality and performance in every situation, the system has three gasket levels for inward and outward opening windows and doors. Through intelligent application, these multiple gaskets meet even the high air- and water tightness requirements of tropical regions. This simple, yet highly innovative design offers a very cost-efficient solution thanks to its optimised fabrication process. MCTH50 can be realised with all types of inward and outward opening windows and doors, with an extensive choice of accessories the perfect match of building concepts.",
    images: [
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "500 mm",
        minWidthOfVent: "300 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "900 mm",
        maxWeightOfVent: "150 kg",
      },
      sightlines: {
        minFrameWidthOutward: "50 mm",
        minVentWidthOutward: "33 mm, 41 mm",
        minFrameVentWidthOutward: "100 mm, 112 mm",
        depthFrame: "50 mm",
        depthVent: "60 mm",
        minWidthTProfile: "67 mm",
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "20 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "35 mm",
      },
    },
  },
  "mdth50-casement-doors": {
    name: "MDTH50 Casement Doors",
    fullName: "MAGS CASEMENT DOORS SYSTEM MDTH50",
    description:
      "MAGS CASEMENT DOORS SYSTEM MDTH50 is a insulated system for inward and outward opening doors, designed according to the highest European quality standards. To guarantee superior quality and performance in every situation, the system has three gasket levels for inward and outward opening doors. Through intelligent application, these multiple gaskets meet even the high air- and water tightness requirements of tropical regions. This simple, yet highly innovative design offers a very cost-efficient solution thanks to its optimised fabrication process. MDTH50 can be realised with all types of inward and outward opening doors, with an extensive choice of accessories the perfect match of building concepts.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    ],
    performance: {
      comfort: {
        airTightness: "-",
        acoustics: "-",
        waterTightness: "-",
        windLoadResistance: "-",
      },
      safety: {
        burglarResistance: "-",
      },
    },
    properties: {
      maxDimensions: {
        minHeightOfVent: "500 mm",
        minWidthOfVent: "300 mm",
        maxHeightOfVent: "3000 mm",
        maxWidthOfVent: "900 mm",
        maxWeightOfVent: "150 kg",
      },
      sightlines: {
        minFrameWidthOutward: "50 mm",
        minVentWidthOutward: "41 mm",
        minFrameVentWidthOutward: "112 mm",
        depthFrame: "50 mm",
        depthVent: "60 mm",
        minWidthTProfile: "67 mm",
      },
      glazing: {
        rebateHeight: "17 mm",
        minGlassThickness: "20 mm",
        glazingMethod: "Dry Glazing with EPDM or Natural Silicon",
        maxGlassThickness: "35 mm",
      },
    },
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const subcategory = params.subcategory as string;
  const productId = params.product as string;

  const product =
    productId in productData
      ? productData[productId as keyof typeof productData]
      : undefined;

  if (!product) {
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
            <Link
              href={`/products/${category}/${subcategory}`}
              className="text-amber-600 hover:text-amber-700 capitalize"
            >
              {subcategory?.replace(/-/g, " ")}
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            <ImageCarousel images={product.images} productName={product.name} />
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {product.fullName}
            </h1>

            <div className="prose prose-neutral max-w-none mb-8">
              <p className="text-neutral-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Need help?
              </h3>
              <p className="text-neutral-600 mb-4">
                Search and compare products
              </p>
              <Link
                href="/contact"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Performance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Comfort */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Comfort
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Air tightness</span>
                  <span className="text-neutral-900">
                    {product.performance.comfort.airTightness}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Acoustics</span>
                  <span className="text-neutral-900">
                    {product.performance.comfort.acoustics}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Water tightness</span>
                  <span className="text-neutral-900">
                    {product.performance.comfort.waterTightness}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Wind load resistance</span>
                  <span className="text-neutral-900">
                    {product.performance.comfort.windLoadResistance}
                  </span>
                </div>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Safety
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Burglar resistance</span>
                  <span className="text-neutral-900">
                    {product.performance.safety.burglarResistance}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-neutral-500 mt-4">
            * Note: Performances and properties may be different depending on
            the profile combinations
          </p>
        </div>

        {/* Properties Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Max Dimensions & Weight */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Max. dimensions & weight
              </h3>
              <div className="space-y-3">
                {Object.entries(product.properties.maxDimensions).map(
                  ([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-neutral-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                      </span>
                      <span className="text-neutral-900">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Sightlines */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Sightlines
              </h3>
              <div className="space-y-3">
                {Object.entries(product.properties.sightlines).map(
                  ([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-neutral-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                      </span>
                      <span className="text-neutral-900">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Glazing */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Glazing
              </h3>
              <div className="space-y-3">
                {Object.entries(product.properties.glazing).map(
                  ([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-neutral-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                      </span>
                      <span className="text-neutral-900">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
