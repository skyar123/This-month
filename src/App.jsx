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

function getEventMeta(text) {
  const low = text.toLowerCase();
  let emoji = "✨";
  let link = null;

  if (low.includes("manna market")) {
    emoji = "🌽";
    link = { url: "https://www.mannafoodbank.org/wnc-mobile-market-calendar/", text: "MANNA Calendar" };
  } else if (low.includes("ymca mobile market") || (low.includes("ymca") && low.includes("market"))) {
    emoji = "🥗";
    link = { url: "https://www.ymcawnc.org/programs/community/food-programs", text: "YMCA Markets" };
  } else if (low.includes("community engagement market")) {
    emoji = "🥦";
    link = { url: "https://www.mannafoodbank.org/wnc-mobile-market-calendar/", text: "MANNA Calendar" };
  } else if (low.includes("ywam") || low.includes("free food truck")) {
    emoji = "🚚";
    link = { url: "https://ywamasheville.org", text: "YWAM Asheville" };
  } else if (low.includes("12 baskets")) {
    emoji = "🍽️";
    link = { url: "https://www.ashevillepovertyinitiative.org/", text: "12 Baskets" };
  } else if (low.includes("bounty & soul") || low.includes("bounty and soul")) {
    emoji = "🥬";
    link = { url: "https://www.bountyandsoul.org/", text: "Bounty & Soul" };
  } else if (low.includes("clothing swap") || low.includes("hub")) {
    emoji = "👕";
  } else if (low.includes("truck city")) {
    emoji = "🚒";
    link = { url: "https://www.tanger.com/asheville/events/21680", text: "Tanger Outlets" };
  } else if (low.includes("baby shower")) {
    emoji = "🍼";
  } else if (low.includes("dental") || low.includes("smiles")) {
    emoji = "🦷";
    link = { url: "https://www.zoedental.com/", text: "Zoë Dental" };
  } else if (low.includes("yoga") || low.includes("pilates") || low.includes("fitness") || low.includes("aging")) {
    emoji = "🧘";
  } else if (low.includes("museum") || low.includes("amos")) {
    emoji = "🦖";
  } else if (low.includes("plant") || low.includes("garden")) {
    emoji = "🪴";
  } else if (low.includes("fishing")) {
    emoji = "🎣";
  } else if (low.includes("movie")) {
    emoji = "🍿";
  }

  return { emoji, link };
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
            ▸ <em>Loving Hearts (Marion):</em> Wed 12pm–3pm
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
    { d: "May 1", items: ["9:00 AM: Closed May 1 Fridge and Pantry in Swannanoa - Swannanoa Communities Together, 2121 US-70 — FREE", "12:00 PM: Free Food Truck Asheville from YWAM, Aston Street & South Lexington Avenue — FREE", "3:00 PM: May Day Community Feast Trinity UMC Asheville, 587 Haywood Rd — FREE", "3:00 PM: May Day Community Feast 12 Baskets, 610 Haywood Rd — FREE", "3:00 PM: May Day Community Free Feast in Arden, 132 State Rd 3174 — FREE", "4:00 PM: May Day Feast Unitarian Universalist AVL, 1 Edwin Pl — FREE", "4:00 PM: May Day Free Feast at Dr. Wesley Grant Senior Center, 285 Livingston St — FREE", "4:00 PM: May Day Feast at Shiloh Friendship Community Center, 99 New Leicester Hwy — FREE", "5:00 PM: May Day Feast MLK Jr Park AVL, 50 Martin Luther King Jr Dr — FREE", "7:00 PM: Community Engagement Market @ Fairview Public Library 3PM — FREE", "7:00 PM: Manna Market - Fairview, 1 Taylor Rd — FREE", "9am–4pm: Tax Help by appt, Pack Library (Downtown)", "11–11:45am: Tiny Tots Yoga, West AVL Library — FREE"] },
    { d: "May 2", items: ["11:00 AM: Free dental day — Zoë Dental's 13th Annual Servants of Smiles, 10A Yorkshire St Suite 110 — FREE", "5:00 PM: Cat Pantry and Donation Drive, 841 Haywood Rd — FREE", "11am: Golden Years Treasure Hunt (50+), Memorial Stadium — FREE", "6–7:30pm: Kids Fishing Club, Lake Julian — FREE"] },
    { d: "May 4", items: ["10:00 AM: Move Out Sale — Free Stuff left behind by college students, 102 Upper College Rd — FREE", "8:30 PM: Manna Market - Swannanoa, 71 Riverwood Rd — FREE", "10am–1pm: Plant Pass-A-Long, Francine Delaney School — FREE", "12pm: Tool Library Open House — FREE"] },
    { d: "May 5", items: ["3:00 PM: Fresh Produce Market - Fairview, 26 Joe Jenkins Rd — FREE", "5:00 PM: YMCA Mobile Market - Mills River, 124 Town Center Dr — FREE", "5:30 PM: Manna Market - Topton, 71 Old School Rd — FREE", "8:30 PM: Community Engagement Market @ Enka Middle School 4:30PM — FREE", "8:30 PM: Manna Market - Candler, 390 Asbury Rd — FREE", "9:30 PM: Free Pilates Virtual and In Person, 67 Haywood St — FREE"] },
    { d: "May 6", items: ["2:00 PM: Manna Market - Bryson City, 60 Almond School Rd — FREE", "3:00 PM: YMCA Mobile Market - Candler, 31 Westridge Market Pl — FREE", "4:00 PM: Free Acupuncture for BIPOC, 411 N Louisiana Ave — FREE", "5:00 PM: YMCA Mobile Market - Marshall, 258 Carolina Ln — FREE", "5:30 PM: Feed The People Free Dinner Asheville, Corner of Oakwood St & Haywood Rd — FREE", "7:00 PM: Community Engagement Market @ Aston Park Apartments 3PM — FREE", "7:00 PM: Manna Market - Asheville, 165 S French Broad Ave — FREE"] },
    { d: "May 7", items: ["3:00 PM: YMCA Mobile Market - Swannanoa, 101 W Charleston Ave — FREE", "5:30 PM: Manna Market - Cherokee, 777 Casino Drive — FREE"] },
    { d: "May 8", items: ["4:00 PM: Community Engagement Market @ Grove Street Community Center 12PM — FREE", "4:00 PM: Manna Market - Asheville, 36 Grove St — FREE", "4:00 PM: YMCA Mobile Market - Clyde, 15 Facility Dr — FREE", "Movie Night: Hidden Figures, East AVL Library — FREE"] },
    { d: "May 11", items: ["4:00 PM: Manna Market - Spruce Pine, 53 Pine Grove Rd — FREE", "7:00 PM: Community Engagement Market @ Maple Crest Apartments at Lee Walker 3PM — FREE", "7:00 PM: Manna Market - Asheville, 20 Lee Garden Ln — FREE", "9:00 PM: Community Engagement Market @ Erwin Middle School 5PM — FREE", "9:00 PM: Manna Market - Asheville, 20 Erwin Hills Rd — FREE"] },
    { d: "May 12", items: ["5:00 PM: Community Engagement Market @ Big Ivy Community Center 1PM — FREE", "6:30 PM: Community Engagement Market @ Bartlett Arms Apartment 2:30PM — FREE", "6:30 PM: Manna Market - Asheville, 121 Bartlett St — FREE", "7:00 PM: Manna Market - Woodfin, 199 Elkwood Ave — FREE"] },
    { d: "May 13", items: ["2:00 PM: Manna Market - Burnsville, 71 Newdale Church Rd — FREE", "5:00 PM: Community Engagement Market @ Pisgah View Apartments 1PM — FREE", "5:00 PM: Manna Market - Asheville, 1 Granada St — FREE"] },
    { d: "May 14", items: ["3:30 PM: Manna Market - Spruce Pine, 431 Oak Avenue — FREE", "5:00 PM: YMCA Mobile Market - Marion, 900 Baldwin Ave — FREE"] },
    { d: "May 15", items: ["4:00 PM: YMCA Mobile Market - Asheville, 10 Coleys Circle — FREE"] },
    { d: "May 16", items: ["2:00 PM: Herbal Plant Start Giveaway, 133 Livingston St — FREE", "4:00 PM: Community Baby Shower Burnsville, 503 Medical Campus Dr — FREE", "5:00 PM: Clothing Swap Sweeten Creek Brewing, 1127 Sweeten Creek Rd — FREE"] },
    { d: "May 18", items: ["10:00 AM: Homeschool Takeover: National Museum Day, AMOS", "9:00 AM: Healthy Aging Day, YMCA Marion", "7:00 PM: Community Engagement Market @ Deaverview Apartments 3PM — FREE", "7:00 PM: Manna Market - Asheville, 275 Deaverview Rd — FREE", "7:30 PM: Manna Market - Asheville, 1984 Hendersonville Rd — FREE", "11am–1pm: Children's Clothing Swap, 27 Balm Grove (West AVL) — FREE!", "1–4pm: Truck City AVL (Quiet Hour 1–2!), Tanger Outlets — FREE"] },
    { d: "May 19", items: ["5:00 PM: Community Engagement Market @ Big Ivy Community Center 1PM — FREE", "5:00 PM: YMCA Mobile Market - Mills River, 124 Town Center Dr — FREE"] },
    { d: "May 20", items: ["3:30 PM: Manna Market - Murphy, 7829 NC-294 — FREE", "5:00 PM: YMCA Mobile Market - Marshall, 258 Carolina Ln — FREE", "7:00 PM: Community Engagement Market @ Shiloh Community Market 3PM — FREE", "7:00 PM: Manna Market - Asheville, 486 Caribou Rd — FREE"] },
    { d: "May 21", items: ["3:00 PM: YMCA Mobile Market - Asheville, 150 Tunnel Rd — FREE", "3:30 PM: Manna Market - Cherokee, 27 Long Branch Road — FREE", "6:00 PM: YMCA Mobile Market - Asheville, 40 N Merrimon Ave — FREE", "6:30 PM: Community Engagement Market @ Klondyke Homes 2:30PM — FREE", "6:30 PM: Manna Market - Asheville, 500 Montford Ave — FREE"] },
    { d: "May 22", items: ["4:00 PM: YMCA Mobile Market - Clyde, 15 Facility Dr — FREE", "6:00 PM: Community Engagement Market @ ABCCM-West 2PM — FREE", "6:00 PM: Manna Market - Candler, 1914 Smokey Park Hwy — FREE"] },
    { d: "May 25", items: ["5:30 PM: Manna Market - Franklin, 1436 Georgia Rd — FREE", "7:00 PM: Community Engagement Market @ Grant Center 3PM — FREE", "7:00 PM: Manna Market - Asheville, 133 Livingston St — FREE"] },
    { d: "May 26", items: ["11:00 AM: YMCA Outdoor Functional Fitness Zone Ribbon Cutting, Asheville YMCA", "5:00 PM: Community Engagement Market @ Big Ivy Community Center 1PM — FREE", "5:00 PM: YMCA Mobile Market - Hendersonville, 8106 Ave W — FREE", "6:30 PM: Community Engagement Market @ Bartlett Arms Apartment 2:30PM — FREE", "7:00 PM: Manna Market - Asheville, 121 Bartlett St — FREE"] },
    { d: "May 27", items: ["3:00 PM: Manna Market - Asheville, 71 Fernihurst Drive — FREE", "3:00 PM: YMCA Mobile Market - Candler, 31 Westridge Market Pl — FREE", "5:00 PM: Community Engagement Market @ Pisgah View Apartments 1PM — FREE", "5:00 PM: YMCA Mobile Market - Leicester, 1561 Alexander Rd — FREE", "5:00 PM: Manna Market - Asheville, 1 Granada St — FREE"] },
    { d: "May 28", items: ["2:30 PM: YMCA Mobile Market - Old Fort, 909 E Main St — FREE", "7:30 PM: Manna Market - Marion, 201 Ridley St — FREE", "Make & Munch: Paper Flowers + food, East AVL Library — FREE"] },
    { d: "May 31", items: ["4:00 PM: Emote Clothing Swap — Mask required, 444 Haywood Rd — FREE"] },
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
    const low = item.toLowerCase();
    if (activeFilter === "free") return low.includes("free");
    if (activeFilter === "food") return low.includes("food") || low.includes("market") || low.includes("produce") || low.includes("manna") || low.includes("feast") || low.includes("pantry");
    if (activeFilter === "kids") return low.includes("kid") || low.includes("baby") || low.includes("tot") || low.includes("youth") || low.includes("children") || low.includes("fishing club");
    if (activeFilter === "bilingual") return low.includes("spanish") || low.includes("bilingual") || low.includes("cuento");
    if (activeFilter === "sensory") return low.includes("sensory") || low.includes("quiet");
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
        dayEvents = dayEvents.concat(foodObj.items.map(i => `${i.t}: ${i.n} @ ${i.l} — FREE`));
      }
      const libObj = WEEKLY_LIBRARY.find(w => w.fullDay === dayOfWeek);
      if (libObj) {
        dayEvents = dayEvents.concat(libObj.items.map(i => `${i.n} (${i.t}) @ ${i.l} — FREE`));
      }
      if (dayOfWeek === "Friday") {
        dayEvents.push("12:00 PM: Free Food Truck Asheville from YWAM, Aston Street & South Lexington Avenue — FREE");
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
            {ev.items.map((item, j) => {
              const meta = getEventMeta(item);
              return (
                <div key={j} className="text-sm text-gray-700 leading-relaxed flex gap-2 items-start border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                  <span className="shrink-0 mt-0.5 text-base">{meta.emoji}</span>
                  <span className="flex-1 break-words">{item}</span>
                  {meta.link && (
                    <a href={meta.link.url} target="_blank" rel="noopener noreferrer"
                       className="shrink-0 text-[#c06030] font-bold underline decoration-dotted underline-offset-2 hover:decoration-solid mt-0.5 whitespace-nowrap">
                       {meta.link.text} ↗
                    </a>
                  )}
                </div>
              );
            })}
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
