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
  <div style="position:relative; display:flex; align-items:center; justify-content:center;">
    <div style="width:140px; height:140px; transform: rotate(-12deg) skewY(-4deg); background:
      linear-gradient(135deg, #ffffff 0%, #ffe4ec 60%, #fbb4c4 100%);
      border-radius:22px; box-shadow: 0 22px 40px -18px rgba(80,30,90,0.28), inset 0 -10px 30px rgba(255,255,255,0.4);
      display:flex; align-items:center; justify-content:center;">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#7a2d4a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 21c3-3 6-3 9-6s3-6 6-9"></path>
        <path d="M14 4l6 6"></path>
        <path d="M3 21l3-9 9-3"></path>
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

export interface ProjectSection {
  label: string;
  intro?: string[];
  items?: { heading: string; body: string }[];
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
}

export const projects: Project[] = [
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
];
