import { useState } from "react";

const TABS = ["📅 May Events", "🍽️ Food & Basics", "👶 Kids & Families", "🏘️ Neighborhoods"];

const WEEKLY_FOOD = [
  { day: "Monday", items: [ { t: "12:30–2pm", n: "Bounty & Soul Farmers Market Truck", l: "Beacon Village, Swannanoa", link: "https://www.bountyandsoul.org/" } ] },
  { day: "Tuesday", items: [ { t: "3–5pm", n: "Food Connection Truck", l: "Food Lion, Fairview", link: "https://www.foodconnection.org/" }, { t: "3:30–5pm", n: "Bounty & Soul Produce", l: "UNETE, 871 Riverside Dr", link: "https://www.bountyandsoul.org/" } ] },
  { day: "Wednesday", items: [ { t: "10am–1pm", n: "Welcome Table", l: "Haywood St. Congregation", link: "https://www.haywoodstreet.org/" }, { t: "5–6pm", n: "Food Connection", l: "Bell UMC, Leicester", link: "https://www.foodconnection.org/" } ] },
  { day: "Thursday", items: [ { t: "3–5pm", n: "Food Connection Truck", l: "Francis Asbury Methodist", link: "https://www.foodconnection.org/" }, { t: "3:30–5:30pm", n: "Bounty & Soul", l: "BiLo, Black Mountain", link: "https://www.bountyandsoul.org/" } ] },
  { day: "Friday", items: [ { t: "11am–1pm", n: "Food Connection Truck", l: "Victory Fellowship", link: "https://www.foodconnection.org/" }, { t: "1:30–3pm", n: "Bounty & Soul Produce", l: "Southside Community Ctr", link: "https://www.bountyandsoul.org/" } ] },
  { day: "Saturday", items: [ { t: "10–11:30am", n: "Bounty & Soul + Food Connection", l: "Art Space Charter", link: "https://www.bountyandsoul.org/" } ] },
];

const WEEKLY_LIBRARY = [
  { day: "Mon", fullDay: "Monday", items: [ { n: "Baby Story Time", t: "10:30am", l: "Pack Memorial Library" }, { n: "Baby Play Time", t: "11am", l: "Pack Memorial Library" } ] },
  { day: "Tue", fullDay: "Tuesday", items: [ { n: "Toddler Story Time", t: "9:30am", l: "Oakley/South Asheville" }, { n: "Tiny Tots Yoga 🧘", t: "10am", l: "North Asheville" }, { n: "Baby Story Time", t: "10:30am", l: "Swannanoa" }, { n: "Toddler Story Time", t: "10:30am", l: "Pack Memorial" }, { n: "Preschool Story Time", t: "10:30am", l: "Leicester" }, { n: "Preschool Story Time 🇪🇸", t: "3:30pm", l: "Enka-Candler" } ] },
  { day: "Wed", fullDay: "Wednesday", items: [ { n: "Puppet Playtime 🇪🇸", t: "9am", l: "East Asheville" }, { n: "Baby Play Time", t: "10:30am", l: "Fairview" }, { n: "Baby Play Time", t: "10:30am", l: "North Asheville" }, { n: "Preschool Storytime", t: "10:30am", l: "South Buncombe/Skyland" }, { n: "Toddler Storytime", t: "10:30am", l: "East Asheville" }, { n: "Hora del Cuento 🇪🇸", t: "10:30am", l: "Enka-Candler" }, { n: "Family Story Time", t: "10:30am", l: "Black Mountain" }, { n: "Preschool Story Time", t: "10:30am", l: "Weaverville" }, { n: "Tiny Tots Yoga 🧘", t: "11am", l: "Swannanoa" }, { n: "Baby Playtime", t: "11am", l: "Leicester" } ] },
  { day: "Thu", fullDay: "Thursday", items: [ { n: "Baby Story Time", t: "9:30am", l: "Oakley/South Asheville" }, { n: "Family Storytime", t: "10:30am", l: "Swannanoa" }, { n: "Toddler Story Time", t: "10:30am", l: "Leicester" }, { n: "Baby Story Time", t: "10:30am", l: "Black Mountain" }, { n: "Preschool Story Time", t: "10:30am", l: "Fairview" }, { n: "Baby Story Time", t: "3:30pm", l: "West Asheville" } ] },
  { day: "Fri", fullDay: "Friday", items: [ { n: "Toddler Story Time", t: "9:30am", l: "Fairview" }, { n: "Baby Play Time", t: "10:30am", l: "Enka-Candler" }, { n: "Family Storytime", t: "10:30am", l: "South Buncombe/Skyland" }, { n: "Toddler Story Time", t: "10:30am", l: "North Asheville" }, { n: "Expectant & New Parents", t: "3pm", l: "Weaverville" } ] },
  { day: "Sat", fullDay: "Saturday", items: [ { n: "Family Storytime", t: "9:30am", l: "East Asheville" }, { n: "LEGO Club", t: "10am", l: "Oakley/South Asheville" }, { n: "Family Story Time", t: "10:30am", l: "West Asheville" }, { n: "Hora del cuento 🇪🇸", t: "10:30am", l: "North Asheville" } ] },
];

