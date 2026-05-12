import { useState } from "react";

const Motif = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" className="text-sage-700 transition-transform duration-1000 hover:rotate-180" stroke="currentColor" fill="none" strokeWidth="2.5">
    <circle cx="50" cy="50" r="16" />
    <circle cx="50" cy="34" r="16" />
    <circle cx="63.8" cy="42" r="16" />
    <circle cx="63.8" cy="58" r="16" />
    <circle cx="50" cy="66" r="16" />
    <circle cx="36.2" cy="58" r="16" />
    <circle cx="36.2" cy="42" r="16" />
  </svg>
);

const TABS = ["Highlights", "Free Food", "Kids & Families", "Neighborhoods", "May Events", "Top Actions"];

function Badge({ children, type = "sage" }) {
  const colorClass = type === "terra" ? "bg-[#fbeede] text-[#c06030]" : type === "lav" ? "bg-[#eee9f5] text-[#7e6da0]" : "bg-[#e9f3ed] text-[#3a5a4a]";
  return <span className={`inline-block px-3 py-1 rounded-full text-[0.75rem] font-bold ${colorClass} mr-2 mb-2 tracking-wide uppercase`}>{children}</span>;
}

function Card({ title, children, icon, type = "sage" }) {
  const iconBg = type === "terra" ? "bg-[#fbeede] text-[#c06030]" : type === "lav" ? "bg-[#eee9f5] text-[#7e6da0]" : "bg-[#e9f3ed] text-[#5d8a72]";
  return (
    <div className="bg-white rounded-[20px] card-shadow card-hover p-6 mb-6 group border border-gray-100/50">
      <div className="flex gap-4 items-start">
        {icon && (
          <div className={`w-12 h-12 shrink-0 rounded-[12px] flex items-center justify-center text-xl ${iconBg} transition-transform group-hover:scale-105`}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-fraunces text-[1.4rem] font-medium leading-tight mb-2 text-[#1a2520]">{title}</h3>
          <div className="text-[1rem] text-[#4a5e57] leading-[1.7]">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ overline, children }) {
  return (
    <div className="mb-8 mt-12 text-left anim visible border-b border-gray-200 pb-2">
      {overline && <div className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[#c06030] mb-2">{overline}</div>}
      <h2 className="text-[1.8rem] font-fraunces font-medium text-[#1a2520] leading-tight">{children}</h2>
    </div>
  );
}

function LinkOut({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#5d8a72] underline decoration-dotted underline-offset-4 hover:decoration-solid hover:text-[#3a5a4a] font-medium transition-colors">{children}</a>;
}

function HighlightsTab() {
  return (
    <div className="anim visible">
      <div className="bg-white rounded-[20px] p-8 mb-10 card-shadow border-t-4 border-[#5d8a72]">
        <h2 className="font-fraunces text-2xl mb-4 text-[#1a2520]">Editorial Warmth <span className="italic-emphasis">· Clinical Credibility</span></h2>
        <p className="text-[1rem] font-medium text-[#4a5e57] leading-[1.8]">
          Welcome to your May 2026 guide to free and low-cost happenings across the Asheville area and WNC. This is a warm, practical guide designed for busy families, parents, and caregivers. Children grow when the adults around them feel <span className="italic-emphasis">supported</span>.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge type="sage">Free</Badge>
          <Badge type="terra">Under $10</Badge>
          <Badge type="lav">Bilingual</Badge>
          <Badge type="sage">Neurodiversity-Affirming</Badge>
        </div>
      </div>

      <SectionHeader overline="Recreation & Play">Weekly Play</SectionHeader>
      
      <Card title="Aquatics Center Open Swim" icon="🏊" type="sage">
        <p><strong>Mondays · 6–8am & 11am–1pm · $5</strong></p>
        <Badge type="terra">Under $10</Badge>
        <p className="mt-2 text-[0.85rem] text-[#8a9e97]">BCS Aquatic Center · 18 Ensley Stadium Loop</p>
      </Card>
      
      <Card title="Pickleball at Shiloh" icon="🥒" type="sage">
        <p><strong>Mondays · 9am–1pm · $5/1 pickle, $20/5 pickles</strong></p>
        <Badge type="terra">Under $10</Badge>
        <p className="mt-2 text-[0.85rem] text-[#8a9e97]">Linwood Crump Shiloh Community Center</p>
      </Card>

      <Card title="Social Seniors" icon="☕" type="lav">
        <p><strong>Mondays · 9am–5pm · FREE w/registration</strong></p>
        <Badge type="sage">Free</Badge>
        <p className="mt-2 text-[0.85rem] text-[#8a9e97]">Grove Street Community Center</p>
      </Card>

      <Card title="Indoor Playground at Caffeine & Chaos" icon="🏰" type="terra">
        <p><strong>Mondays · 9am–8pm · $8/ages 0-4, $12/ages 5-12</strong></p>
        <Badge type="terra">Under $10</Badge>
        <Badge type="lav">Kids</Badge>
        <p className="mt-2 text-[0.85rem] text-[#8a9e97]">1880 Dellwood Rd · Waynesville</p>
      </Card>

      <SectionHeader overline="Highlights">This Week's Don't-Miss</SectionHeader>

      <Card title="YWAM Asheville Free Lunch Food Truck" icon="🚚" type="sage">
        <p><strong>Every Friday · 12pm NOON · FREE</strong> (until food runs out)</p>
        <p>Blue "Operation Blessing" trailer. Corner of Aston & Lexington, Downtown.</p>
        <Badge type="sage">Free Food</Badge>
        <p className="mt-4 text-[0.85rem]"><LinkOut href="https://ywamasheville.org">ywamasheville.org</LinkOut> · Downtown</p>
      </Card>

      <Card title="Spring Resource Hub & Clothing Swap" icon="👕" type="terra">
        <p><strong>May 18 · 11am–1pm · FREE</strong></p>
        <p>Bring gently used kids' clothes, books, toys, diapers & baby items to swap. Playground, bubbles, music! "Bring what you can, take what you need."</p>
        <Badge type="terra">Families & Kids</Badge>
        <p className="mt-4 text-[0.85rem] text-[#8a9e97]">27 Balm Grove Ave, Asheville · West Asheville</p>
      </Card>

      <Card title="Truck City AVL (with Quiet Hour!)" icon="🚒" type="lav">
        <p><strong>May 18 · 1–4pm · FREE</strong> (Quiet Hour 1–2pm)</p>
        <p>Touch-a-truck event with Rec 'n' Roll Zone. Quiet Hour first for sensory-sensitive families.</p>
        <Badge type="lav">Sensory-Friendly</Badge>
        <p className="mt-4 text-[0.85rem] text-[#8a9e97]">Tanger Outlets · Arden / South Asheville</p>
      </Card>
    </div>
  );
}

function FreeFoodTab() {
  return (
    <div className="anim visible">
      <SectionHeader overline="24/7 Access">BeLoved Street Pantries</SectionHeader>
      <div className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#e9f3ed] p-6 mb-8">
        <p className="text-[1rem] text-[#4a5e57] mb-4">Take-what-you-need, 24/7 accessible boxes located across the county:</p>
        <ul className="text-[0.9rem] space-y-3 font-medium">
          <li><span className="text-[#c06030] mr-2">✦</span> West AVL: 1050 Haywood Rd (Near JB Media)</li>
          <li><span className="text-[#c06030] mr-2">✦</span> Downtown: 15 W Walnut St & N Lexington Ave</li>
          <li><span className="text-[#c06030] mr-2">✦</span> South AVL: 390 Airport Rd & 300 Airport Rd</li>
          <li><span className="text-[#c06030] mr-2">✦</span> East AVL: 1329 Tunnel Rd (Front of Azalea Church)</li>
          <li><span className="text-[#c06030] mr-2">✦</span> Candler: 1499 Smokey Park Hwy</li>
          <li><span className="text-[#c06030] mr-2">✦</span> Swannanoa: 2299 US 70 (Front of Ingles)</li>
          <li><span className="text-[#c06030] mr-2">✦</span> Weaverville: 65 Weaver Blvd (Front of Hardees)</li>
          <li><span className="text-[#7e6da0] mr-2">✦</span> Southside Fridge (BIPOC-led): 133 Livingston St</li>
        </ul>
      </div>

      <SectionHeader overline="Hubs">Regional Pantries</SectionHeader>
      <Card title="Restoration House Blessing Box & Pantry" icon="📦" type="lav">
        <p><strong>Pantry: Mon/Tue/Thu/Fri 10am–3pm, Wed 1pm–6pm</strong></p>
        <p>24/7 Blessing Box outside. 24/7 Public Health Vending Machine with meal kits, hygiene, recovery resources.</p>
        <Badge type="sage">Free</Badge>
        <Badge type="lav">Pantry</Badge>
        <p className="mt-4 text-[0.85rem] text-[#8a9e97]">81 Academy Street · Bryson City (Swain County)</p>
      </Card>

      <SectionHeader overline="Schedule">Weekly Free Food & Produce</SectionHeader>
      {[
        { day: "Monday", items: [{ t: "12:30–2pm", n: "Bounty & Soul Farmers Market Truck", l: "Beacon Village, 120 Alexander Pl, Swannanoa", link: "https://www.bountyandsoul.org/" }]},
        { day: "Tuesday", items: [
          { t: "3–5pm", n: "Food Connection Truck", l: "Food Lion, Fairview", link: "https://www.foodconnection.org/" },
          { t: "3:30–5pm", n: "Bounty & Soul Produce Truck", l: "UNETE, 871 Riverside Dr", link: "https://www.bountyandsoul.org/" }
        ]},
        { day: "Wednesday", items: [
          { t: "10am–1pm", n: "Welcome Table", l: "Haywood St. Congregation", link: "https://www.haywoodstreet.org/" },
          { t: "5–6pm", n: "Food Connection Truck", l: "Bell UMC, Leicester", link: "https://www.foodconnection.org/" }
        ]},
        { day: "Thursday", items: [
          { t: "3–5pm", n: "Food Connection Truck", l: "Francis Asbury Methodist, Candler", link: "https://www.foodconnection.org/" },
          { t: "3:30–5:30pm", n: "Bounty & Soul Distribution", l: "BiLo, Black Mountain", link: "https://www.bountyandsoul.org/" }
        ]},
        { day: "Friday", items: [
          { t: "11am–1pm", n: "Food Connection Truck", l: "Victory Fellowship, Weaverville", link: "https://www.foodconnection.org/" },
          { t: "1:30–3pm", n: "Bounty & Soul Produce Market", l: "Southside Community Ctr, 285 Livingston St", link: "https://www.bountyandsoul.org/" }
        ]},
        { day: "Saturday", items: [
          { t: "10–11:30am", n: "Bounty & Soul + Food Connection", l: "Art Space Charter, Swannanoa", link: "https://www.bountyandsoul.org/" }
        ]},
      ].map(({ day, items }) => (
        <div key={day} className="mb-6">
          <h3 className="font-fraunces text-xl text-[#3a5a4a] mb-3">{day}</h3>
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-[16px] card-shadow p-5 mb-3 border border-[#f3f9f5]">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-mono text-[0.85rem] font-bold text-[#c06030] shrink-0 pt-1">{it.t}</span>
                <div>
                  <div className="font-bold text-[#1a2520] text-[1.1rem]">{it.n}</div>
                  <div className="text-[#8a9e97] text-[0.9rem] mt-1">{it.l}</div>
                  {it.link && <div className="mt-2 text-sm"><LinkOut href={it.link}>View Details</LinkOut></div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function KidsTab() {
  return (
    <div className="anim visible">
      <SectionHeader overline="Caregivers">Baby Gear & Hygiene Resources</SectionHeader>
      <div className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-t-4 border-[#c06030] p-6 mb-8">
        <ul className="text-[1rem] space-y-4 text-[#4a5e57]">
          <li><strong className="text-[#1a2520] font-fraunces text-lg block mb-1">BEAR Closets (Free Clothes, Toys, Baby Gear):</strong>
              <div className="pl-4 border-l-2 border-[#eab892] space-y-1 mt-2 text-[0.95rem]">
                <p>✦ Abernethy UMC (Asheville): 1st/3rd Wed 10am-2pm</p>
                <p>✦ St. Pauls UMC (Asheville): 2nd/4th Wed 4pm-6pm</p>
                <p>✦ Snow Hill UMC (Candler): Tue 1pm-5pm</p>
                <p>✦ Loving Hearts (Marion): Wed 12pm-3pm</p>
              </div>
          </li>
          <li className="pt-4 border-t border-[#fbeede]">
            <strong className="text-[#1a2520] font-fraunces text-lg block">Register of Deeds (Downtown Asheville)</strong>
            Free Diapers & Formula (Mon-Fri 8am-5pm)
          </li>
          <li className="pt-4 border-t border-[#fbeede]">
            <strong className="text-[#1a2520] font-fraunces text-lg block">Lilac Health Milk Depot (Black Mountain)</strong>
            Breast Milk/Lactation support at Temple Chiropractic
          </li>
        </ul>
      </div>

      <SectionHeader overline="Libraries">Weekly Storytimes</SectionHeader>
      {[
        { n: "Family Storytime", w: "Mon 10am", l: "Edneyville Library & Mills River Library" },
        { n: "Baby Gym (4–18mos)", w: "Wed 10:30am", l: "Fairview Library" },
        { n: "Puppet Playtime", w: "Wed 10–11:30am", l: "East AVL Library" },
        { n: "Hora del Cuento — Bilingual", w: "Wed 10:30am", l: "Enka-Candler Library" },
        { n: "Baby Gym (4–18mos)", w: "Thu 11am", l: "Pack Library (Downtown)" },
      ].map((p, i) => (
        <Card key={i} title={p.n} icon="📖" type="terra">
          <p className="font-bold text-[#3a5a4a]">{p.w}</p>
          <p className="text-[0.9rem] text-[#8a9e97] mt-1">{p.l}</p>
        </Card>
      ))}
    </div>
  );
}

function NeighborhoodTab() {
  return (
    <div className="text-center py-20 anim visible opacity-70">
      <div className="text-5xl mb-6 text-[#5d8a72]">⚲</div>
      <h3 className="font-fraunces text-2xl mb-3 text-[#1a2520]">Neighborhood Directory</h3>
      <p className="text-[1rem] text-[#4a5e57]">Use the Free Food and Highlights tabs to explore resources by area.</p>
    </div>
  );
}

function EventsTab() {
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
    <div className="anim visible">
      <SectionHeader overline="Calendar">May 2026 Events</SectionHeader>
      {events.map((ev, i) => (
        <div key={i} className="mb-8 relative">
          <div className="sticky top-[84px] z-10 bg-[var(--color-cream)]/95 backdrop-blur py-2 mb-3">
            <h3 className="font-fraunces text-[1.4rem] font-medium text-[#7e6da0]">{ev.d}</h3>
          </div>
          <div className="bg-white rounded-[20px] card-shadow border border-[#eee9f5] p-6 space-y-4">
            {ev.items.map((item, j) => (
              <p key={j} className="text-[1rem] text-[#4a5e57] leading-relaxed flex gap-4 items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <span className="text-[#7e6da0] shrink-0 text-lg mt-0.5">✧</span>
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
    { n: "1", title: "Get a Buncombe County Library Card", desc: "Unlocks free storytimes, baby gyms, Zoom Passes to attractions, Wi-Fi hotspots, tech help, and hundreds of free programs.", link: "https://www.buncombecounty.org/governing/depts/library/", type: "sage" },
    { n: "2", title: "Sign Up for Bounty & Soul Produce", desc: "Free fresh produce distributed at multiple locations across Buncombe County every week. No income verification required.", link: "https://www.bountyandsoul.org/", type: "terra" },
    { n: "3", title: "Bookmark Your Library's Zoom Pass Page", desc: "Free passes to WNC Nature Center, Asheville Museum of Science, Hands On! Museum, and more.", link: "https://www.buncombecounty.org/governing/depts/library/services/zoom-local-attraction-pass.aspx", type: "lav" },
    { n: "4", title: "Download the Libby App", desc: "Free ebooks, audiobooks, and magazines with your library card. Works on any device.", link: "https://www.overdrive.com/apps/libby", type: "sage" },
  ];

  return (
    <div className="anim visible">
      <SectionHeader overline="Essentials">High-Impact Actions</SectionHeader>
      <div className="space-y-6">
        {actions.map((a, i) => {
          const iconBg = a.type === "terra" ? "bg-[#c06030]" : a.type === "lav" ? "bg-[#7e6da0]" : "bg-[#3a5a4a]";
          return (
            <div key={i} className="bg-white rounded-[20px] card-shadow card-hover p-6 flex gap-5 items-start group">
              <div className={`w-14 h-14 shrink-0 rounded-full ${iconBg} flex items-center justify-center text-white font-fraunces text-2xl shadow-inner transition-transform group-hover:scale-110`}>
                {a.n}
              </div>
              <div className="pt-1">
                <h3 className="font-fraunces text-[1.4rem] font-medium text-[#1a2520] mb-2">
                  {a.link ? <LinkOut href={a.link}>{a.title}</LinkOut> : a.title}
                </h3>
                <p className="text-[1rem] text-[#4a5e57] leading-relaxed">{a.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const tabs = [HighlightsTab, FreeFoodTab, KidsTab, NeighborhoodTab, EventsTab, TopActionsTab];
  const ActiveTab = tabs[tab];

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Fixed Navigation: 84px tall, frosted glass */}
      <nav className="fixed top-0 left-0 right-0 h-[84px] glass-nav z-50 border-b border-gray-200/50 flex items-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1180px] w-full mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group">
            <Motif />
            <h1 className="font-fraunces text-2xl tracking-tight text-[var(--color-ink)] font-medium">ConnectEd Circles</h1>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[0.95rem] font-medium text-[var(--color-ink-mid)]">
            <a href="#" className="hover:text-[var(--color-sage-700)] transition-colors">Home</a>
            <a href="#" className="hover:text-[var(--color-sage-700)] transition-colors">About</a>
            <a href="#" className="hover:text-[var(--color-sage-700)] transition-colors">Services</a>
            <a href="#" className="hover:text-[var(--color-sage-700)] transition-colors">Field Notes</a>
            <a href="#" className="hover:text-[var(--color-sage-700)] transition-colors">Resources</a>
            <span className="bg-[#e9f3ed] text-[#3a5a4a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide cursor-pointer hover:bg-[#d4e8dc] transition-colors">Español</span>
            <button className="btn-primary ml-2">Book a Consultation</button>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <main className="max-w-[1180px] mx-auto px-6 pt-[140px] pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Sidebar: Tabs (mobile horizontal, desktop vertical) */}
        <div className="lg:col-span-3">
          <div className="sticky top-[108px]">
            <h3 className="font-fraunces text-xl text-[#1a2520] mb-6 hidden lg:block">Directory</h3>
            <div className="flex lg:flex-col gap-2 overflow-x-auto hide-scrollbar pb-4 lg:pb-0">
              {TABS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setTab(i)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full text-[0.95rem] font-bold text-left transition-all ${
                    tab === i
                      ? "bg-[#3a5a4a] text-white shadow-md transform lg:translate-x-2"
                      : "bg-transparent border-[1.5px] border-[#d4e8dc] text-[#3a5a4a] hover:bg-[#f3f9f5]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-9 max-w-[760px]">
          <ActiveTab />
        </div>
      </main>
    </div>
  );
}
