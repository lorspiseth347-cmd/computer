export interface Product {
  id: number;
  title: string;
  price: string;
  qty: number;
  images: string;
  discription: string;
  specifications: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
    operatingSystem: string;
    battery: string;
    weight: string;
  };
}

export const dellProducts: Product[] = [
  {
    id: 1,
    title: "Dell XPS 13",
    price: "$999",
    qty: 10,
    images: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf",
    discription:
      "Dell XPS 13 with a compact design, Intel processor, and high-resolution display.",

    specifications: {
      processor: "Intel Core Ultra 5",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      display: "13.4-inch FHD+",
      graphics: "Intel Arc Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "55Wh",
      weight: "1.17 kg",
    },
  },

  {
    id: 2,
    title: "Dell XPS 15",
    price: "$1499",
    qty: 8,
    images: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    discription:
      "Dell XPS 15 is a powerful laptop suitable for programming, design, and everyday work.",

    specifications: {
      processor: "Intel Core i7",
      ram: "16GB DDR5",
      storage: "1TB SSD",
      display: "15.6-inch FHD+",
      graphics: "NVIDIA GeForce RTX 4050",
      operatingSystem: "Windows 11 Home",
      battery: "86Wh",
      weight: "1.86 kg",
    },
  },

  {
    id: 3,
    title: "Dell Inspiron 15",
    price: "$699",
    qty: 15,
    images: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
    discription:
      "Dell Inspiron 15 is an affordable laptop designed for students and everyday users.",

    specifications: {
      processor: "Intel Core i5",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch FHD",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "54Wh",
      weight: "1.65 kg",
    },
  },

  {
    id: 4,
    title: "Dell Inspiron 14",
    price: "$649",
    qty: 12,
    images: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    discription:
      "Dell Inspiron 14 offers a lightweight design and reliable performance for school and office work.",

    specifications: {
      processor: "Intel Core i5",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "14-inch FHD",
      graphics: "Intel UHD Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "54Wh",
      weight: "1.54 kg",
    },
  },

  {
    id: 5,
    title: "Dell Latitude 5440",
    price: "$899",
    qty: 7,
    images: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
    discription:
      "Dell Latitude 5440 is a business laptop with strong performance and professional features.",

    specifications: {
      processor: "Intel Core i5-1345U",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      display: "14-inch FHD",
      graphics: "Intel Iris Xe Graphics",
      operatingSystem: "Windows 11 Pro",
      battery: "54Wh",
      weight: "1.39 kg",
    },
  },

  {
    id: 6,
    title: "Dell Latitude 7440",
    price: "$1299",
    qty: 6,
    images: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    discription:
      "Dell Latitude 7440 is a premium business laptop designed for productivity and portability.",

    specifications: {
      processor: "Intel Core i7-1365U",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      display: "14-inch FHD+",
      graphics: "Intel Iris Xe Graphics",
      operatingSystem: "Windows 11 Pro",
      battery: "57Wh",
      weight: "1.33 kg",
    },
  },

  {
    id: 7,
    title: "Dell Vostro 15",
    price: "$749",
    qty: 11,
    images: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    discription:
      "Dell Vostro 15 provides dependable performance for small businesses, students, and office tasks.",

    specifications: {
      processor: "Intel Core i5",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch FHD",
      graphics: "Intel Iris Xe Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "54Wh",
      weight: "1.70 kg",
    },
  },

  {
    id: 8,
    title: "Dell G15 Gaming",
    price: "$1199",
    qty: 9,
    images: "https://images.unsplash.com/photo-1603481546238-487240415921",
    discription:
      "Dell G15 Gaming is designed for gamers with powerful performance and dedicated graphics.",

    specifications: {
      processor: "Intel Core i7",
      ram: "16GB DDR5",
      storage: "1TB SSD",
      display: "15.6-inch FHD 165Hz",
      graphics: "NVIDIA GeForce RTX 4060",
      operatingSystem: "Windows 11 Home",
      battery: "86Wh",
      weight: "2.65 kg",
    },
  },

  {
    id: 9,
    title: "Dell Alienware m16",
    price: "$1899",
    qty: 5,
    images: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
    discription:
      "Alienware m16 is a high-performance gaming laptop built for demanding games and applications.",

    specifications: {
      processor: "Intel Core i9",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      display: "16-inch QHD+ 240Hz",
      graphics: "NVIDIA GeForce RTX 4070",
      operatingSystem: "Windows 11 Home",
      battery: "90Wh",
      weight: "2.61 kg",
    },
  },

  {
    id: 10,
    title: "Dell Precision 5680",
    price: "$2199",
    qty: 4,
    images: "https://images.unsplash.com/photo-1593642532400-2682810df593",
    discription:
      "Dell Precision 5680 is a professional workstation laptop for engineering, development, and creative work.",

    specifications: {
      processor: "Intel Core i7",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      display: "16-inch FHD+",
      graphics: "NVIDIA RTX 2000 Ada",
      operatingSystem: "Windows 11 Pro",
      battery: "99.5Wh",
      weight: "1.91 kg",
    },
  },
];