const FILTERS = [
  { label: "All", key: "all", emoji: "✨" },
  { label: "Free", key: "free", emoji: "🆓" },
  { label: "Kids", key: "kids", emoji: "👶" },
  { label: "Food", key: "food", emoji: "🌽" },
  { label: "Bilingual", key: "bilingual", emoji: "🇪🇸" },
  { label: "Sensory", key: "sensory", emoji: "♿" },
];

const linkStyle = "underline decoration-dotted underline-offset-2 hover:decoration-solid";

const MANNA_URL = "https://www.mannafoodbank.org/wnc-mobile-market-calendar/";
const YMCA_URL = "https://www.ymcawnc.org/programs/community/food-programs";
const LIB_URL = "https://buncombe.librarycalendar.com/events/upcoming?age_groups%5B1%5D=1&age_groups%5B2%5D=2&age_groups%5B90%5D=90&age_groups%5B91%5D=91&age_groups%5B5%5D=5";
const ARMS_URL = "https://www.armsaroundasd.org/sign-up";

function Badge({ children, color = "bg-amber-100 text-amber-800" }) {
  return <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${color} mr-1 mb-1`}>{children}</span>;
}

function Card({ title, children, accent = "border-l-emerald-500", icon }) {
  return (
    <div className={`bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.07)] border-l-[6px] ${accent} p-4 mb-4`}>
      <h3 className="font-bold text-base mb-2 flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        {title}
      </h3>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function SectionHeader({ children, emoji }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-6">
      <span className="text-2xl">{emoji}</span>
      <h2 className="text-lg font-medium text-[#1a2520] tracking-tight" style={{ fontFamily: "var(--font-fraunces)" }}>{children}</h2>
    </div>
  );
}

function LinkOut({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-[#c06030] ${linkStyle}`}>
      {children}
    </a>
  );
}

function getEventEmoji(text) {
  const low = text.toLowerCase();
  if (low.includes("manna") || (low.includes("market") && !low.includes("ymca"))) return "🌽";
  if (low.includes("ymca")) return "🥗";
  if (low.includes("ywam") || low.includes("food truck")) return "🚚";
  if (low.includes("feast") || low.includes("feed the people") || low.includes("dinner") || low.includes("12 baskets")) return "🍽️";
  if (low.includes("bounty")) return "🥬";
  if (low.includes("dental") || low.includes("smiles")) return "🦷";
  if (low.includes("yoga") || low.includes("pound") || low.includes("stretching") || low.includes("dance") || low.includes("mindfulness") || low.includes("fitness")) return "🧘";
  if (low.includes("museum") || low.includes("amos")) return "🦖";
  if (low.includes("movie") || low.includes("video game")) return "🍿";
  if (low.includes("art") || low.includes("craft") || low.includes("munch") || low.includes("flower")) return "🎨";
  if (low.includes("arms around") || low.includes("autism") || low.includes("support group") || low.includes("pet therapy")) return "💜";
  if (low.includes("plant") || low.includes("herbal")) return "🪴";
  if (low.includes("tax")) return "📝";
  if (low.includes("library") || low.includes("storytime")) return "📚";
  return "✨";
}

