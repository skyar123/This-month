import { useState } from "react";

const TABS = ["📅 Events", "🍽️ Food & Basics", "👶 Kids & Families", "🏘️ Neighborhoods"];

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

// ── Upcoming dated events ─────────────────────────────────────────────────────
const UPCOMING_EVENTS = [
  { d: "May 29", items: [
    { t: "All weekend (May 29–31) · Connect Beyond Festival · The Orange Peel, Asheville", l: "https://www.connectbeyondfestival.com" },
  ]},
  { d: "May 30", items: [
    { t: "9 AM · Lucerne Park Yard Sale · Lucerne Park, Asheville", l: "https://www.facebook.com/events/841212705151220/" },
    { t: "10 AM · Lavender Season Begins! · 2951 Chimney Rock Rd, Hendersonville, NC (Lindy, Ellie & Melanie interested)", l: "https://www.facebook.com/events/1900786267226845/" },
    { t: "11 AM · Turkish Food Festival-Spring '26 · 300 S Main St, Greenville, SC", l: "https://www.facebook.com/events/1996383871091029/" },
    { t: "6 PM · Sippin' in Simpsonville Summer Beer Tasting · Downtown Simpsonville", l: "https://www.facebook.com/events/1492519205769464/" },
    { t: "6:30 PM doors, 7 PM show · Resound Community Choir Spring Concert · First Congregational UCC, 20 Oak St, Asheville", l: "https://ticketstripe.com/resoundspringconcert2026" },
    { t: "7:30 PM · The Wonderful Wizard of Oz · Hazel Robinson Amphitheatre, 92 Gay St, Asheville", l: "https://www.facebook.com/events/1476408380677634/" },
  ]},
  { d: "May 31", items: [
    { t: "10 AM · Uncommon Market Asheville · 1 Foundy St, Asheville", l: "https://www.facebook.com/events/3881942205441026/" },
    { t: "11 AM · Sunday Sound Meditation with Himalayan Bowls · 157 S Lexington Ave, Asheville", l: "https://www.facebook.com/events/1248499266930414/" },
    { t: "1 PM · Rhododendron Ramble (final day) · Grandfather Mountain — free 30-min guided strolls", l: "https://www.romanticasheville.com/listing/events/rhododendron-ramble.htm" },
  ]},
  { d: "Jun 1", items: [
    { t: "Mon–Fri (Jun 1–5) · Recovery Coach Academy · AB Tech Ferguson Building, Asheville", l: "https://www.facebook.com/events/1504099784395982/" },
  ]},
  { d: "Jun 3", items: [
    { t: "Housing Recovery Board (Hybrid) · City of Asheville", l: "https://www.ashevillenc.gov/event/housing-recovery-board-hybrid-4/" },
    { t: "Rescheduled: Planning and Zoning Commission (In-Person) · City of Asheville", l: "https://www.ashevillenc.gov/event/planning-and-zoning-commission-in-person-6/" },
    { t: "8 PM · Tank and The Bangas: The Last Balloon Tour · The Grey Eagle, Asheville", l: "https://www.facebook.com/events/925085423496844/" },
  ]},
  { d: "Jun 4", items: [
    { t: "City Council Agenda Briefing (Virtual)", l: "https://www.ashevillenc.gov/event/city-council-agenda-briefing-virtual-17/" },
  ]},
  { d: "Jun 5", items: [
    { t: "FAB Fest Summer Dates begin — Fridays through Aug 7 · Food, Arts & Brews · Central St, Downtown Rutherfordton", l: "https://www.romanticasheville.com/listing/events/fab-fest-summer-dates.htm" },
    { t: "Mountain Community Capital Fund Operating Committee (In-person) · City of Asheville", l: "https://www.ashevillenc.gov/event/mountain-community-capital-fund-operating-committee-in-person/" },
    { t: "7 PM · Asheville Drag Bingo: Beach Bingo Fundraiser for the YWCA · Hilltop Event Center, 21 Restaurant Ct", l: "https://www.facebook.com/events/982305304327858/" },
    { t: "7:30 PM · Othello · Hazel Robinson Amphitheatre, 92 Gay St, Asheville", l: "https://www.facebook.com/events/930534413321429/" },
  ]},
  { d: "Jun 6", items: [
    { t: "9 AM · 35th Annual Antique & Vintage Show · Downtown Hendersonville, NC", l: "https://www.facebook.com/events/1662830191738675/" },
    { t: "12 PM · Asheville Pickle Festival · Asheville Outlets", l: "https://www.facebook.com/events/1240019264753825/" },
    { t: "5 PM · Dirty Soda & Lemonade with the Highland Cows · 4957 Old Stage Rd, Chuckey, TN", l: "https://www.facebook.com/events/1149101913843374/" },
  ]},
  { d: "Jun 7", items: [
    { t: "11 AM · Three Year Anniversary Purrrty! · 841 Haywood Rd., Asheville", l: "https://www.facebook.com/events/2622647471484182/" },
    { t: "12 PM · 5th Annual Asheville HoneyFest · Highland Brewing Company", l: "https://www.facebook.com/events/1422066559667516/" },
    { t: "8 PM · The Deslondes · The Grey Eagle, Asheville", l: "https://www.facebook.com/events/1714369526214778/" },
  ]},
  { d: "Jun 8", items: [
    { t: "Shiloh Community Association Meeting · City of Asheville", l: "https://www.ashevillenc.gov/event/shiloh-community-association-meeting/" },
  ]},
  { d: "Jun 9", items: [
    { t: "City Council Meeting (In-Person)", l: "https://www.ashevillenc.gov/event/city-council-meeting-in-person-8/" },
  ]},
  { d: "Jun 10", items: [
    { t: "Historic Resources Commission (In-Person)", l: "https://www.ashevillenc.gov/event/historic-resources-commission-in-person-12/" },
  ]},
  { d: "Jun 11", items: [
    { t: "7 PM · Nerd Nite June · River Arts District Brewing Company, Asheville", l: "https://www.facebook.com/events/2102375343657588/" },
  ]},
  { d: "Jun 12", items: [
    { t: "Movies in the Park · City of Asheville", l: "https://www.ashevillenc.gov/event/movies-in-the-park-2/" },
  ]},
  { d: "Jun 13", items: [
    { t: "8 AM–10 PM · GRINDFest AVL (FREE) · Pack Square Park — celebrating Black business & entrepreneurship, live music, vendors", l: "https://www.romanticasheville.com/listing/events/grindfest-avl.htm" },
    { t: "2 PM · SONG-O with Divine: Benefiting Youth OUTright · 131 Sweeten Creek Rd, Ste. 10, Asheville", l: "https://www.facebook.com/events/978781921561451/" },
    { t: "Jun 13–Oct 4 · Sapphire Valley Arts and Crafts Show (pottery, textiles, woodwork, live music)", l: "https://www.romanticasheville.com/listing/events/sapphire-valley-arts-and-crafts-show.htm" },
  ]},
  { d: "Jun 16", items: [
    { t: "Historic Resources Commission Executive Committee (Virtual)", l: "https://www.ashevillenc.gov/event/historic-resources-commission-executive-committee-virtual-5/" },
    { t: "Housing and Community Development Committee (Virtual)", l: "https://www.ashevillenc.gov/event/housing-and-community-development-committee-virtual-14/" },
    { t: "Planning, Economic Development and Environment Committee (Virtual)", l: "https://www.ashevillenc.gov/event/planning-economic-development-and-environment-committee-virtual-14/" },
    { t: "Burton St Community Association Monthly Meeting", l: "https://www.ashevillenc.gov/event/burton-st-community-association-monthly-meeting-6/" },
  ]},
  { d: "Jun 18", items: [
    { t: "City Council Agenda Briefing (Virtual)", l: "https://www.ashevillenc.gov/event/city-council-agenda-briefing-virtual-18/" },
    { t: "Design Review Committee (In-Person)", l: "https://www.ashevillenc.gov/event/design-review-committee-in-person-11/" },
  ]},
  { d: "Jun 19", items: [
    { t: "7 PM · Josh Johnson's Comedy Band Camp · Harrah's Cherokee Center, Asheville", l: "https://www.facebook.com/events/1621330085870973/" },
  ]},
  { d: "Jun 20", items: [
    { t: "11 AM · Pride Drag Brunch Fundraiser for Blue Ridge Pride · Banks Ave, Asheville", l: "https://www.facebook.com/events/1992776904944945/" },
  ]},
  { d: "Jun 21", items: [
    { t: "12 PM · Magical Market · 841 Haywood Rd., Asheville", l: "https://www.facebook.com/events/1463737018524096/" },
  ]},
  { d: "Jun 22", items: [
    { t: "Board of Adjustment (In-Person)", l: "https://www.ashevillenc.gov/event/board-of-adjustment-in-person-13/" },
  ]},
  { d: "Jun 23", items: [
    { t: "City Council Worksession on Policy, Finance & Infrastructure (In-Person)", l: "https://www.ashevillenc.gov/event/city-council-worksession-on-policy-finance-and-infrastructure-in-person-4/" },
    { t: "City Council Meeting", l: "https://www.ashevillenc.gov/event/city-council-meeting-12/" },
    { t: "Rescheduled: People & Environment Recovery Board Joint Meeting (In-Person)", l: "https://www.ashevillenc.gov/event/people-and-environment-recovery-board-hybrid-4/" },
    { t: "Rescheduled: Infrastructure Recovery Board Joint Meeting (In-Person)", l: "https://www.ashevillenc.gov/event/infrastructure-recovery-board-hybrid-4/" },
  ]},
  { d: "Jun 25", items: [
    { t: "Special Meeting: Urban Forestry Commission (In-Person)", l: "https://www.ashevillenc.gov/event/special-meeting-urban-forestry-commission-in-person-2/" },
  ]},
  { d: "Jun 27", items: [
    { t: "10 PM · ANTHEM: Pride Dance Party · OHenrys Asheville", l: "https://www.facebook.com/events/1197114189099162/" },
  ]},
  { d: "Jul 1", items: [
    { t: "Planning and Zoning Commission (In-Person)", l: "https://www.ashevillenc.gov/event/planning-and-zoning-commission-in-person-7/" },
  ]},
  { d: "Jul 2", items: [
    { t: "Civil Service Board (In-Person)", l: "https://www.ashevillenc.gov/event/civil-service-board-in-person-8/" },
  ]},
  { d: "Jul 3", items: [
    { t: "Mountain Community Capital Fund Operating Committee (In-person)", l: "https://www.ashevillenc.gov/event/mountain-community-capital-fund-operating-committee-in-person-2/" },
  ]},
  { d: "Jul 7", items: [
    { t: "Board of Electrical Examiners (Virtual)", l: "https://www.ashevillenc.gov/event/board-of-electrical-examiners-virtual-4/" },
  ]},
  { d: "Jul 8", items: [
    { t: "Historic Resources Commission (In-Person)", l: "https://www.ashevillenc.gov/event/historic-resources-commission-in-person-13/" },
  ]},
  { d: "Jul 10", items: [
    { t: "3:30 PM · The Princess Concert · Thomas Wolfe Auditorium, Asheville", l: "https://www.facebook.com/events/2086366882202695/" },
    { t: "5:30 PM · Dark Market Asheville: Summerween Horror Show · Hi-Wire Brewing RAD Beer Garden", l: "https://www.facebook.com/events/1604508890790302/" },
    { t: "Movies in the Park", l: "https://www.ashevillenc.gov/event/movies-in-the-park-3/" },
  ]},
  { d: "Jul 11", items: [
    { t: "Sat–Sun (Jul 11–12) · The Big Crafty · Harrah's Cherokee Center, Asheville", l: "https://www.facebook.com/events/1470931424400414/" },
  ]},
  { d: "Jul 16", items: [
    { t: "Economy Recovery Board (Hybrid)", l: "https://www.ashevillenc.gov/event/economy-recovery-board-hybrid-5/" },
    { t: "Design Review Committee (In-Person)", l: "https://www.ashevillenc.gov/event/design-review-committee-in-person-12/" },
  ]},
  { d: "Jul 21", items: [
    { t: "Historic Resources Commission Executive Committee (Virtual)", l: "https://www.ashevillenc.gov/event/historic-resources-commission-executive-committee-virtual-7/" },
    { t: "Housing and Community Development Committee (Virtual)", l: "https://www.ashevillenc.gov/event/housing-and-community-development-committee-virtual-15/" },
    { t: "Planning, Economic Development and Environment Committee (Virtual)", l: "https://www.ashevillenc.gov/event/planning-economic-development-and-environment-committee-virtual-15/" },
    { t: "Burton St Community Association Monthly Meeting", l: "https://www.ashevillenc.gov/event/burton-st-community-association-monthly-meeting-9/" },
  ]},
  { d: "Jul 23", items: [
    { t: "City Council Agenda Briefing (Virtual)", l: "https://www.ashevillenc.gov/event/city-council-agenda-briefing-virtual-13/" },
  ]},
  { d: "Sep 7", items: [
    { t: "Through Sep 7 · Art on the Greene · Banner Elk Historic School Grounds — 40–60 regional artists, ceramics, glass, paintings", l: "https://www.romanticasheville.com/listing/events/art-greene-banner-elk.htm" },
  ]},
  { d: "Sep 12", items: [
    { t: "11:30 AM · 2nd Annual Renaissance Festival at MRB! · Mills River Brewing Co.", l: "https://www.facebook.com/events/1643740546769952/" },
  ]},
  { d: "Sep 18", items: [
    { t: "Fri–Sun (Sep 18–20) · Upstate Renaissance Faire · 2325 Hampton Rd, Wellford, SC", l: "https://www.facebook.com/events/25135502286142559/" },
  ]},
  { d: "Oct 3", items: [
    { t: "11 AM · Greer Arts & Eats Festival · Downtown Greer (Krista, Melanie & Judi interested)", l: "https://www.facebook.com/events/1830570911663373/" },
  ]},
  { d: "Oct 4", items: [
    { t: "Through Oct 4 · Sapphire Valley Arts and Crafts Show ends", l: "https://www.romanticasheville.com/listing/events/sapphire-valley-arts-and-crafts-show.htm" },
  ]},
  { d: "Oct 25", items: [
    { t: "7 PM · Leanne Morgan: THE TIME OF OUR LIVES TOUR · Bon Secours Wellness Arena, Greenville, SC", l: "https://www.facebook.com/events/2160652654752140/" },
  ]},
  { d: "Nov 5", items: [
    { t: "8 PM · Aaron Lee Tasjan w/ Madeleine Kelson · The Grey Eagle, Asheville", l: "https://www.facebook.com/events/840730165015876/" },
  ]},
  { d: "Nov 20", items: [
    { t: "7 PM · Karen Peck and New River in Concert (FREE) · 219 Pendleton St, Pickens, SC", l: "https://www.facebook.com/events/2023308045067097/" },
  ]},
];