export const asusProducts: Product[] = [
  {
    id: 11,
    title: "ASUS Zenbook A14",
    price: "$1,299",
    qty: 10,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/ASUS%202026-08-15%20products%2001.jpg",
    discription:
      "Ultra-lightweight ASUS Zenbook laptop designed for portability, productivity and everyday work.",

    specifications: {
      processor: "Snapdragon X Elite",
      ram: "16GB LPDDR5X",
      storage: "512GB SSD",
      display: "14-inch OLED 3K",
      graphics: "Qualcomm Adreno GPU",
      operatingSystem: "Windows 11 Home",
      battery: "70Wh",
      weight: "0.98 kg",
    },
  },

  {
    id: 12,
    title: "ASUS Zenbook S14",
    price: "$1,599",
    qty: 8,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/ASUS%20Zenbook%20S14%202026-08-15%20Copilot%2B%20AI%2001.jpg",
    discription:
      "Premium thin and lightweight 14-inch laptop with a modern design and AI-powered performance.",

    specifications: {
      processor: "Intel Core Ultra 7",
      ram: "32GB LPDDR5X",
      storage: "1TB SSD",
      display: "14-inch 3K OLED 120Hz",
      graphics: "Intel Arc Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "72Wh",
      weight: "1.20 kg",
    },
  },

  {
    id: 13,
    title: "ASUS Zenbook S14 Premium",
    price: "$1,699",
    qty: 6,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/ASUS%20Zenbook%20S14%202026-08-15%20Copilot%2B%20AI%2002.jpg",
    discription:
      "Premium ASUS laptop featuring a slim design, high-quality display and powerful performance.",

    specifications: {
      processor: "Intel Core Ultra 7",
      ram: "32GB LPDDR5X",
      storage: "1TB SSD",
      display: "14-inch 3K OLED",
      graphics: "Intel Arc Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "72Wh",
      weight: "1.20 kg",
    },
  },

  {
    id: 14,
    title: "ASUS Zenbook S14 White",
    price: "$1,749",
    qty: 5,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/ASUS%20Zenbook%20S14%202026-08-15%20Copilot%2B%20AI%2003.jpg",
    discription:
      "Elegant 14-inch ASUS Zenbook with a lightweight chassis designed for students and professionals.",

    specifications: {
      processor: "Intel Core Ultra 7",
      ram: "16GB LPDDR5X",
      storage: "1TB SSD",
      display: "14-inch 3K OLED 120Hz",
      graphics: "Intel Arc Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "72Wh",
      weight: "1.20 kg",
    },
  },

  {
    id: 15,
    title: "ASUS Vivobook 15",
    price: "$799",
    qty: 15,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Asus%20Vivobook%2015.jpg",
    discription:
      "15-inch ASUS Vivobook laptop suitable for study, office work, browsing and entertainment.",

    specifications: {
      processor: "Intel Core i5",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch FHD",
      graphics: "Intel Iris Xe Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "42Wh",
      weight: "1.70 kg",
    },
  },

  {
    id: 16,
    title: "ASUS Vivobook S14",
    price: "$999",
    qty: 12,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/ASUS%202026-08-15%20products%2004.jpg",
    discription:
      "Slim 14-inch Vivobook designed for productivity with a modern portable design.",

    specifications: {
      processor: "Intel Core Ultra 5",
      ram: "16GB LPDDR5X",
      storage: "512GB SSD",
      display: "14-inch FHD+ OLED",
      graphics: "Intel Arc Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "75Wh",
      weight: "1.30 kg",
    },
  },

  {
    id: 17,
    title: "ASUS Vivobook S16",
    price: "$1,099",
    qty: 9,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vivobook%20S16.jpg",
    discription:
      "Large-screen ASUS Vivobook S16 designed for productivity, studying and everyday computing.",

    specifications: {
      processor: "Intel Core Ultra 7",
      ram: "16GB DDR5",
      storage: "1TB SSD",
      display: "16-inch 3.2K OLED",
      graphics: "Intel Arc Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "75Wh",
      weight: "1.70 kg",
    },
  },

  {
    id: 18,
    title: "ASUS Vivobook S15 OLED",
    price: "$1,199",
    qty: 7,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Asus%20vivobook%20S15%20i9.jpg",
    discription:
      "ASUS Vivobook S15 OLED laptop with a high-quality display and powerful Intel Core processor.",

    specifications: {
      processor: "Intel Core i9",
      ram: "16GB DDR5",
      storage: "1TB SSD",
      display: "15.6-inch 2.8K OLED 120Hz",
      graphics: "Intel Iris Xe Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "70Wh",
      weight: "1.70 kg",
    },
  },

  {
    id: 19,
    title: "ASUS ROG Zephyrus G14",
    price: "$2,199",
    qty: 5,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/ASUS%20ROG%20Zephyrus%202026-08-15%20G14.jpg",
    discription:
      "Compact high-performance gaming laptop designed for gaming, creative work and demanding applications.",

    specifications: {
      processor: "AMD Ryzen 9",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      display: "14-inch QHD+ 120Hz OLED",
      graphics: "NVIDIA GeForce RTX 4070",
      operatingSystem: "Windows 11 Home",
      battery: "73Wh",
      weight: "1.50 kg",
    },
  },

  {
    id: 20,
    title: "ASUS TUF Gaming 5 Pro",
    price: "$1,399",
    qty: 8,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/ASUS%20TUF%20Gaming%205%20Pro%20Laptop.jpg",
    discription:
      "Durable ASUS TUF gaming laptop designed for gaming and demanding everyday workloads.",

    specifications: {
      processor: "AMD Ryzen 7",
      ram: "16GB DDR5",
      storage: "1TB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "NVIDIA GeForce RTX 4060",
      operatingSystem: "Windows 11 Home",
      battery: "90Wh",
      weight: "2.20 kg",
    },
  },
];