function FreeFoodTab({ activeFilter }) {
  return (
    <div>
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-5 mb-6 border border-orange-200">
        <p className="text-base font-medium text-gray-800">Free food access across WNC — no questions asked at most sites. 🌽</p>
      </div>

      <SectionHeader emoji="📦">24/7 BeLoved Street Pantries</SectionHeader>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <p className="text-sm text-gray-600 mb-3">Take-what-you-need, always open · <LinkOut href="https://www.belovedasheville.com/">belovedasheville.com ↗</LinkOut></p>
        <ul className="text-sm space-y-2">
          <li>📍 <strong>West AVL:</strong> 1050 Haywood Rd (Near JB Media)</li>
          <li>📍 <strong>Downtown:</strong> 15 W Walnut St & N Lexington Ave</li>
          <li>📍 <strong>South AVL:</strong> 390 Airport Rd & 300 Airport Rd</li>
          <li>📍 <strong>East AVL:</strong> 1329 Tunnel Rd (Front of Azalea Church)</li>
          <li>📍 <strong>Candler:</strong> 1499 Smokey Park Hwy</li>
          <li>📍 <strong>Swannanoa:</strong> 2299 US 70 (Front of Ingles)</li>
          <li>📍 <strong>Weaverville:</strong> 65 Weaver Blvd (Front of Hardees)</li>
          <li>📍 <strong>Southside Fridge (BIPOC-led):</strong> 133 Livingston St</li>
        </ul>
      </div>

      <SectionHeader emoji="🏠">Regional Pantries</SectionHeader>
      <Card title="Restoration House Blessing Box & Pantry" accent="border-l-indigo-400" icon="📦">
        <p><strong>Pantry: Mon/Tue/Thu/Fri 10am–3pm · Wed 1pm–6pm</strong></p>
        <p className="mt-1">24/7 Blessing Box outside. 24/7 Public Health Vending Machine with meal kits, hygiene & recovery resources.</p>
        <Badge color="bg-green-100 text-green-800">🆓 Free</Badge>
        <Badge color="bg-orange-100 text-orange-800">🌽 Pantry</Badge>
        <p className="mt-2 text-xs">81 Academy Street · <em>Bryson City (Swain County)</em></p>
        <p className="mt-1"><LinkOut href="https://www.restorationhousewnc.org/">restorationhousewnc.org ↗</LinkOut></p>
      </Card>

      <SectionHeader emoji="🥗">Weekly Free Food & Produce</SectionHeader>

      {WEEKLY_FOOD.map(({ day, items }) => (
        <div key={day} className="mb-5">
          <h3 className="font-black text-sm uppercase tracking-widest text-orange-600 mb-2 border-b border-orange-200 pb-1">{day}</h3>
          {items.map((it, i) => (
            <div key={i} className="flex gap-3 mb-2 text-sm bg-white p-3 rounded-lg shadow-sm border border-gray-50">
              <span className="text-xs font-mono font-bold text-orange-500 w-20 shrink-0 pt-0.5">{it.t}</span>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-gray-800">{it.n}</span>
                <span className="text-gray-500 block text-xs mt-0.5">📍 {it.l}</span>
                {it.link && <div className="mt-1"><LinkOut href={it.link}>View Details ↗</LinkOut></div>}
              </div>
            </div>
          ))}
        </div>
      ))}

      <SectionHeader emoji="🪵">Energy & Utilities</SectionHeader>
      <Card title="Free Firewood Delivery & Propane Vouchers" accent="border-l-amber-700" icon="🔥">
        <p><strong>Black Mountain/Swannanoa:</strong> Swannanoa Valley Christian Ministry delivers free firewood split for stoves. Call (828) 669-9404.</p>
        <p className="mt-1"><LinkOut href="https://www.svcmblackmountain.org/">svcmblackmountain.org ↗</LinkOut></p>
        <p className="mt-3"><strong>Marshall:</strong> ROAR Mutual Aid Hub (798 Walnut Creek Rd) offers propane vouchers Saturdays 10am–4pm.</p>
        <p className="mt-1"><LinkOut href="https://ruralorganizing.wordpress.com/">ruralorganizing.wordpress.com ↗</LinkOut></p>
      </Card>
    </div>
  );
}

function KidsTab() {
  const libCalUrl = "https://buncombe.librarycalendar.com/events/upcoming?age_groups%5B1%5D=1&age_groups%5B2%5D=2&age_groups%5B90%5D=90&age_groups%5B91%5D=91&age_groups%5B5%5D=5";

  return (
    <div>
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-5 mb-6 border border-pink-200">
        <p className="text-base font-medium text-gray-800">Programs for babies, toddlers, preschoolers, and school-age kiddos. 🧸</p>
      </div>

      <SectionHeader emoji="📚">Weekly Library Programs</SectionHeader>
      <p className="text-xs text-gray-500 mb-3">All programs free · <LinkOut href={libCalUrl}>See full library calendar ↗</LinkOut></p>

      {WEEKLY_LIBRARY.map(({ day, items }) => (
        <div key={day} className="mb-4">
          <h3 className="font-black text-sm uppercase tracking-widest text-purple-600 mb-2 border-b border-purple-100 pb-1">{day}</h3>
          {items.map((it, i) => (
            <div key={i} className="flex gap-3 items-start mb-2 text-sm bg-white rounded-lg p-3 shadow-sm">
              <span className="text-2xl mt-0.5">📖</span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-900 text-base">
                  <LinkOut href={libCalUrl}>{it.n}</LinkOut>
                </div>
                <div className="text-gray-500 font-medium text-sm">🕒 {it.t}</div>
                <div className="text-gray-500 text-xs mt-0.5">📍 {it.l}</div>
              </div>
            </div>
          ))}
        </div>
      ))}

      <SectionHeader emoji="🍼">Baby Gear & Hygiene Resources</SectionHeader>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <ul className="text-sm space-y-3">
            <li>
              <strong><LinkOut href="https://givenscommunities.org/wp-content/uploads/2022/05/GC-BEAR_Closets.pdf">BEAR Closets</LinkOut> (Free Clothes, Toys, Baby Gear):</strong><br />
              ▸ <em>Abernethy UMC (Asheville):</em> 1st/3rd Wed 10am–2pm<br />
              ▸ <em>St. Pauls UMC (Asheville):</em> 2nd/4th Wed 4pm–6pm<br />
              ▸ <em>Snow Hill UMC (Candler):</em> Tue 1pm–5pm<br />
              ▸ <em>Loving Hearts (Marion):</em> Tue 12pm–4pm · Wed 11am–3pm · ages 0–15
            </li>
            <li className="pt-2 border-t border-gray-100">
              <strong><LinkOut href="https://www.buncombenc.gov/457/Register-of-Deeds">Register of Deeds</LinkOut> (Downtown Asheville):</strong> Free Diapers & Formula · Mon–Fri 8am–5pm
            </li>
          </ul>
        </div>

      <SectionHeader emoji="🐾">Free Pet Pantries</SectionHeader>
      <Card title="Don't let your furry friends go hungry" accent="border-l-rose-500" icon="🐶">
          <p>Free pet food available at <LinkOut href="https://www.abccm.org/">ABCCM</LinkOut> (24 Cumberland Ave), <LinkOut href="https://www.ashevillepovertyinitiative.org/">12 Baskets</LinkOut> (610 Haywood Rd), and <LinkOut href="https://www.haywoodstreet.org/">Haywood Street Congregation</LinkOut>.</p>
          <p className="mt-2 text-xs">See <LinkOut href="http://tiny.cc/freeinwnc">tiny.cc/freeinwnc</LinkOut> for a full list of 20+ locations!</p>
        </Card>
    </div>
  );
}