// ── Browse-more events (dates TBD / no confirmed date) ──────────────────────
const EXPLORE_MORE = [
  { t: "Statemint Asheville's Spring Pop-up Consignment Event (Women & Men)", l: "https://www.facebook.com/events/932900056142735/" },
  { t: "Asheville Movies in the Park 2026", l: "https://www.facebook.com/events/1241890931361132/" },
  { t: "Asheville Veganfest — Spring", l: "https://www.facebook.com/events/1619772332620824/" },
  { t: "Asheville Veganfest — Fall", l: "https://www.facebook.com/events/964962849230799/" },
  { t: "2026 Asheville Spartan Event Weekend", l: "https://www.facebook.com/events/1013564927371254/" },
  { t: "Asheville Book Signing & Fund Raising Event", l: "https://www.facebook.com/events/1491940986013829/" },
  { t: "Golden Hour Yoga & Private Salt Cave", l: "https://www.facebook.com/events/995633426360007/" },
  { t: "The Reset Event Hosted by First Fruits", l: "https://www.facebook.com/events/1242910767385307/" },
  { t: "Sunset Dance Downtown w/ DJ Mikaya & Startribe", l: "https://www.facebook.com/events/2423665904770506/" },
  { t: "MCAR at Asheville Humane Pop-Up Adoption Event", l: "https://www.facebook.com/events/27030249383252612/" },
  { t: "Concerts on the Creek in Sylva ft. Tuxedo Junction", l: "https://www.facebook.com/events/1235835401695217/" },
  { t: "ABSFest: Tarot for Fun & Profit Workshop with Madame Onça", l: "https://www.facebook.com/events/1336223651762712/" },
  { t: "Brunch and Beats: 2026 Kickoff", l: "https://www.facebook.com/events/4413800502197451/" },
  { t: "Soul Blue Rocks the Cork & Keg", l: "https://www.facebook.com/events/1626774368410840/" },
  { t: "R.I.O.T. Collective Launch Party!", l: "https://www.facebook.com/events/2392888871224870/" },
  { t: "A Day of Giving Event for FUR", l: "https://www.facebook.com/events/1330282532531467/" },
  { t: "New Moon Breakthrough Breathworkshop with Sound Bath", l: "https://www.facebook.com/events/906309905555532/" },
  { t: "Let's Meditate", l: "https://www.facebook.com/events/1492608159258844/" },
  { t: "Community Vendor Event / Spring Fling at the Army", l: "https://www.facebook.com/events/1596754648224147/" },
  { t: "Shindig at the Shed 5", l: "https://www.facebook.com/events/1578090069951243/" },
  { t: "Showdown In The Valley 2026", l: "https://www.facebook.com/events/1772984020061637/" },
  { t: "CreepyCon 2026 — 10 Year Anniversary Bash!", l: "https://www.facebook.com/events/1315633967284958/" },
  { t: "Family Event: Edible Soil Layers at the Bloomingdale Branch Library", l: "https://www.facebook.com/events/1495204618969582/" },
  { t: "My Family Heirloom Identification Event", l: "https://www.facebook.com/events/1314195153414552/" },
  { t: "Bark & Bolt 5k + Bark in the Park Dog Fair", l: "https://www.facebook.com/events/1878362173073874/" },
  { t: "Streetside Classics — Charlotte Spring Car Show 2026", l: "https://www.facebook.com/events/1209555697426366/" },
  { t: "Elizabeth as Taylor — The Taylor Swift Tribute (Live Band!)", l: "https://www.facebook.com/events/2466905840388196/" },
  { t: "The Dam Craft Fair", l: "https://www.facebook.com/events/913763771546378/" },
  { t: "Boutiques & Brunch at The Farm, A Gathering Place", l: "https://www.facebook.com/events/1394611352409908/" },
  { t: "Book Launch: 'The Persephone Project'", l: "https://www.facebook.com/events/1236519278362209/" },
  { t: "Jug Tavern Festival 2026", l: "https://www.facebook.com/events/845945725186722/" },
  { t: "Foraging Class", l: "https://www.facebook.com/events/682769518164355/" },
  { t: "Star Wars Unlimited Monday Tournament!", l: "https://www.facebook.com/events/988517477173521/" },
  { t: "Samaritan's Purse Trip: Yancey County, NC Rebuild", l: "https://www.facebook.com/events/1639962127211769/" },
  { t: "Reasonably Priced Babies: The Spring Zing Show at Revival", l: "https://www.facebook.com/events/958762413713847/" },
  { t: "Moonshine Valley F-100's", l: "https://www.facebook.com/events/4275671229361216/" },
];