export const msiProducts: Product[] = [
  {
    id: 21,
    title: "MSI Thin GF63",
    price: "$799",
    qty: 10,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MSI_Thin_GF63_12UC-667_HOF2149-HDR_RAW-Export.png",
    discription:
      "MSI Thin GF63 gaming laptop with a 15.6-inch display, Intel Core i5 processor and NVIDIA GeForce RTX graphics.",

    specifications: {
      processor: "Intel Core i5-12450H",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "NVIDIA GeForce RTX 3050",
      operatingSystem: "Windows 11 Home",
      battery: "52.4Wh",
      weight: "1.86 kg",
    },
  },

  {
    id: 22,
    title: "MSI Thin GF63 Gaming",
    price: "$849",
    qty: 8,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MSI_Thin_GF63_12UC-667_HOF2183-HDR_RAW-Export.png",
    discription:
      "Slim MSI gaming laptop designed for gaming, school work and everyday multitasking.",

    specifications: {
      processor: "Intel Core i5-12450H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "NVIDIA GeForce RTX 3050",
      operatingSystem: "Windows 11 Home",
      battery: "52.4Wh",
      weight: "1.86 kg",
    },
  },

  {
    id: 23,
    title: "MSI Thin GF63 Performance",
    price: "$899",
    qty: 7,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MSI_Thin_GF63_12UC-667_HOF2274_RAW-Export.png",
    discription:
      "Powerful and portable MSI gaming notebook featuring a fast display and dedicated NVIDIA graphics.",

    specifications: {
      processor: "Intel Core i7-12650H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "NVIDIA GeForce RTX 4060",
      operatingSystem: "Windows 11 Home",
      battery: "52.4Wh",
      weight: "1.86 kg",
    },
  },

  {
    id: 24,
    title: "MSI Thin GF63 Pro",
    price: "$949",
    qty: 6,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MSI_Thin_GF63_12UC-667_HOF2222-HDR_RAW-Export.png",
    discription:
      "Gaming-focused MSI laptop with strong performance for games, entertainment and productivity.",

    specifications: {
      processor: "Intel Core i7-12650H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "NVIDIA GeForce RTX 4060",
      operatingSystem: "Windows 11 Home",
      battery: "52.4Wh",
      weight: "1.86 kg",
    },
  },

  {
    id: 25,
    title: "MSI Bravo 17",
    price: "$1,099",
    qty: 9,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MSI_Bravo_17_%280017FK-007%29-front_oblique_PNr%C2%B00757.jpg",
    discription:
      "Large 17-inch MSI Bravo gaming laptop designed for immersive gaming and demanding applications.",

    specifications: {
      processor: "AMD Ryzen 7",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "17.3-inch FHD 144Hz",
      graphics: "AMD Radeon RX 5500M",
      operatingSystem: "Windows 11 Home",
      battery: "51Wh",
      weight: "2.25 kg",
    },
  },

  {
    id: 26,
    title: "MSI Bravo 17 Gaming",
    price: "$1,149",
    qty: 5,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MSI_Bravo_17_%280017FK-007%29-top_cover_PNr%C2%B00759.jpg",
    discription:
      "MSI Bravo 17 gaming laptop featuring a large display and a performance-oriented design.",

    specifications: {
      processor: "AMD Ryzen 7",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      display: "17.3-inch FHD 144Hz",
      graphics: "AMD Radeon RX 5500M",
      operatingSystem: "Windows 11 Home",
      battery: "51Wh",
      weight: "2.25 kg",
    },
  },

  {
    id: 27,
    title: "MSI GP60 Leopard",
    price: "$699",
    qty: 11,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Msigamingnotebook.jpg",
    discription:
      "MSI GP60 Leopard gaming laptop designed for gaming and everyday computing.",

    specifications: {
      processor: "Intel Core i5-4210H",
      ram: "8GB DDR3L",
      storage: "1TB HDD",
      display: "15.6-inch FHD",
      graphics: "NVIDIA GeForce GTX 850M",
      operatingSystem: "Windows 10",
      battery: "49Wh",
      weight: "2.40 kg",
    },
  },

  {
    id: 28,
    title: "MSI U160",
    price: "$399",
    qty: 12,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MSI_U160_%281%29.jpg",
    discription:
      "Compact MSI U160 laptop designed for basic computing, browsing and everyday productivity.",

    specifications: {
      processor: "Intel Atom N450",
      ram: "2GB DDR2",
      storage: "320GB HDD",
      display: "10.1-inch HD",
      graphics: "Intel GMA 3150",
      operatingSystem: "Windows 7",
      battery: "6-cell Battery",
      weight: "1.00 kg",
    },
  },

  {
    id: 29,
    title: "MSI Wind U100",
    price: "$299",
    qty: 15,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MSI_WIND_Netbook_U100_%282018%29_07.jpg",
    discription:
      "Compact MSI Wind U100 netbook designed for lightweight everyday computing and portability.",

    specifications: {
      processor: "Intel Atom N270",
      ram: "1GB DDR2",
      storage: "160GB HDD",
      display: "10-inch WSVGA",
      graphics: "Intel GMA 950",
      operatingSystem: "Windows XP",
      battery: "6-cell Battery",
      weight: "1.00 kg",
    },
  },

  {
    id: 30,
    title: "MSI Wind Notebook",
    price: "$279",
    qty: 13,
    images:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/2008Computex_MSI_Wind_Notebook.jpg",
    discription:
      "Classic MSI Wind notebook with a compact design suitable for basic computing and web browsing.",

    specifications: {
      processor: "Intel Atom N270",
      ram: "1GB DDR2",
      storage: "120GB HDD",
      display: "10-inch WSVGA",
      graphics: "Intel GMA 950",
      operatingSystem: "Windows XP",
      battery: "6-cell Battery",
      weight: "1.00 kg",
    },
  },
];

