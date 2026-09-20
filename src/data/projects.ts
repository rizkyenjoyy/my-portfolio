export function getAssetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  let cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Ensure Thumbnail folder matching
  if (cleanPath.startsWith("thumbnail/")) {
    cleanPath = cleanPath.replace(/^thumbnail\//, "Thumbnail/");
  }
  return `${cleanBase}${cleanPath}`;
}

export interface ProjectCase {
  id: string;
  caseNumber: string;
  title: string;
  slug: string;
  year: string;
  status: string;
  category: "roblox" | "web" | "mentorship";
  classification: string;
  thumbnail: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  gameplayLoop?: {
    step: string;
    title: string;
    description: string;
    tag?: string;
  }[];
  features?: string[];
  challenges?: {
    issue: string;
    diagnosis: string;
    repair: string;
    result: string;
  }[];
}

export interface TimelineEntry {
  period: string;
  company: string;
  role: string;
  location?: string;
  type: "Internship" | "Mentorship" | "Full-Time" | "Education";
  summary: string;
  points: string[];
  technologies: string[];
}

export const projects: ProjectCase[] = [
  // --- ROBLOX EXPERIENCES ---
  {
    id: "001",
    caseNumber: "EXP-001",
    title: "Horeg Tower",
    slug: "horeg-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/horegtower.webp",
    liveUrl: "https://www.roblox.com/games/79385289743942/Horeg-Tower",
    summary:
      "Inspired by the viral Javanese 'Sound Horeg' culture — featuring massive stacked walls of mega-speakers blasting earth-shattering bass. Players must traverse a horizontal obstacle course toward the main concert stage while dealing with the viral internet sound operator, who cycles between sleeping on his laptop and waking up to unleash deafening bass blasts that physically push players backward with violent screen shake.",
    problem:
      "Translating the chaotic energy of the viral Sound Horeg culture into an exciting, rhythmically timed horizontal survival obby without disorienting players.",
    solution:
      "Engineered an alternating dual-state soundwave system: a 30-second silent cooldown while the operator sleeps, followed by a 15-second high-intensity bass blast phase with dynamic acoustic knockback and screen shake physics.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Acoustic Knockback Physics",
      "Screen Shake VFX",
      "Phase State Machine",
      "Dynamic Spatial Audio",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Track Base & Sound Arena",
        description:
          "Players spawn at the start of the colossal sound-system rig, facing a horizontal gauntlet of obstacles surrounded by giant speaker walls.",
        tag: "Starting Point",
      },
      {
        step: "PHASE 02",
        title: "30s Cooldown: Operator Asleep",
        description:
          "The viral sound operator dozes off face-down on his laptop. The mega-speakers go quiet — giving players a 30-second golden window to sprint and jump across stages!",
        tag: "Safe Sprint Window",
      },
      {
        step: "PHASE 03",
        title: "15s Blast: Full Horeg Onslaught!",
        description:
          "The operator jolts awake and cranks up the soundboard! Blasting bass music triggers violent screen vibrations and powerful acoustic shockwaves that blow exposed players backward!",
        tag: "Acoustic Hazard",
      },
      {
        step: "PHASE 04",
        title: "Acoustic Shelters & Barriers",
        description:
          "Take cover behind soundproof walls and stage shelters to shield yourself from the devastating soundwave knockback during the 15-second blast phase.",
        tag: "Safe Cover",
      },
      {
        step: "PHASE 05",
        title: "The Main Stage (Finish Line)",
        description:
          "Navigate all obstacle stages, master the timing between the operator's nap and blast phases, and reach the main concert stage finish line to claim victory!",
        tag: "Victory Goal",
      },
    ],
  },
  {
    id: "002",
    caseNumber: "EXP-002",
    title: "Mama Tower",
    slug: "mama-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/mamatower.webp",
    liveUrl: "https://www.roblox.com/games/125314067049465/Mama-Tower",
    summary:
      "Inspired by the classic childhood comedy trope of sneaking out to play while dodging an angry Mama with her broom! In Mama Tower, players spawn inside the house with one mission: conquer the horizontal obstacle course to reach the outdoor playground without falling or getting struck by Mama.",
    problem:
      "Designing an exhilarating horizontal tower challenge that goes beyond static obby jumps, keeping players constantly on edge with real-time stealth timing and high-intensity chase mechanics.",
    solution:
      "Engineered an alternating dual-phase gameplay loop (a 30-second sweeping cooldown vs. a 25-second broom chase frenzy) paired with strategic safe shelters across the obstacle stages leading to the playground finish line.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Tower Obby Mechanics",
      "Phase Cycle System",
      "Safe-Zone Shelters",
      "Dynamic Sound Cues",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Spawn Inside the House",
        description:
          "Players start inside the house with a mission to sneak out and reach the outdoor playground through the obstacle course.",
        tag: "Starting Point",
      },
      {
        step: "PHASE 02",
        title: "30s Cooldown: Mama Sweeping",
        description:
          "Mama is busy sweeping the floor with her back turned. This is the golden opportunity for players to sprint and jump across as many obstacles as possible!",
        tag: "Stealth Window",
      },
      {
        step: "PHASE 03",
        title: "25s Chase: Mama on the Hunt!",
        description:
          "Mama realizes you've escaped and aggressively chases players along the obstacle course with her broom!",
        tag: "Danger Alert",
      },
      {
        step: "PHASE 04",
        title: "Shelter Safe Zones",
        description:
          "Duck into safe shelters positioned across the obstacles to gain 100% protection from Mama's broom during the chase frenzy.",
        tag: "Safe Haven",
      },
      {
        step: "PHASE 05",
        title: "The Playground (Victory)",
        description:
          "Conquer all obstacle stages and reach the playground without falling or getting caught by Mama to win the round!",
        tag: "Victory Goal",
      },
    ],
  },
  {
    id: "003",
    caseNumber: "EXP-003",
    title: "Mie Gacoan Tower",
    slug: "mie-gacoan-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/miegacoantower.webp",
    liveUrl: "https://www.roblox.com/games/72239476501295/Mie-Gacoan-Tower",
    summary:
      "Inspired by Indonesia's viral spicy noodle restaurant sensation! In Mie Gacoan Tower, players start at the bustling noodle restaurant with one mission: make it all the way back home through a perilous horizontal obstacle course. The experience features an alternating survival cycle: a 30-second calm cooldown window to sprint across obstacles, followed by a 15-second 'Banjir Sambal' (Chili Sauce Flood) phase that inflicts deadly continuous damage over time. To survive the spicy deluge, players must duck inside giant Dimsum Steamer shelters placed along the track!",
    problem:
      "Translating the fiery viral noodle restaurant theme into a fast-paced horizontal obstacle obby with timed survival hazard cycles and continuous tick damage mechanics.",
    solution:
      "Developed a cyclical phase state machine alternating between a 30-second traversal window and a 15-second Chili Sauce Flood with continuous DoT damage, paired with thematic Dimsum Steamer safe-zone shelters.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Continuous DoT Damage",
      "Environment Phase Cycle",
      "Dimsum Safe-Zone Shelters",
      "Dynamic Particle VFX",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Spawn at Mie Gacoan",
        description:
          "Players start at the bustling Mie Gacoan restaurant, embarking on an obstacle-filled journey to navigate all the way back home.",
        tag: "Starting Point",
      },
      {
        step: "PHASE 02",
        title: "30s Cooldown: Safe Journey",
        description:
          "The kitchen is quiet and the floor is clear. Players have a 30-second golden window to sprint, jump, and traverse obstacle sections as fast as possible!",
        tag: "Sprint Window",
      },
      {
        step: "PHASE 03",
        title: "15s Banjir Sambal: Chili Flood!",
        description:
          "A scorching flood of spicy red chili sauce engulfs the entire track for 15 seconds! Any player caught in the open suffers heavy continuous damage over time.",
        tag: "Hazard Phase",
      },
      {
        step: "PHASE 04",
        title: "Dimsum Steamer Shelters",
        description:
          "Scramble into giant traditional dimsum steamer basket shelters located across the course to stay 100% immune from the burning chili sauce deluge.",
        tag: "Safe Haven",
      },
      {
        step: "PHASE 05",
        title: "Arrive Home (Victory)",
        description:
          "Survive the periodic chili floods, time your shelter entries perfectly, and clear all obstacle stages to make it safely home and win the round!",
        tag: "Victory Goal",
      },
    ],
  },
  {
    id: "004",
    caseNumber: "EXP-004",
    title: "Mimi Tower",
    slug: "mimi-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/mimitower.webp",
    liveUrl: "https://www.roblox.com/games/81609757724009/Mimi-Tower",
    summary:
      "Inspired by the viral Indonesian dance trend and iconic pop-culture internet sensation! In Mimi Tower, players face a colossal, nonstop dancing character that grooves across the entire horizontal tower from start to finish. Touching this giant dancing figure is instant elimination. Gameplay revolves around a dynamic survival loop: a 30-second calm cooldown window to sprint across obstacle stages, followed by a 20-second high-energy dance chase phase where the giant character sweeps forward. Players must take refuge inside safe shelters—where characters automatically start grooving and dancing together—to safely wait out the rampage and reach the finish line!",
    problem:
      "Translating an upbeat viral Indonesian dance sensation into an intense, comedic survival obby with lethal collision hitboxes and rhythmic shelter interactions.",
    solution:
      "Implemented a phase-based chase engine (30s sprint cooldown vs. 20s giant character dance charge) with lethal touch-detection hitboxes and interactive safe shelters that trigger synchronized player dance animations.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Character Chase AI",
      "Lethal Hitbox Detection",
      "Phase State Machine",
      "Synchronized Dance Emotes",
      "Dynamic Spatial Audio",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Spawn at the Dance Stage",
        description:
          "Players spawn at the beginning of the colorful horizontal tower course, facing a gauntlet of obstacles with the giant viral character looming nearby.",
        tag: "Starting Point",
      },
      {
        step: "PHASE 02",
        title: "30s Cooldown: Sprint Window",
        description:
          "The giant character takes a 30-second breather. Players must seize this golden opportunity to sprint, jump, and clear obstacle stages as quickly as possible!",
        tag: "Safe Sprint Window",
      },
      {
        step: "PHASE 03",
        title: "20s Chase: Giant Dance Rampage!",
        description:
          "The viral music drops and the colossal character grooves forward along the track! Any player touching the dancing giant is instantly eliminated.",
        tag: "Lethal Hazard",
      },
      {
        step: "PHASE 04",
        title: "Dance-Party Shelters (Goyang Zone)",
        description:
          "Duck into safe-zone shelters scattered along the obstacle track! Inside the shelter, players automatically dance and groove together safely out of reach.",
        tag: "Safe Haven",
      },
      {
        step: "PHASE 05",
        title: "The VIP Finish Line (Victory)",
        description:
          "Survive all dance chase waves, master the timing between the cooldown and rampage phases, and reach the final stage to claim victory!",
        tag: "Victory Goal",
      },
    ],
  },
  {
    id: "005",
    caseNumber: "EXP-005",
    title: "Nyi Roro Tower",
    slug: "nyi-roro-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/nyirorotower.webp",
    liveUrl: "https://www.roblox.com/games/104102791337388/Nyi-Roro-Kidul-Tower",
    summary:
      "An epic, mythical survival tower experience inspired by the legendary Queen of the Southern Sea (Nyi Roro Kidul) guarding her oceanic kingdom. Players must navigate a treacherous horizontal maritime obstacle course facing dynamic environmental wrath. The game features an intense survival loop: a 30-second calm tide cooldown to advance across oceanic platforms, followed by a 20-second supernatural chase storm where meteor showers plummet from the sky, torrential rain drenches the track, and the mythical Queen chases down intruders to drag them into the watery abyss. Every victory grants sacred weapon rewards with multi-tiered milestone progression (10, 25, 50, 100+ wins)—unlocking progressively more powerful, visually spectacular mythic weapons!",
    problem:
      "Orchestrating multi-layered dynamic environmental hazards (meteor strikes, storm rain, lethal boss chase with ocean drag physics) combined with a multi-tiered milestone weapon progression system while maintaining 60 FPS performance.",
    solution:
      "Built a centralized event orchestration framework managing synced 30s/20s phase transitions, procedural meteor strike physics with raycasting AOE indicators, boss grapple-to-drown animations, and a secure DataStore milestone inventory system granting progressively stronger and visually enhanced weapon tiers at 10, 25, 50, and 100+ wins.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Procedural Meteor VFX",
      "Dynamic Weather & Storm Physics",
      "Boss AI & Ocean Drag Mechanics",
      "Milestone Weapon Scaling (10/25/50/100+)",
      "DataStores & Inventory System",
      "Safe-Zone Temple Shields",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Coastal Kingdom Outpost",
        description:
          "Players spawn at the mystical shoreline entrance of Nyi Roro Kidul's guarded kingdom, preparing to navigate a gauntlet of maritime platforms and sacred ruins.",
        tag: "Starting Point",
      },
      {
        step: "PHASE 02",
        title: "30s Calm Tide: Safe Passage",
        description:
          "The sea is tranquil and the skies are clear. Players have a 30-second window to sprint, jump over ocean reefs, and advance as far as possible across obstacle stages.",
        tag: "Safe Sprint Window",
      },
      {
        step: "PHASE 03",
        title: "20s Queen's Wrath: Meteors & Sea Drag",
        description:
          "The skies turn stormy! Flaming meteors crash across the track with heavy rain while Nyi Roro Kidul aggressively hunts players, dragging anyone caught straight into the fatal depths of the sea.",
        tag: "Multi-Hazard Storm",
      },
      {
        step: "PHASE 04",
        title: "Sacred Ocean Temples (Shelters)",
        description:
          "Seek refuge inside sacred glowing temple shrines positioned along the course to gain immunity from falling meteors and the Queen's fatal oceanic grasp.",
        tag: "Safe Haven",
      },
      {
        step: "PHASE 05",
        title: "Kingdom Throne & Progressive Mythic Arsenal",
        description:
          "Conquer all obstacles to reach the inner sanctum and claim sacred weapon rewards. The higher your win count (10, 25, 50, 100+ wins), the more formidable, visually stunning, and overpowered your unlocked weaponry becomes!",
        tag: "Progressive Mythic Loot",
      },
    ],
  },
  {
    id: "006",
    caseNumber: "EXP-006",
    title: "Pacu Jalur Tower",
    slug: "pacu-jalur-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/pacujalurtower.webp",
    liveUrl: "https://www.roblox.com/games/134040674536367/Pacu-Jalur-Tower",
    summary:
      "Inspired by the viral internet sensation of the traditional Indonesian Pacu Jalur boat dance! In Pacu Jalur Tower, players navigate a dynamic river obstacle course suspended over raging currents. The gameplay follows an exhilarating survival rhythm: a 30-second calm river cooldown to sprint and jump across floating river obstacles, followed by a 20-second colossal tidal wave surge that sweeps across the entire track, destroying everything in its path. To survive the devastating wave, players must pull over and board traditional Pacu Jalur longboats stationed along the course and break into the iconic viral Pacu Jalur boat dance!",
    problem:
      "Simulating an all-consuming 20-second tidal wave physics sweep across complex obstacle tracks while integrating synchronized boat dance emote mechanics.",
    solution:
      "Engineered a continuous wave hitbox sweep system paired with interactive Pacu Jalur boat shelters that grant instant invulnerability and trigger synchronized client-side boat rowing & dance animations.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Tidal Wave Physics & Hitboxes",
      "Phase State Machine",
      "Pacu Jalur Boat Shelters",
      "Synchronized Boat Dance Emotes",
      "Dynamic Water VFX",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Spawn at the River Arena",
        description:
          "Players spawn at the starting pier of the scenic river race track, facing an obstacle course of floating logs, bridges, and water hurdles.",
        tag: "Starting Point",
      },
      {
        step: "PHASE 02",
        title: "30s Cooldown: Calm Waters",
        description:
          "The river is peaceful. Players have a 30-second golden window to sprint, jump across floating hurdles, and clear obstacle stages as fast as possible!",
        tag: "Safe Sprint Window",
      },
      {
        step: "PHASE 03",
        title: "20s Tidal Wave: Massive River Surge!",
        description:
          "A colossal tidal wave rushes down the river for 20 seconds! Any player caught out on the obstacle track is instantly swallowed and swept away by the wave.",
        tag: "Lethal Wave Surge",
      },
      {
        step: "PHASE 04",
        title: "Pacu Jalur Boat Shelters (Joget Time)",
        description:
          "Pull over and board the traditional Pacu Jalur longboats stationed along the track! Inside the boat, players are fully shielded from the wave while busting out the viral Pacu Jalur dance!",
        tag: "Safe Haven & Dance",
      },
      {
        step: "PHASE 05",
        title: "The Grand Finish Pier (Victory)",
        description:
          "Survive all tidal wave surges, master your boat shelter timings, and conquer the entire water obstacle course to reach the grand finish line and win!",
        tag: "Victory Goal",
      },
    ],
  },
  {
    id: "007",
    caseNumber: "EXP-007",
    title: "Papa Tower",
    slug: "papa-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/papatower.webp",
    liveUrl: "https://www.roblox.com/games/72737009622664/Papa-Tower",
    summary:
      "Built around a poignant yet comedic narrative: a strict father who forbids his child from going to school, forcing players to break out of the house and journey all the way to school to pursue their education! In Papa Tower, players spawn inside the family home with one determined goal: navigate a grueling horizontal obstacle course to reach the school gates. The experience features an alternating stealth-and-survival loop: a 30-second stealth window while Papa is distracted grooming and whistling with his pet songbird, followed by a 20-second high-speed chase where Papa furiously hunts players down with a rolled-up newspaper to drag them back. Players must utilize safe shelters along the route to evade the newspaper smacks and reach school safely!",
    problem:
      "Translating an emotionally engaging 'escape from home to school' narrative into a fast-paced horizontal obstacle obby with timed stealth mechanics and comedic rolled-up newspaper swat physics.",
    solution:
      "Engineered a dual-state behavioral system (30s bird-grooming stealth cooldown vs. 20s newspaper swat chase frenzy) coupled with sequential environmental stages progressing from the family house to the school gate, custom swat hitboxes, and safe shelters.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Tower Obby Mechanics",
      "Newspaper Swat Hitbox System",
      "Phase Cycle System",
      "Safe-Zone Shelters",
      "Dynamic Spatial Audio",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Spawn Inside the House",
        description:
          "Players start trapped inside the family house with their backpacks, determined to sneak past their strict father and make the journey to school.",
        tag: "Starting Point",
      },
      {
        step: "PHASE 02",
        title: "30s Cooldown: Papa & His Songbird",
        description:
          "Papa is completely distracted grooming and whistling to his prized pet bird with his back turned. This is your 30-second golden window to sprint and jump across obstacle stages!",
        tag: "Stealth Window",
      },
      {
        step: "PHASE 03",
        title: "20s Chase: Rolled-Up Newspaper Frenzy!",
        description:
          "Papa realizes you've escaped for school and furiously charges along the track, swatting at students with a rolled-up newspaper to drag them back home!",
        tag: "Danger Alert",
      },
      {
        step: "PHASE 04",
        title: "Street Shelters & Safe Zones",
        description:
          "Duck into safe-zone shelters positioned along the route to gain 100% protection from Papa's relentless newspaper smacks.",
        tag: "Safe Haven",
      },
      {
        step: "PHASE 05",
        title: "The School Gates (Victory)",
        description:
          "Conquer all obstacle stages, outsmart Papa's pursuit cycles, and arrive safely at the school gates to secure your education and win the round!",
        tag: "Victory Goal",
      },
    ],
  },
  {
    id: "008",
    caseNumber: "EXP-008",
    title: "Takjil Tower",
    slug: "takjil-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/takjiltower.webp",
    liveUrl: "https://www.roblox.com/games/93681486158110/Takjil-Tower",
    summary:
      "A vibrant culinary tycoon-and-tower climbing experience where players scale towering dessert platforms, grab free authentic Indonesian takjil delicacies, collect rare recipes, and build their ultimate takjil business empire! Featuring 46 unique takjil items spanning multiple rarity tiers, speed coil and gear upgrades to boost farming velocity, promo code redemption systems (e.g., 'MINIUPDATE'), and competitive server-wide business leaderboards to become the richest tycoon.",
    problem:
      "Integrating high-engagement tower climbing platforming mechanics with a deep collection index of 46 distinct items, real-time tycoon business loops, and persistent DataStore economy systems.",
    solution:
      "Developed a hybrid obby-tycoon framework featuring automated takjil harvesting checkpoints, an item rarity indexer (46 unique takjil items), speed gear multiplier modifiers, promo code redemption handlers, and server-wide rich tycoon leaderboards.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Tycoon & Obby Hybrid Engine",
      "46-Item Rarity Collection System",
      "Gear Speed & Stat Multipliers",
      "Promo Code Redemption System",
      "Server-Wide Rich Leaderboards",
      "DataStores & Economy Architecture",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Climb the Tower",
        description:
          "Scale vertical and horizontal dessert-themed obby platforms to reach higher altitudes where rarer and more valuable takjil delicacies spawn.",
        tag: "Obby Platforming",
      },
      {
        step: "PHASE 02",
        title: "Harvest Free Takjil (46 Unique Items)",
        description:
          "Discover and harvest up to 46 unique Indonesian takjil delicacies—from classic Kolak and Es Pisang Ijo to ultra-rare legendary desserts with distinct stat boosts.",
        tag: "Collection & Rarity",
      },
      {
        step: "PHASE 03",
        title: "Gear Up & Speed Boost",
        description:
          "Purchase and upgrade speed coils, climbing gear, and stamina buffs in the shop or redeem promo codes (like MINIUPDATE) to maximize your takjil farming efficiency.",
        tag: "Upgrades & Multipliers",
      },
      {
        step: "PHASE 04",
        title: "Build Your Takjil Business Empire",
        description:
          "Sell your collected takjil, reinvest profits into automated stalls and business upgrades, and watch your sweet enterprise generate massive passive revenue.",
        tag: "Tycoon Economy",
      },
      {
        step: "PHASE 05",
        title: "Become the Richest Tycoon (Victory)",
        description:
          "Climb to the top of the global server leaderboard, master all 46 takjil collection badges, and become the undisputed crazy-rich Takjil Business Tycoon!",
        tag: "Server Leaderboard",
      },
    ],
  },
  {
    id: "009",
    caseNumber: "EXP-009",
    title: "Teacher Tower",
    slug: "teacher-tower",
    year: "2025",
    status: "Active",
    category: "roblox",
    classification: "Roblox Tower Experience",
    thumbnail: "/Thumbnail/teachertower.webp",
    liveUrl: "https://www.roblox.com/games/96159902532869/Scary-Teacher-Tower",
    summary:
      "Inspired by the relatable student comedy trope of skipping school before the final bell rings ('cabut sekolah')! In Teacher Tower, players spawn sitting at their classroom desks during ongoing lessons with one daring goal: slip out the door, traverse a chaotic hallway obstacle course, and make a clean escape out of the school gates. The experience operates on a timed stealth-and-chase survival cycle: a 30-second stealth window while the teacher is lecturing facing the chalkboard with their back turned, followed by a 20-second high-intensity chase frenzy where the teacher storms down the hallway obstacles to catch and drag escaping students back to class. Players must duck into locker shelters along the hallway to evade capture and break free outside!",
    problem:
      "Structuring a classroom-to-schoolyard horizontal obby with responsive stealth-to-chase AI transitions and comedic school-themed hazard mechanics.",
    solution:
      "Implemented a phase-driven classroom behavioral system (30s blackboard-teaching cooldown vs. 20s hallway sprint chase) featuring line-of-sight awareness, hallway locker shelters, and school bell audio cues.",
    role: "Lead Roblox Developer",
    duration: "2025",
    technologies: [
      "Roblox Studio",
      "Luau",
      "Tower Obby Mechanics",
      "Teacher Chase AI",
      "Hallway Locker Shelters",
      "Phase State Machine",
      "Dynamic Spatial Audio",
    ],
    gameplayLoop: [
      {
        step: "PHASE 01",
        title: "Spawn Inside the Classroom",
        description:
          "Players start at their classroom desks during lecture hours, plotting their daring escape out of the school before the final bell rings.",
        tag: "Starting Point",
      },
      {
        step: "PHASE 02",
        title: "30s Cooldown: Teacher at Blackboard",
        description:
          "The teacher is busy writing formulas and lecturing facing the chalkboard with their back turned. This is your 30-second golden window to sneak out and sprint through the hallway obstacles!",
        tag: "Stealth Window",
      },
      {
        step: "PHASE 03",
        title: "20s Chase: Teacher Hallway Hunt!",
        description:
          "The teacher notices empty desks and storms down the school corridors, aggressively chasing down escaping students along the obstacle course!",
        tag: "Danger Alert",
      },
      {
        step: "PHASE 04",
        title: "Hallway Lockers & Safe Shelters",
        description:
          "Duck into school lockers and bathroom shelters stationed along the hallways to gain 100% invulnerability from the teacher's wrath.",
        tag: "Safe Haven",
      },
      {
        step: "PHASE 05",
        title: "Outside the School Gate (Victory)",
        description:
          "Conquer all hallway obstacles, outsmart the teacher's pursuit cycles, and burst through the main school gate to freedom to claim victory!",
        tag: "Victory Goal",
      },
    ],
  },

  // --- WEB APPLICATIONS & MENTORSHIP ---
  {
    id: "010",
    caseNumber: "WEB-001",
    title: "Web-Based E-Recruitment System",
    slug: "e-recruitment-system",
    year: "2025",
    status: "Completed",
    category: "web",
    classification: "Enterprise Web Application",
    thumbnail: "",
    summary:
      "Engineered a full-featured e-recruitment platform to manage job vacancies, candidate submissions, screening pipelines, and recruitment analytics with automated rule-based filtering.",
    problem:
      "Traditional manual recruitment workflows resulted in fragmented candidate submissions, slow initial screening turnaround times, and inconsistent scoring standards.",
    solution:
      "Designed and deployed a responsive Laravel & React web application providing role-based portals for HR recruiters and applicants, automated qualification scoring, and real-time status tracking.",
    role: "Full-Stack Developer & System Analyst",
    duration: "12 weeks",
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    features: [
      "Applicant registration, identity verification, and profile management",
      "Job posting lifecycle management and dynamic application forms",
      "Rule-based candidate auto-screening engine",
      "Multi-stage recruitment workflow and assessment scoring",
      "Role-based dashboards for HR managers and recruiters (RBAC)",
      "Comprehensive reporting and candidate ranking analytics",
    ],
    challenges: [
      {
        issue: "Inconsistent applicant data schemas across various positions",
        diagnosis:
          "Lack of strict data standardization made automated candidate screening brittle",
        repair:
          "Implemented strict JSON schema validations and unified profile data structures",
        result:
          "Automated applicant screening achieved 100% processing consistency",
      },
      {
        issue: "Database performance bottlenecks during peak application surges",
        diagnosis:
          "Unindexed complex relational queries when generating ranking reports",
        repair:
          "Added composite database indexes, optimized SQL query plans, and introduced server-side pagination",
        result:
          "Query response times decreased by 80%, smoothly supporting 10,000+ applicant records",
      },
    ],
  },
  {
    id: "011",
    caseNumber: "WEB-002",
    title: "Financial Record System for Pilgrimage Services",
    slug: "financial-record-system",
    year: "2024",
    status: "Completed",
    category: "web",
    classification: "Financial & ERP System",
    thumbnail: "",
    summary:
      "Developed a centralized financial ledger and payment accounting platform for PT. Alyusro Bandung, automating pilgrim payment tracking and multi-tier agent commission settlements.",
    problem:
      "Manual ledger accounting and disconnected spreadsheets caused reconciliations delays, untracked payment installments, and frequent commission calculation errors.",
    solution:
      "Engineered a secure Laravel financial system featuring automated multi-tier commission engines, payment reconciliation, and structured ledger reporting with audit trails.",
    role: "Web Developer Intern",
    duration: "3 months (Jul 2024 – Sep 2024)",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Role-based access control (Admin, Finance Officer, Agent)",
      "Pilgrim client profiles and package quota management",
      "Installment payment logging with receipt generation",
      "Automated multi-tier agent commission calculation engine",
      "Real-time cash flow overview and exportable ledger sheets",
      "Full audit trail logging for all financial modifications",
    ],
    challenges: [
      {
        issue: "Complex commission tiering logic prone to human calculation errors",
        diagnosis:
          "Varying seasonal package packages and agent ranks required distinct calculation rules",
        repair:
          "Built a modular commission calculation strategy pattern supporting dynamic package tiers",
        result:
          "Eliminated commission calculation discrepancies and ensured 100% auditability",
      },
      {
        issue: "Absence of reliable transaction audit history",
        diagnosis:
          "Legacy spreadsheets lacked timestamps, actor identities, and modification records",
        repair:
          "Implemented immutable audit event logging across all financial ledger mutations",
        result:
          "Delivered complete operational visibility and effortless audit compliance",
      },
    ],
  },
  {
    id: "012",
    caseNumber: "EDU-001",
    title: "Roblox Game Development Mentorship Program",
    slug: "roblox-mentorship",
    year: "2025",
    status: "Completed",
    category: "mentorship",
    classification: "Technical Mentorship & Education",
    thumbnail: "",
    summary:
      "Structured and led a comprehensive Roblox Studio & Luau programming mentorship curriculum for LPKIA internship students, focusing on client-server networking, OOP, and game architecture.",
    problem:
      "Internship students lacked structured guidance on professional game development patterns, Luau scripting paradigms, and client-server network architecture.",
    solution:
      "Designed a hands-on curriculum covering Luau scripting, modular architecture, client-server replication, physics optimization, and practical team project delivery.",
    role: "Roblox Developer PKL Mentor",
    duration: "4 months (Jul 2025 – Oct 2025)",
    technologies: ["Roblox Studio", "Luau", "Client-Server Architecture", "OOP"],
    features: [
      "Comprehensive Luau programming logic and syntax training",
      "Client-server networking and RemoteEvent security architecture",
      "Modular scripting patterns and Object-Oriented Programming in Luau",
      "Physics optimization, asset budgeting, and debugging practices",
      "Hands-on code reviews and architecture guidance for student projects",
    ],
    challenges: [
      {
        issue: "Diverse programming experience levels among student cohorts",
        diagnosis:
          "Students had varied familiarity ranging from beginner logic to intermediate web concepts",
        repair:
          "Introduced modular learning tracks with scaffolded code templates and paired programming sessions",
        result:
          "100% of student interns successfully completed and deployed functional Roblox experiences",
      },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "Jul 2025 – Oct 2025",
    company: "LPKIA",
    role: "Mentor PKL — Roblox Game Developer",
    location: "Bandung, Indonesia",
    type: "Mentorship",
    summary:
      "Mentored student interns in game development using Roblox Studio and Luau scripting, focusing on client-server networking and modular programming architectures.",
    points: [
      "Structured hands-on Luau scripting modules covering variables, functions, events, and OOP principles.",
      "Guided students in architecting gameplay mechanics, RemoteEvent security, and modular OOP architecture.",
      "Conducted weekly code reviews, performance audits, and debugging walkthroughs.",
    ],
    technologies: ["Roblox Studio", "Luau", "OOP", "Game Architecture"],
  },
  {
    period: "Jul 2024 – Sep 2024",
    company: "PT. Alyusro Bandung",
    role: "Web Developer Intern",
    location: "Bandung, Indonesia",
    type: "Internship",
    summary:
      "Developed a comprehensive web-based financial ledger and payment administration system using Laravel, PHP, and MySQL.",
    points: [
      "Implemented role-based user authentication and data protection mechanisms.",
      "Engineered automated agent commission calculations across multiple pilgrimage packages.",
      "Built interactive financial summary dashboards and automated report generation modules.",
      "Conducted Black Box functional testing and system debugging to ensure data integrity.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
  },
  {
    period: "2022 – 2026",
    company: "Institut Digital Ekonomi LPKIA",
    role: "Informatics Engineering Student",
    location: "Bandung, Indonesia",
    type: "Education",
    summary:
      "Pursuing Bachelor of Informatics Engineering with focus on Software Engineering, Web Systems, and Interactive Game Development.",
    points: [
      "Deep study in Algorithms & Data Structures, Database Systems, and Object-Oriented Programming.",
      "Active in software development projects, technical leadership, and peer mentoring.",
    ],
    technologies: ["Software Engineering", "Web Systems", "Database Design"],
  },
];

export const arsenalCategories = [
  {
    name: "Game Development & Engine",
    color: "bg-arcade-yellow",
    textColor: "text-black",
    tools: [
      { name: "Roblox Studio", desc: "Game Engine & IDE", level: "Advanced" },
      { name: "Luau Scripting", desc: "Fast typed Lua dialect", level: "Advanced" },
      { name: "Client-Server OOP", desc: "Replication, RemoteEvents & security", level: "Advanced" },
      { name: "DataStore Services", desc: "Cloud persistence & profiles", level: "Advanced" },
      { name: "Game Mechanics & Logic", desc: "Physics, state machines & systems", level: "Advanced" },
    ],
  },
  {
    name: "Web & Frontend Stack",
    color: "bg-arcade-cyan",
    textColor: "text-black",
    tools: [
      { name: "React / Vite", desc: "Component-based UI development", level: "Advanced" },
      { name: "TypeScript / JS", desc: "Type-safe modern scripting", level: "Advanced" },
      { name: "Tailwind CSS", desc: "Utility-first modern design", level: "Advanced" },
      { name: "Next.js", desc: "Full-stack React framework", level: "Intermediate" },
      { name: "Framer Motion", desc: "Interactive UI animations", level: "Intermediate" },
    ],
  },
  {
    name: "Backend & Database",
    color: "bg-arcade-green",
    textColor: "text-black",
    tools: [
      { name: "Laravel (PHP)", desc: "MVC enterprise backend framework", level: "Advanced" },
      { name: "MySQL / Relational DB", desc: "Schema design & query optimization", level: "Advanced" },
      { name: "RESTful APIs", desc: "Standardized API endpoints & auth", level: "Advanced" },
      { name: "Node.js (Basic)", desc: "Server runtime & automation", level: "Intermediate" },
    ],
  },
  {
    name: "Workflow & Tools",
    color: "bg-arcade-orange",
    textColor: "text-black",
    tools: [
      { name: "Git & GitHub", desc: "Version control & collaboration", level: "Advanced" },
      { name: "Postman", desc: "API testing & verification", level: "Advanced" },
      { name: "GitHub Actions", desc: "CI/CD & automated deployment", level: "Intermediate" },
      { name: "VS Code", desc: "Primary code editing environment", level: "Daily Driver" },
    ],
  },
];