const FILTERS = [
  { label: "All", key: "all", emoji: "✨" },
  { label: "Free", key: "free", emoji: "🆓" },
  { label: "Kids", key: "kids", emoji: "👶" },
  { label: "Food", key: "food", emoji: "🌽" },
  { label: "Arts", key: "arts", emoji: "🎨" },
  { label: "Wellness", key: "wellness", emoji: "🧘" },
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
  if (low.includes("manna") || (low.includes("market") && !low.includes("ymca") && !low.includes("dark market"))) return "🌽";
  if (low.includes("ymca")) return "🥗";
  if (low.includes("ywam") || low.includes("food truck")) return "🚚";
  if (low.includes("feast") || low.includes("feed the people") || low.includes("dinner") || low.includes("12 baskets")) return "🍽️";
  if (low.includes("bounty")) return "🥬";
  if (low.includes("dental") || low.includes("smiles")) return "🦷";
  if (low.includes("yoga") || low.includes("pound") || low.includes("stretching") || low.includes("mindfulness") || low.includes("meditation") || low.includes("breathwork") || low.includes("sound bath") || low.includes("himalayan")) return "🧘";
  if (low.includes("museum") || low.includes("amos")) return "🦖";
  if (low.includes("movie") || low.includes("video game") || low.includes("cinema")) return "🍿";
  if (low.includes("renaissance") || low.includes("faire")) return "⚔️";
  if (low.includes("art") || low.includes("craft") || low.includes("munch") || low.includes("flower") || low.includes("antique") || low.includes("vintage") || low.includes("boutique")) return "🎨";
  if (low.includes("arms around") || low.includes("autism") || low.includes("support group") || low.includes("pet therapy")) return "💜";
  if (low.includes("plant") || low.includes("herbal") || low.includes("foraging") || low.includes("rhododendron") || low.includes("lavender")) return "🌸";
  if (low.includes("tax")) return "📝";
  if (low.includes("library") || low.includes("storytime") || low.includes("book")) return "📚";
  if (low.includes("concert") || low.includes("choir") || low.includes("bangas") || low.includes("tasjan") || low.includes("deslondes") || low.includes("karen peck") || low.includes("nerd nite")) return "🎵";
  if (low.includes("band") && !low.includes("comedy band")) return "🎵";
  if (low.includes("comedy") || low.includes("josh johnson")) return "😂";
  if (low.includes("drag") || low.includes("pride") || low.includes("anthem") || low.includes("bingo") || low.includes("lgbtq")) return "🌈";
  if (low.includes("wizard") || low.includes("othello") || low.includes("theater") || low.includes("theatre")) return "🎭";
  if (low.includes("honeyfest") || low.includes("pickle")) return "🍯";
  if (low.includes("beer") || low.includes("brewing") || low.includes("brew") || low.includes("sip")) return "🍺";
  if (low.includes("yard sale") || low.includes("consignment") || low.includes("crafty") || low.includes("craft fair") || low.includes("dam craft")) return "🛍️";
  if (low.includes("council") || low.includes("commission") || low.includes("board") || low.includes("committee") || low.includes("zoning") || low.includes("civil service") || low.includes("recovery board") || low.includes("infrastructure")) return "🏛️";
  if (low.includes("grind") || low.includes("entrepreneurship") || low.includes("black business")) return "✊";
  if (low.includes("princess")) return "👑";
  if (low.includes("dark market") || low.includes("horror") || low.includes("creepy") || low.includes("halloween")) return "🕷️";
  if (low.includes("dog") || low.includes("pet") || low.includes("animal") || low.includes("adoption") || low.includes("fur")) return "🐾";
  if (low.includes("car show") || low.includes("f-100")) return "🚗";
  if (low.includes("taylor swift")) return "🎸";
  if (low.includes("samaritan") || low.includes("rebuild")) return "🔨";
  if (low.includes("tarot")) return "🔮";
  if (low.includes("dance")) return "💃";
  if (low.includes("vendor") || low.includes("festival") || low.includes("fest")) return "🎪";
  if (low.includes("food festival") || low.includes("turkish food") || low.includes("honey") || low.includes("eats")) return "🍽️";
  if (low.includes("5k") || low.includes("run") || low.includes("spartan")) return "🏃";
  if (low.includes("recovery coach") || low.includes("community association") || low.includes("shiloh")) return "🤝";
  if (low.includes("connect beyond")) return "🌀";
  return "✨";
}