export const desktopProducts: Product[] = [
  {
    id: 31,
    title: "Alienware Aurora R16 Gaming Desktop",
    price: "$1,799.99",
    qty: 12,
    images: "https://images.unsplash.com/photo-1587831994791-bcac6adfe508?w=800&auto=format&fit=crop&q=60",
    discription: "Engineered for elite-tier gaming and high-performance multitasking, featuring optimized airflow and sleek minimalist aesthetics.",
    specifications: {
      processor: "Intel Core i7-14700F",
      ram: "32GB DDR5 5600MHz",
      storage: "1TB NVMe M.2 PCIe SSD",
      display: "Not included (Desktop Tower only)",
      graphics: "NVIDIA GeForce RTX 4070 12GB GDDR6X",
      operatingSystem: "Windows 11 Home",
      battery: "N/A (AC Powered)",
      weight: "26.3 lbs (11.9 kg)"
    }
  },
  {
    id: 32,
    title: "HP Envy Move 24 All-in-One Desktop",
    price: "$999.99",
    qty: 8,
    images: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=60",
    discription: "A versatile, portable all-in-one desktop with a built-in battery and flexible handle designed for hybrid work and home entertainment.",
    specifications: {
      processor: "Intel Core i5-1335U",
      ram: "16GB LPDDR64",
      storage: "512GB PCIe NVMe M.2 SSD",
      display: "23.8-inch QHD (2560 x 1440) Touch-enabled",
      graphics: "Intel Iris Xe Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "83 Whr Lithium-ion polymer (up to 4 hours)",
      weight: "9.0 lbs (4.1 kg)"
    }
  },
  {
    id: 33,
    title: "Apple iMac 24-inch (M3 Chip)",
    price: "$1,299.00",
    qty: 15,
    images: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
    discription: "Imordinately thin all-in-one desktop powered by the M3 chip, delivering incredible performance in a vibrant, iconic design.",
    specifications: {
      processor: "Apple M3 chip with 8-core CPU and 10-core GPU",
      ram: "16GB unified memory",
      storage: "512GB SSD storage",
      display: "24-inch 4.5K Retina display (4480 x 2520)",
      graphics: "Integrated 10-core GPU",
      operatingSystem: "macOS",
      battery: "N/A (AC Powered)",
      weight: "9.75 lbs (4.43 kg)"
    }
  },
  {
    id: 34,
    title: "Corsair Vengeance i7500 Gaming PC",
    price: "$2,499.99",
    qty: 5,
    images: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=60",
    discription: "Top-tier liquid-cooled gaming powerhouse built with enthusiast-grade components for uncompromising 4K gaming and content creation.",
    specifications: {
      processor: "Intel Core i9-14900KS",
      ram: "64GB DDR5 6000MHz",
      storage: "2TB NVMe M.2 PCIe 4.0 SSD",
      display: "Not included (Desktop Tower only)",
      graphics: "NVIDIA GeForce RTX 4080 Super 16GB",
      operatingSystem: "Windows 11 Pro",
      battery: "N/A (AC Powered)",
      weight: "35.2 lbs (16.0 kg)"
    }
  },
  {
    id: 35,
    title: "Lenovo IdeaCentre AIO 3",
    price: "$649.99",
    qty: 20,
    images: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop&q=60",
    discription: "A reliable and sleek family all-in-one desktop engineered for everyday productivity, studying, and streaming.",
    specifications: {
      processor: "AMD Ryzen 5 7530U",
      ram: "16GB DDR4 3200MHz",
      storage: "512GB M.2 PCIe NVMe SSD",
      display: "23.8-inch FHD (1920 x 1080) IPS Anti-glare",
      graphics: "AMD Radeon Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "N/A (AC Powered)",
      weight: "15.4 lbs (7.0 kg)"
    }
  }
];

