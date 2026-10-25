// inline svgs / html used as artwork inside each project card
const aliceArt = `
  <div style="position:relative; display:flex; align-items:center; justify-content:center;">
    <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="56" rx="42" ry="48" fill="none" stroke="#1f4d4a" stroke-width="3"/>
      <ellipse cx="60" cy="56" rx="42" ry="48" fill="rgba(31,77,74,0.08)"/>
      <path d="M60 16 C 35 18, 22 38, 26 60" stroke="#1f4d4a" stroke-width="2" stroke-linecap="round" opacity="0.55" fill="none"/>
      <rect x="56" y="100" width="8" height="22" rx="2" fill="#1f4d4a"/>
      <rect x="46" y="120" width="28" height="6" rx="3" fill="#1f4d4a"/>
      <circle cx="60" cy="56" r="6" fill="#1f4d4a"/>
    </svg>
  </div>
`;

const procreateArt = `
  <div style="position:absolute;inset:0;background-image: radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px); background-size: 4px 4px; opacity: 0.18; mix-blend-mode: overlay;"></div>
  <div style="position:relative; display:flex; align-items:center; justify-content:center;">
    <div style="width:170px; height:170px; border-radius:50%;
      background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95) 0%, rgba(252,232,242,0.75) 40%, rgba(232,222,245,0.7) 75%, rgba(218,224,245,0.7) 100%);
      box-shadow: 0 20px 40px -14px rgba(150,130,190,0.3), inset 0 2px 22px rgba(255,255,255,0.9), inset 0 -8px 26px rgba(200,180,220,0.18);
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      display:flex; align-items:center; justify-content:center;">
      <svg width="72" height="72" viewBox="0 0 384 512" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 4px 10px rgba(180,140,200,0.35));">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
      </svg>
    </div>
  </div>
`;

const nomadlyArt = `
  <img src="/nomadly-logo.png" alt="Nomadly logo"
    style="display:block; width:70%; max-width:640px; height:auto; max-height:70%; object-fit:contain; filter: drop-shadow(0 12px 24px rgba(60,90,160,0.18));"/>
`;

const tierArt = `
  <div style="position:absolute;inset:0;background:
    radial-gradient(ellipse at 28% 22%, rgba(198,242,74,0.22), transparent 60%),
    radial-gradient(ellipse at 75% 80%, rgba(255,255,255,0.10), transparent 65%),
    linear-gradient(140deg, #0c2a18 0%, #14542a 55%, #2d8a3e 100%);"></div>
  <div style="position:absolute;inset:0;background-image: radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 5px 5px; opacity: 0.07;"></div>
  <div style="position:relative; display:flex; align-items:center; justify-content:center;">
    <svg width="240" height="190" viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="12" width="120" height="166" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(223,245,194,0.35)" stroke-width="1.4"/>
      <g font-family="ui-sans-serif,system-ui,sans-serif" font-size="11" font-weight="600" letter-spacing="0.18em" fill="#dff5c2">
        <line x1="60" y1="44" x2="180" y2="44" stroke="rgba(223,245,194,0.22)" stroke-width="1"/>
        <line x1="60" y1="76" x2="180" y2="76" stroke="rgba(223,245,194,0.22)" stroke-width="1"/>
        <line x1="60" y1="108" x2="180" y2="108" stroke="rgba(223,245,194,0.22)" stroke-width="1"/>
        <line x1="60" y1="140" x2="180" y2="140" stroke="rgba(223,245,194,0.22)" stroke-width="1"/>
        <text x="72" y="30" opacity="0.55">P5</text>
        <text x="72" y="62" opacity="0.7">P4</text>
        <rect x="60" y="84" width="120" height="24" rx="5" fill="#c6f24a"/>
        <text x="72" y="101" fill="#0c2a18" font-weight="700">P3</text>
        <circle cx="158" cy="96" r="3.6" fill="#0c2a18"/>
        <text x="72" y="126" opacity="0.7">P2</text>
        <text x="72" y="158" opacity="0.55">P1</text>
      </g>
    </svg>
  </div>
`;

const mossArt = `
  <img src="/mint-logo-overview.png" alt="MOSS / MINT logo"
    style="display:block; width:70%; max-width:640px; height:auto; max-height:70%; object-fit:contain;"/>
`;

const codeReviewerArt = `
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="100" rx="26" fill="rgba(255,255,255,0.7)"/>
    <path d="M48 44 32 60l16 16M72 44l16 16-16 16" stroke="#3b4a6b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M64 38 56 82" stroke="#6b7fd7" stroke-width="6" stroke-linecap="round"/>
  </svg>
`;

const moodprintArt = `
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="46" stroke="#c2789a" stroke-width="3" opacity="0.35"/>
    <circle cx="60" cy="60" r="34" stroke="#c2789a" stroke-width="3" opacity="0.55"/>
    <circle cx="60" cy="60" r="22" stroke="#c2789a" stroke-width="3" opacity="0.8"/>
    <circle cx="60" cy="60" r="10" fill="#c2789a"/>
  </svg>
`;

const qbitGoArt = `
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#2f6b5e" stroke-width="2" opacity="0.35">
      <path d="M24 30h72M24 50h72M24 70h72M24 90h72M30 24v72M50 24v72M70 24v72M90 24v72"/>
    </g>
    <circle cx="50" cy="50" r="9" fill="#1f3d36"/>
    <circle cx="70" cy="70" r="9" fill="#ffffff" stroke="#1f3d36" stroke-width="2"/>
    <circle cx="70" cy="50" r="9" fill="#1f3d36" opacity="0.45"/>
    <circle cx="70" cy="50" r="9" stroke="#1f3d36" stroke-width="2"/>
  </svg>
`;

// text fields accept **bold** markup
export interface ProjectSection {
  label?: string;
  intro?: string[];
  items?: { heading: string; body?: string; bullets?: string[] }[];
  /** list style for items (default "numbered") */
  list?: "numbered" | "bullets";
  /** run the bold heading into the body instead of on its own line */
  inline?: boolean;
  /** plain bullet list, after items */
  points?: string[];
  /** paragraphs after the lists */
  outro?: string[];
  /** preformatted block, e.g. a file tree */
  code?: string;
  /** image shown after the section; without src it renders as a placeholder */
  figure?: { src?: string; alt: string };
}