// ── Events Tab ────────────────────────────────────────────────────────────────
function EventsTab({ activeFilter }) {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  const isPast = (dateStr) => {
    const parts = dateStr.split(" ");
    const months = { Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 };
    const m = months[parts[0]];
    const d = parseInt(parts[1]);
    if (!m || isNaN(d)) return false;
    return m < todayMonth || (m === todayMonth && d < todayDay);
  };

  const filterFn = (item) => {
    if (activeFilter === "all") return true;
    const low = item.t.toLowerCase();
    if (activeFilter === "free") return low.includes("free") || low.includes("grind") || low.includes("donation") || low.includes("rhododendron");
    if (activeFilter === "food") return low.includes("honey") || low.includes("pickle") || low.includes("food") || low.includes("sip") || low.includes("beer") || low.includes("brew") || low.includes("fab fest") || low.includes("eats") || low.includes("turkish");
    if (activeFilter === "kids") return low.includes("princess") || low.includes("wizard") || low.includes("crafty") || low.includes("family") || low.includes("bark") || low.includes("movie") || low.includes("edible soil");
    if (activeFilter === "arts") return low.includes("art") || low.includes("craft") || low.includes("antique") || low.includes("vintage") || low.includes("market") || low.includes("consignment") || low.includes("pottery") || low.includes("renaissance") || low.includes("faire") || low.includes("boutique");
    if (activeFilter === "wellness") return low.includes("meditation") || low.includes("yoga") || low.includes("breathwork") || low.includes("sound") || low.includes("himalayan") || low.includes("mindful") || low.includes("meditate");
    return true;
  };

  const upcomingDays = UPCOMING_EVENTS
    .filter(ev => !isPast(ev.d))
    .map(ev => ({ ...ev, items: ev.items.filter(filterFn) }))
    .filter(ev => ev.items.length > 0);

  const filteredExplore = EXPLORE_MORE.filter(filterFn);

  return (
    <div>
      <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-5 mb-4 border border-violet-200">
        <p className="text-base font-medium text-gray-800">Upcoming events in Asheville and WNC. Always confirm with venue before attending! 📅</p>
      </div>

      {upcomingDays.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-8">No upcoming events match this filter.</p>
      )}

      {upcomingDays.map((ev, i) => (
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

      {filteredExplore.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔍</span>
            <h2 className="text-lg font-medium text-[#1a2520] tracking-tight" style={{ fontFamily: "var(--font-fraunces)" }}>Explore More (Dates TBD)</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            {filteredExplore.map((item, i) => (
              <div key={i} className="flex gap-2 items-start py-2 border-b border-gray-50 last:border-0">
                <span className="text-base shrink-0 mt-0.5">{getEventEmoji(item.t)}</span>
                <span className="text-sm flex-1 break-words">
                  {item.l
                    ? <a href={item.l} target="_blank" rel="noopener noreferrer" className={`text-[#c06030] ${linkStyle}`}>{item.t} ↗</a>
                    : item.t}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
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

export default function App() {
  const [tab, setTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const tabs = [EventsTab, FreeFoodTab, KidsTab, NeighborhoodTab];
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
                Asheville & WNC Events
              </h1>
              <p className="text-[10px] font-semibold text-[#5d8a72] tracking-wide uppercase">ConnectEd Circles · 2026</p>
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

        {/* Filter Chips — only shown on Events tab */}
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