export const monitorProducts: Product[] = [
  {
    id: 36,
    title: "MSI MPG 341CQR QD-OLED Gaming Monitor",
    price: "$899.99",
    qty: 14,
    images: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
    discription: "Stunning 34-inch curved QD-OLED display engineered for immersive gaming and precise color work with a silky-smooth 360Hz refresh rate.",
    specifications: {
      processor: "N/A",
      ram: "N/A",
      storage: "N/A",
      display: "34-inch UWQHD (3440 x 1440) QD-OLED Curved",
      graphics: "N/A",
      operatingSystem: "N/A",
      battery: "N/A",
      weight: "19.8 lbs (9.0 kg)"
    }
  },
  {
    id: 37,
    title: "Alienware AW2726DM 27-inch QHD Monitor",
    price: "$349.99",
    qty: 25,
    images: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop&q=60",
    discription: "Vivid OLED panel providing crisp 1440p resolution, high color accuracy, and top-tier responsiveness for competitive play.",
    specifications: {
      processor: "N/A",
      ram: "N/A",
      storage: "N/A",
      display: "27-inch QHD (2560 x 1440) OLED",
      graphics: "N/A",
      operatingSystem: "N/A",
      battery: "N/A",
      weight: "14.1 lbs (6.4 kg)"
    }
  },
  {
    id: 38,
    title: "LG UltraGear 27GS60QC-B Curved Gaming Monitor",
    price: "$142.00",
    qty: 30,
    images: "https://images.unsplash.com/photo-1587831994791-bcac6adfe508?w=800&auto=format&fit=crop&q=60",
    discription: "Value-focused 27-inch curved monitor with a fast 180Hz refresh rate and FreeSync support, built for everyday speed and entertainment.",
    specifications: {
      processor: "N/A",
      ram: "N/A",
      storage: "N/A",
      display: "27-inch QHD (2560 x 1440) VA Curved",
      graphics: "N/A",
      operatingSystem: "N/A",
      battery: "N/A",
      weight: "11.5 lbs (5.2 kg)"
    }
  },
  {
    id: 39,
    title: "Acer Nitro KG271U 27-Inch 1440p Monitor",
    price: "$169.99",
    qty: 18,
    images: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=60",
    discription: "High-performance budget gaming monitor delivering a high refresh rate and wide color gamut coverage for immersive setups.",
    specifications: {
      processor: "N/A",
      ram: "N/A",
      storage: "N/A",
      display: "27-inch WQHD (2560 x 1440) IPS",
      graphics: "N/A",
      operatingSystem: "N/A",
      battery: "N/A",
      weight: "12.3 lbs (5.6 kg)"
    }
  },
  {
    id: 40,
    title: "Samsung Odyssey G55C Curved 32-Inch Monitor",
    price: "$189.99",
    qty: 10,
    images: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=60",
    discription: "Expansive 1000R curved screen designed to match the human eye's curve for maximum immersion during movies and gaming sessions.",
    specifications: {
      processor: "N/A",
      ram: "N/A",
      storage: "N/A",
      display: "32-inch WQHD (2560 x 1440) 1000R Curved VA",
      graphics: "N/A",
      operatingSystem: "N/A",
      battery: "N/A",
      weight: "15.9 lbs (7.2 kg)"
    }
  }
];
export const allProducts: Product[] = [
  ...dellProducts,
  ...asusProducts,
  ...msiProducts,
  ...desktopProducts,
  ...monitorProducts
];
