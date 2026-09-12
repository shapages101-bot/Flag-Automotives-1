/* ============================================================
   FLAG AUTO CARE — APPLICATION STATE
   Complete data model + mock data + mutation API
   ============================================================ */

const AppState = {

  /* ── Auth ─────────────────────────────────────────────── */
  auth: {
    isAuthenticated: false,
    otpSent: false,
    phone: '',
    loading: false,
    error: null,
  },

  /* ── User & Customer ──────────────────────────────────── */
  user: {
    id: 'cust_001',
    name: 'Rahul Sharma',
    phone: '+91 98765 43210',
    email: 'rahulsharma@gmail.com',
    avatar: 'RS',
    memberSince: '2023-01-15',
    membership: 'elite', // null | 'elite'
  },

  /* ── Vehicles ─────────────────────────────────────────── */
  vehicles: [
    {
      id: 'veh_001',
      customerId: 'cust_001',
      make: 'Honda',
      model: 'City ZX CVT',
      name: 'Honda City ZX CVT',
      year: 2019,
      variant: 'ZX',
      registration: 'MH 12 AB 1234',
      reg: 'MH 12 AB 1234',
      fuel: 'Petrol',
      transmission: 'Automatic',
      color: 'White',
      odometer: 24360,
      lastServiceDate: '2024-02-10',
      lastServiceKm: 21160,
      nextServiceDate: '2024-06-10',
      nextServiceKm: 25000,
      health: 84,
      healthLabel: 'Good',
    },
    {
      id: 'veh_002',
      customerId: 'cust_001',
      make: 'Hyundai',
      model: 'Creta SX',
      name: 'Hyundai Creta SX',
      year: 2022,
      variant: 'SX (O) Turbo',
      reg: 'MH 12 CD 5678',
      registration: 'MH 12 CD 5678',
      fuel: 'Diesel',
      transmission: 'Automatic',
      color: 'Black',
      odometer: 28500,
      lastServiceDate: '2025-03-15',
      lastServiceKm: 14400,
      nextServiceDate: '2025-09-15',
      nextServiceKm: 38500,
      health: 76,
      healthLabel: 'Fair',
    },
  ],

  /* ── Car Brands & Models ──────────────────────────────── */
  carBrands: (() => {
    // Inline SVG brand logos — ZERO network requests, instant rendering
    const svg = {
      maruti: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="38" font-family="Arial Black,sans-serif" font-size="13" font-weight="900" fill="#003087" text-anchor="middle">MARUTI</text><text x="50" y="52" font-family="Arial,sans-serif" font-size="8" fill="#003087" text-anchor="middle">SUZUKI</text></svg>`,
      hyundai: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="42" font-family="Arial Black,sans-serif" font-size="28" font-weight="900" fill="#002C5F" text-anchor="middle">H</text></svg>`,
      tata: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="13" font-weight="900" fill="#0047AB" text-anchor="middle">TATA</text></svg>`,
      honda: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="24" font-weight="900" fill="#CC0000" text-anchor="middle">H</text></svg>`,
      mahindra: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="10" font-weight="900" fill="#E31E2D" text-anchor="middle">MAHINDRA</text></svg>`,
      kia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="22" font-weight="900" fill="#05141F" text-anchor="middle">KIA</text></svg>`,
      toyota: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="#EB0A1E" text-anchor="middle">TOYOTA</text></svg>`,
      volkswagen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="22" font-weight="900" fill="#001E62" text-anchor="middle">VW</text></svg>`,
      skoda: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="13" font-weight="900" fill="#4BA82E" text-anchor="middle">ŠKODA</text></svg>`,
      mg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="22" font-weight="900" fill="#CC0000" text-anchor="middle">MG</text></svg>`,
      renault: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="#FFCC00" text-anchor="middle" fill="black">RENAULT</text></svg>`,
      nissan: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="#C3002F" text-anchor="middle">NISSAN</text></svg>`,
      ford: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="20" font-weight="900" fill="#003499" text-anchor="middle">Ford</text></svg>`,
      jeep: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="20" font-weight="900" fill="#1A1A1A" text-anchor="middle">JEEP</text></svg>`,
      citroen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="#B5121B" text-anchor="middle">CITROËN</text></svg>`,
      bmw: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="22" font-weight="900" fill="#1C69D4" text-anchor="middle">BMW</text></svg>`,
      mercedes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="#222222" text-anchor="middle">MERCEDES</text></svg>`,
      audi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="20" font-weight="900" fill="#BB0A30" text-anchor="middle">AUDI</text></svg>`,
      volvo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="13" font-weight="900" fill="#003057" text-anchor="middle">VOLVO</text></svg>`,
      jaguar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="#1A1A1A" text-anchor="middle">JAGUAR</text></svg>`,
      landrover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="38" font-family="Arial Black,sans-serif" font-size="9" font-weight="900" fill="#005A2B" text-anchor="middle">LAND ROVER</text></svg>`,
      lexus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="13" font-weight="900" fill="#1A1A1A" text-anchor="middle">LEXUS</text></svg>`,
      porsche: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="#B40404" text-anchor="middle">PORSCHE</text></svg>`,
      mini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="20" font-weight="900" fill="#1A1A1A" text-anchor="middle">MINI</text></svg>`,
      ferrari: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="11" font-weight="900" fill="#CC0001" text-anchor="middle">FERRARI</text></svg>`,
      lamborghini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="40" font-family="Arial Black,sans-serif" font-size="8" font-weight="900" fill="#D4AF37" text-anchor="middle">LAMBORGHINI</text></svg>`,
      rollsroyce: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="38" font-family="Arial Black,sans-serif" font-size="9" font-weight="900" fill="#7C5C37" text-anchor="middle">ROLLS-ROYCE</text></svg>`,
    };
    // Vehicle images — using CarDekho CDN (India-hosted, fast)
    const cd = (path) => `https://stimg.cardekho.com/images/carexteriorimages/930x620/${path}/1.jpg`;
    return [
    { id: 'maruti', name: 'Maruti Suzuki', logo: svg.maruti, image: null, popular: true,
      models: [
        { id: 'swift', name: 'Swift', image: cd('Maruti/Swift'), variants: ['VXi','ZXi','ZXi+'] },
        { id: 'baleno', name: 'Baleno', image: cd('Maruti/Baleno'), variants: ['Delta','Zeta','Alpha'] },
        { id: 'brezza', name: 'Brezza', image: cd('Maruti/Maruti-Brezza'), variants: ['LXi','VXi','ZXi','ZXi+'] },
        { id: 'ertiga', name: 'Ertiga', image: cd('Maruti/Ertiga'), variants: ['VXi','ZXi','ZXi+'] },
        { id: 'dzire', name: 'Dzire', image: cd('Maruti/Swift-Dzire'), variants: ['VXi','ZXi','ZXi+'] },
      ]
    },
    { id: 'hyundai', name: 'Hyundai', logo: svg.hyundai, image: null, popular: true,
      models: [
        { id: 'creta', name: 'Creta', image: cd('Hyundai/Creta'), variants: ['E','S','SX','SX(O)'] },
        { id: 'venue', name: 'Venue', image: cd('Hyundai/Venue'), variants: ['E','S','SX','SX(O)'] },
        { id: 'i20', name: 'i20', image: cd('Hyundai/i20'), variants: ['Era','Magna','Sportz','Asta'] },
        { id: 'verna', name: 'Verna', image: cd('Hyundai/Verna'), variants: ['EX','S','SX','SX(O)'] },
        { id: 'alcazar', name: 'Alcazar', image: cd('Hyundai/Alcazar'), variants: ['Prestige','Platinum'] },
      ]
    },
    { id: 'tata', name: 'Tata', logo: svg.tata, image: null, popular: true,
      models: [
        { id: 'nexon', name: 'Nexon', image: cd('Tata/Nexon'), variants: ['XE','XM','XZ','XZ+'] },
        { id: 'punch', name: 'Punch', image: cd('Tata/Punch'), variants: ['Pure','Adventure','Creative'] },
        { id: 'harrier', name: 'Harrier', image: cd('Tata/Harrier'), variants: ['XE','XM','XZ','XZ+'] },
        { id: 'safari', name: 'Safari', image: cd('Tata/Safari'), variants: ['XE','XM','XZ','XZA+'] },
        { id: 'altroz', name: 'Altroz', image: cd('Tata/Altroz'), variants: ['XE','XM','XZ','XZ+'] },
      ]
    },
    { id: 'honda', name: 'Honda', logo: svg.honda, image: null, popular: true,
      models: [
        { id: 'city', name: 'City', image: cd('Honda/City'), variants: ['V','VX','ZX','SV'] },
        { id: 'amaze', name: 'Amaze', image: cd('Honda/Amaze'), variants: ['S','V','VX','ZX'] },
        { id: 'elevate', name: 'Elevate', image: cd('Honda/Elevate'), variants: ['SV','V','VX','ZX'] },
      ]
    },
    { id: 'mahindra', name: 'Mahindra', logo: svg.mahindra, image: null, popular: true,
      models: [
        { id: 'scorpio', name: 'Scorpio N', image: cd('Mahindra/Scorpio-N'), variants: ['S','S11'] },
        { id: 'thar', name: 'Thar', image: cd('Mahindra/Thar'), variants: ['AX','LX'] },
        { id: 'xuv700', name: 'XUV700', image: cd('Mahindra/XUV700'), variants: ['AX3','AX5','AX7'] },
        { id: 'xuv3xo', name: 'XUV 3XO', image: cd('Mahindra/XUV-3XO'), variants: ['MX1','MX3','AX5'] },
        { id: 'bolero', name: 'Bolero', image: cd('Mahindra/Bolero'), variants: ['B4','B6','B6(O)'] },
      ]
    },
    { id: 'kia', name: 'Kia', logo: svg.kia, image: null, popular: true,
      models: [
        { id: 'seltos', name: 'Seltos', image: cd('Kia/Seltos'), variants: ['HTE','HTK','HTX','GTX+'] },
        { id: 'sonet', name: 'Sonet', image: cd('Kia/Sonet'), variants: ['HTE','HTK','HTX','GTX+'] },
        { id: 'carens', name: 'Carens', image: cd('Kia/Carens'), variants: ['Premium','Prestige'] },
        { id: 'ev6', name: 'EV6', image: cd('Kia/EV6'), variants: ['GT-Line AWD'] },
      ]
    },
    { id: 'toyota', name: 'Toyota', logo: svg.toyota, image: null, popular: false,
      models: [
        { id: 'innova', name: 'Innova HyCross', image: cd('Toyota/Innova-HyCross'), variants: ['GX','VX','ZX'] },
        { id: 'fortuner', name: 'Fortuner', image: cd('Toyota/Fortuner'), variants: ['2WD','4WD'] },
        { id: 'glanza', name: 'Glanza', image: cd('Toyota/Glanza'), variants: ['E','S','G','V'] },
        { id: 'hyryder', name: 'Urban Cruiser Hyryder', image: cd('Toyota/Urban-Cruiser-Hyryder'), variants: ['E','S','G','V'] },
      ]
    },
    { id: 'volkswagen', name: 'Volkswagen', logo: svg.volkswagen, image: null, popular: false,
      models: [
        { id: 'taigun', name: 'Taigun', image: cd('Volkswagen/Taigun'), variants: ['Comfortline','Highline','Topline','GT Plus'] },
        { id: 'virtus', name: 'Virtus', image: cd('Volkswagen/Virtus'), variants: ['Comfortline','Highline','Topline'] },
      ]
    },
    { id: 'skoda', name: 'Skoda', logo: svg.skoda, image: null, popular: false,
      models: [
        { id: 'kushaq', name: 'Kushaq', image: cd('Skoda/Kushaq'), variants: ['Active','Ambition','Style'] },
        { id: 'slavia', name: 'Slavia', image: cd('Skoda/Slavia'), variants: ['Active','Ambition','Style'] },
        { id: 'kodiaq', name: 'Kodiaq', image: cd('Skoda/Kodiaq'), variants: ['Sportline','L&K'] },
      ]
    },
    { id: 'mg', name: 'MG', logo: svg.mg, image: null, popular: false,
      models: [
        { id: 'hector', name: 'Hector', image: cd('MG/Hector'), variants: ['Style','Smart','Sharp','Savvy'] },
        { id: 'astor', name: 'Astor', image: cd('MG/Astor'), variants: ['Style','Smart','Sharp'] },
        { id: 'gloster', name: 'Gloster', image: cd('MG/Gloster'), variants: ['Super','Smart','Sharp'] },
      ]
    },
    { id: 'renault', name: 'Renault', logo: svg.renault, image: null, popular: false,
      models: [
        { id: 'kwid', name: 'Kwid', image: cd('Renault/Kwid'), variants: ['RXE','RXT','RXT(O)'] },
        { id: 'kiger', name: 'Kiger', image: cd('Renault/Kiger'), variants: ['RXE','RXL','RXT','RXZ'] },
      ]
    },
    { id: 'nissan', name: 'Nissan', logo: svg.nissan, image: null, popular: false,
      models: [
        { id: 'magnite', name: 'Magnite', image: cd('Nissan/Magnite'), variants: ['XE','XL','XV','XV Prime'] },
      ]
    },
    { id: 'ford', name: 'Ford', logo: svg.ford, image: null, popular: false, models: [] },
    { id: 'jeep', name: 'Jeep', logo: svg.jeep, image: null, popular: false,
      models: [
        { id: 'meridian', name: 'Meridian', image: cd('Jeep/Meridian'), variants: ['Limited','Limited O','Overland'] },
        { id: 'compass', name: 'Compass', image: cd('Jeep/Compass'), variants: ['Sport','Longitude','Limited'] },
      ]
    },
    { id: 'citroen', name: 'Citroën', logo: svg.citroen, image: null, popular: false,
      models: [
        { id: 'cc21', name: 'C3', image: cd('Citroen/C3'), variants: ['Feel','Shine'] },
        { id: 'cc21aircross', name: 'C3 Aircross', image: cd('Citroen/C3-Aircross'), variants: ['Feel','Shine'] },
      ]
    },
    { id: 'bmw', name: 'BMW', logo: svg.bmw, image: null, popular: false,
      models: [
        { id: '3series', name: '3 Series', image: cd('BMW/3-Series'), variants: ['Sport','M Sport'] },
        { id: '5series', name: '5 Series', image: cd('BMW/5-Series-Gran-Turismo'), variants: ['Luxury Line','M Sport'] },
        { id: 'x1', name: 'X1', image: cd('BMW/X1'), variants: ['xLine','M Sport'] },
      ]
    },
    { id: 'mercedes-benz', name: 'Mercedes-Benz', logo: svg.mercedes, image: null, popular: false,
      models: [
        { id: 'cclass', name: 'C-Class', image: cd('Mercedes-Benz/C-Class'), variants: ['Progressive','AMG Line'] },
        { id: 'eclass', name: 'E-Class', image: cd('Mercedes-Benz/E-Class'), variants: ['Progressive','Exclusive'] },
        { id: 'glc', name: 'GLC', image: cd('Mercedes-Benz/GLC'), variants: ['Progressive','AMG Line'] },
      ]
    },
    { id: 'audi', name: 'Audi', logo: svg.audi, image: null, popular: false,
      models: [
        { id: 'a4', name: 'A4', image: cd('Audi/A4'), variants: ['Premium Plus'] },
        { id: 'q5', name: 'Q5', image: cd('Audi/Q5'), variants: ['Premium Plus','Technology'] },
        { id: 'q3', name: 'Q3', image: cd('Audi/Q3'), variants: ['Premium','Premium Plus'] },
      ]
    },
    { id: 'volvo', name: 'Volvo', logo: svg.volvo, image: null, popular: false, models: [] },
    { id: 'jaguar', name: 'Jaguar', logo: svg.jaguar, image: null, popular: false, models: [] },
    { id: 'land-rover', name: 'Land Rover', logo: svg.landrover, image: null, popular: false, models: [] },
    { id: 'lexus', name: 'Lexus', logo: svg.lexus, image: null, popular: false, models: [] },
    { id: 'porsche', name: 'Porsche', logo: svg.porsche, image: null, popular: false, models: [] },
    { id: 'mini', name: 'MINI', logo: svg.mini, image: null, popular: false, models: [] },
    { id: 'ferrari', name: 'Ferrari', logo: svg.ferrari, image: null, popular: false, models: [] },
    { id: 'lamborghini', name: 'Lamborghini', logo: svg.lamborghini, image: null, popular: false, models: [] },
    { id: 'rolls-royce', name: 'Rolls-Royce', logo: svg.rollsroyce, image: null, popular: false, models: [] },
  ]})(),
  /* ── Service Categories ───────────────────────────────── */
  categories: [
    { id: 'cat_general',   label: 'General Service',  emoji: '🔧', active: false },
    { id: 'cat_ac',        label: 'AC Service',        emoji: '❄️', active: false },
    { id: 'cat_battery',   label: 'Battery',           emoji: '⚡', active: false },
    { id: 'cat_tyres',     label: 'Tyres',             emoji: '🛞', active: false },
    { id: 'cat_dent',      label: 'Dent & Paint',      emoji: '🎨', active: false },
    { id: 'cat_wash',      label: 'Car Wash',          emoji: '🚿', active: false },
    { id: 'cat_detail',    label: 'Detailing',         emoji: '✨', active: false },
    { id: 'cat_diag',      label: 'Diagnostics',       emoji: '🔬', active: false },
  ],

  /* ── Services ─────────────────────────────────────────── */
  services: [
    { id: 'svc_001', name: 'Comprehensive Service', category: 'cat_general', basePrice: 2999, duration: '60–90 min', rating: 4.9, reviewCount: 1842, description: 'Complete periodic maintenance covering all essential checkpoints.', popular: true, emoji: '🔧' },
    { id: 'svc_002', name: 'AC Gas Refilling',       category: 'cat_ac',      basePrice: 1250, duration: '30–45 min', rating: 4.8, reviewCount: 923, description: 'R134a / R1234yf gas refilling with pressure check & leak test.', popular: true, emoji: '❄️' },
    { id: 'svc_003', name: 'Wheel Alignment',        category: 'cat_tyres',   basePrice: 999,  duration: '30–45 min', rating: 4.7, reviewCount: 641, description: 'Computerised 4-wheel alignment for straight tracking and even tyre wear.', popular: true, emoji: '🛞' },
    { id: 'svc_004', name: 'Car Spa & Cleaning',     category: 'cat_detail',  basePrice: 1499, duration: '60–90 min', rating: 4.8, reviewCount: 512, description: 'Full interior and exterior detailing & cleaning.', popular: true, emoji: '✨' },
    { id: 'svc_005', name: 'Battery Check & Replace',category: 'cat_battery', basePrice: 499,  duration: '20–30 min', rating: 4.6, reviewCount: 389, description: 'Battery diagnostics, load test, and OEM replacement if needed.', popular: false, emoji: '⚡' },
  ],

  /* ── Packages ─────────────────────────────────────────── */
  packages: [
    {
      id: 'pkg_001',
      serviceId: 'svc_001',
      name: 'Comprehensive Service',
      tier: 'comprehensive',
      price: 2999,
      duration: '60–90 min',
      popular: true,
      badge: 'Most Popular',
      badgeColor: 'orange',
      commonFeatures: [
        'Engine Oil Change (OEM Grade)',
        'Oil Filter Replacement',
        '21 Point Safety Checkup',
      ],
      additionalFeatures: [
        'Top-up Fluids (Coolant, Brake, Washer)',
        'Brake Inspection',
        'Battery Health Check',
        'Tyre Pressure & Tread Check',
        'Air Filter Inspection',
        'Wiper Check & Test',
        'Underbody Inspection',
        'Exterior Wash & Interior Vacuum',
      ],
    },
    {
      id: 'pkg_002',
      serviceId: 'svc_001',
      name: 'Standard Service',
      tier: 'standard',
      price: 4499,
      duration: '90–120 min',
      popular: false,
      badge: null,
      commonFeatures: [
        'Engine Oil Change (OEM Grade)',
        'Oil Filter Replacement',
        '21 Point Safety Checkup',
      ],
      additionalFeatures: [
        'Top-up Fluids (Coolant, Brake, Washer)',
        'Brake Inspection',
        'Battery Health Check',
        'Tyre Pressure & Tread Check',
        'Air Filter Inspection',
        'Wiper Check & Test',
        'Underbody Inspection',
        'Wheel Alignment (Computerised)',
        'Fuel System Cleaning',
        'Exterior Wash & Interior Vacuum',
      ],
    },
    {
      id: 'pkg_003',
      serviceId: 'svc_001',
      name: 'Premium Service',
      tier: 'premium',
      price: 6499,
      duration: '120–150 min',
      popular: false,
      badge: 'Best Value',
      badgeColor: 'blue',
      commonFeatures: [
        'Engine Oil Change (OEM Grade)',
        'Oil Filter Replacement',
        '21 Point Safety Checkup',
      ],
      additionalFeatures: [
        'Top-up Fluids (Coolant, Brake, Washer)',
        'Brake Inspection & Pad Measurement',
        'Battery Health Check & Load Test',
        'Tyre Pressure, Tread & Rotation',
        'Air Filter Inspection & Cleaning',
        'Wiper Check & Replacement if needed',
        'Underbody Anti-Rust Inspection',
        'Wheel Alignment + Wheel Balancing',
        'AC Performance Check & Filter Clean',
        'Engine Degreasing',
        'Interior Deep Vacuum & Sanitisation',
        'Full Exterior Foam Wash + Wax',
        'Priority Lane + Dedicated Advisor',
        '90-day Roadside Assistance',
      ],
    },
  ],

  /* ── Add-ons ──────────────────────────────────────────── */
  addons: [
    { id: 'add_001', name: 'AC Performance Check', description: 'Gas pressure, leak check & cooling efficiency test', price: 499,  duration: '30 min', emoji: '❄️' },
    { id: 'add_002', name: 'Premium Car Wash',      description: 'Foam wash, rinse, tyre dressing & streak-free glass', price: 299,  duration: '45 min', emoji: '🚿' },
    { id: 'add_003', name: 'Interior Detailing',    description: 'Deep vacuum, seat sanitisation & dashboard polish', price: 799,  duration: '60 min', emoji: '✨' },
    { id: 'add_004', name: 'Engine Flush',          description: 'Chemical flush to remove sludge before oil change', price: 599,  duration: '20 min', emoji: '⚙️' },
    { id: 'add_005', name: 'Underbody Coating',     description: 'Anti-rust, anti-corrosion rubberised underbody coat', price: 1299, duration: '45 min', emoji: '🛡️' },
  ],

  /* ── Branches ─────────────────────────────────────────── */
  branches: [
    { id: 'br_001', name: 'FLAG Auto Care — Kothrud',  address: 'Shop 14, Paud Rd, Kothrud',  city: 'Pune', distance: 1.2, slots: 5, rating: 4.8, hours: '8AM–8PM', lat: 18.5074, lng: 73.8077, emoji: '📍' },
    { id: 'br_002', name: 'FLAG Auto Care — Baner',    address: 'Plot 7, Baner–Pashan Link Rd', city: 'Pune', distance: 3.8, slots: 2, rating: 4.6, hours: '8AM–7PM', lat: 18.5590, lng: 73.7868, emoji: '📍' },
    { id: 'br_003', name: 'FLAG Auto Care — Wakad',    address: 'S.No. 22, Wakad Main Rd',    city: 'Pune', distance: 5.1, slots: 7, rating: 4.7, hours: '8AM–8PM', lat: 18.5975, lng: 73.7710, emoji: '📍' },
  ],

  /* ── Slots ────────────────────────────────────────────── */
  slots: [
    { id: 'sl_1', label: '09:00 AM – 11:00 AM', available: false },
    { id: 'sl_2', label: '11:00 AM – 01:00 PM', available: true },
    { id: 'sl_3', label: '01:00 PM – 03:00 PM', available: true },
    { id: 'sl_4', label: '03:00 PM – 05:00 PM', available: true },
    { id: 'sl_5', label: '05:00 PM – 07:00 PM', available: true },
  ],

  /* ── Booking Draft (in-progress) ─────────────────────── */
  draft: {
    vehicleId: 'veh_001',   // pre-select first vehicle
    packageId: 'pkg_001',   // pre-select comprehensive
    addonIds:  [],
    branchId: 'br_001',
    date: '2024-05-21',
    dateLabel: 'Tuesday, 21 May 2024',
    slotId: 'sl_2',
    couponCode: '',
    couponApplied: null,    // { code, discountType, discountValue, discountAmount }
    step: 1,                // 1=Package 2=DateTime 3=Addons 4=Review
  },

  /* ── Existing Bookings ────────────────────────────────── */
  bookings: [
    {
      id: 'bk_001',
      customerId: 'cust_001',
      vehicleId: 'veh_001',
      packageId: 'pkg_001',
      branchId: 'br_001',
      addonIds: ['add_001'],
      date: '2024-05-21',
      slotId: 'sl_2',
      slotLabel: '11:00 AM – 01:00 PM',
      status: 'in_progress',
      paymentStatus: 'pending',
      paymentMethod: 'at_centre',
      subtotal: 3498,
      gst: 629.64,
      total: 4127.64,
      bookingRef: 'FAC-2024-08456',
      createdAt: '2024-05-20T08:15:00Z',
    },
    {
      id: 'bk_002',
      customerId: 'cust_001',
      vehicleId: 'veh_002',
      packageId: 'pkg_002',
      branchId: 'br_002',
      addonIds: [],
      date: '2024-04-12',
      slotId: 'sl_1',
      slotLabel: '09:00 AM – 11:00 AM',
      status: 'completed',
      paymentStatus: 'paid',
      paymentMethod: 'upi',
      subtotal: 4499,
      gst: 809.82,
      total: 5308.82,
      bookingRef: 'FAC-2024-07231',
      createdAt: '2024-04-11T10:00:00Z',
    },
  ],

  /* ── Invoices ─────────────────────────────────────────── */
  invoices: [
    { id: 'inv_001', bookingId: 'bk_001', invoiceNo: 'INV-2024-08456', vehicleId: 'veh_001', packageId: 'pkg_001', addonIds: ['add_001'], status: 'pending', total: 4127.64, issuedAt: '2024-05-21', dueDate: '2024-05-28' },
    { id: 'inv_002', bookingId: 'bk_002', invoiceNo: 'INV-2024-07231', vehicleId: 'veh_002', packageId: 'pkg_002', addonIds: [], status: 'paid', total: 5308.82, issuedAt: '2024-04-12', paidAt: '2024-04-12' },
  ],

  /* ── Live Tracking ────────────────────────────────────── */
  trackingSteps: [
    { id: 'ts_1', label: 'Booked',      status: 'done',    time: '08:05 AM', desc: 'Booking confirmed. Ref: FAC-2024-08456' },
    { id: 'ts_2', label: 'Checked In',  status: 'done',    time: '10:15 AM', desc: 'Vehicle received at FLAG Kothrud' },
    { id: 'ts_3', label: 'Inspection',  status: 'done',    time: '10:30 AM', desc: '21-point check complete. Findings shared.' },
    { id: 'ts_4', label: 'In Service',  status: 'active',  time: '11:00 AM', desc: 'Engine oil & filter replaced. Fluids in progress.' },
    { id: 'ts_5', label: 'QC Check',    status: 'pending', time: null,       desc: 'Pending' },
    { id: 'ts_6', label: 'Ready',       status: 'pending', time: null,       desc: 'Pending · Est. 01:00 PM' },
  ],

  /* ── Notifications ────────────────────────────────────── */
  notifications: [
    { id: 'n_001', type: 'update',    title: 'Service In Progress',       body: 'Engine oil change complete. Fluids being topped up. Est. 1:00 PM',  time: '11:22 AM', read: false, bookingId: 'bk_001', emoji: '🔧', bg: 'var(--orange-light)' },
    { id: 'n_002', type: 'alert',     title: 'Estimate Approval Required', body: 'Brake pad replacement found during inspection. Tap to review.',      time: '09:38 AM', read: false, bookingId: 'bk_001', emoji: '⚠️', bg: 'var(--amber-bg)' },
    { id: 'n_003', type: 'success',   title: 'Booking Confirmed!',         body: 'Comprehensive Service on 21 May at 11:00 AM confirmed.',             time: '08:05 AM', read: true,  bookingId: 'bk_001', emoji: '✅', bg: 'var(--green-bg)' },
    { id: 'n_004', type: 'reminder',  title: 'Service Reminder',           body: 'Your Honda City service is tomorrow at 11:00 AM at Kothrud Branch.', time: 'Yesterday', read: true,  bookingId: 'bk_001', emoji: '📅', bg: 'var(--blue-bg)' },
    { id: 'n_005', type: 'offer',     title: '15% Off Interior Detailing', body: 'Monsoon freshness special! Book with any service package.',          time: 'Yesterday', read: true,  bookingId: null,     emoji: '🎁', bg: 'var(--orange-light)' },
  ],

  /* ── Offers ───────────────────────────────────────────── */
  offers: [
    { id: 'off_001', title: 'Flat 20% OFF',      subtitle: 'On Ceramic Coating',    code: 'FLAG20',  validTill: '31 May 2026', gradient: 'linear-gradient(135deg,#F26522,#D4551A)', type: 'featured' },
    { id: 'off_002', title: 'Monsoon Special 20% OFF', subtitle: 'On All Services', code: 'MONSOON', validTill: '31 May 2026', gradient: 'linear-gradient(135deg,#1C1C2E,#2C2C3E)',  type: 'seasonal' },
  ],

  /* ── AI Conversation ──────────────────────────────────── */
  aiConversation: [
    { id: 'ai_1', role: 'assistant', content: 'Hello Rahul! 👋 I\'m the FLAG AI Assistant. I can help you with service recommendations, explain package inclusions, or answer any car-care question.\n\nHow can I help you today?', suggestions: ['My car has 30k km', 'Best package for me?', 'Compare packages'] },
    { id: 'ai_2', role: 'user', content: 'My car has crossed 30,000 km. Which package should I choose?' },
    { id: 'ai_3', role: 'assistant', content: 'At 30,000 km for a petrol Honda City, I\'d recommend:\n\n🎯 Comprehensive Service (₹2,999)\n\nIt covers engine oil, filter, 21-point check, brake inspection, battery health, tyre check and fluids — everything your car needs at this interval.\n\nConsider Standard (₹4,499) if you notice any pulling or steering drift, as it includes wheel alignment.', suggestions: ['Compare Packages', 'Book Comprehensive', 'Tell me more'] },
  ],

  /* ── UI State ─────────────────────────────────────────── */
  ui: {
    activeBookingTab: 'upcoming',
    activeCategoryId: null,
    notificationCount: 2,
    searchQuery: '',
    selectedBrand: null,
    selectedModel: null,
    selectedVariant: null,
  },

  /* ── Navigation ───────────────────────────────────────── */
  nav: {
    history: [],
    current: 'splash',
    params: {},
  },
};

/* ── Computed Helpers ─────────────────────────────────────── */
const Computed = {
  getVehicle(id) {
    return AppState.vehicles.find(v => v.id === id) || AppState.vehicles[0];
  },
  getPackage(id) {
    return AppState.packages.find(p => p.id === id);
  },
  getAddon(id) {
    return AppState.addons.find(a => a.id === id);
  },
  getBranch(id) {
    return AppState.branches.find(b => b.id === id);
  },
  getBooking(id) {
    return AppState.bookings.find(b => b.id === id);
  },
  draftVehicle() {
    return this.getVehicle(AppState.draft.vehicleId);
  },
  draftPackage() {
    return this.getPackage(AppState.draft.packageId);
  },
  draftAddons() {
    return AppState.draft.addonIds.map(id => this.getAddon(id)).filter(Boolean);
  },
  draftBranch() {
    return this.getBranch(AppState.draft.branchId);
  },
  draftSlot() {
    return AppState.slots.find(s => s.id === AppState.draft.slotId);
  },
  draftSubtotal() {
    const pkg = this.draftPackage();
    const base = pkg ? (pkg.basePrice || pkg.price || 0) : 0;
    const addonTotal = this.draftAddons().reduce((sum, a) => sum + a.price, 0);
    let sub = base + addonTotal;
    if (AppState.draft.couponApplied) sub -= AppState.draft.couponApplied.discountAmount;
    return Math.max(sub, 0);
  },
  subtotal() { return this.draftSubtotal(); },
  draftGST() { return Math.round(this.draftSubtotal() * 0.18); },
  gst() { return this.draftGST(); },
  draftTotal() { return this.draftSubtotal() + this.draftGST(); },
  total() { return this.draftTotal(); },
  formatINR(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  },
  formatINRDecimal(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  },
  unreadCount() {
    return AppState.notifications.filter(n => !n.read).length;
  },
  activeBooking() {
    return AppState.bookings.find(b => ['pending', 'confirmed', 'checked_in', 'in_progress', 'qc'].includes(b.status));
  },
  bookingsByTab(tab) {
    const map = {
      upcoming:  ['pending', 'confirmed'],
      active:    ['checked_in', 'in_progress', 'qc'],
      completed: ['completed'],
      cancelled: ['cancelled'],
    };
    const statuses = map[tab] || [];
    return AppState.bookings.filter(b => statuses.includes(b.status));
  },
  statusLabel(status) {
    const labels = { pending: 'Pending', confirmed: 'Confirmed', checked_in: 'Checked In', in_progress: 'In Progress', qc: 'QC Check', ready: 'Ready', completed: 'Completed', cancelled: 'Cancelled' };
    return labels[status] || status;
  },
  statusBadge(status) {
    const map = { pending: 'badge-amber', confirmed: 'badge-blue', checked_in: 'badge-blue', in_progress: 'badge-blue', qc: 'badge-purple', ready: 'badge-green', completed: 'badge-green', cancelled: 'badge-grey' };
    return map[status] || 'badge-grey';
  },
  paymentLabel(status) {
    const labels = { pending: 'Pay at Centre', paid: 'Paid', failed: 'Payment Failed', refunded: 'Refunded' };
    return labels[status] || status;
  },
};

/* ── State Mutations ──────────────────────────────────────── */
const Actions = {
  setDraftVehicle(id) { AppState.draft.vehicleId = id; },
  setDraftPackage(id) { AppState.draft.packageId = id; },
  setDraftBranch(id)  { AppState.draft.branchId = id; },
  setDraftDate(date, label) { AppState.draft.date = date; AppState.draft.dateLabel = label; },
  setDraftSlot(id)    { AppState.draft.slotId = id; },
  toggleAddon(id) {
    const idx = AppState.draft.addonIds.indexOf(id);
    if (idx === -1) AppState.draft.addonIds.push(id);
    else AppState.draft.addonIds.splice(idx, 1);
  },
  isAddonSelected(id) {
    return AppState.draft.addonIds.includes(id);
  },
  applyCoupon(code) {
    const coupons = {
      'FLAG20':  { type: 'percent', value: 20 },
      'FLAG500': { type: 'fixed',   value: 500 },
      'MONSOON': { type: 'percent', value: 15 },
      'COOL20':  { type: 'percent', value: 20 },
      'WELCOME': { type: 'percent', value: 10 },
    };
    const c = coupons[code.toUpperCase()];
    if (c) {
      const pkg = Computed.draftPackage();
      const base = pkg ? (pkg.basePrice || pkg.price || 0) : 0;
      const addons = Computed.draftAddons().reduce((s,a) => s+a.price, 0);
      const rawSub = base + addons;
      const discount = c.type === 'percent' ? Math.round(rawSub * c.value / 100) : Math.min(c.value, rawSub);
      AppState.draft.couponApplied = { code: code.toUpperCase(), ...c, discountAmount: discount };
      AppState.draft.couponError = null;
      return { success: true };
    }
    AppState.draft.couponApplied = null;
    return { success: false, error: 'Invalid or expired coupon code.' };
  },
  markNotificationRead(id) {
    const n = AppState.notifications.find(n => n.id === id);
    if (n) n.read = true;
  },
  confirmBooking() {
    const pkg = Computed.draftPackage();
    const sub = Computed.draftSubtotal();
    const gst = Computed.draftGST();
    const total = Computed.draftTotal();
    const ref = 'FAC-' + Date.now().toString().slice(-8);
    const newBooking = {
      id: 'bk_' + Date.now(),
      customerId: AppState.user.id,
      vehicleId: AppState.draft.vehicleId,
      packageId: AppState.draft.packageId,
      branchId: AppState.draft.branchId,
      addonIds: [...AppState.draft.addonIds],
      date: AppState.draft.date,
      slotId: AppState.draft.slotId,
      slotLabel: Computed.draftSlot()?.label || '',
      status: 'confirmed',
      paymentStatus: 'pending',
      paymentMethod: 'at_centre',
      subtotal: sub,
      gst: gst,
      total: total,
      bookingRef: ref,
      createdAt: new Date().toISOString(),
    };
    AppState.bookings.unshift(newBooking);
    AppState.lastConfirmedBooking = newBooking;

    // Generate notification
    AppState.notifications.unshift({
      id: 'n_new_' + Date.now(),
      type: 'success',
      title: 'Booking Confirmed!',
      body: pkg.name + ' on ' + AppState.draft.dateLabel + '. Ref: ' + ref,
      time: 'Just now',
      read: false,
      bookingId: newBooking.id,
      emoji: '✅',
      bg: 'var(--green-bg)',
    });

    // Reset draft (keep vehicle)
    const vehId = AppState.draft.vehicleId;
    AppState.draft = { vehicleId: vehId, packageId: 'pkg_001', addonIds: [], branchId: 'br_001', date: '2024-05-21', dateLabel: 'Tuesday, 21 May 2024', slotId: 'sl_2', couponCode: '', couponApplied: null, step: 1 };
    return newBooking;
  },
};
