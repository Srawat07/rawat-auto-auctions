import { useState, useEffect, useRef } from "react";

// ââ COMPLETE INDIAN CAR BRANDS ââ
const CAR_MAKES = [
  { name: "Maruti Suzuki", count: 24580 }, { name: "Hyundai", count: 18320 },
  { name: "Tata Motors", count: 15670 }, { name: "Mahindra", count: 12450 },
  { name: "Toyota", count: 8930 }, { name: "Kia", count: 6280 },
  { name: "Honda", count: 5640 }, { name: "MG Motor", count: 4560 },
  { name: "Skoda", count: 3890 }, { name: "Volkswagen", count: 3450 },
  { name: "Renault", count: 2980 }, { name: "Nissan", count: 2150 },
  { name: "Jeep", count: 1340 }, { name: "CitroÃ«n", count: 980 },
  { name: "BMW", count: 3410 }, { name: "Mercedes-Benz", count: 2980 },
  { name: "Audi", count: 2150 }, { name: "Volvo Cars", count: 1240 },
  { name: "Lexus", count: 680 }, { name: "Porsche", count: 320 },
  { name: "Jaguar", count: 540 }, { name: "Land Rover", count: 890 },
  { name: "Mini", count: 280 }, { name: "BYD", count: 1560 },
  { name: "Ferrari", count: 45 }, { name: "Lamborghini", count: 38 },
  { name: "Maserati", count: 52 }, { name: "Rolls Royce", count: 18 },
  { name: "Bentley", count: 24 }, { name: "Aston Martin", count: 15 },
  { name: "Force Motors", count: 870 }, { name: "Isuzu", count: 640 },
];

// ââ TWO-WHEELER BRANDS ââ
const TWOWHEELER_MAKES = [
  { name: "Hero MotoCorp", count: 18450 }, { name: "Honda 2W", count: 15680 },
  { name: "TVS Motor", count: 12340 }, { name: "Bajaj Auto", count: 10890 },
  { name: "Royal Enfield", count: 8760 }, { name: "Suzuki 2W", count: 5430 },
  { name: "Yamaha", count: 6120 }, { name: "KTM", count: 3240 },
  { name: "Kawasaki", count: 1280 }, { name: "Ducati", count: 420 },
  { name: "Harley-Davidson", count: 380 }, { name: "Triumph", count: 560 },
  { name: "BMW Motorrad", count: 340 }, { name: "Aprilia", count: 680 },
  { name: "Benelli", count: 290 }, { name: "Jawa/Yezdi", count: 1450 },
  { name: "Ather Energy", count: 2860 }, { name: "Ola Electric", count: 3120 },
  { name: "Revolt", count: 780 }, { name: "Ultraviolette", count: 180 },
  { name: "Husqvarna", count: 520 }, { name: "MV Agusta", count: 65 },
  { name: "Simple Energy", count: 340 }, { name: "Vida (Hero)", count: 920 },
];

// ââ COMMERCIAL VEHICLE BRANDS ââ
const COMMERCIAL_MAKES = [
  { name: "Tata Motors CV", count: 8450 }, { name: "Ashok Leyland", count: 6780 },
  { name: "Mahindra Trucks", count: 4320 }, { name: "Eicher Motors", count: 3890 },
  { name: "BharatBenz", count: 2560 }, { name: "SML Isuzu", count: 1240 },
  { name: "Force Motors CV", count: 980 }, { name: "Volvo Trucks", count: 670 },
  { name: "Scania", count: 340 }, { name: "MAN Trucks", count: 280 },
  { name: "AMW", count: 190 }, { name: "Piaggio CV", count: 1560 },
];

// ââ CONSTRUCTION & HEAVY EQUIPMENT BRANDS ââ
const CONSTRUCTION_MAKES = [
  { name: "JCB", count: 4560 }, { name: "Tata Hitachi", count: 3890 },
  { name: "Caterpillar (CAT)", count: 2340 }, { name: "Komatsu", count: 1890 },
  { name: "Volvo CE", count: 1560 }, { name: "SANY", count: 2120 },
  { name: "Hyundai CE", count: 1340 }, { name: "XCMG", count: 980 },
  { name: "Kobelco", count: 870 }, { name: "BEML", count: 760 },
  { name: "ACE (Action)", count: 1450 }, { name: "CASE Construction", count: 680 },
  { name: "Escorts Kubota", count: 1120 }, { name: "Doosan", count: 540 },
  { name: "L&T Construction", count: 420 }, { name: "Manitou", count: 310 },
  { name: "Bobcat", count: 680 }, { name: "Schwing Stetter", count: 450 },
  { name: "Zoomlion", count: 380 }, { name: "LiuGong", count: 290 },
  { name: "Bull Machines", count: 560 }, { name: "Ajax Engineering", count: 340 },
  { name: "Shantui", count: 220 }, { name: "Terex", count: 180 },
];

