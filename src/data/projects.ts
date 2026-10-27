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
  caseNumber?: string;
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
    title: "Homestay App & Tourism Ecosystem (KUY Pangandaran)",
    slug: "kuy-pangandaran",
    year: "2025",
    status: "Live Production",
    category: "web",
    classification: "Enterprise Tourism & Accommodation Marketplace",
    thumbnail: "/Thumbnail/kuypangandaran.png",
    liveUrl: "https://kuypangandaran.com/",
    summary:
      "A production-ready multi-role accommodation reservation and local tourism ecosystem (KUY Pangandaran) built with Laravel 12 and MySQL. Unifies homestay bookings, tourism ticketing, local MSME souvenirs, and daily bidding advertising. Engineered with cryptographic Dual-Handshake OTP check-ins, event-driven calendar occupancy blocking, real-time Haversine geolocation discovery, and tiered host quota monetization.",
    problem:
      "Local homestay hosts struggled with manual double-booking conflicts, fraudulent cancellation disputes, lack of verified physical guest arrival checks, and chaotic commission management. Tourists simultaneously faced difficulty locating nearby accommodations without precise subdistrict knowledge.",
    solution:
      "Architected a robust multi-role Laravel 12 platform featuring an event-driven Calendar Occupancy Blocker (with 10-minute hold expiry), a Dual-Handshake OTP check-in engine for fraud-proof escrow payout settlements, a Haversine spherical distance geolocation API, a schema-driven dynamic Admin Resource CRUD engine covering 18+ entities, and a daily bidding property placement system.",
    role: "Fullstack Web Engineer & System Architect",
    duration: "Production-Ready (2025)",
    technologies: [
      "Laravel 12",
      "PHP 8.2+",
      "MySQL",
      "Spatie RBAC",
      "Tailwind CSS",
      "Blade",
      "Haversine Geolocation",
      "Barryvdh DomPDF",
      "Filament Excel",
      "REST APIs",
    ],
    features: [
      "Dual-Handshake OTP Check-In Engine: Cryptographic UUID token & 6-digit OTP verification locking partner payout settlements upon verified physical arrival",
      "Automated Calendar Occupancy Blocker: Eloquent lifecycle observers generating atomic blocked dates with 10-minute hold expiry to eliminate double-booking",
      "Haversine Spherical Distance Geolocation: Great-circle distance calculations connecting user GPS coordinates directly to closest homestays and attractions",
      "Daily Bidding Property Placement Engine: Real-time SQL auction algorithm ranking properties on hero carousels based on daily sponsor bids",
      "Declarative Dynamic Admin Resource CRUD: Schema-driven architecture managing 18+ master entities without boilerplate controller code",
      "Tiered Host Quotas & Add-On Monetization: Free tier vs. Mitra Pro subscriptions (5 homestays, 5% fee discount) and permanent listing slot purchases",
      "Dual-Layer Moderation & Audit Staging: Pending edits stored as JSON staging records to prevent unvetted facility or price alterations",
      "Multi-Tier Commission & Affiliate Tracking: 4-layer commission hierarchy with referral attribution via secure cookies",
      "Guest Checkout & Cryptographic Token Tracking: Public reservation inquiry via UUID tokens, rate limiting, and automated DomPDF invoice generation",
    ],
    challenges: [
      {
        issue: "Simultaneous double-booking race conditions and orphaned blocked calendar dates",
        diagnosis:
          "Concurrent checkout sessions could lock overlapping dates or abandon uncompleted bookings permanently in the database",
        repair:
          "Implemented Eloquent model lifecycle hooks (creating/saving) on OrderHomestay combined with a 10-minute atomic hold-expiry window that sweeps unconfirmed blocked dates",
        result:
          "100% elimination of double-booking race conditions while maintaining accurate real-time room availability",
      },
      {
        issue: "Host-guest arrival disputes and unverified escrow settlement claims",
        diagnosis:
          "Traditional platforms rely on honor-system check-in timestamps, leading to false cancellation chargebacks and partner fraud",
        repair:
          "Built a cryptographic Dual-Handshake OTP mechanism where a unique 6-digit check-in token must be validated by the host dashboard on-site before payout rights unlock",
        result:
          "Guaranteed fraud-proof escrow settlements based strictly on verified physical guest presence",
      },
      {
        issue: "Boilerplate controller bloat managing 18+ admin master data entities",
        diagnosis:
          "Writing separate controllers for FAQs, articles, vouchers, bank accounts, and moderation logs caused massive code duplication and maintenance friction",
        repair:
          "Architected a centralized schema-driven AdminResourceController handling dynamic validation, eager-loaded relationships, search filters, and PDF/Excel exports",
        result:
          "Reduced administrative backend codebase by over 70% while providing consistent, auditable CRUD operations",
      },
    ],
  },
  {
    id: "011",
    title: "HireScan: Smart E-Recruitment & ATS Platform",
    slug: "e-recruitment-system",
    year: "2025",
    status: "Production-Ready",
    category: "web",
    classification: "Smart ATS & Multi-Branch E-Recruitment Platform",
    thumbnail: "/Thumbnail/hirescan.png",
    githubUrl: "https://github.com/rizkyenjoyy/hirescan",
    summary:
      "An enterprise-grade Applicant Tracking System (ATS) and automated e-recruitment platform (HireScan) engineered for high-volume, multi-branch talent acquisition (e.g. MyRepublic partnerships). Built with Laravel, React 19, TypeScript, Inertia.js v2, and Tailwind CSS. Features a zero-migration dynamic form builder, a deterministic rule-based auto-screening engine executing in 0 milliseconds, a calendar-aware smart interview scheduler skipping national holidays and weekends, and 1-click Bundy Grouping candidate forwarding with email failover.",
    problem:
      "Multi-branch enterprise recruitment suffered severe operational bottlenecks: manual resume screening took 3–5 working days per batch and was prone to human error; introducing role-specific questions required rigid database migrations or detached Google Forms; manual interview invitations frequently conflicted with national holidays or weekends; and forwarding qualified candidates to branch PICs via fragmented chat attachments caused lost records and zero status visibility.",
    solution:
      "Architected a modern monolith using Laravel and React 19 via Inertia.js. Developed a schema-less JSONB dynamic form builder supporting 5 input types and screening toggles, a forward-chaining deterministic inference engine evaluating applicants instantly with transparent audit trails, a holiday-aware scheduling algorithm skipping Indonesian national holidays and weekends, and a Bundy Grouping in-memory batch forwarder with automatic HRD central failover.",
    role: "Full-Stack Web Engineer & System Architect",
    duration: "12 weeks (2025)",
    technologies: [
      "Laravel 12/13",
      "PHP 8.2+",
      "React 19",
      "TypeScript",
      "Inertia.js v2",
      "Tailwind CSS v4",
      "MySQL / PostgreSQL (JSONB)",
      "Radix UI",
      "Vite 8",
      "REST APIs",
    ],
    features: [
      "Zero-Migration Dynamic Form Builder: Schema-less JSONB architecture enabling HRD/RO to deploy customizable screening questionnaires across 5 input types without database migrations",
      "Deterministic Rule-Based Auto-Screening Engine: Mathematical forward-chaining inference engine evaluating candidate qualifications in 0ms with auditable pass/fail reasoning",
      "Smart Interview Scheduler (Calendar-Aware): Intelligent date calculation algorithm detecting weekends and automatically skipping Indonesian National Public Holidays (Tanggal Merah)",
      "Bundy Grouping Batch Candidate Forwarding: In-memory aggregation ({vacancy_form_id}-{branch_city}) generating 1-click candidate digest emails for branch PICs",
      "Email Failover & Delivery Protection: Automated routing mechanism redirecting candidate digests to central HRD if branch PIC emails are missing or invalid",
      "Anti-Duplicate & Fraud Prevention: Restricts duplicate applications per vacancy based on WhatsApp & Email with configurable resubmit toggle",
      "Multi-Role RBAC & Referral Tracking: Dedicated portals for HRD Managers and Recruitment Officers with unique referral link attribution (/apply/{formId}?ref={username})",
      "Multi-Step Dynamic Applicant Portal: Responsive, accessible public application interface dynamically rendered from vacancy JSON schemas",
    ],
    challenges: [
      {
        issue: "Manual screening turnaround created a 3–5 day bottleneck for high-volume applicant surges",
        diagnosis:
          "Human recruiters manually parsing basic hard-requirements (age ranges, driver's licenses, education, vehicle ownership) caused delays and inconsistent scoring",
        repair:
          "Engineered a forward-chaining deterministic rule-based inference engine that executes sequentially on form submission, comparing applicant answers against expectation keys with 100% auditability",
        result:
          "Reduced initial screening evaluation latency from 3–5 days to 0 seconds (instantaneous) with zero AI hallucination risk",
      },
      {
        issue: "Rigid database schema prevented fast creation of position-specific screening questionnaires",
        diagnosis:
          "Traditional relational columns or Entity-Attribute-Value (EAV) models required expensive migrations or complex multi-table SQL joins that degraded performance",
        repair:
          "Implemented a schema-less JSONB architecture utilizing Eloquent JSON Attribute Casting on the screening_rules column of vacancy_forms with dual-mode isScreening toggles",
        result:
          "Enabled HRD to launch fully customized position questionnaires in < 5 minutes without touching database schemas or writing migration scripts",
      },
      {
        issue: "Candidate interview invitations frequently conflicted with national holidays or weekends",
        diagnosis:
          "Static date offset math (+2 days) scheduled physical branch interviews on closed office days (Saturdays, Sundays, or Tanggal Merah)",
        repair:
          "Built a calendar-aware iterative scheduling algorithm cross-referencing Indonesian national public holiday calendars and weekend flags before generating personalized invitation templates",
        result:
          "Achieved 0% scheduling collision incidents and completely eliminated manual date corrections for recruitment officers",
      },
      {
        issue: "Fragmented, unverified candidate distribution to regional branch managers",
        diagnosis:
          "Forwarding applicant data manually via chat attachments or spreadsheets caused lost applicant histories and zero status transparency",
        repair:
          "Created the Bundy Grouping batch candidate forwarder that aggregates qualified candidates in-memory by vacancy and branch, sending digest emails with automatic fallback to central HRD",
        result:
          "Boosted regional branch communication efficiency by 85% with 100% delivery reliability",
      },
    ],
  },
  {
    id: "012",
    title: "Arbain: Pilgrimage Management & Financial Accounting ERP",
    slug: "financial-record-system",
    year: "2024",
    status: "Completed",
    category: "web",
    classification: "Pilgrimage Operations & Financial Accounting ERP",
    thumbnail: "/Thumbnail/arbain.png",
    summary:
      "A centralized web-based ERP and financial accounting platform (Arbain Travel) engineered for Umrah & Hajj pilgrimage travel agencies. Connects agency management (Super Admin) with marketing partners (Mitra Agen) in a unified system. Features two-tier registration and passport document verification, an automated payment approval and ledger reconciliation workflow, an early-warning deadline tracking engine ('Kejar Lunas' at H-60 departure), automated agent commission settlements upon complete payment, interactive Chart.js financial analytics, and in-app real-time notifications.",
    problem:
      "Umrah and Hajj travel agencies faced severe operational inefficiencies: manual spreadsheets caused payment reconciliation delays, untracked installment payments, and unverified bank transfers; passport and national ID validation lacked audit trails; missing early warnings for package payment deadlines (H-60 departure) led to seat quota losses; and calculating seasonal partner agent commissions manually resulted in frequent disbursement disputes.",
    solution:
      "Architected an integrated Laravel MVC platform featuring strict role-based access control (Admin vs. Agen) powered by Spatie Permission. Implemented a dual-step pilgrim registration and verification engine, an automated payment approval system that updates remaining balances dynamically upon bank proof validation, a model-level dynamic accessor engine for quota and deadline tracking ('Kejar Lunas' H-60), an automated commission distribution trigger upon full payment, interactive Chart.js revenue dashboards, and five automated database notification classes.",
    role: "Web Developer Intern & System Architect",
    duration: "3 months (Jul 2024 – Sep 2024)",
    technologies: [
      "Laravel (PHP 8.x)",
      "MySQL",
      "Spatie Permission (RBAC)",
      "Bootstrap 5",
      "Blade",
      "Chart.js 3",
      "Yajra DataTables",
      "Laravel Excel",
      "DomPDF",
      "In-App Notifications",
    ],
    features: [
      "Two-Tier Pilgrim Registration & Document Validation: Agent submission workflow with administrative passport, NIK, and medical history approval queues",
      "Automated Payment Reconciliation & Invoice Engine: Bank transfer proof upload, admin audit workflow, dynamic remaining balance calculation, and official printable PDF invoices",
      "Early-Warning Kejar Lunas & Quota Monitor: Dynamic Eloquent query scopes flagging unpaid pilgrims 60 days before departure (H-60) alongside real-time seat quota countdowns",
      "Automated Partner Commission Engine: Trigger-based commission ledger generating disbursement records for marketing agents immediately when pilgrim balances reach full settlement",
      "Interactive Financial Analytics Dashboard: Real-time Chart.js visualizer with interactive metrics switcher (Revenue in IDR vs. Transaction Frequency) and payment method ratios (Bank Transfer vs. Cash)",
      "Multi-Role Access Control (Spatie RBAC): Granular permissions separating Administrator master data management from Agent registration & personal commission monitoring",
      "Server-Side DataTables & Export Pipelines: High-speed Yajra DataTables indexing with one-click Excel, CSV, and PDF report downloads for financial accounting",
      "Automated Event-Driven Notifications: 5 background database notification classes keeping agents and administrators in sync on approvals, payments, and payouts",
    ],
    challenges: [
      {
        issue: "Complex installment tracking and frequent reconciliation errors across seasonal pilgrimage packages",
        diagnosis:
          "Pilgrims pay varying deposit installments across different package tiers, making manual spreadsheet math prone to calculation errors and untracked deficits",
        repair:
          "Built dynamic Eloquent model accessors (tagihan_status, sisa_pembayaran) on the Jamaah model that recalculate balances automatically only upon approved payment records",
        result:
          "Eliminated accounting discrepancies, ensuring 100% financial audit accuracy across all pilgrim ledger accounts",
      },
      {
        issue: "Risk of hotel and flight booking forfeiture due to late payment settlements before departure",
        diagnosis:
          "Travel agencies must finalize airline and Saudi accommodation bookings at H-60; without automated warnings, delayed pilgrim payments caused cash-flow deficits",
        repair:
          "Engineered an automated query scope (scopeBelumLunasDiH60) and dashboard alert module specifically detecting and highlighting accounts due 60 days prior to departure",
        result:
          "Prevented quota forfeitures and achieved a 95% on-time payment compliance rate for departure cohorts",
      },
      {
        issue: "Commission disbursement disputes and lack of commission history transparency for marketing agents",
        diagnosis:
          "Agents lacked real-time visibility into whether their referred pilgrims had completed payments, causing distrust and delayed payouts",
        repair:
          "Implemented an automated commission trigger that generates immutable commission records and in-app notifications immediately upon full payment validation, complete with personal exportable ledgers",
        result:
          "Completely eliminated commission payout discrepancies and reduced agent administrative inquiries by 90%",
      },
    ],
  },
  {
    id: "013",
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
    period: "2024 – 2025",
    company: "KUY Pangandaran",
    role: "Fullstack Web Engineer & System Architect",
    location: "Pangandaran, Indonesia (Remote)",
    type: "Full-Time",
    summary:
      "Architected and deployed a production multi-tenant tourism reservation platform featuring OTP check-in security, automated calendar blocking, and Haversine geolocation.",
    points: [
      "Engineered Dual-Handshake OTP check-in engine guaranteeing fraud-proof partner payout settlements upon verified physical guest arrival.",
      "Developed real-time Calendar Occupancy Blocker with 10-minute hold expiry to eliminate double-booking race conditions.",
      "Built declarative dynamic Admin Resource CRUD engine cutting boilerplate controller code by >70% across 18+ entities.",
      "Integrated daily bidding sponsorship placement and multi-tier host quota monetization models.",
    ],
    technologies: [
      "Laravel 12",
      "PHP 8.2+",
      "MySQL",
      "Spatie RBAC",
      "Tailwind CSS",
      "DomPDF",
      "Filament Excel",
    ],
  },
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
    company: "Arbain (PT. Alyusro Bandung)",
    role: "Web Developer Intern",
    location: "Bandung, Indonesia",
    type: "Internship",
    summary:
      "Developed a comprehensive web-based financial ledger, pilgrimage management, and payment administration ERP system using Laravel, PHP, MySQL, and Spatie RBAC.",
    points: [
      "Implemented multi-role authentication (Admin vs. Agen) and document approval pipelines using Spatie Permission.",
      "Engineered automated pilgrim balance reconciliation, invoice generation (PDF), and partner agent commission settlements upon complete payment.",
      "Built interactive Chart.js revenue dashboards with real-time revenue vs. transaction frequency switchers.",
      "Developed early-warning query filters for 'Kejar Lunas' deadline monitoring (H-60 departure).",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Spatie RBAC", "Bootstrap 5", "Chart.js", "DomPDF"],
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
