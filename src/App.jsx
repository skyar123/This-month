import { useState, useMemo } from "react";

const TEAL = "#1A8A7D";
const DARK = "#2D3436";
const GOLD = "#D4A029";
const LIGHT_TEAL = "#E8F5F3";
const LIGHT_GOLD = "#FFF8E7";
const LIGHT_BLUE = "#EBF5FB";
const LIGHT_PINK = "#FDEDEC";
const BG = "#FAFAF8";

const TABS = ["🌸 Highlights", "🍽️ Free Food", "👶 Kids & Families", "🏘️ Neighborhoods", "📅 May Events", "⭐ Top 6 Actions"];

const linkStyle = "underline decoration-dotted underline-offset-2 hover:decoration-solid";

function Badge({ children, color = "bg-amber-100 text-amber-800" }) {
  return <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${color} mr-1 mb-1`}>{children}</span>;
}

function Card({ title, children, accent = "border-l-emerald-500", icon }) {
  return (
    <div className={`bg-white rounded-xl shadow-md border-l-4 ${accent} p-4 mb-4 hover:shadow-lg transition-shadow`}>
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
      <span className="text-3xl">{emoji}</span>
      <h2 className="text-xl font-black tracking-tight text-gray-900">{children}</h2>
    </div>
  );
}

function LinkOut({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`text-emerald-700 ${linkStyle}`}>{children}</a>;
}

function HighlightsTab() {
  return (
    <div>
      <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-5 mb-6 border border-amber-200 shadow-sm">
        <p className="text-base font-medium text-gray-800 leading-relaxed">
          Welcome to your <strong>May 2026</strong> guide to free and low-cost happenings across the Asheville area and WNC. This is a warm, practical guide designed for busy families. Scan the emoji badges to find what fits your crew. 🌻
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge color="bg-green-100 text-green-800">🆓 Free</Badge>
          <Badge color="bg-blue-100 text-blue-800">💲 Under $10</Badge>
          <Badge color="bg-purple-100 text-purple-800">🇪🇸 Spanish-friendly</Badge>
          <Badge color="bg-pink-100 text-pink-800">🤟 ASL-inclusive</Badge>
          <Badge color="bg-yellow-100 text-yellow-800">👶 Baby/toddler</Badge>
          <Badge color="bg-orange-100 text-orange-800">🌽 Free food/produce</Badge>
          <Badge color="bg-teal-100 text-teal-800">♿ Disability-inclusive</Badge>
          <Badge color="bg-indigo-100 text-indigo-800">📱 Virtual option</Badge>
        </div>
      </div>

      
      <SectionHeader emoji="🏓">Weekly Recreation & Play</SectionHeader>
      
      <Card title="Aquatics Center Open Swim" accent="border-l-blue-400" icon="🏊">
        <p><strong>Mondays · 6–8am & 11am–1pm · $5</strong></p>
        <Badge color="bg-blue-100 text-blue-800">💲 Under $10</Badge>
        <p className="mt-1 text-xs">BCS Aquatic Center · 18 Ensley Stadium Loop</p>
      </Card>
      
      <Card title="Pickleball at Shiloh" accent="border-l-green-400" icon="🥒">
        <p><strong>Mondays · 9am–1pm · $5/1 pickle, $20/5 pickles</strong></p>
        <Badge color="bg-blue-100 text-blue-800">💲 Under $10</Badge>
        <p className="mt-1 text-xs">Linwood Crump Shiloh Community Center</p>
      </Card>

      <Card title="Social Seniors" accent="border-l-purple-400" icon="☕">
        <p><strong>Mondays · 9am–5pm · FREE w/registration</strong></p>
        <Badge color="bg-green-100 text-green-800">🆓 Free</Badge>
        <p className="mt-1 text-xs">Grove Street Community Center</p>
      </Card>

      <Card title="Indoor Playground at Caffeine & Chaos" accent="border-l-amber-400" icon="🏰">
        <p><strong>Mondays · 9am–8pm · $8/ages 0-4, $12/ages 5-12</strong></p>
        <Badge color="bg-blue-100 text-blue-800">💲 Under $10</Badge>
        <Badge color="bg-yellow-100 text-yellow-800">👶 Kids</Badge>
        <p className="mt-1 text-xs">1880 Dellwood Rd · <em>Waynesville</em></p>
      </Card>

      <SectionHeader emoji="✨">This Week's Don't-Miss</SectionHeader>

      <Card title="YWAM Asheville Free Lunch Food Truck" accent="border-l-orange-400" icon="🚚">
        <p><strong>Every Friday · 12pm NOON · FREE</strong> (until food runs out)</p>
        <p>Blue "Operation Blessing" trailer. Corner of Aston & Lexington, Downtown.</p>
        <Badge color="bg-green-100 text-green-800">🆓 Free</Badge>
        <Badge color="bg-orange-100 text-orange-800">🌽 Free food</Badge>
        <p className="mt-2 text-xs"><LinkOut href="https://ywamasheville.org">ywamasheville.org</LinkOut> · <em>Downtown</em></p>
      </Card>

      <Card title="Spring Resource Hub & Clothing Swap" accent="border-l-sky-400" icon="👕">
        <p><strong>May 18 · 11am–1pm · FREE</strong></p>
        <p>Bring gently used kids' clothes, books, toys, diapers & baby items to swap. Playground, bubbles, music! "Bring what you can, take what you need."</p>
        <Badge color="bg-green-100 text-green-800">🆓 Free</Badge>
        <Badge color="bg-yellow-100 text-yellow-800">👶 Kids & babies</Badge>
        <p className="mt-2 text-xs">27 Balm Grove Ave, Asheville · <em>West Asheville</em></p>
      </Card>

      <Card title="Downtown After 5" accent="border-l-emerald-400" icon="🎶">
        <p><strong>May 17 · 5pm · FREE</strong></p>
        <p>Live music at Pack Square Park</p>
        <Badge color="bg-green-100 text-green-800">🆓 Free</Badge>
        <p className="mt-2 text-xs"><LinkOut href="https://www.ashevillenc.gov/department/parks-recreation/">Asheville Parks & Rec</LinkOut> · <em>Downtown</em></p>
      </Card>

      <Card title="Truck City AVL (with Quiet Hour!)" accent="border-l-teal-400" icon="🚒">
        <p><strong>May 18 · 1–4pm · FREE</strong> (Quiet Hour 1–2pm)</p>
        <p>Touch-a-truck event with Rec 'n' Roll Zone. Quiet Hour first for sensory-sensitive families.</p>
        <Badge color="bg-green-100 text-green-800">🆓 Free</Badge>
        <Badge color="bg-yellow-100 text-yellow-800">👶 Kids</Badge>
        <Badge color="bg-teal-100 text-teal-800">♿ Sensory-friendly hour</Badge>
        <p className="mt-2 text-xs">Tanger Outlets · <em>Arden / South Asheville</em></p>
      </Card>
    </div>
  );
}

function FreeFoodTab() {
  return (
    <div>
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-5 mb-6 border border-orange-200">
        <p className="text-base font-medium text-gray-800">Free food access across WNC — no questions asked at most sites. 🌽</p>
      </div>

      <SectionHeader emoji="📦">24/7 BeLoved Street Pantries</SectionHeader>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <p className="text-sm text-gray-600 mb-3">Take-what-you-need, 24/7 accessible boxes located across the county:</p>
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
        <p><strong>Pantry: Mon/Tue/Thu/Fri 10am–3pm, Wed 1pm–6pm</strong></p>
        <p>24/7 Blessing Box outside. 24/7 Public Health Vending Machine with meal kits, hygiene, recovery resources.</p>
        <Badge color="bg-green-100 text-green-800">🆓 Free</Badge>
        <Badge color="bg-orange-100 text-orange-800">🌽 Pantry</Badge>
        <p className="mt-2 text-xs">81 Academy Street · <em>Bryson City (Swain County)</em></p>
      </Card>

      <SectionHeader emoji="🥗">Weekly Free Food & Produce</SectionHeader>

      {[
        { day: "Monday", items: [
          { t: "12:30–2pm", n: "Bounty & Soul Farmers Market Truck", l: "Beacon Village, 120 Alexander Pl, Swannanoa", nb: "Swannanoa", link: "https://www.bountyandsoul.org/" },
        ]},
        { day: "Tuesday", items: [
          { t: "3–5pm", n: "Food Connection Truck (heat & serve meals)", l: "Food Lion, Fairview", nb: "Fairview", link: "https://www.foodconnection.org/" },
          { t: "3:30–5pm", n: "Bounty & Soul Produce Truck", l: "UNETE, 871 Riverside Dr", nb: "River Arts District area", link: "https://www.bountyandsoul.org/" },
        ]},
        { day: "Wednesday", items: [
          { t: "10am–1pm", n: "Welcome Table", l: "Haywood St. Congregation", nb: "Downtown", link: "https://www.haywoodstreet.org/" },
          { t: "5–6pm", n: "Food Connection Truck", l: "Bell UMC, Leicester", nb: "Leicester", link: "https://www.foodconnection.org/" },
        ]},
        { day: "Thursday", items: [
          { t: "3–5pm", n: "Food Connection Truck", l: "Francis Asbury Methodist, Candler", nb: "Candler", link: "https://www.foodconnection.org/" },
          { t: "3:30–5:30pm", n: "Bounty & Soul Distribution", l: "BiLo, Black Mountain", nb: "Black Mountain", link: "https://www.bountyandsoul.org/" },
        ]},
        { day: "Friday", items: [
          { t: "11am–1pm", n: "Food Connection Truck", l: "Victory Fellowship, Weaverville", nb: "Weaverville", link: "https://www.foodconnection.org/" },
          { t: "1:30–3pm", n: "Bounty & Soul Produce Market", l: "Southside Community Ctr, 285 Livingston St", nb: "Southside", link: "https://www.bountyandsoul.org/" },
        ]},
        { day: "Saturday", items: [
          { t: "10–11:30am", n: "Bounty & Soul Distribution + Food Connection Truck", l: "Art Space Charter, Swannanoa", nb: "Swannanoa", link: "https://www.bountyandsoul.org/" },
        ]},
      ].map(({ day, items }) => (
        <div key={day} className="mb-5">
          <h3 className="font-black text-sm uppercase tracking-widest text-orange-600 mb-2 border-b border-orange-200 pb-1">{day}</h3>
          {items.map((it, i) => (
            <div key={i} className="flex gap-3 mb-2 text-sm bg-white p-2 rounded-lg shadow-sm border border-gray-50">
              <span className="text-xs font-mono font-bold text-orange-500 w-24 shrink-0 pt-0.5">{it.t}</span>
              <div>
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
        <p><strong>Black Mountain/Swannanoa:</strong> Swannanoa Valley Christian Ministry will deliver free firewood split for stoves. Call (828) 669-9404.</p>
        <p className="mt-2"><strong>Marshall:</strong> ROAR Mutual Aid Hub (798 Walnut Creek Rd) offers propane vouchers Saturdays 10-4.</p>
      </Card>
      
    </div>
  );
}

function KidsTab() {
  return (
    <div>
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-5 mb-6 border border-pink-200">
        <p className="text-base font-medium text-gray-800">Programs for babies, toddlers, preschoolers, and school-age kiddos. 🧸</p>
      </div>

      <SectionHeader emoji="📚">Weekly Storytimes & Baby Programs</SectionHeader>
      {[
        { n: "Family Storytime", w: "Mon 10am", l: "Edneyville Library & Mills River Library", link: "https://www.buncombecounty.org/governing/depts/library/" },
        { n: "Baby Gym (4–18mos)", w: "Wed 10:30am", l: "Fairview Library", link: "https://www.buncombecounty.org/governing/depts/library/" },
        { n: "Puppet Playtime", w: "Wed 10–11:30am", l: "East AVL Library", link: "https://www.buncombecounty.org/governing/depts/library/" },
        { n: "Hora del Cuento — Bilingual 🇪🇸", w: "Wed 10:30am", l: "Enka-Candler Library", link: "https://www.buncombecounty.org/governing/depts/library/" },
        { n: "Baby Gym (4–18mos)", w: "Thu 11am", l: "Pack Library (Downtown)", link: "https://www.buncombecounty.org/governing/depts/library/" },
      ].map((p, i) => (
        <div key={i} className="flex gap-3 items-start mb-3 text-sm bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-2xl mt-1">📖</span>
          <div>
            <div className="font-bold text-gray-900 text-base">{p.n}</div>
            <div className="text-gray-500 font-medium">🕒 {p.w}</div>
            <div className="text-gray-500 text-xs mt-1">📍 {p.l}</div>
          </div>
        </div>
      ))}
      
      
      <SectionHeader emoji="🍼">Baby Gear & Hygiene Resources</SectionHeader>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <ul className="text-sm space-y-3">
          <li><strong>BEAR Closets (Free Clothes, Toys, Baby Gear):</strong><br/>
              ▸ <em>Abernethy UMC (Asheville):</em> 1st/3rd Wed 10am-2pm<br/>
              ▸ <em>St. Pauls UMC (Asheville):</em> 2nd/4th Wed 4pm-6pm<br/>
              ▸ <em>Snow Hill UMC (Candler):</em> Tue 1pm-5pm<br/>
              ▸ <em>Loving Hearts (Marion):</em> Wed 12pm-3pm
          </li>
          <li className="pt-2 border-t border-gray-50"><strong>Register of Deeds (Downtown Asheville):</strong> Free Diapers & Formula (Mon-Fri 8am-5pm)</li>
          <li className="pt-2 border-t border-gray-50"><strong>Lilac Health Milk Depot (Black Mountain):</strong> Breast Milk/Lactation support at Temple Chiropractic</li>
          <li className="pt-2 border-t border-gray-50"><strong>Sand Hill Library (Candler):</strong> 24/7 Period Products Pantry located outside</li>
        </ul>
      </div>

      <SectionHeader emoji="🐾">Free Pet Pantries</SectionHeader>
      <Card title="Don't let your furry friends go hungry" accent="border-l-rose-500" icon="🐶">
        <p>Free pet food is available at ABCCM (24 Cumberland Ave), 12 Baskets (610 Haywood Rd), and Haywood Street Congregation.</p>
        <p className="mt-2 text-xs">See <LinkOut href="http://tiny.cc/freeinwnc">tiny.cc/freeinwnc</LinkOut> for a full list of 20+ locations!</p>
      </Card>
      
    </div>
  );
}

function NeighborhoodTab() {
  return (
    <div className="text-center py-10 opacity-70">
      <div className="text-4xl mb-4">📍</div>
      <h3 className="font-bold text-xl mb-2">Neighborhood Directory</h3>
      <p>Use the Free Food and Highlights tabs to explore resources by area.</p>
    </div>
  );
}

function AprilEventsTab() {
  const events = [
    { d: "May 1", items: ["9:00 AM: closed may 1 fridge and pantry in Swannanoa - Swannanoa communities together, 2121 US-70 — FREE", "12:00 PM: Free Food Truck Asheville from Ywam, Aston Street & South Lexington Avenue — FREE", "3:00 PM: May Day Community Feast Trinity UMC Asheville, 587 Haywood Rd — FREE", "3:00 PM: May Day Community Feast 12 Baskets, 610 Haywood Rd — FREE", "3:00 PM: May Day Community Free Feast in Arden, 132 State Rd 3174 — FREE", "4:00 PM: May Day Feast Unitarian Universalist Avl, 1 Edwin Pl — FREE", "4:00 PM: May Day Free Feast at Dr Wesley Grant Senior Center, 285 Livingston St — FREE", "4:00 PM: May Day Feast at Shiloh Friendship Community Center, 99 New Leicester Hwy — FREE", "5:00 PM: May Day Feast MLK Jr Park Avl, 50 Martin Luther King Jr Dr — FREE", "7:00 PM: Manna Market - Fairview, 1 Taylor Rd — FREE", "7:00 PM: Community Engagement Market @ Fairview Public Library 3PM, Fairview Public Library - 1 Taylor Rd.  Fariview NC 28730 — FREE", "9am–4pm: Tax Help by appt, Pack Library (Downtown)", "11–11:45am: Tiny Tots Yoga, West AVL Library — FREE"] },
    { d: "May 2", items: ["11:00 AM: free dental day Zöe dental's 13th annual servants of smiles., 10A Yorkshire St suite 110 — FREE", "5:00 PM: Cat Pantry and Donation Drive, 841 Haywood Rd — FREE", "11am: Golden Years Treasure Hunt (50+), Memorial Stadium — FREE", "6–7:30pm: Kids Fishing Club, Lake Julian — FREE"] },
    { d: "May 4", items: ["10:00 AM: Move Out Sale Free Stuff left behind by college students, 102 Upper College Rd — FREE", "8:30 PM: Manna Market - Swannanoa, 71 Riverwood Rd — FREE", "10am–1pm: Plant Pass-A-Long, Francine Delaney School — FREE", "12pm: Tool Library Open House — FREE"] },
    { d: "May 5", items: ["3:00 PM: Fresh Produce Market - Fairview, 26 Joe Jenkins Rd — FREE", "5:00 PM: YMCA Mobile Market - Mills River, 124 Town Center Dr — FREE", "5:30 PM: Manna Market - Topton, 71 Old School Rd — FREE", "8:30 PM: Community Engagement Market @ Enka Middle School 4:30PM, Enka Middle School - 390 Asbury Rd.  Candler NC 28715 — FREE", "8:30 PM: Manna Market - Candler, 390 Asbury Rd — FREE", "9:30 PM: Free Pilates Virtual and In Person, 67 Haywood St — FREE"] },
    { d: "May 6", items: ["2:00 PM: Manna Market - Bryson City, 60 Almond School Rd — FREE", "3:00 PM: YMCA Mobile Market - Candler, 31 Westridge Market Pl — FREE", "4:00 PM: Free Acupuncture for BIPOC, 411 N Louisiana Ave — FREE", "5:00 PM: YMCA Mobile Market - Marshall, 258 Carolina Ln — FREE", "5:30 PM: Feed The People Free Dinner Asheville, corner of oakwood street and Haywood rd — FREE", "7:00 PM: Manna Market - Asheville, 165 S French Broad Ave — FREE", "7:00 PM: Community Engagement Market @ Aston Park Apartments 3PM, Aston Park Apartments - 165 South French Broad Ave.  Asheville NC 28801 — FREE"] },
    { d: "May 7", items: ["3:00 PM: YMCA Mobile Market - Swannanoa, 101 W Charleston Ave — FREE", "5:30 PM: Manna Market - Cherokee, 777 Casino Drive — FREE"] },
    { d: "May 8", items: ["4:00 PM: Community Engagement Market @ Grove Street Community Center 12PM, Grove Street Community Center - 36 Grove Street  Asheville NC 28801 — FREE", "4:00 PM: Manna Market - Asheville, 36 Grove St — FREE", "4:00 PM: YMCA Mobile Market - Clyde, 15 Facility Dr — FREE", "Movie Night: Hidden Figures, East AVL Library — FREE"] },
    { d: "May 11", items: ["4:00 PM: Manna Market - Spruce Pine, 53 Pine Grove Rd — FREE", "7:00 PM: Community Engagement Market @ Maple Crest Apartments at Lee Walker 3PM, Maple Crest Apartments at Lee Walker - 20 Lee Garden Ln. Building 10 Asheville NC 28801 — FREE", "7:00 PM: Manna Market - Asheville, 20 Lee Garden Ln — FREE", "9:00 PM: Manna Market - Asheville, 20 Erwin Hills Road — FREE", "9:00 PM: Community Engagement Market @ Erwin Middle School 5PM, Erwin Middle School - 20 Erwin Hills Rd.  Asheville NC 28806 — FREE"] },
    { d: "May 12", items: ["5:00 PM: Community Engagement Market @ Big Ivy Community Center 1PM, Big Ivy Community Center - 540 Dillingham Rd.  Barnardsville NC 28709 — FREE", "6:30 PM: Manna Market - Asheville, 121 Bartlett St — FREE", "6:30 PM: Community Engagement Market @ Bartlett Arms Apartment 2:30PM, Bartlett Arms Apartment - 121 Bartlett St.  Asheville NC 28801 — FREE", "7:00 PM: Manna Market - Woodfin, 199 Elkwood Ave — FREE"] },
    { d: "May 13", items: ["2:00 PM: Manna Market - Burnsville, 71 Newdale Church Rd — FREE", "5:00 PM: Community Engagement Market @ Pisgah View Apartments 1PM, Pisgah View Apartments - 1 Granada St.  Asheville NC 28806 — FREE", "5:00 PM: Manna Market - Asheville, 1 Granada St — FREE"] },
    { d: "May 14", items: ["3:30 PM: Manna Market - Spruce Pine, 431 Oak Avenue — FREE", "5:00 PM: YMCA Mobile Market - Marion, 900 Baldwin Ave — FREE"] },
    { d: "May 15", items: ["4:00 PM: YMCA Mobile Market - Asheville, 10 Coleys Circle — FREE"] },
    { d: "May 16", items: ["2:00 PM: Herbal Plant Start Giveaway, 133 Livingston St — FREE", "4:00 PM: Community Baby Shower Burnsville, 503 Medical Campus Dr — FREE", "5:00 PM: Clothing Swap Sweeten Creek Brewing, 1127 Sweeten Creek Rd — FREE"] },
    { d: "May 18", items: ["10:00 AM: Homeschool Takeover: National Museum Day, AMOS", "9:00 AM: Healthy Aging Day, YMCA Marion", "7:00 PM: Community Engagement Market @ Deaverview Apartments 3PM, Deaverview Community Center - 275 Deaverview Rd.  Asheville NC 28806 — FREE", "7:00 PM: Manna Market - Asheville, 275 Deaverview Rd — FREE", "7:30 PM: Manna Market - Asheville, 1984 Hendersonville Rd — FREE", "Children's Clothing Swap, 27 Balm Grove (West AVL) — FREE!", "Truck City AVL (Quiet Hour 1–2!), Tanger Outlets — FREE"] },
    { d: "May 19", items: ["5:00 PM: Community Engagement Market @ Big Ivy Community Center 1PM, Big Ivy Community Center - 540 Dillingham Rd.  Barnardsville NC 28709 — FREE", "5:00 PM: YMCA Mobile Market - Mills River, 124 Town Center Dr — FREE"] },
    { d: "May 20", items: ["3:30 PM: Manna Market - Murphy, 7829 NC-294 — FREE", "5:00 PM: YMCA Mobile Market - Marshall, 258 Carolina Ln — FREE", "7:00 PM: Community Engagement Market @ Shiloh Community Market 3PM, Rock Hill Baptist Church - 486 Caribou Road  Asheville NC 28803 — FREE", "7:00 PM: Manna Market - Asheville, 486 Caribou Rd — FREE"] },
    { d: "May 21", items: ["3:00 PM: YMCA Mobile Market - Asheville, 150 Tunnel Rd — FREE", "3:30 PM: Manna Market - Cherokee, 27 Long Branch Road — FREE", "6:00 PM: YMCA Mobile Market - Asheville, 40 N Merrimon Ave — FREE", "6:30 PM: Community Engagement Market @ Klondyke Homes 2:30PM, Klondyke Homes - 500 Montford Ave.  Asheville NC 28801 — FREE", "6:30 PM: Manna Market - Asheville, 500 Montford Ave — FREE"] },
    { d: "May 22", items: ["4:00 PM: YMCA Mobile Market - Clyde, 15 Facility Dr — FREE", "6:00 PM: Manna Market - Candler, 1914 Smokey Park Hwy — FREE", "6:00 PM: Community Engagement Market @ ABCCM-West 2PM, ABCCM-West - 1914 Smoky Park Hwy  Candler NC 28715 — FREE"] },
    { d: "May 25", items: ["5:30 PM: Manna Market - Franklin, 1436 Georgia Rd — FREE", "7:00 PM: Manna Market - Asheville, 133 Livingston St — FREE", "7:00 PM: Community Engagement Market @ Grant Center 3PM, Grant Center - 285 Livingston St.  Asheville NC 28801 — FREE"] },
    { d: "May 26", items: ["11:00 AM: YMCA Outdoor Functional Fitness Zone Ribbon Cutting, Asheville YMCA", "5:00 PM: Community Engagement Market @ Big Ivy Community Center 1PM, Big Ivy Community Center - 540 Dillingham Rd.  Barnardsville NC 28709 — FREE", "5:00 PM: YMCA Mobile Market - Hendersonville, 8106 Ave W — FREE", "6:30 PM: Community Engagement Market @ Bartlett Arms Apartment 2:30PM, Bartlett Arms Apartment - 121 Bartlett St.  Asheville NC 28801 — FREE", "7:00 PM: Manna Market - Asheville, 121 Bartlett St — FREE"] },
    { d: "May 27", items: ["3:00 PM: Manna Market - Asheville, 71 Fernihurst Drive — FREE", "3:00 PM: YMCA Mobile Market - Candler, 31 Westridge Market Pl — FREE", "5:00 PM: Manna Market - Asheville, 1 Granada St — FREE", "5:00 PM: YMCA Mobile Market - Leicester, 1561 Alexander Rd — FREE", "5:00 PM: Community Engagement Market @ Pisgah View Apartments 1PM, Pisgah View Apartments - 1 Granada St.  Asheville NC 28806 — FREE"] },
    { d: "May 28", items: ["2:30 PM: YMCA Mobile Market - Old Fort, 909 E Main St — FREE", "7:30 PM: Manna Market - Marion, 201 Ridley St — FREE", "Make & Munch: Paper Flowers + food, East AVL Library — FREE"] },
    { d: "May 31", items: ["4:00 PM: Emote Clothing Swap - Mask required, 444 Haywood Rd — FREE"] },
  ];

  return (
    <div>
      <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-5 mb-6 border border-violet-200">
        <p className="text-base font-medium text-gray-800">Special one-time and seasonal events for May 2026. Always confirm with venue before attending! 📅</p>
      </div>
      {events.map((ev, i) => (
        <div key={i} className="mb-5 bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-black text-sm bg-violet-100 text-violet-800 rounded-lg px-3 py-1.5 inline-block mb-3 shadow-sm">{ev.d}</h3>
          <div className="space-y-3 pl-1">
            {ev.items.map((item, j) => (
              <p key={j} className="text-sm text-gray-700 leading-relaxed flex gap-3 items-start border-b border-gray-50 pb-2 last:border-0">
                <span className="text-violet-400 shrink-0 text-lg mt-0.5">⭐</span>
                <span className="font-medium">{item}</span>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TopActionsTab() {
  const actions = [
    { n: "1", title: "Get a Buncombe County Library Card", desc: "Unlocks free storytimes, baby gyms, Zoom Passes to attractions, Wi-Fi hotspots (password: readmore), tech help, and hundreds of free programs.", link: "https://www.buncombecounty.org/governing/depts/library/", color: "from-emerald-400 to-teal-500" },
    { n: "2", title: "Sign Up for Bounty & Soul Produce", desc: "Free fresh produce distributed at multiple locations across Buncombe County every week. No income verification required.", link: "https://www.bountyandsoul.org/", color: "from-orange-400 to-amber-500" },
    { n: "3", title: "Bookmark Your Library's Zoom Pass Page", desc: "Free passes to WNC Nature Center, Asheville Museum of Science, Hands On! Museum, and more.", link: "https://www.buncombecounty.org/governing/depts/library/services/zoom-local-attraction-pass.aspx", color: "from-sky-400 to-blue-500" },
    { n: "4", title: "Download the Libby App", desc: "Free ebooks, audiobooks, and magazines with your library card. Works on any device.", link: "https://www.overdrive.com/apps/libby", color: "from-purple-400 to-violet-500" },
  ];

  return (
    <div>
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 mb-6 border border-amber-200 shadow-sm">
        <p className="text-base font-medium text-gray-800">If you do <strong>nothing else</strong> this month, do these things. Each one unlocks multiple resources. ⭐</p>
      </div>
      <div className="space-y-4">
        {actions.map((a, i) => (
          <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className={`w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-white font-black text-xl shadow-inner`}>
              {a.n}
            </div>
            <div>
              <h3 className="font-bold text-base text-gray-900">
                {a.link ? <LinkOut href={a.link}>{a.title}</LinkOut> : a.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const tabs = [HighlightsTab, FreeFoodTab, KidsTab, NeighborhoodTab, AprilEventsTab, TopActionsTab];
  const ActiveTab = tabs[tab];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased" style={{ fontFamily: "'DM Sans', 'Nunito', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,700;0,9..40,900;1,9..40,400&family=Nunito:wght@700;900&display=swap" rel="stylesheet" />

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-md mx-auto px-4 pt-4 pb-3">
          <h1 className="text-2xl font-black tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500" style={{ fontFamily: "Nunito, sans-serif" }}>
            🌻 Asheville Families
          </h1>
          <p className="text-sm font-semibold text-gray-500 mt-0.5">May 2026 · Free & Low-Cost Guide</p>
        </div>
        <div className="max-w-md mx-auto px-3 pb-3 flex gap-2 overflow-x-auto hide-scrollbar">
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                tab === i
                  ? "bg-emerald-600 text-white shadow-md transform scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        <ActiveTab />
      </main>

      <footer className="max-w-md mx-auto px-4 py-10 text-center text-xs text-gray-400 mt-8">
        <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
        <p>Created by Child First / RHA</p>
        <p className="mt-2 font-medium text-emerald-600">Made with care for WNC families 💛</p>
      </footer>
    </div>
  );
}