function NeighborhoodTab() {
  const hoods = [
    { name: "Downtown Asheville", emoji: "🏙️", items: [
      { n: "Welcome Table (hot meals)", d: "Wed 10am–1pm", l: "Haywood St. Congregation", link: "https://www.haywoodstreet.org/" },
      { n: "YWAM Free Lunch Truck", d: "Fri 12pm", l: "Corner of Aston & Lexington", link: "https://ywamasheville.org" },
      { n: "BeLoved Pantry", d: "24/7", l: "15 W Walnut St & N Lexington Ave", link: "https://www.belovedasheville.com/" },
      { n: "Pack Library Programs", d: "Mon–Sat", l: "67 Haywood St", link: "https://buncombe.librarycalendar.com/events/upcoming?age_groups%5B1%5D=1&age_groups%5B2%5D=2&age_groups%5B90%5D=90&age_groups%5B91%5D=91&age_groups%5B5%5D=5" },
      { n: "Register of Deeds — Free Diapers & Formula", d: "Mon–Fri 8am–5pm", l: "205 College St", link: "https://www.buncombenc.gov/457/Register-of-Deeds" },
    ]},
    { name: "West Asheville", emoji: "🌿", items: [
      { n: "12 Baskets Café (free meals)", d: "Mon–Fri 3–5pm", l: "610 Haywood Rd", link: "https://www.ashevillepovertyinitiative.org/" },
      { n: "Feed The People Dinner", d: "Tue 5:30pm", l: "Oakwood & Haywood", link: "https://www.facebook.com/FeedThePeopleAVL/" },
      { n: "BeLoved Pantry", d: "24/7", l: "1050 Haywood Rd", link: "https://www.belovedasheville.com/" },
      { n: "Spring Resource Hub & Clothing Swap", d: "May 18 · 11am–1pm", l: "27 Balm Grove Ave", link: "" },
    ]},
    { name: "East Asheville / Swannanoa", emoji: "🏔️", items: [
      { n: "Bounty & Soul Produce Truck", d: "Mon 12:30–2pm", l: "Beacon Village, 120 Alexander Pl", link: "https://www.bountyandsoul.org/" },
      { n: "Bounty & Soul + Food Connection", d: "Sat 10–11:30am", l: "Art Space Charter", link: "https://www.bountyandsoul.org/" },
      { n: "BeLoved Pantry", d: "24/7", l: "2299 US 70 (Ingles) & 1329 Tunnel Rd", link: "https://www.belovedasheville.com/" },
    ]},
    { name: "South Asheville / Arden", emoji: "🛍️", items: [
      { n: "BeLoved Pantry", d: "24/7", l: "390 & 300 Airport Rd", link: "https://www.belovedasheville.com/" },
      { n: "Truck City AVL (Quiet Hour 1–2pm!)", d: "May 18 · 1–4pm", l: "Tanger Outlets, 800 Brevard Rd", link: "https://www.tanger.com/asheville/events/21680" },
    ]},
    { name: "Candler / Enka", emoji: "🌄", items: [
      { n: "Food Connection Truck", d: "Thu 3–5pm", l: "Francis Asbury Methodist", link: "https://www.foodconnection.org/" },
      { n: "BEAR Closet (baby gear)", d: "Tue 1–5pm", l: "Snow Hill UMC", link: "https://givenscommunities.org/wp-content/uploads/2022/05/GC-BEAR_Closets.pdf" },
      { n: "Hora del Cuento (Bilingual Storytime)", d: "Wed 10:30am", l: "Enka-Candler Library", link: "https://buncombe.librarycalendar.com/events/upcoming?age_groups%5B1%5D=1&age_groups%5B2%5D=2&age_groups%5B90%5D=90&age_groups%5B91%5D=91&age_groups%5B5%5D=5" },
    ]},
    { name: "Weaverville / Woodfin", emoji: "🌲", items: [
      { n: "Food Connection Truck", d: "Fri 11am–1pm", l: "Victory Fellowship", link: "https://www.foodconnection.org/" },
      { n: "BeLoved Pantry", d: "24/7", l: "65 Weaver Blvd (Hardees)", link: "https://www.belovedasheville.com/" },
    ]},
    { name: "Fairview / Leicester", emoji: "🌻", items: [
      { n: "Food Connection Truck", d: "Tue 3–5pm", l: "Food Lion, Fairview", link: "https://www.foodconnection.org/" },
      { n: "Food Connection Truck", d: "Wed 5–6pm", l: "Bell UMC, Leicester", link: "https://www.foodconnection.org/" },
      { n: "MANNA FoodBank Mobile Market", d: "May 1", l: "Fairview Public Library, 1 Taylor Rd", link: "https://www.mannafoodbank.org/wnc-mobile-market-calendar/" },
    ]},
    { name: "Black Mountain", emoji: "⛰️", items: [
      { n: "Bounty & Soul Distribution", d: "Thu 3:30–5:30pm", l: "BiLo", link: "https://www.bountyandsoul.org/" },
    ]},
    { name: "Bryson City (Swain Co.)", emoji: "🏡", items: [
      { n: "Restoration House Pantry", d: "Mon/Tue/Thu/Fri 10am–3pm · Wed 1–6pm", l: "81 Academy St", link: "https://www.restorationhousewnc.org/" },
      { n: "24/7 Blessing Box + Vending Machine", d: "Always open", l: "81 Academy St (outside)", link: "https://www.restorationhousewnc.org/" },
    ]},
    { name: "Marion / McDowell County", emoji: "🏞️", items: [
      { n: "YMCA Mobile Markets (free produce)", d: "East Marion: 2nd Thu · 5pm · Old Fort: Last Thu · 2:30pm", l: "900 Baldwin Ave & 909 E Main St", link: "https://www.ymcawnc.org/programs/community/food-programs" },
      { n: "Loving Hearts BEAR Closet (clothes & gear, ages 0–15)", d: "Tue 12–4pm · Wed 11am–3pm", l: "337 Garden Creek Rd, Marion", link: "https://givenscommunities.org/wp-content/uploads/2022/05/GC-BEAR_Closets.pdf" },
      { n: "MATCH – Resource Navigator & FoodBox Delivery", d: "📞 828-659-5289", l: "430 Rankin Dr, Marion", link: "" },
      { n: "McDowell Transit (free rides)", d: "📞 828-559-0744", l: "Marion", link: "" },
    ]},
  ];

  return (
    <div>
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 mb-6 border border-emerald-200">
        <p className="text-base font-medium text-gray-800">Resources grouped by neighborhood — find what's near you. 📍</p>
      </div>
      {hoods.map((h, i) => (
        <div key={i} className="mb-6">
          <h3 className="font-black text-sm uppercase tracking-widest text-[#3a5a4a] mb-3 border-b border-[#d4e8dc] pb-1 flex items-center gap-2">
            <span className="text-lg">{h.emoji}</span> {h.name}
          </h3>
          {h.items.map((it, j) => (
            <div key={j} className="flex gap-3 mb-2 text-sm bg-white p-3 rounded-xl shadow-sm border border-gray-50">
              <div className="flex-1 min-w-0">
                <span className="font-bold text-gray-800">
                  {it.link
                    ? <a href={it.link} target="_blank" rel="noopener noreferrer" className="text-[#c06030] underline decoration-dotted underline-offset-2 hover:decoration-solid">{it.n}</a>
                    : it.n}
                </span>
                <span className="text-gray-500 block text-xs mt-0.5">🕒 {it.d} · 📍 {it.l}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function MayEventsTab({ activeFilter }) {
  const events = [
    { d: "May 1", items: [
      { t: "12pm · YWAM Free Food Truck — Aston St & S Lexington Ave", l: "https://ywamasheville.org" },
      { t: "3pm · May Day Feast at 12 Baskets, 610 Haywood Rd", l: "https://www.ashevillepovertyinitiative.org/" },
      { t: "3pm · Manna Market – Fairview, 1 Taylor Rd", l: MANNA_URL },
    ]},
    { d: "May 2", items: [
      { t: "11am · Servants of Smiles Free Dental Day — Zoë Dental, 10A Yorkshire St Suite 110", l: "https://www.zoedental.com/" },
    ]},
    { d: "May 4", items: [
      { t: "Manna Market – Swannanoa, 71 Riverwood Rd", l: MANNA_URL },
    ]},
    { d: "May 5", items: [
      { t: "5pm · YMCA Mobile Market – Mills River, 124 Town Center Dr", l: YMCA_URL },
      { t: "5:30pm · Manna Market – Topton, 71 Old School Rd", l: MANNA_URL },
      { t: "4:30pm · Manna Market – Candler, 390 Asbury Rd", l: MANNA_URL },
    ]},
    { d: "May 6", items: [
      { t: "2pm · Manna Market – Bryson City, 60 Almond School Rd", l: MANNA_URL },
      { t: "3pm · YMCA Mobile Market – Candler, 31 Westridge Market Pl", l: YMCA_URL },
      { t: "5pm · YMCA Mobile Market – Marshall, 258 Carolina Ln", l: YMCA_URL },
      { t: "3pm · Manna Market – Asheville, 165 S French Broad Ave", l: MANNA_URL },
      { t: "5:30pm · Feed The People Free Dinner — Oakwood St & Haywood Rd", l: "https://www.facebook.com/FeedThePeopleAVL/" },
    ]},
    { d: "May 7", items: [
      { t: "3pm · YMCA Mobile Market – Swannanoa, 101 W Charleston Ave", l: YMCA_URL },
      { t: "5:30pm · Manna Market – Cherokee, 777 Casino Drive", l: MANNA_URL },
    ]},
    { d: "May 8", items: [
      { t: "12pm · Manna Market – Asheville, 36 Grove St", l: MANNA_URL },
      { t: "4pm · YMCA Mobile Market – Clyde, 15 Facility Dr", l: YMCA_URL },
      { t: "Movie Night: Hidden Figures — East AVL Library", l: LIB_URL },
    ]},
    { d: "May 11", items: [
      { t: "4pm · Manna Market – Spruce Pine, 53 Pine Grove Rd", l: MANNA_URL },
      { t: "3pm · Manna Market – Asheville (Lee Walker), 20 Lee Garden Ln", l: MANNA_URL },
      { t: "5pm · Manna Market – Asheville (Erwin Hills), 20 Erwin Hills Rd", l: MANNA_URL },
    ]},
    { d: "May 12", items: [
      { t: "1pm · Manna Market – Big Ivy Community Center", l: MANNA_URL },
      { t: "2:30pm · Manna Market – Asheville (Bartlett Arms), 121 Bartlett St", l: MANNA_URL },
      { t: "Manna Market – Woodfin, 199 Elkwood Ave", l: MANNA_URL },
    ]},
    { d: "May 13", items: [
      { t: "2pm · Manna Market – Burnsville, 71 Newdale Church Rd", l: MANNA_URL },
      { t: "1pm · Manna Market – Asheville (Pisgah View), 1 Granada St", l: MANNA_URL },
    ]},
    { d: "May 14", items: [
      { t: "3:30pm · Manna Market – Spruce Pine, 431 Oak Ave", l: MANNA_URL },
      { t: "5pm · YMCA Mobile Market – Marion, 900 Baldwin Ave", l: YMCA_URL },
      { t: "12:15pm · POUND® Fitness — Arms Around ASD", l: ARMS_URL },
      { t: "1:30pm · Mindfulness with Andrew — Arms Around ASD", l: ARMS_URL },
      { t: "2pm · Gentle Stretching with Ellen — Arms Around ASD", l: ARMS_URL },
    ]},
    { d: "May 15", items: [
      { t: "4pm · YMCA Mobile Market – Asheville, 10 Coleys Circle", l: YMCA_URL },
      { t: "11:30am · Davis's Dance Party — Arms Around ASD", l: ARMS_URL },
      { t: "12:30pm · Late-Identified Women's Support Group — Arms Around ASD", l: ARMS_URL },
      { t: "1pm · Pet Therapy with Deputy Brody — Arms Around ASD", l: ARMS_URL },
      { t: "2pm · Art with Jenna O — Arms Around ASD", l: ARMS_URL },
      { t: "4pm · Video Games with Lili — Arms Around ASD", l: ARMS_URL },
      { t: "5:30pm · Friday Night at the Movies — Arms Around ASD", l: ARMS_URL },
    ]},
    { d: "May 16", items: [
      { t: "2pm · Free Herbal Plant Starts — BeLoved Asheville, 133 Livingston St", l: "https://www.belovedasheville.com/" },
    ]},
    { d: "May 18", items: [
      { t: "Homeschool Takeover: National Museum Day — AMOS", l: "https://ashevillemuseum.org/" },
      { t: "3pm · Manna Market – Asheville (Deaverview), 275 Deaverview Rd", l: MANNA_URL },
      { t: "Manna Market – Asheville, 1984 Hendersonville Rd", l: MANNA_URL },
    ]},
    { d: "May 19", items: [
      { t: "1pm · Manna Market – Big Ivy Community Center", l: MANNA_URL },
      { t: "5pm · YMCA Mobile Market – Mills River, 124 Town Center Dr", l: YMCA_URL },
    ]},
    { d: "May 20", items: [
      { t: "3:30pm · Manna Market – Murphy, 7829 NC-294", l: MANNA_URL },
      { t: "5pm · YMCA Mobile Market – Marshall, 258 Carolina Ln", l: YMCA_URL },
      { t: "3pm · Manna Market – Asheville (Shiloh), 486 Caribou Rd", l: MANNA_URL },
    ]},
    { d: "May 21", items: [
      { t: "3pm · YMCA Mobile Market – Asheville, 150 Tunnel Rd", l: YMCA_URL },
      { t: "6pm · YMCA Mobile Market – Asheville, 40 N Merrimon Ave", l: YMCA_URL },
      { t: "3:30pm · Manna Market – Cherokee, 27 Long Branch Rd", l: MANNA_URL },
      { t: "2:30pm · Manna Market – Asheville (Klondyke), 500 Montford Ave", l: MANNA_URL },
    ]},
    { d: "May 22", items: [
      { t: "4pm · YMCA Mobile Market – Clyde, 15 Facility Dr", l: YMCA_URL },
      { t: "2pm · Manna Market – Candler (ABCCM-West), 1914 Smokey Park Hwy", l: MANNA_URL },
    ]},
    { d: "May 25", items: [
      { t: "5:30pm · Manna Market – Franklin, 1436 Georgia Rd", l: MANNA_URL },
      { t: "3pm · Manna Market – Asheville (Grant Center), 133 Livingston St", l: MANNA_URL },
    ]},
    { d: "May 26", items: [
      { t: "5pm · YMCA Mobile Market – Hendersonville, 8106 Ave W", l: YMCA_URL },
      { t: "1pm · Manna Market – Big Ivy Community Center", l: MANNA_URL },
      { t: "2:30pm · Manna Market – Asheville (Bartlett Arms), 121 Bartlett St", l: MANNA_URL },
    ]},
    { d: "May 27", items: [
      { t: "3pm · YMCA Mobile Market – Candler, 31 Westridge Market Pl", l: YMCA_URL },
      { t: "5pm · YMCA Mobile Market – Leicester, 1561 Alexander Rd", l: YMCA_URL },
      { t: "Manna Market – Asheville (Fernihurst), 71 Fernihurst Dr", l: MANNA_URL },
      { t: "1pm · Manna Market – Asheville (Pisgah View), 1 Granada St", l: MANNA_URL },
    ]},
    { d: "May 28", items: [
      { t: "2:30pm · YMCA Mobile Market – Old Fort, 909 E Main St", l: YMCA_URL },
      { t: "Manna Market – Marion, 201 Ridley St", l: MANNA_URL },
      { t: "Make & Munch: Paper Flowers + snacks — East AVL Library", l: LIB_URL },
    ]},
  ];

  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  const isPast = (dateStr) => {
    const [monthName, dayStr] = dateStr.split(" ");
    const months = { Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 };
    const m = months[monthName];
    const d = parseInt(dayStr);
    return m < todayMonth || (m === todayMonth && d < todayDay);
  };

  const filterFn = (item) => {
    if (activeFilter === "all") return true;
    const low = item.t.toLowerCase();
    if (activeFilter === "free") return true;
    if (activeFilter === "food") return low.includes("market") || low.includes("manna") || low.includes("ymca") || low.includes("feast") || low.includes("feed") || low.includes("ywam") || low.includes("munch");
    if (activeFilter === "kids") return low.includes("kid") || low.includes("baby") || low.includes("tot") || low.includes("youth") || low.includes("children") || low.includes("homeschool") || low.includes("dance party") || low.includes("art with") || low.includes("video game");
    if (activeFilter === "bilingual") return low.includes("spanish") || low.includes("bilingual") || low.includes("cuento");
    if (activeFilter === "sensory") return low.includes("arms around") || low.includes("autism") || low.includes("sensory") || low.includes("quiet") || low.includes("support group") || low.includes("pet therapy") || low.includes("mindfulness");
    return true;
  };

  const [showRecurring, setShowRecurring] = useState(false);
  const daysInMay = Array.from({length: 31}, (_, i) => i + 1);

  const getDayOfWeek = (dayNum) => new Date(2026, 4, dayNum).toLocaleDateString('en-US', { weekday: 'long' });

  const allFilteredDays = daysInMay.map(dayNum => {
    const dStr = `May ${dayNum}`;
    if (isPast(dStr)) return null;

    const dayOfWeek = getDayOfWeek(dayNum);

    const specificEventObj = events.find(e => e.d === dStr);
    let dayEvents = specificEventObj ? [...specificEventObj.items] : [];

    if (showRecurring) {
      const foodObj = WEEKLY_FOOD.find(w => w.day === dayOfWeek);
      if (foodObj) {
        dayEvents = dayEvents.concat(foodObj.items.map(i => ({ t: `${i.t} · ${i.n} @ ${i.l}`, l: i.link || "" })));
      }
      const libObj = WEEKLY_LIBRARY.find(w => w.fullDay === dayOfWeek);
      if (libObj) {
        dayEvents = dayEvents.concat(libObj.items.map(i => ({ t: `${i.n} (${i.t}) @ ${i.l}`, l: LIB_URL })));
      }
      if (dayOfWeek === "Friday") {
        dayEvents.push({ t: "12pm · YWAM Free Food Truck — Aston St & S Lexington Ave", l: "https://ywamasheville.org" });
      }
    }

    dayEvents = dayEvents.filter(filterFn);

    if (dayEvents.length === 0) return null;
    return { d: dStr, items: dayEvents };
  }).filter(Boolean);

  return (
    <div>
      <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-5 mb-4 border border-violet-200">
        <p className="text-base font-medium text-gray-800">Special one-time and seasonal events for May 2026. Always confirm with venue before attending! 📅</p>
      </div>

      <label className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl shadow-sm border border-violet-100 mb-6 cursor-pointer select-none active:bg-gray-50 transition-colors">
        <input
          type="checkbox"
          checked={showRecurring}
          onChange={(e) => setShowRecurring(e.target.checked)}
          className="w-5 h-5 rounded border-violet-300 text-violet-600 focus:ring-violet-500 shrink-0"
        />
        <span className="text-sm font-bold text-gray-800 leading-tight">Include weekly recurring events (food, storytimes)</span>
      </label>

      {allFilteredDays.map((ev, i) => (
        <div key={i} className="mb-4 bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-black text-sm bg-violet-100 text-violet-800 rounded-lg px-3 py-1.5 inline-block mb-3">{ev.d}</h3>
          <div className="space-y-2">
            {ev.items.map((item, j) => (
              <div key={j} className="text-sm text-gray-700 leading-relaxed flex gap-2 items-start border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                <span className="shrink-0 mt-0.5 text-base">{getEventEmoji(item.t)}</span>
                <span className="flex-1 break-words">
                  {item.l
                    ? <a href={item.l} target="_blank" rel="noopener noreferrer" className={`text-[#c06030] ${linkStyle}`}>{item.t} ↗</a>
                    : item.t}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}



export default function App() {
  const [tab, setTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const tabs = [MayEventsTab, FreeFoodTab, KidsTab, NeighborhoodTab];
  const ActiveTab = tabs[tab];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-gray-800 antialiased" style={{ fontFamily: "var(--font-dmsans)" }}>

      {/* Sticky header with safe-area top padding for iPhone notch */}
      <header
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-sm pt-safe"
      >
        {/* Logo + Title */}
        <div className="max-w-md mx-auto px-4 pt-3 pb-2">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="ConnectEd Circles" className="w-8 h-8 object-contain shrink-0" />
            <div>
              <h1 className="text-[17px] font-medium tracking-tight text-[#1a2520] leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                May Family Happenings
              </h1>
              <p className="text-[10px] font-semibold text-[#5d8a72] tracking-wide uppercase">ConnectEd Circles · May 2026</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-md mx-auto px-3 pb-2">
          <div className="flex gap-1.5 overflow-x-auto hide-scrollbar">
            {TABS.map((t, i) => (
              <button
                key={i}
                onClick={() => { setTab(i); setActiveFilter("all"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`whitespace-nowrap px-3.5 py-2 min-h-[40px] rounded-full text-[13px] font-bold transition-all shrink-0 ${
                  tab === i
                    ? "bg-[#3a5a4a] text-white shadow-md"
                    : "bg-[#f3f9f5] text-[#3a5a4a] active:bg-[#d4e8dc]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Chips — only shown on May Events tab */}
        {tab === 0 && (
          <div className="max-w-md mx-auto px-3 pb-3">
            <div className="flex gap-1.5 overflow-x-auto hide-scrollbar">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(activeFilter === f.key ? "all" : f.key)}
                  className={`whitespace-nowrap px-3 py-1.5 min-h-[36px] rounded-full text-[12px] font-bold transition-all border shrink-0 ${
                    activeFilter === f.key
                      ? "bg-[#c06030] text-white border-[#c06030] shadow-sm"
                      : "bg-white text-[#4a5e57] border-[#d4e8dc] active:bg-[#fbeede]"
                  }`}
                >
                  {f.emoji} {f.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-md mx-auto px-4 py-5">
        <ActiveTab activeFilter={activeFilter} />
      </main>

      <footer className="max-w-md mx-auto px-4 pt-8 pb-safe text-center text-xs text-gray-400" style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 32px)' }}>
        <img src="/logo.svg" alt="ConnectEd Circles" className="w-8 h-8 mx-auto mb-3 opacity-40" />
        <p className="font-bold text-[#3a5a4a]">ConnectEd Circles</p>
        <p className="mt-2 font-medium text-[#5d8a72]">Made with care for WNC families 💛</p>
      </footer>
    </div>
  );
}