export interface Project {
  slug: string;
  company: string;
  year: string;
  bg: string;
  inner: string;
  title: string;
  tagline: string;
  role: string;
  team: string;
  timeline: string;
  skills: string[];
  overview: string[];
  problem: string[];
  sections?: ProjectSection[];
  reflections: { heading: string; body: string }[];
  heroVideo?: string;
  heroVideoFormat?: "phone" | "desktop";
  /** frame shape for a desktop demo, e.g. "4 / 3"; the video fills it, cropped from the centre */
  heroAspect?: string;
  /** overrides the default Role / Team / Timeline / Skills info blocks */
  info?: { label: string; value: string; href?: string }[];
}

export const projects: Project[] = [
  /* previous Evo case study — kept for reference
  {
    slug: "tier-evo",
    company: "Evo",
    year: "2025",
    bg: "linear-gradient(140deg, #f1f5f9 0%, #f6f7fa 50%, #faf9fb 100%)",
    inner: tierArt,
    heroVideo: "/Evo-overview-video.mov",
    title: "Tier — contextual parking intelligence for Evo",
    tagline:
      "A parking intelligence layer for Evo",
    role: "Product Designer",
    team: "Solo (Concept)",
    timeline: "Summer 2026",
    skills: [
      "Product Design",
      "Interaction Design",
      "Systems Thinking",
      "UX Research",
      "Information Architecture",
    ],
    overview: [
      "This is a contextual parking intelligence layer for the Evo car-share app helping drivers know if a lot is open, which floor their car is on, and how to actually get to it before they walk over.",
    ],
    problem: [
      "You open the Evo app. You spot a car two blocks away, parked at a parkade downtown. You reserve it, walk over, step inside the structure — and then the app goes completely silent. No floor. No lot hours. No access instructions. Just a street address and a timer counting down.",
      "This is the moment Evo drops the ball. Every other step of the booking flow has information like the map, the car detail, the reserve screen — but the one moment that requires the most physical navigation gets nothing. Users wander dark parkades hitting the horn. They ride elevators to closed rooftop levels. They walk up to locked structures at 11:01 pm.",
      "The problem isn't rare. It happens every time Evo parks a car inside a structure, which in Vancouver, a city full of multi-level parkades is constantly.",
    ],
    sections: [
      {
        label: "the current space",
        items: [
          {
            heading: "What Evo shows you today",
            body: "When you tap a car in a parking structure, the app gives you: a license plate, a car model, a fuel percentage, and a street address. That's it. From there, you're on your own. The app hands off to Apple Maps or Google Maps with the street address as the destination and not the lot entrance, not the correct level, not even a note that the car is inside a structure at all. Maps drops you somewhere on the sidewalk. You figure out the rest.",
          },
          {
            heading: "What's missing",
            body: "There are three specific failure modes that happen regularly. First, the lot is closed: the Evo app has no awareness of operating hours for parking structures, so a car parked at a lot that closes at 10 pm looks identical to one on a 24-hour street spot. Second, the car is on the rooftop: some Vancouver parkades have rooftop levels that close independently from the rest of the structure or are physically separated in a way that's hard to navigate without knowing ahead of time. Third, the car is somewhere on floors P1 through P5 and the driver doesn't know which one without a level indicator, finding the car becomes a floor-by-floor search. These aren't edge cases. They're structural gaps in the product experience.",
          },
        ],
      },
      {
        label: "discovery",
        items: [
          {
            heading: "The insight hiding in plain sight",
            body: "I didn't start with a solution. I started by mapping what the app actually knows at each step of the booking flow, and where that knowledge stops. Evo knows the car's GPS coordinates continuously. It knows the car's altitude. It knows when the engine turns off. It knows which parking structures exist in Vancouver. What it doesn't do is connect those signals into anything useful for the person walking toward the car. The gap isn't a data problem. It's a product problem. The information exists but it just never makes it into the experience.",
          },
          {
            heading: "Three questions that shaped everything",
            body: "Once I defined the gap, three questions guided the design. Where does the driver need this information most? Not on the map, it's too early. Not after they've arrived it's too late. The answer was at the moment of decision: when they tap the car and when they reserve it. How do you get reliable floor and lot status data without a direct partnership with every parking operator in the city? This pointed toward a community-driven model, verified over time rather than sourced from a single authority. How do you add this layer without adding friction? The parking info should feel like it was always there, not like a new screen or a new workflow the driver has to learn.",
          },
        ],
      },
      {
        label: "ideation",
        items: [
          {
            heading: "The constraint that made the design better",
            body: "Early on I set a rule for myself: no new screens. Whatever the parking layer looked like, it had to live inside the existing flow. Tap car → reserve → navigate → end trip. Adding a new step would mean asking drivers to change a habit they've already built. This constraint pushed me toward contextual surfacing. The parking info panel only appears on the car detail card when the car is inside a known structure. The closing alert only appears at reserve if the lot is closing within 30 minutes. The level guide only activates when the driver enters the lot boundary. The community prompt only fires at end trip if the car just parked in a structure. For street-parked cars which is the majority, the app looks and behaves exactly as it does today. The layer is invisible unless it's needed.",
          },
          {
            heading: "Mapping the four touchpoints",
            body: "The system has four moments, each solving a distinct problem in the journey. At tap car, show the lot status, the floor, and how to get to the car, before the driver commits to walking over. At reserve it checks if the lot is closing within the next 30 minutes and alert the driver proactively, with the option to switch to a nearby car without a cancellation fee. At navigate it hands off to Maps with the lot entrance coordinates (not just the street address), and when the driver arrives at the lot boundary, bring the Evo app back into focus with the level guide. At end trip it asks the driver to confirm their floor in exchange for 5 minutes of free driving. This is how the data stays current.",
          },
        ],
      },
      {
        label: "the solution",
        items: [
          {
            heading: "Parking info on the car detail card",
            body: "When a car is parked inside a known structure, three status pills appear below the existing car info: lot open or closed, which floor the car is on, and a closing time warning if relevant. Below the pills, a collapsible panel shows the entrance location, operating hours, a visual floor strip with the car's level highlighted and any closed levels greyed out, and three numbered steps to reach the car. Each floor indicator carries a trust badge — Unverified, Community, Verified, or Evo Verified, so drivers know exactly how confident the information is.",
          },
          {
            heading: "Closing check at reserve",
            body: "If the parking lot closes within 30 minutes of when the driver reserves, a warning banner fires immediately. It tells them how much time they have, offers a one-tap switch to a nearby alternative, and waives the reservation fee automatically. No friction for doing the right thing.",
          },
          {
            heading: "Two-phase navigation",
            body: "Phase one sends the driver to the lot entrance and not a generic street address centroid, but the actual vehicle entry point stored per structure. Phase two kicks in when the driver's GPS enters the lot boundary: the Evo app comes back into focus and shows the level, section, and a \"tap horn to locate\" button.",
          },
          {
            heading: "Community report at end trip",
            body: "After parking inside a structure, drivers see a lightweight prompt: confirm your floor, note if the lot is open, toggle barrier-free entry and elevator status. The GPS pre-fills the floor based on altitude detection most of the time, the driver just taps confirm. Submitting earns 5 minutes of free driving.",
          },
        ],
      },
      {
        label: "design decisions",
        items: [
          {
            heading: "Why community-driven instead of operator APIs",
            body: "The clean answer would have been to integrate directly with parking operators like Impark, REEF, the City of Vancouver. Real-time data, no community management overhead. The honest answer is that's a partnership negotiation, a legal agreement, and a maintenance burden for every operator, every time something changes. A community model with Evo verification builds the same dataset incrementally, starts delivering value from day one with just GPS data, and gets more accurate over time rather than depending on external APIs staying reliable. For a concept built on what's possible within Evo's existing data and driver relationship, community-driven was the right call.",
          },
          {
            heading: "Why GPS altitude for floor detection",
            body: "Evo vehicles already stream GPS data continuously. Altitude on park is compared against a stored ground elevation baseline per structure which gives a floor estimate without any new hardware or any action from the driver. It's noisy (GPS altitude varies by ±5m), so it's never the final word. But it's a useful starting point that the community layer then confirms or corrects. For underground structures where GPS signal drops below grade, the system falls back to community-only data and displays an \"underground — GPS unavailable\" note rather than showing a wrong estimate.",
          },
          {
            heading: "The trust tier system",
            body: "The hardest design problem wasn't the UI, it was: how do you display information of varying reliability without either overstating confidence or burying the data in disclaimers? The answer was four explicit trust tiers with matching visual badges. GPS estimated shows as Unverified. A single driver report shows as Community. Three or more matching reports show as Verified. Evo ops review shows as Evo Verified. Each tier is a different color. Drivers can see at a glance how much to trust what they're looking at. This also creates a natural upgrade path. Data that starts as a GPS guess becomes community-verified automatically as drivers confirm it, without Evo having to manually audit every lot.",
          },
          {
            heading: "The incentive model",
            body: "Five minutes of free driving per accepted report is small enough that it doesn't attract gaming, you can't make meaningful money running fake floor reports. But it's real enough that drivers who care about the product will actually submit. Maximum three rewards per day per driver. Reports must be submitted within 60 seconds of end trip, while the driver is still in the lot.",
          },
        ],
      },
    ],
    reflections: [
      {
        heading: "The best constraints are the ones you set yourself",
        body: "The \"no new screens\" rule felt limiting at first. It turned out to be the thing that made the whole system coherent. Every feature had to earn its place in an existing moment rather than demanding its own moment. That discipline forced me to think about the flow as a single experience rather than a collection of features.",
      },
      {
        heading: "Systems before screens",
        body: "I could have started with the UI. The car detail card, the alert modal, the community prompt, these are the visible parts. But the design that matters here is the trust pipeline: how raw GPS data becomes a verified floor number over time, what happens when reports conflict, what it takes for data to degrade and re-enter the verification loop. Getting that system right made the screen design straightforward. The UI is just the surface. The architecture underneath is what makes it reliable.",
      },
      {
        heading: "Designing in the gap",
        body: "The most interesting design problems aren't the ones where something is broken, they're the ones where something just quietly doesn't exist. Evo's parking flow wasn't failing. It was simply stopping too early. Finding that gap, understanding why it existed, and building something that fills it without disturbing what's already working, that's the part of this project I'll carry into everything I design next.",
      },
    ],
  },
  */
  {
    slug: "tier-evo",
    company: "Evo Parking Layer",
    year: "2026",
    bg: "linear-gradient(140deg, #f1f5f9 0%, #f6f7fa 50%, #faf9fb 100%)",
    inner: tierArt,
    heroVideo: "/Evo-overview-video.mov",
    title: "Evo Parking Layer",
    tagline: "A contextual parking layer for Evo",
    role: "Designer & Developer",
    team: "Solo",
    timeline: "2026",
    skills: [],
    info: [
      { label: "Type", value: "Concept Project" },
      { label: "Role", value: "Designer & Developer" },
      { label: "Team", value: "Solo" },
      { label: "Year", value: "2026" },
    ],
    overview: [
      // "**Evo Parking Layer** adds lot status, floor level, access steps and closing alerts to Evo's existing booking flow, with no new screens and zero change for street-parked cars.",
      "An intelligence layer that adds lot status, floor level, access steps and closing alerts to Evo's existing booking flow, with no new screens and zero change for street-parked cars.",
    ],
    problem: [],
    sections: [
      {
        intro: [
          // "A contextual parking layer for the Evo car-share app that tells drivers if a lot is open, which floor their car is on, and how to reach it, built with Next.js, TypeScript, Tailwind CSS, MapLibre GL & PostgreSQL/PostGIS.",
        ],
        figure: { alt: "Car detail card with parking panel" },
      },
      {
        label: "Problem",
        inline: true,
        items: [
          {
            heading: "Evo stops helping at the parkade door.",
            body: "When a car is parked inside a structure, the app shows a plate, a fuel level and a street address. Maps drops you on the sidewalk and you figure out the rest.",
            bullets: [
              "**No floor**: drivers search level by level while a 30-minute hold runs out",
              "**No lot hours**: a car in a lot closing at 10 pm looks identical to one on the street",
              "**No access info**: no entrance, no note about closed rooftop levels",
              "**GPS can't fix it alone**: concrete blocks the signal, and altitude is off by about 5m when floors are 3.2m apart",
            ],
          },
          {
            // heading: "I lived it first, then checked it wasn't just me.",
            // body: "After the fireworks festival, I spent 15 minutes searching a parkade for my car until the hold expired, then walked to a second lot that had already closed. I interviewed 20 Evo users about their last bad trip, and three problems kept coming up:",
            heading: "Interviews with 20 Evo users surfaced three recurring problems:",
            bullets: [
              "Finding cars inside parkades at night",
              "Cars not where the pin said they were",
              "Walking to lots that had already closed",
            ],
          },
        ],
      },
      {
        label: "Solution",
        inline: true,
        items: [
          {
            heading: "Parking info on the car card:",
            body: "Status pills for lot open, floor and closing time, plus a floor strip with closed levels greyed out and three steps to reach the car.",
          },
          {
            heading: "Closing alert at reserve:",
            body: "Fires when the lot closes within 30 minutes, with a one-tap switch to a nearby car and the fee waived.",
          },
          {
            heading: "Two-phase navigation:",
            body: "Maps routes to the lot's actual entrance, then an in-lot guide shows the level, a stall hint and a tap-horn button.",
          },
          {
            heading: "Community report at end trip:",
            body: "GPS pre-fills the floor, the driver confirms it and earns 5 minutes of free driving. This keeps the data current.",
          },
        ],
        figure: { alt: "The four touchpoints across the booking flow" },
      },
      {
        label: "How it works",
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "GPS floor detection:",
            // body: "Floor is estimated from the car's altitude minus the lot's ground elevation, divided by floor height. Signal is rated good, degraded or lost, and underground lots fall back to community data.",
            body: "Floor is estimated from the car's altitude minus the lot's ground elevation, divided by floor height. Underground lots fall back to community data.",
          },
          {
            heading: "Trust tiers:",
            // body: "Every floor shows a badge, from Unverified (GPS) to Community (1 report), Verified (3+ agree) and Evo Verified (ops). Conflicting reports go to ops review instead of being promoted automatically.",
            body: "Every floor shows a badge, from Unverified (GPS) to Community (1 report), Verified (3+ agree) and Evo Verified (ops).",
          },
          {
            heading: "Data model:",
            // body: "A 4-table PostgreSQL schema with PostGIS boundaries and spatial indexes for geofencing, a UNIQUE trip ID so each trip counts once, and a partial index that flags unmapped lots.",
            body: "A 4-table PostgreSQL schema with PostGIS boundaries for geofencing and a UNIQUE trip ID so each trip counts once.",
          },
          {
            heading: "Frontend:",
            // body: "A client-side state machine in the Next.js App Router, MapLibre loaded browser-only, and Tailwind colors on CSS variables for light and dark mode.",
            body: "A client-side state machine in the Next.js App Router, with MapLibre for the map and Tailwind for styling.",
          },
        ],
      },
      /* Key decisions — removed for now
      {
        label: "Key decisions",
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "No new screens:",
            body: "Every feature had to fit an existing moment, so the layer stays invisible unless it's needed.",
          },
          {
            heading: "Community data over operator APIs:",
            body: "Works from day one without partnerships and gets more accurate with every trip.",
          },
          {
            heading: "Show confidence, don't hide it:",
            body: "Trust badges let drivers judge the data at a glance instead of reading disclaimers.",
          },
        ],
        figure: { alt: "Floor strip with trust badges" },
      },
      */
    ],
    reflections: [],
  },
  {
    slug: "procreate-3d",
    company: "Procreate 3D",
    year: "Summer 2026",
    bg: "linear-gradient(140deg, #f1f5f9 0%, #f6f7fa 50%, #faf9fb 100%)",
    inner: procreateArt,
    title: "Procreate 3D — sketching in three dimensions",
    tagline:
      "3D assets designed to live inside a your workflow",
    role: "Designer & iOS developer",
    team: "Solo (Concept)",
    timeline: "Summer 2026",
    skills: [
      "Swift",
      "SwiftUI",
      "RealityKit",
      "iPadOS",
      "Interaction design",
      "3D graphics",
    ],
    overview: [
      "Procreate 3D started as a question: what would Procreate feel like if a sketch could lift off the page? The current direction is a small iPad app that takes a closed 2D drawing and inflates it into a soft, claymation-style 3D form, designed to live inside a designer's existing workflow, not replace it. A doodle drawn with Apple Pencil becomes a 3D asset you can drop into Figma, render flat as a PNG, or (later) preview spatially on Vision Pro.",
      "I'm building it in Swift. The engine runs on-device through RealityKit, with a real-time inflation algorithm and live tuning sliders, so the feel of the output can be shaped by hand — closer to choosing a brush than configuring a tool.",
      "Source: https://github.com/Tiya-Verma/procreate3D",
    ],
    problem: [
      "Most 3D modelling tools are built for technical pipelines, not the way people actually sketch but they ask the artist to \"think in three dimensions\" before drawing the first mark.",
      "Translating a 2D brush gesture into a 3D form without losing immediacy is harder than it sounds: depth has to emerge from the drawing, not be specified alongside it.",
      "Onboarding a casual artist into a 3D coordinate system without ever surfacing the coordinate system.",
      "The closest existing tools (Womp, Spline) start from a sculptable primitive in 3D space, not a drawn 2D mark. There's a gap for a Pencil-first tool that turns flat sketches directly into solid forms.",
    ],
    reflections: [
      {
        heading: "Designing for depth without breaking flow",
        body: "The core technical question is how a flat sketch implies depth which turned out to also be the core design question. Early versions inflated each interior point by its distance to the boundary, which is mathematically clean but produced a sharp ridge along the long axis of any elongated shape. The fix wasn't more math; it was a constraint: cap the height at a fraction of the maximum, so the ridge collapses into a flat-topped pillow. The geometry got better, but the deeper win was that the constraint matched how the brain reads \"puffy\" — something that bulges out and then plateaus. The math and the perception aligned, but only after the math was deliberately limited.",
      },
      {
        heading: "Building and designing in the same loop",
        body: "Working solo in Swift collapses design and implementation into a single step. Every parameter such as how much the surface smooths, where the height plateaus, how steep the dome is simultaneously a line of code and a visual decision. To make that tractable I exposed three of them as live sliders inside the running app. Tuning the algorithm felt more like adjusting a brush than rewriting a function. It also surfaced a quieter shift: the design tool I was making for an imagined user was also the design tool I was using to make it.",
      },
      {
        heading: "Constraints as a design tool",
        body: "The most useful design move so far was deciding what the app is not. Early concepts had it living on Apple Vision Pro for children's learning, or for architects sketching buildings. The install base, the precision required, and the time-to-magic killed both. Repositioning it as a tool that drops into Figma — Pencil-drawn doodles as 3D assets, narrowed the scope, made the primary distribution channel obvious, and turned Vision Pro from a market dependency into a future delight. The constraint of \"must fit inside someone's existing workflow\" did more design work than any wireframe.",
      },
    ],
  },
  {
    slug: "alice-in-wellnessland",
    company: "Alice in Wellnessland",
    year: "2026",
    bg: "linear-gradient(140deg, #f1f5f9 0%, #f6f7fa 50%, #faf9fb 100%)",
    inner: aliceArt,
    title: "Alice in Wellnessland — wellness, down the rabbit hole",
    tagline:
      "An AI-powered wellness companion",
    role: "UX Designer & full-stack developer",
    team: "1 designer, 3 developers",
    timeline: "cmd-f 2026",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API",
      "MongoDB Atlas",
    ],
    overview: [
      "Alice in Wellnessland is an AI-powered wellness companion built in one hackathon weekend. It consolidates three tools people normally juggle across separate apps — journaling, mood tracking, and goal-setting into a single, narrative-driven space loosely framed around Alice's Adventures in Wonderland.",
      "Three named surfaces shape the experience. \"Down the Rabbit Hole\" lets you journal by text or voice, with Gemini transcribing and reflecting back. \"The Looking Glass\" analyzes entries in real time for mood, stressors, and patterns. \"The Queen's Quest\" pairs goal-setting with a chatbot that nudges objectives toward SMART criteria.",
      "Source: https://github.com/Tiya-Verma/alice-in-wellnessland.git",
    ],
    problem: [
      "Wellness habits live in too many places such as a separate journaling app, a separate mood tracker, a separate goal tracker. Switching between them is friction that quietly undermines the habit they're supposed to support.",
      "Most journaling tools don't do anything with what you write, there's no synthesis back to the user, no sense of being read.",
      "Goal-setting apps tend to be either too rigid (templated forms) or too loose (free text with no structure). Neither helps you set a goal you'll actually keep.",
    ],
    reflections: [
      {
        heading: "Building a narrative metaphor under hackathon time pressure",
        body: "what the Wonderland framing did for the product (and what it cost) when every minute counted.",
      },
      {
        heading: "Designing with an LLM as a real-time collaborator",
        body: "wiring Gemini into the journaling and goal-setting flows changed what \"feedback\" meant in the UX. Notes on what worked and where it felt off.",
      },
      {
        heading: "Shipping a coherent product in a weekend",
        body: "What we cut, what we kept, and what \"finished enough\" looked like for a 48-hour build.",
      },
    ],
  },
  {
    slug: "moss",
    company: "UBC MINT",
    year: "2025 — now",
    bg: "linear-gradient(140deg, #f1f5f9 0%, #f6f7fa 50%, #faf9fb 100%)",
    inner: mossArt,
    title: "MOSS — brain signals, made legible",
    tagline:
      "A workspace that simplifies managing brain data",
    role: "SWE Front-End Developer",
    team: "UBC MINT (Multifaceted Innovations in Neurotechnology)",
    timeline: "2025 — present",
    skills: [
      "TypeScript",
      "React",
      "WebSockets",
      "Real-time visualization",
      "UI design",
    ],
    overview: [
      "MOSS is UBC MINT's brain-signal processing app for the Muse EEG headset. It streams data live over WebSockets, stores it in TimescaleDB, and surfaces it through a front-end built for researchers and curious students.",
      "I work on the front-end: turning a fairly technical real-time pipeline into a UI that doesn't feel like a lab readout. The goal is making brain-signal processing feel less like a research instrument and more like a tool built for people.",
      "Source: https://github.com/Tiya-Verma/fullstack-moss-app",
    ],
    problem: [
      "Most EEG tooling is built for clinicians or signal-processing engineers as the interfaces assume you already know what to look for.",
      "Real-time visualization at this kind of sample rate is unforgiving: dropped frames or laggy updates make the signal feel untrustworthy, even when the data is fine.",
      "The team needed a UI that worked for both a real Muse headset and a mock data server, so contributors without hardware could still develop and test.",
    ],
    reflections: [
      {
        heading: "Designing UI for data you can't slow down",
        body: "What changes when the interface has to keep up with a live signal stream, and how that shaped the components I built.",
      },
      {
        heading: "Working across a multi-language stack",
        body: "Collaborating with engineers writing the backend in Rust and Python while the front-end stayed in TypeScript. Notes on contracts, debugging, and where ambiguity lived.",
      },
      {
        heading: "Building for two audiences at once",
        body: "Researchers want precision, curious users want intuition. What it meant to design surfaces that didn't betray either one.",
      },
    ],
  },
  {
    slug: "nomadly-earth",
    company: "Nomadly",
    year: "2024",
    bg: "linear-gradient(140deg, #f1f5f9 0%, #f6f7fa 50%, #faf9fb 100%)",
    inner: nomadlyArt,
    heroVideo: "/nomadly-overview-video.mov",
    heroVideoFormat: "desktop",
    title: "Nomadly — picking a country with your hands",
    tagline:
      "Helping people find their next travel muse",
    role: "Front-end developer",
    team: "freelance",
    timeline: "Summer 2025",
    skills: [
      "React",
      "Vite",
      "Three.js",
      "react-three/fiber",
      "react-globe.gl",
      "Framer Motion",
      "Tailwind CSS",
    ],
    overview: [
      "Nomadly (nomadly.me) is a lifestyle platform for digital nomads with its tagline is \"The world is yours.\" The site helps remote workers pick a country that fits their work, budget, and life through a quiz, a regional country explorer, and a blog/community layer.",
      "I designed and built the 3D interactive globe that sits at the center of the destination-discovery flow. Instead of choosing a region from a flat dropdown, a visitor can drag the globe, hover a country, and let the surface itself become the navigation. The feature reframes \"picking a country\" from a form-filling task into something closer to looking at a map and wondering.",
      "Tech-wise it's a React + Vite component using react-globe.gl on top of three.js / react-three-fiber, with Framer Motion handling smaller transitions and Tailwind for the surrounding UI.",
      "Source: https://github.com/Tiya-Verma/nomadly_earth · Live: https://www.nomadly.me",
    ],
    problem: [
      "Nomadly's existing destination-discovery flow was a regional dropdown Europe, Asia, Middle East, Americas, Africa, Oceania. It asked the visitor to already know roughly where they wanted to go, which is the opposite of the openness that draws people to nomadism in the first place.",
      "A map could fix the geography problem but creates a new one: most web maps flatten the world into political abstractions. For a nomad weighing a country, the decision is half informational, half emotional and a flat 2D map doesn't speak to the second half.",
      "3D web globes tend to be demoware: heavy, hard to read, slow on mid-tier devices, ornamental. The challenge was making one feel light enough to actually use as the front door of a real product flow.",
    ],
    reflections: [
      {
        heading: "Designing for the feeling, not just the data",
        body: "What I learned about the globe being as much an emotional surface as an informational one, and how that shifted the visual language (atmosphere, glow, easing) away from a typical data-viz aesthetic.",
      },
      {
        heading: "Performance as a design constraint",
        body: "Three.js scenes get expensive fast on slower devices and mobile. Decisions about geometry density, texture resolution, and animation frame budget became design decisions, not just technical ones.",
      },
      {
        heading: "Working as the embedded specialist on a small product team",
        body: "Building one feature inside someone else's product means owning the deep end of one thing while staying responsive to a wider roadmap I don't set. Notes on what changed about how I scoped, communicated, and shipped.",
      },
    ],
  },
  // placeholders: details to come
  /* previous AI Code Reviewer placeholder
  {
    slug: "ai-codereviewer",
    company: "AI Code Reviewer",
    year: "",
    bg: "linear-gradient(140deg, #eef1fb 0%, #f3f4fb 50%, #f8f8fc 100%)",
    inner: codeReviewerArt,
    title: "AI Code Reviewer",
    tagline: "Details coming soon",
    role: "TBD",
    team: "TBD",
    timeline: "TBD",
    skills: [],
    overview: ["Details coming soon."],
    problem: [],
    reflections: [],
  },
  */
  {
    slug: "ai-codereviewer",
    company: "AI Security Reviewer",
    year: "2026",
    bg: "linear-gradient(140deg, #eef1fb 0%, #f3f4fb 50%, #f8f8fc 100%)",
    inner: codeReviewerArt,
    title: "AI Security Reviewer",
    tagline: "Benchmarked AI security review for code changes",
    role: "Developer",
    team: "",
    timeline: "2026",
    skills: [],
    info: [
      { label: "Type", value: "Personal Project" },
      { label: "Role", value: "Developer" },
      { label: "Year", value: "2026" },
      {
        label: "Link",
        value: "GitHub",
        href: "https://github.com/Tiya-Verma/ai-security-codereviewer",
      },
    ],
    overview: [
      "An AI security reviewer that gives Claude semantic understanding of a code change, not just pattern matching.",
    ],
    problem: [],
    sections: [
      {
        intro: [
          "Instead of claiming \"AI finds bugs,\" it is built around a generator/verifier detection pipeline measured against a public, labeled benchmark, so there is a reproducible number for how often it is right.",
        ],
      },
      {
        label: "Features",
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "Generator/Verifier Pipeline:",
            body: "A high-recall generator proposes candidate findings, then an adversarial verifier assumes each one is a false positive and tries to prove the code is safe",
          },
          {
            heading: "Benchmark Harness:",
            body: "Compares generator-only against generator+verifier side by side, reporting precision, recall, F1 and false positives per PR",
          },
          {
            heading: "Structured Output:",
            body: "All model responses are forced through `tool_use` schemas, with no free-text parsing",
          },
          {
            heading: "In-Repo Configuration:",
            body: "A `.security-review.yml` file supports custom scan instructions, false-positive guidance, ignore globs, a severity threshold, inline suppression markers, a baseline allowlist, and a verifier on/off toggle",
          },
          {
            heading: "Per-Stage Model Selection:",
            body: "Claude Sonnet for the generator and Claude Opus for the verifier, so the more expensive model is only used where precision matters",
          },
          {
            heading: "CLI:",
            body: "`secreview scan <diff>` runs the engine on any unified diff",
          },
        ],
      },
      {
        label: "Architecture",
        intro: [
          "The pipeline is a four-stage flow: `diff → generate → verify → route by confidence`.",
        ],
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "Generator:",
            body: "Favors recall and is allowed to over-report",
          },
          {
            heading: "Verifier:",
            body: "Does the opposite, challenging every finding before it is surfaced",
          },
          {
            heading: "Confidence routing:",
            body: "High-confidence findings become inline PR comments; low-confidence ones are collapsed into a summary to cut noise",
          },
          {
            heading: "Benchmark-first build order:",
            body: "The labeled corpus is built before the Action, so it doubles as the prompt-iteration test harness",
          },
        ],
        outro: [
          "The design targets four failure modes seen in similar tools: false positives on intentional design patterns, missed business-logic flaws, overconfidence from incomplete context, and comment noise.",
        ],
      },
      {
        label: "Technical Stack",
        list: "bullets",
        inline: true,
        items: [
          { heading: "Language:", body: "Python" },
          {
            heading: "LLM:",
            body: "Anthropic API (Claude Sonnet generator, Claude Opus verifier, configurable)",
          },
          { heading: "Config & Models:", body: "YAML validated with Pydantic" },
          { heading: "Diff Parsing:", body: "Language-agnostic unified-diff parser" },
          {
            heading: "Testing:",
            body: "pytest (LLM-free unit tests, no API key needed)",
          },
          { heading: "Planned:", body: "GitHub Action packaging (milestone M5)" },
        ],
      },
      {
        label: "Project Structure",
        code: `src/secreview/
├── models.py        # Finding / Verdict / Severity / Confidence
├── config.py        # .security-review.yml schema (pydantic)
├── diff.py          # unified-diff parsing
├── llm.py           # Anthropic client, tool_use structured output
├── engine/          # generator, verifier, pipeline
└── cli.py           # secreview scan <diff>
benchmark/
├── run_benchmark.py # gen-only vs gen+verify
├── metrics.py       # precision / recall / F1 / FP-per-PR
└── corpus/          # labeled samples + manifest
tests/               # config, diff, metrics`,
      },
      {
        label: "Benchmark Design",
        intro: ["The corpus mixes four sources so no single one skews the results:"],
        points: [
          "OWASP Benchmark cases",
          "Real CVE-fix commit pairs",
          "Synthetic vulnerabilities injected into clean PRs",
          "Deliberate false-positive traps (safe code that looks risky)",
        ],
        outro: [
          "The target for v1 is 100–300 labeled samples across 2–3 languages. What counts as a \"hit\" is defined before the first evaluation run, so the goalposts can't move after seeing results.",
        ],
      },
      /* Testing — removed for now
      {
        label: "Testing",
        intro: [
          "Unit tests cover config validation, diff parsing and metric calculations, and they run without an API key.",
        ],
      },
      */
      {
        label: "Scope & Caveats",
        intro: [
          "This is not a replacement for manual review, is not hardened against prompt injection (restrict it to trusted PRs), and does not generate exploits.",
        ],
      },
      /* Status — removed for now
      {
        label: "Status",
        intro: [
          "v0.1.0. The engine and benchmark harness are scaffolded, and the prompts and corpus are being built out.",
        ],
      },
      */
    ],
    reflections: [],
  },
  /* previous Moodprint placeholder
  {
    slug: "moodprint",
    company: "Moodprint",
    year: "",
    bg: "linear-gradient(140deg, #fbeff4 0%, #fbf3f6 50%, #fcf8fa 100%)",
    inner: moodprintArt,
    title: "Moodprint",
    tagline: "Details coming soon",
    role: "TBD",
    team: "TBD",
    timeline: "TBD",
    skills: [],
    overview: ["Details coming soon."],
    problem: [],
    reflections: [],
  },
  */
  {
    slug: "moodprint",
    company: "MoodPrint",
    year: "2026",
    bg: "linear-gradient(140deg, #fbeff4 0%, #fbf3f6 50%, #fcf8fa 100%)",
    inner: moodprintArt,
    title: "MoodPrint",
    tagline: "A personal Pinterest taste engine",
    role: "Developer",
    team: "",
    timeline: "2026",
    skills: [],
    info: [
      // { label: "Type", value: "Personal Project" },
      { label: "Type", value: "Browser Extension" },
      { label: "Role", value: "Developer" },
      { label: "Year", value: "2026" },
      // {
      //   label: "Link",
      //   value: "GitHub",
      //   href: "https://github.com/Tiya-Verma/MoodPrint",
      // },
    ],
    overview: ["A personal Pinterest taste engine."],
    problem: [],
    sections: [
      {
        intro: [
          "A browser extension logs my own Pinterest activity (saves, searches, dwell time) to a local backend, which embeds the images with CLIP and turns them into two things: a taste-drift visualisation and auto-generated mood boards. It reads only the page I'm already logged into and only touches my own account's activity.",
        ],
      },
      {
        label: "Features",
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "Activity Capture:",
            body: "A Manifest V3 Chrome extension records saves, searches, dwell time and scroll-past events, with a durable queue and at-least-once delivery",
          },
          {
            heading: "CLIP Embeddings:",
            body: "Pins and search queries are embedded into CLIP ViT-B/32's shared image/text space, so a text query and an image are directly comparable",
          },
          {
            heading: "Taste Field:",
            body: "One orb per pin, where position is a 2-D projection of the embedding, colour comes from the pin's own image, size is log-scaled dwell time, and ring/opacity separates saved from merely viewed",
          },
          {
            heading: "Taste Drift:",
            body: "Buckets the collection over time and scores each pin's novelty against everything strictly before it",
          },
          {
            heading: "Mood Boards:",
            body: "Clusters the collection and names each board zero-shot with CLIP against a 108-term aesthetic vocabulary",
          },
          {
            heading: "Feed Ranking:",
            body: "Scores pins the feed hasn't shown me yet against a taste profile, with an explore-vs-exploit toggle",
          },
          {
            heading: "Board Export:",
            body: "Pushes mood boards back to Pinterest as real boards through the official API, secret by default and nothing written without `--confirm`",
          },
        ],
      },
      {
        label: "Architecture",
        code: `content script ──(chrome.runtime message)──▶ service worker
  pins.js: selectors                           queue in chrome.storage.local
  content.js: MutationObserver                 ├─ survives navigation
                                               └─ batched POST, retried
                                                      │
                                        POST /events  ▼
                                               FastAPI ──▶ SQLite`,
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "The service worker owns the network:",
            body: "Content scripts never POST, so requests aren't subject to CORS from pinterest.com and the queue outlives the content script",
          },
          {
            heading: "At-least-once delivery, idempotent ingest:",
            body: "Every event carries a `client_event_id` and the backend skips ids it already holds, including duplicates inside one batch",
          },
          {
            heading: "Derived data is rebuildable:",
            body: "Embeddings, clusters, boards, drift and the ranking profile are all regenerated from the event log, so the log is the only thing backed up (SQLite online backup API, integrity-checked before any old snapshot is pruned)",
          },
        ],
      },
      {
        label: "Key Decisions",
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "Weak signals produce no event:",
            body: "Time between 300ms and 1500ms on a pin records nothing, because a guessed intent is worse than no record",
          },
          {
            heading: "Novelty looks at the past only:",
            body: "Scoring against the whole collection would measure how typical a pin is, a different and easier question. A test asserts a pin's score is unchanged when later pins are added",
          },
          {
            heading: "Clusters must earn their board:",
            body: "A group must beat the collection's own baseline similarity by a fixed margin and hold at least 5 pins. In testing, 8 groups holding 81 pins were rejected rather than padded into boards",
          },
          {
            heading: "Hubness correction for naming:",
            body: "Scoring boards independently named all three \"album cover artwork\", so each term's average similarity to the collection is subtracted first and naming is treated as an assignment problem so no two boards share a name",
          },
          {
            heading: "Export saves the original pins:",
            body: "It uses the Pinterest save endpoint rather than uploading copies, so attribution, links and full resolution stay intact",
          },
        ],
      },
      /* Measured Results — removed for now
      {
        label: "Measured Results",
        intro: ["The project reports its own limits rather than hiding them:"],
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "Ranking is not yet useful:",
            body: "Leave-one-out evaluation against pins I flicked past gives an AUC of 0.49 on 140 pins and 21 negatives, effectively a coin flip. The extension therefore annotates the feed with badges by default and only reorders it once the score clears about 0.55",
          },
          {
            heading: "Drift is gated on data:",
            body: "It needs at least 3 weekly buckets and currently has 1, so the page shows that message instead of a trajectory. The pipeline was validated on a synthetic five-week collection that genuinely drifts, where novelty climbed from 0.057 to 0.384",
          },
          {
            heading: "Mood boards:",
            body: "k-means (k=11) was chosen after HDBSCAN found no usable density in raw 512-dim space, producing 3 boards that cover 59 of 140 pins",
          },
          {
            heading: "Not yet run live:",
            body: "The feed reorder and Pinterest export paths are covered by tests (including 25 export tests against a mock transport) but haven't been run against a real Pinterest account",
          },
        ],
      },
      */
      {
        label: "Technical Stack",
        list: "bullets",
        inline: true,
        items: [
          { heading: "Extension:", body: "JavaScript, Chrome Manifest V3" },
          { heading: "Backend:", body: "Python, FastAPI, SQLAlchemy, SQLite" },
          {
            heading: "ML:",
            body: "CLIP ViT-B/32 (PyTorch, Hugging Face Transformers), UMAP, scikit-learn (k-means, HDBSCAN), NumPy",
          },
          {
            heading: "Dashboard:",
            body: "Static HTML pages (orb field, drift view, mood boards, raw event log)",
          },
          { heading: "Integration:", body: "Pinterest API v5 with OAuth" },
          {
            heading: "Testing:",
            body: "pytest for the backend, `node --test` for the extension",
          },
        ],
      },
      {
        label: "Project Structure",
        code: `extension/   Manifest V3 extension: pin detection + durable event queue
backend/     FastAPI ingest API + SQLite store + embedding/drift pipelines
dashboard/   Static pages: the orb field, the drift view, the raw event log`,
      },
      /* Status — removed for now (matches the AI Security Reviewer page)
      {
        label: "Status",
        intro: [
          "Phase 5. Capture, embeddings, the taste field, drift, mood boards, ranking and board export are built. Cross-device sync is not built.",
        ],
      },
      */
    ],
    reflections: [],
  },
  /* previous qBit-Go placeholder
  // placeholder: details to come
  {
    slug: "qbit-go",
    company: "qBit-Go",
    year: "",
    bg: "linear-gradient(140deg, #ecf6f2 0%, #f2f8f5 50%, #f8fbf9 100%)",
    inner: qbitGoArt,
    title: "qBit-Go",
    tagline: "Details coming soon",
    role: "TBD",
    team: "TBD",
    timeline: "TBD",
    skills: [],
    overview: ["Details coming soon."],
    problem: [],
    reflections: [],
  },
  */
  {
    slug: "qbit-go",
    company: "qBit-Go",
    year: "2026",
    bg: "linear-gradient(140deg, #ecf6f2 0%, #f2f8f5 50%, #f8fbf9 100%)",
    inner: qbitGoArt,
    heroVideo: "/qBit-Go%20Web%20UI.mov",
    heroVideoFormat: "desktop",
    // heroAspect: "2934 / 1760", // full recording, no crop
    heroAspect: "4 / 3", // trims the empty browser margins either side of the app
    title: "qBit-Go",
    tagline: "A BitTorrent client built from scratch in Go",
    role: "Developer & Designer",
    team: "",
    timeline: "2026",
    skills: [],
    info: [
      { label: "Type", value: "Web App & Systems" },
      { label: "Role", value: "Developer & Designer" },
      { label: "Year", value: "2026" },
    ],
    overview: [
      "A BitTorrent client built from scratch in Go, with a live React dashboard embedded in a single binary.",
    ],
    problem: [],
    sections: [
      {
        label: "Features",
        points: [
          "Download from `.torrent` files or magnet links",
          "Find peers through HTTP and UDP trackers, a Kademlia DHT, and peer exchange",
          "Download from many peers at once, with 16 KiB block requests pipelined five deep",
          "Verify every piece with SHA-1 before it touches disk",
          "Seed back to the swarm with tit-for-tat choking",
          "Resume where you left off after a restart",
          "Watch speed, progress, peers and time remaining update live, every second",
        ],
      },
      {
        label: "Architecture",
        intro: [
          "Each torrent runs as its own state machine, built from Go goroutines and channels, with clear separation between the network, scheduling and storage layers:",
        ],
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "Engine:",
            body: "registry of active torrents; routes add, pause, resume and remove from the API",
          },
          {
            heading: "Tracker client:",
            body: "announces on start, at the tracker's interval, and on stop, with exponential backoff on failure",
          },
          {
            heading: "Peer manager:",
            body: "one goroutine per peer pulls pieces from a shared work queue; a dropped peer's piece goes straight back for another peer to take",
          },
          {
            heading: "Storage:",
            body: "a single writer goroutine checks each piece's SHA-1 and maps it across file boundaries",
          },
          {
            heading: "API server:",
            body: "REST and WebSocket endpoints, plus the React UI compiled into the binary with `go:embed`",
          },
        ],
      },
      {
        label: "Technical Stack",
        points: [
          "Go 1.26, built on the standard library's TCP, UDP, SHA-1 and HTTP packages",
          "chi router and gorilla/websocket for the API",
          "bbolt embedded key-value store for saved state",
          "React 18 + Vite",
          "Tailwind CSS with design tokens from Apple's Human Interface Guidelines",
          "Docker multi-stage build + Docker Compose",
        ],
      },
      {
        label: "Project Structure",
        code: `qBit-Go/
├── internal/
│   ├── engine/      # Torrent registry, saved state
│   ├── torrent/     # .torrent parsing, info hash
│   ├── peer/        # Handshake, wire protocol, peer pool
│   ├── tracker/     # HTTP + UDP trackers
│   ├── dht/         # Kademlia DHT node
│   ├── scheduler/   # Piece work queue
│   ├── storage/     # SHA-1 check, file I/O
│   ├── bencode/     # .torrent encoding
│   ├── magnet/      # Magnet link parsing
│   └── api/         # REST, WebSocket, embedded UI
└── web/
    └── src/
        ├── App.jsx           # State + live connection
        ├── api.js            # API client
        ├── lib/format.js     # Size, speed, time formatting
        └── components/       # UI components`,
      },
      {
        label: "API Integration",
        intro: [
          "The UI talks to the Go server over a REST API under `/api/v1` for actions: add, pause, resume and remove. On load it fetches the current state once, then opens a WebSocket that pushes a full update every second. If the connection drops, it reconnects automatically with exponential backoff (capped at 15 seconds) and shows the connection status. Errors come back in one consistent JSON shape and appear in the UI as readable messages.",
        ],
      },
      {
        label: "Key Components",
        list: "bullets",
        inline: true,
        items: [
          {
            heading: "SummaryCard:",
            body: "tiles for total download speed, upload speed, connected peers and active torrents",
          },
          {
            heading: "TorrentRow:",
            body: "name, status, progress bar and plain-language time left (\"About 8 minutes remaining\"); shows an indeterminate bar while a magnet link's metadata loads",
          },
          {
            heading: "AddModal:",
            body: "add a torrent by file upload or magnet link, in one sheet with two tabs",
          },
          {
            heading: "Alert:",
            body: "confirms removal and asks whether to keep the downloaded files",
          },
          {
            heading: "StatsBar:",
            body: "footer with live connection status",
          },
        ],
      },
      /* Testing + Requirements — removed for now (matches the other project pages)
      {
        label: "Testing",
        intro: ["Table-driven unit tests are provided for:"],
        points: [
          "Bencode encoding and info-hash extraction",
          "Peer message encoding and the work queue",
          "Tracker response parsing",
          "Magnet links, bitfields and piece selection",
          "DHT routing",
          "Saved state and list ordering",
        ],
      },
      {
        label: "Requirements",
        points: [
          "Go 1.26 or later",
          "Node.js 18 or later, to build the UI",
          "Or Docker with Compose",
        ],
      },
      */
    ],
    reflections: [],
  },
];