const BODY_STYLES = [
  { name: "SUV", count: 32450 }, { name: "Sedan", count: 28900 },
  { name: "Hatchback", count: 41200 }, { name: "Pickup Truck", count: 5600 },
  { name: "MUV/MPV", count: 8900 }, { name: "Convertible", count: 420 },
  { name: "Coupe", count: 680 }, { name: "Minivan", count: 3200 },
  { name: "Motorcycle", count: 52400 }, { name: "Scooter", count: 38600 },
  { name: "Tipper/Dumper", count: 4800 }, { name: "Excavator", count: 6200 },
  { name: "Backhoe Loader", count: 5400 }, { name: "Crane", count: 2100 },
  { name: "Bulldozer", count: 1800 }, { name: "Wheel Loader", count: 2400 },
];

const STATES = [
  { name: "Maharashtra", count: 22500 }, { name: "Delhi NCR", count: 28300 },
  { name: "Karnataka", count: 16200 }, { name: "Tamil Nadu", count: 14800 },
  { name: "Gujarat", count: 13400 }, { name: "Rajasthan", count: 11600 },
  { name: "Uttar Pradesh", count: 19700 }, { name: "Telangana", count: 12300 },
  { name: "West Bengal", count: 9900 }, { name: "Kerala", count: 8600 },
  { name: "Punjab", count: 9200 }, { name: "Madhya Pradesh", count: 7800 },
  { name: "Haryana", count: 10400 }, { name: "Bihar", count: 6200 },
  { name: "Odisha", count: 5400 }, { name: "Jharkhand", count: 4800 },
  { name: "Chhattisgarh", count: 3600 }, { name: "Assam", count: 3200 },
  { name: "Uttarakhand", count: 4100 }, { name: "Himachal Pradesh", count: 2800 },
];

const CITIES = [
  { name: "Mumbai", state: "MH", count: 9450 }, { name: "Delhi", state: "DL", count: 14300 },
  { name: "Bangalore", state: "KA", count: 8800 }, { name: "Chennai", state: "TN", count: 7500 },
  { name: "Hyderabad", state: "TS", count: 6900 }, { name: "Pune", state: "MH", count: 6400 },
  { name: "Ahmedabad", state: "GJ", count: 5800 }, { name: "Jaipur", state: "RJ", count: 4600 },
  { name: "Kolkata", state: "WB", count: 5200 }, { name: "Lucknow", state: "UP", count: 4100 },
  { name: "Chandigarh", state: "PB", count: 3800 }, { name: "Indore", state: "MP", count: 3200 },
  { name: "Nagpur", state: "MH", count: 2900 }, { name: "Surat", state: "GJ", count: 3400 },
  { name: "Coimbatore", state: "TN", count: 2600 },
];

const SAMPLE_CARS = [
  { id: 1, year: 2022, make: "Tata", model: "Harrier XZ+", location: "Mumbai, MH", bid: 985000, img: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", damage: "Front End", odo: "32,450 km", time: "2d 4h", fuel: "Diesel", transmission: "Automatic", category: "car" },
  { id: 2, year: 2023, make: "Hyundai", model: "Creta SX(O)", location: "Delhi, DL", bid: 1245000, img: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)", damage: "Side Impact", odo: "18,200 km", time: "1d 6h", fuel: "Petrol", transmission: "Automatic", category: "car" },
  { id: 3, year: 2021, make: "JCB", model: "3DX Backhoe Loader", location: "Jaipur, RJ", bid: 2250000, img: "linear-gradient(135deg, #8B6914 0%, #DAA520 50%, #B8860B 100%)", damage: "Engine Repair", odo: "4,200 hrs", time: "5h 20m", fuel: "Diesel", transmission: "Manual", category: "construction" },
  { id: 4, year: 2023, make: "Royal Enfield", model: "Classic 350", location: "Pune, MH", bid: 118000, img: "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)", damage: "Minor Dents", odo: "8,400 km", time: "3d 1h", fuel: "Petrol", transmission: "Manual", category: "2wheeler" },
  { id: 5, year: 2022, make: "Tata Hitachi", model: "EX 200 Excavator", location: "Ahmedabad, GJ", bid: 3850000, img: "linear-gradient(135deg, #1f1c2c 0%, #928DAB 100%)", damage: "Hydraulic", odo: "6,800 hrs", time: "14h 30m", fuel: "Diesel", transmission: "Hydraulic", category: "construction" },
  { id: 6, year: 2024, make: "Ashok Leyland", model: "BOSS 1920 HB Truck", location: "Chennai, TN", bid: 2180000, img: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)", damage: "Accident", odo: "42,000 km", time: "6d 2h", fuel: "Diesel", transmission: "Manual", category: "commercial" },
  { id: 7, year: 2023, make: "CAT", model: "320D3 Excavator", location: "Nagpur, MH", bid: 4500000, img: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #434343 100%)", damage: "Track Wear", odo: "3,100 hrs", time: "1d 8h", fuel: "Diesel", transmission: "Hydraulic", category: "construction" },
  { id: 8, year: 2022, make: "Bajaj", model: "Pulsar NS200", location: "Lucknow, UP", bid: 72000, img: "linear-gradient(135deg, #c31432 0%, #240b36 100%)", damage: "Front Fork", odo: "22,000 km", time: "4d 5h", fuel: "Petrol", transmission: "Manual", category: "2wheeler" },
  { id: 9, year: 2023, make: "SANY", model: "SY210C Excavator", location: "Indore, MP", bid: 3200000, img: "linear-gradient(135deg, #614385 0%, #516395 100%)", damage: "Boom Crack", odo: "2,400 hrs", time: "2d 11h", fuel: "Diesel", transmission: "Hydraulic", category: "construction" },
];

const UPCOMING_AUCTIONS = [
  { id: 1, city: "Mumbai", state: "MH", lanes: "A,B,C", cars: 342, countdown: "11h 42m", types: "Cars, 2W, Heavy" },
  { id: 2, city: "Delhi NCR", state: "DL", lanes: "A,B,C,D", cars: 518, countdown: "1d 3h", types: "Cars, Commercial, Equipment" },
  { id: 3, city: "Jaipur", state: "RJ", lanes: "A,B", cars: 276, countdown: "2d 8h", types: "Construction, Trucks, Cars" },
  { id: 4, city: "Bangalore", state: "KA", lanes: "A,B,C", cars: 184, countdown: "3d 1h", types: "Cars, 2-Wheelers, SUVs" },
  { id: 5, city: "Ahmedabad", state: "GJ", lanes: "A,B", cars: 220, countdown: "4d 6h", types: "Heavy Equipment, Commercial" },
];

const FAQ_DATA = [
  { q: "What is Rawat Auto Auctions and how does it work?", a: "Rawat Auto Auctions is India's premier online auction and reselling marketplace for cars, two-wheelers, commercial vehicles, and construction/heavy equipment. Founded by Rajiv Rawat, an experienced mechanical engineer with international exposure in construction and heavy machinery, we bring decades of hands-on industry knowledge to every transaction. Register for free, browse 2,00,000+ vehicles and equipment, place bids in live auctions or use Buy It Now â all 100% online with pan-India delivery." },
  { q: "Do I need a dealer's license to bid?", a: "No dealer license required! Rawat Auto Auctions is open to the general public â individuals, resellers, workshop owners, contractors, and fleet operators. Whether you're buying a hatchback, a Royal Enfield, a JCB backhoe, or a fleet of Ashok Leyland trucks, you can register and start bidding immediately. We handle all RTO paperwork and RC transfer." },
  { q: "What types of vehicles and equipment are available?", a: "We list passenger cars (all Indian and international brands), SUVs, two-wheelers (motorcycles, scooters, electric), commercial vehicles (trucks, buses, tippers), three-wheelers, and a full range of construction heavy equipment â excavators, backhoe loaders, cranes, bulldozers, wheel loaders, compactors, and more from brands like JCB, CAT, Tata Hitachi, Komatsu, SANY, and Volvo CE. Inventory includes accident-damaged, flood-damaged, insurance salvage, bank repossessed, fleet retired, and clean-title used vehicles." },
  { q: "How does bidding work?", a: "Three ways to buy: (1) Live Bidding â join real-time auctions and compete with other bidders. (2) Pre-Bidding â place your maximum bid before the auction starts. (3) Buy It Now â skip the auction and purchase instantly at a fixed price. All transactions are secured with escrow payment protection." },
  { q: "How is delivery handled across India?", a: "We offer pan-India delivery through our logistics network. Cars and 2-wheelers via flatbed carriers (5-7 days standard, 2-3 days express). Heavy equipment and commercial vehicles via low-bed trailers with specialized heavy-haul logistics. All shipments include full transit insurance. Track your delivery in real-time through your dashboard." },
  { q: "What about RTO transfer and documentation?", a: "We handle end-to-end documentation including RC transfer, NOC from originating state, insurance transfer assistance, fitness certificate renewal for commercial vehicles, and hypothecation removal if applicable. For heavy equipment, we assist with registration transfer and all compliance paperwork. Additional charges apply for inter-state transfers." },
];

function formatINR(num) {
  if (num >= 10000000) return `â¹${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `â¹${(num / 100000).toFixed(2)} L`;
  return `â¹${num.toLocaleString("en-IN")}`;
}

function CountUp({ target, prefix = "", suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { start = target; clearInterval(timer); }
          setVal(start);
        }, 16);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{val.toLocaleString("en-IN")}{suffix}</span>;
}

export default function RawatAutoAuctions() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginTab, setLoginTab] = useState("login");
  const [scrolled, setScrolled] = useState(false);
  const [activeBrandTab, setActiveBrandTab] = useState("cars");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const vehicleTypes = [
    { key: "all", label: "All", icon: "ð¥" },
    { key: "car", label: "Cars", icon: "ð" },
    { key: "2wheeler", label: "2-Wheelers", icon: "ðï¸" },
    { key: "commercial", label: "Commercial", icon: "ð" },
    { key: "construction", label: "Heavy Equipment", icon: "ðï¸" },
  ];

  const filteredCars = activeTab === "all" ? SAMPLE_CARS : SAMPLE_CARS.filter(c => c.category === activeTab);

  const brandTabs = [
    { key: "cars", label: "Cars & SUVs", data: CAR_MAKES },
    { key: "2wheelers", label: "Two-Wheelers", data: TWOWHEELER_MAKES },
    { key: "commercial", label: "Commercial Vehicles", data: COMMERCIAL_MAKES },
    { key: "construction", label: "Construction & Heavy Equipment", data: CONSTRUCTION_MAKES },
  ];

  const currentBrands = brandTabs.find(t => t.key === activeBrandTab)?.data || CAR_MAKES;

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#07080A", color: "#E8E6E1", minHeight: "100vh", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0d0f13; }
        ::-webkit-scrollbar-thumb { background: #F5A623; border-radius: 3px; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { 0%,100% { box-shadow: 0 0 20px rgba(245,166,35,0.15); } 50% { box-shadow: 0 0 40px rgba(245,166,35,0.3); } }
        .nav-link { color: #9B9A97; text-decoration: none; font-size: 14px; font-weight: 500; padding: 8px 14px; border-radius: 8px; transition: all 0.3s; }
        .nav-link:hover { color: #F5A623; background: rgba(245,166,35,0.08); }
        .btn-primary { background: linear-gradient(135deg, #F5A623 0%, #E8930C 100%); color: #07080A; border: none; padding: 12px 28px; border-radius: 10px; font-weight: 700; font-size: 15px; cursor: pointer; transition: all 0.3s; font-family: 'Outfit', sans-serif; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(245,166,35,0.35); }
        .btn-outline { background: transparent; color: #F5A623; border: 1.5px solid rgba(245,166,35,0.4); padding: 12px 28px; border-radius: 10px; font-weight: 600; font-size: 15px; cursor: pointer; transition: all 0.3s; font-family: 'Outfit', sans-serif; }
        .btn-outline:hover { border-color: #F5A623; background: rgba(245,166,35,0.08); }
        .card { background: #0F1117; border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; overflow: hidden; transition: all 0.4s cubic-bezier(0.175,0.885,0.32,1.275); }
        .card:hover { transform: translateY(-4px); border-color: rgba(245,166,35,0.2); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .section-title { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 800; line-height: 1.15; }
        .section-subtitle { color: #6B6A67; font-size: 16px; margin-top: 10px; }
        .tag { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .grid-scroll { display: flex; gap: 20px; overflow-x: auto; padding-bottom: 16px; scroll-snap-type: x mandatory; }
        .grid-scroll > * { scroll-snap-align: start; flex-shrink: 0; }
        .input-field { width: 100%; padding: 14px 16px; background: #16181E; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; color: #E8E6E1; font-size: 15px; font-family: 'Outfit', sans-serif; outline: none; transition: border-color 0.3s; }
        .input-field:focus { border-color: #F5A623; }
        .input-field::placeholder { color: #555; }
        .live-dot { width: 8px; height: 8px; border-radius: 50%; background: #00D26A; animation: pulse 1.5s infinite; display: inline-block; }
        .tab-btn { padding: 10px 20px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); background: transparent; color: #6B6A67; cursor: pointer; font-size: 13px; font-weight: 600; font-family: 'Outfit', sans-serif; transition: all 0.3s; white-space: nowrap; }
        .tab-btn.active { background: rgba(245,166,35,0.12); color: #F5A623; border-color: rgba(245,166,35,0.3); }
      `}</style>

      {/* HEADER */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(7,8,10,0.92)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none", transition: "all 0.4s" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #F5A623, #E8930C)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#07080A" }}>R</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: -0.5, lineHeight: 1.1 }}>RAWAT AUTO</div>
              <div style={{ fontSize: 10, color: "#F5A623", fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>Auctions & Equipment</div>
            </div>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <a className="nav-link" href="#" style={{ color: "#F5A623" }}>Home</a>
            <a className="nav-link" href="#">Vehicle Finder</a>
            <a className="nav-link" href="#">Live Auctions</a>
            <a className="nav-link" href="#">Heavy Equipment</a>
            <a className="nav-link" href="#">Sell</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button className="btn-outline" onClick={() => { setShowLoginModal(true); setLoginTab("login"); }} style={{ padding: "8px 20px", fontSize: 13 }}>Login</button>
            <button className="btn-primary" onClick={() => { setShowLoginModal(true); setLoginTab("register"); }} style={{ padding: "8px 20px", fontSize: 13 }}>Register Free</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,166,35,0.08) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "140px 24px 80px", width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div style={{ animation: "slideUp 0.8s ease" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.15)", borderRadius: 30, padding: "7px 16px", marginBottom: 28 }}>
                <span className="live-dot" />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#F5A623" }}>Live Auctions Running Now</span>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 54, fontWeight: 800, lineHeight: 1.08, marginBottom: 24 }}>
                India's Largest<br />
                <span style={{ color: "#F5A623" }}>Auto & Equipment</span><br />
                Auction Platform
              </h1>
              <p style={{ fontSize: 17, color: "#9B9A97", lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
                2,00,000+ cars, two-wheelers, commercial vehicles & construction heavy equipment. 200+ weekly live auctions. No dealer license needed.
              </p>
              <div style={{ display: "flex", gap: 14, marginBottom: 40 }}>
                <button className="btn-primary" style={{ padding: "16px 36px", fontSize: 16 }}>Browse All Inventory</button>
                <button className="btn-outline" style={{ padding: "16px 36px", fontSize: 16 }}>How It Works</button>
              </div>
              {/* Search */}
              <div style={{ background: "#0F1117", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", padding: 6, animation: "glow 3s ease-in-out infinite" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
                  {vehicleTypes.map((t) => (
                    <button key={t.key} onClick={() => setActiveTab(t.key)} style={{ padding: "8px 14px", borderRadius: 8, border: "none", background: activeTab === t.key ? "rgba(245,166,35,0.12)" : "transparent", color: activeTab === t.key ? "#F5A623" : "#6B6A67", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "'Outfit', sans-serif", transition: "all 0.3s", whiteSpace: "nowrap" }}>
                      {t.icon} {t.label}
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "0 16px" }}>
                    <span style={{ fontSize: 18 }}>ð</span>
                    <input type="text" placeholder="Search by make, model, or equipment type..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ flex: 1, background: "transparent", border: "none", color: "#E8E6E1", fontSize: 15, outline: "none", fontFamily: "'Outfit', sans-serif" }} />
                  </div>
                  <button className="btn-primary" style={{ borderRadius: 10, padding: "12px 24px" }}>Search</button>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div style={{ animation: "slideUp 0.8s ease 0.2s both" }}>
              <div style={{ background: "linear-gradient(145deg, #0F1117 0%, #13151B 100%)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.05)", padding: 36 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28 }}>Platform Highlights</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[{ label: "Total Listed", value: 200000 }, { label: "Weekly Auctions", value: 240 }, { label: "Added Today", value: 12500 }, { label: "Active Bidders", value: 45200 }].map((s, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.02)", borderRadius: 14, padding: 18, border: "1px solid rgba(255,255,255,0.04)" }}>
                      <div style={{ fontSize: 26, fontWeight: 800, color: "#F5A623" }}><CountUp target={s.value} suffix="+" /></div>
                      <div style={{ fontSize: 12, color: "#6B6A67", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 16 }}>
                  {[{ icon: "ð", label: "Cars & SUVs", num: "85,000+" }, { icon: "ðï¸", label: "Two-Wheelers", num: "52,000+" }, { icon: "ð", label: "Commercial", num: "28,000+" }, { icon: "ðï¸", label: "Heavy Equipment", num: "35,000+" }].map((c, i) => (
                    <div key={i} style={{ padding: "10px 14px", background: "rgba(245,166,35,0.04)", borderRadius: 10, border: "1px solid rgba(245,166,35,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 20 }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#F5A623" }}>{c.num}</div>
                        <div style={{ fontSize: 11, color: "#6B6A67" }}>{c.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING AUCTIONS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
          <div><div className="section-title">Upcoming Auctions</div><div className="section-subtitle">Live virtual auctions â cars, bikes, trucks & heavy equipment</div></div>
          <button className="btn-outline" style={{ padding: "10px 20px", fontSize: 13 }}>View All â</button>
        </div>
        <div className="grid-scroll">
          {UPCOMING_AUCTIONS.map((a) => (
            <div key={a.id} className="card" style={{ width: 290, cursor: "pointer" }}>
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <span className="tag" style={{ background: "rgba(0,210,106,0.1)", color: "#00D26A" }}><span className="live-dot" style={{ width: 6, height: 6 }} /> Virtual</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#F5A623" }}>{a.countdown}</span>
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{a.city} Auction</h4>
                <p style={{ fontSize: 13, color: "#6B6A67", marginBottom: 10 }}>{a.state} Â· Lanes {a.lanes} Â· {a.cars} Lots</p>
                <span className="tag" style={{ background: "rgba(245,166,35,0.08)", color: "#F5A623", fontSize: 11 }}>{a.types}</span>
              </div>
              <div style={{ height: 3, background: "linear-gradient(90deg, #F5A623, #E8930C, transparent)" }} />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ marginBottom: 24 }}><div className="section-title">Featured Listings</div><div className="section-subtitle">Cars, bikes, trucks & heavy equipment â all in one place</div></div>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {vehicleTypes.map((t) => (<button key={t.key} onClick={() => setActiveTab(t.key)} className={`tab-btn ${activeTab === t.key ? "active" : ""}`}>{t.icon} {t.label}</button>))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {filteredCars.map((car) => (
            <div key={car.id} className="card" style={{ cursor: "pointer" }}>
              <div style={{ height: 170, background: car.img, position: "relative" }}>
                <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
                  <span className="tag" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)", color: "#fff" }}>{car.time}</span>
                  <span className="tag" style={{ background: car.category === "construction" ? "rgba(218,165,32,0.9)" : car.category === "2wheeler" ? "rgba(76,161,175,0.9)" : car.category === "commercial" ? "rgba(113,178,128,0.9)" : "rgba(245,166,35,0.9)", color: "#07080A", fontSize: 10, textTransform: "uppercase" }}>
                    {car.category === "construction" ? "Equipment" : car.category === "2wheeler" ? "2-Wheeler" : car.category === "commercial" ? "Commercial" : "Car"}
                  </span>
                </div>
                <div style={{ position: "absolute", top: 12, right: 12 }}><span className="tag" style={{ background: "rgba(220,60,60,0.85)", color: "#fff" }}>{car.damage}</span></div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(transparent, rgba(15,17,23,0.95))" }} />
              </div>
              <div style={{ padding: 16 }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{car.year} {car.make} {car.model}</h4>
                <p style={{ fontSize: 13, color: "#6B6A67", marginBottom: 12 }}>ð {car.location}</p>
                <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                  {[car.odo, car.fuel, car.transmission].map((t, i) => (<span key={i} className="tag" style={{ background: "rgba(255,255,255,0.04)", color: "#9B9A97", fontSize: 11 }}>{t}</span>))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#6B6A67", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Current Bid</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#F5A623" }}>{formatINR(car.bid)}</div>
                  </div>
                  <button className="btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>Bid Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BROWSE BY BRAND */}
      <section style={{ background: "#0A0C0F", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-title" style={{ marginBottom: 24 }}>Browse by Brand</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
            {brandTabs.map((t) => (<button key={t.key} onClick={() => setActiveBrandTab(t.key)} className={`tab-btn ${activeBrandTab === t.key ? "active" : ""}`}>{t.label} ({t.data.length})</button>))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 10 }}>
            {currentBrands.map((m) => (
              <div key={m.name} className="card" style={{ padding: "14px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#F5A623" }}>{m.count.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY STYLES */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div className="section-title" style={{ marginBottom: 36 }}>Browse by Type</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {BODY_STYLES.map((b) => (
            <div key={b.name} className="card" style={{ padding: "16px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>{b.name}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#F5A623" }}>{b.count.toLocaleString("en-IN")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO BID */}
      <section style={{ background: "linear-gradient(180deg, #0A0C0F 0%, #07080A 100%)", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}><div className="section-title">How to Buy at Auction</div><div className="section-subtitle">Three powerful ways to win vehicles & equipment</div></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "â¡", title: "Live Bidding", desc: "Join real-time auctions running daily across India. Compete live for cars, bikes, trucks, JCBs, excavators â everything in one platform." },
              { icon: "ð", title: "Pre-Bidding", desc: "Place your maximum bid before the auction. Our system bids on your behalf during the live event. Perfect for busy contractors and dealers." },
              { icon: "ð", title: "Buy It Now", desc: "Skip the auction entirely. Purchase vehicles and equipment instantly at fixed prices. No waiting, no competing â secured immediately." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0F1117", borderRadius: 20, padding: 32, border: "1px solid rgba(255,255,255,0.05)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 100, height: 3, background: "linear-gradient(90deg, transparent, #F5A623, transparent)" }} />
                <div style={{ fontSize: 48, marginBottom: 18 }}>{item.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#6B6A67", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}><div className="section-title">Start in 3 Simple Steps</div></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { step: "01", title: "Register Free", desc: "Create your account in under 2 minutes. Aadhaar/PAN verification. Open to individuals, dealers, contractors & fleet operators." },
            { step: "02", title: "Find & Bid", desc: "Search 2,00,000+ vehicles and equipment. Filter by make, model, city, damage type, price, and category â cars to excavators." },
            { step: "03", title: "Win & Receive", desc: "Secure payment via escrow. RC transfer, RTO paperwork, fitness certificates handled. Pan-India delivery including heavy-haul." },
          ].map((s, i) => (
            <div key={i} style={{ position: "relative", padding: 32 }}>
              <div style={{ fontSize: 72, fontWeight: 900, color: "rgba(245,166,35,0.06)", position: "absolute", top: 0, right: 16 }}>{s.step}</div>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #F5A623, #E8930C)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 20, color: "#07080A", marginBottom: 20 }}>{s.step}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#6B6A67", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATES */}
      <section style={{ background: "#0A0C0F", padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-title" style={{ marginBottom: 36 }}>Auctions by State</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {STATES.map((s) => (
              <div key={s.name} className="card" style={{ padding: "14px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{s.name}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#F5A623" }}>{s.count.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div className="section-title" style={{ marginBottom: 36 }}>Auctions by City</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
          {CITIES.map((c) => (
            <div key={c.name} className="card" style={{ padding: "16px 20px", cursor: "pointer", textAlign: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "#6B6A67" }}>{c.state}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#F5A623", marginTop: 6 }}>{c.count.toLocaleString("en-IN")}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0A0C0F", padding: "80px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}><div className="section-title">Frequently Asked Questions</div></div>
          {FAQ_DATA.map((faq, i) => (
            <div key={i} style={{ background: "#0F1117", borderRadius: 14, marginBottom: 10, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", padding: "20px 24px", background: "transparent", border: "none", color: "#E8E6E1", fontSize: 16, fontWeight: 600, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Outfit', sans-serif" }}>
                {faq.q}
                <span style={{ fontSize: 20, color: "#F5A623", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "0.3s", flexShrink: 0 }}>+</span>
              </button>
              {openFaq === i && <div style={{ padding: "0 24px 20px", fontSize: 14, color: "#9B9A97", lineHeight: 1.8, animation: "slideUp 0.3s ease" }}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT RAJIV RAWAT */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ width: "100%", aspectRatio: "1", borderRadius: 24, background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(245,166,35,0.15)" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 80, marginBottom: 12 }}>ð§</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#F5A623" }}>Rajiv Rawat</div>
                <div style={{ fontSize: 13, color: "#9B9A97", marginTop: 4 }}>Founder & Owner</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 14, color: "#F5A623", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>About the Founder</div>
            <div className="section-title" style={{ marginBottom: 20 }}>Built by an Engineer.<br />Backed by Global Experience.</div>
            <p style={{ fontSize: 16, color: "#9B9A97", lineHeight: 1.9, marginBottom: 20 }}>
              Rajiv Rawat is an experienced mechanical engineer who brings decades of hands-on expertise in construction, heavy machinery, and automotive reselling. Having worked extensively with Copper Constructions and gained significant international exposure in Dubai collaborating with leading Korean construction and engineering companies, Rajiv understands the machinery and vehicle business inside-out â from engine bays to excavator booms.
            </p>
            <p style={{ fontSize: 16, color: "#9B9A97", lineHeight: 1.9, marginBottom: 28 }}>
              This deep mechanical knowledge and global perspective is the foundation of Rawat Auto Auctions. Unlike typical auction platforms, every vehicle and piece of equipment listed is evaluated with an engineer's eye for quality, repairability, and true value. Whether you're buying a family car, a fleet of commercial trucks, or a JCB backhoe for your next construction project â you're backed by someone who has built things with his own hands.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {[{ num: "20+", label: "Years Experience" }, { num: "ð", label: "India & Dubai" }, { num: "ð§", label: "Mech. Engineer" }, { num: "ð°ð·", label: "Korean Co. Exposure" }].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#F5A623" }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: "#6B6A67", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "linear-gradient(135deg, #0F1117 0%, #13151B 100%)", borderTop: "1px solid rgba(245,166,35,0.1)", borderBottom: "1px solid rgba(245,166,35,0.1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px", display: "flex", justifyContent: "space-around", textAlign: "center" }}>
          {[{ num: 200000, label: "Vehicles & Equipment", suffix: "+" }, { num: 240, label: "Weekly Auctions", suffix: "+" }, { num: 32, label: "Car Brands", suffix: "" }, { num: 24, label: "2-Wheeler Brands", suffix: "" }, { num: 24, label: "Equipment Brands", suffix: "" }, { num: 20, label: "States Covered", suffix: "" }].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#F5A623" }}><CountUp target={s.num} suffix={s.suffix} /></div>
              <div style={{ fontSize: 12, color: "#6B6A67", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(245,166,35,0.06) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "80px 24px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="section-title" style={{ marginBottom: 16 }}>Join Rawat Auto Auctions</div>
          <p style={{ fontSize: 16, color: "#6B6A67", lineHeight: 1.7, marginBottom: 36 }}>Cars, two-wheelers, commercial vehicles & construction heavy equipment. Bid in live auctions. Pan-India delivery.</p>
          <button className="btn-primary" onClick={() => { setShowLoginModal(true); setLoginTab("register"); }} style={{ padding: "18px 48px", fontSize: 17 }}>Register for Free â</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#07080A", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "60px 24px 30px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg, #F5A623, #E8930C)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#07080A" }}>R</div>
                <div><div style={{ fontWeight: 800, fontSize: 15 }}>RAWAT AUTO</div><div style={{ fontSize: 9, color: "#F5A623", fontWeight: 600, letterSpacing: 2 }}>AUCTIONS & EQUIPMENT</div></div>
              </div>
              <p style={{ fontSize: 13, color: "#6B6A67", lineHeight: 1.8, maxWidth: 300 }}>India's premier online auction marketplace for cars, two-wheelers, commercial vehicles, and construction heavy equipment. Founded by Rajiv Rawat â mechanical engineer with 20+ years of experience and international exposure in Dubai with Korean companies.</p>
              <div style={{ marginTop: 16 }}>
                <div style={{ fontSize: 13, color: "#9B9A97", fontWeight: 600 }}>Customer Support</div>
                <div style={{ fontSize: 13, color: "#6B6A67" }}>MonâSat Â· 9 AM â 7 PM IST</div>
                <div style={{ fontSize: 14, color: "#F5A623", fontWeight: 600, marginTop: 4 }}>+91 98XXX XXXXX</div>
              </div>
            </div>
            {[
              { title: "Auctions", links: ["Today's Auctions", "Calendar", "Locations", "Live Auctions", "Sell Vehicle"] },
              { title: "Inventory", links: ["Cars & SUVs", "Two-Wheelers", "Commercial Vehicles", "Heavy Equipment", "Buy It Now"] },
              { title: "Support", links: ["Getting Started", "Video Guides", "FAQ", "Contact Us", "Fee Calculator"] },
              { title: "Company", links: ["About Rajiv Rawat", "Reviews", "Blog", "Careers", "Terms & Conditions"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>{col.title}</h4>
                {col.links.map((l) => (<a key={l} href="#" style={{ display: "block", fontSize: 13, color: "#6B6A67", textDecoration: "none", marginBottom: 10, transition: "color 0.3s" }} onMouseEnter={e => e.target.style.color = "#F5A623"} onMouseLeave={e => e.target.style.color = "#6B6A67"}>{l}</a>))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 12, color: "#444" }}>Â© 2026 Rawat Auto Auctions. All Rights Reserved. Founded by Rajiv Rawat.</div>
            <div style={{ display: "flex", gap: 16 }}>{["Privacy Policy", "Terms of Service"].map((l) => (<a key={l} href="#" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>{l}</a>))}</div>
          </div>
        </div>
      </footer>

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setShowLoginModal(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#0F1117", borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)", width: 420, maxHeight: "90vh", overflow: "auto", animation: "slideUp 0.3s ease" }}>
            <div style={{ padding: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700 }}>{loginTab === "login" ? "Welcome Back" : "Create Account"}</h2>
                <button onClick={() => setShowLoginModal(false)} style={{ background: "transparent", border: "none", color: "#6B6A67", fontSize: 24, cursor: "pointer" }}>Ã</button>
              </div>
              <div style={{ display: "flex", gap: 4, background: "#16181E", borderRadius: 10, padding: 4, marginBottom: 24 }}>
                {["login", "register"].map((t) => (<button key={t} onClick={() => setLoginTab(t)} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", background: loginTab === t ? "rgba(245,166,35,0.12)" : "transparent", color: loginTab === t ? "#F5A623" : "#6B6A67", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "'Outfit', sans-serif", textTransform: "capitalize" }}>{t}</button>))}
              </div>
              {loginTab === "register" && (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}><input className="input-field" placeholder="First Name" /><input className="input-field" placeholder="Last Name" /></div>)}
              <input className="input-field" placeholder="Email Address" style={{ marginBottom: 12 }} />
              {loginTab === "register" && <input className="input-field" placeholder="Phone (+91)" style={{ marginBottom: 12 }} />}
              <input className="input-field" placeholder="Password" type="password" style={{ marginBottom: 12 }} />
              {loginTab === "register" && (
                <>
                  <select className="input-field" style={{ marginBottom: 12, appearance: "none" }}><option value="">I am a...</option><option>Individual Buyer</option><option>Dealer / Reseller</option><option>Contractor / Builder</option><option>Fleet Operator</option><option>Workshop Owner</option></select>
                  <select className="input-field" style={{ marginBottom: 12, appearance: "none" }}><option value="">Select State</option>{STATES.map(s => <option key={s.name}>{s.name}</option>)}</select>
                  <input className="input-field" placeholder="PIN Code" style={{ marginBottom: 12 }} />
                </>
              )}
              <button className="btn-primary" style={{ width: "100%", padding: "16px", fontSize: 16, marginTop: 8 }}>{loginTab === "login" ? "Log In" : "Register for Free"}</button>
              {loginTab === "login" && <div style={{ textAlign: "center", marginTop: 16 }}><a href="#" style={{ fontSize: 13, color: "#F5A623", textDecoration: "none" }}>Forgot Password?</a></div>}
              <div style={{ textAlign: "center", marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ fontSize: 12, color: "#6B6A67", marginBottom: 12 }}>Or continue with</div>
                <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                  {["Google", "Phone OTP"].map((p) => (<button key={p} style={{ padding: "10px 24px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", background: "#16181E", color: "#9B9A97", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>{p}</button>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
