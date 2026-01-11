const ropsit = {
  id: "ropsit",
  logo: "/assets/icons/ropsit.ico",
  title: "Ropsit",
  description: "NBA player stats for sports betting / fantasy sports",
  whatIs: [
    "Ropsit is an NBA stats hub for people who care about player props and fantasy, not just final scores.",
    "It pulls together player stats, team info, and injuries into one clean interface so you don’t have to bounce between multiple sites to get a feel for a slate.",
    "Under the hood it’s a fullstack app with a SvelteKit frontend and a Rust + Axum + Python backend, built to feel fast and focused rather than like a sportsbook clone.",
  ],
  why: [
    "When looking at NBA props, I always ended up with 5–10 tabs open for stats, injuries, and random tools, and it felt way more clunky than it should.",
    "Ropsit is my attempt to have one place that shows the stuff I actually care about when deciding bets or fantasy plays, without ads or noise.",
    "It was also a learning project: Rust, Axum, SvelteKit, and Python data scripts were all new to me, so this was a way to learn a completely different stack by building something I’d actually use.",
  ],
  challenges: [
    "Learning Rust, Axum, SvelteKit, and the Python data tooling from scratch and getting them to play nicely together.",
    "Figuring out how to structure the API so the frontend gets exactly the data it needs without a bunch of extra round trips.",
    "Dealing with external NBA data sources and making the app handle slow or broken responses in a way that doesn’t break the UI.",
    "Keeping the UI simple enough to scan quickly, while still letting you dig into more detailed stats when you want to.",
    "Making the whole thing feel snappy even though there’s a lot going on behind the scenes with requests, parsing, and caching.",
  ],
  stack: {
    frontend: "SvelteKit | TypeScript | CSS",
    backend: "Rust (Axum) | Python",
    database: "External NBA APIs + in-memory caching", // adjust if you add a real DB
    devops: "Docker | Render | Netlify",
    other: "REST API | nba_api | nbainjuries",
  },
  links: {
    github: "https://github.com/reijjo/props",
    live: "https://ropsit.netlify.app/",
  },
  images: {
    desktop: [
      "/assets/images/projects/props/team.png",
      "/assets/images/projects/props/player.png",
      "/assets/images/projects/props/landing.png",
    ],
    mobile: [],
  },
};

const tarpit = {
  id: "tarpit",
  logo: "/assets/icons/fish.png",
  title: "Tärpit",
  description: "Sports bet tracking made simple",
  whatIs: [
    "Tärpit is a personal sports betting tracker designed to help users easily log, organize, and analyze their bets.",
    "Whether you're casually betting on your favorite team or tracking performance over time, Tärpit provides a simple, focused UI to keep everything in one place — without the clutter of gambling platforms.",
    "This is a fullstack web app I built from scratch to learn production-ready development with authentication, REST APIs, and persistent user data.",
  ],
  why: [
    "I'm an on-and-off sports bettor, and I always found it frustrating to track my bets — especially using Excel on my phone.",
    "I wanted something lightweight, fast, and mobile-friendly that actually made it enjoyable to log and view my bets.",
    "This project gave me the chance to solve a real problem I’ve had for years, while also sharpening my skills in building a fullstack web app with clean UX, authentication, and data persistence.",
  ],
  challenges: [
    "Designing a layout that works well on mobile without feeling cramped",
    "Validating bet data (like odds, amount, and outcomes) in a flexible way",
    "Creating secure user accounts with proper error handling",
    "Structuring the backend to allow filtering, sorting, and expanding features later",
    "Handling API errors cleanly so users always know what’s happening",
  ],
  stack: {
    frontend: "React | TypeScript | CSS",
    backend: "Bun | Express",
    database: "PostgreSQL | Sequelize | AWS RDS",
    devops: "Docker | GitHub Actions | pgAdmin",
    other: "RestAPI | Redux | RTK Query",
  },
  links: {
    github: "https://github.com/reijjo/bet",
    live: "https://tarpit.pages.dev/",
  },
  images: {
    desktop: [
      "/assets/images/projects/tarpit/landing.png",
      "/assets/images/projects/tarpit/login.png",
      "/assets/images/projects/tarpit/dash.png",
    ],
    mobile: [],
  },
};

const yatzy = {
  id: "yatzy",
  logo: "/assets/icons/game_die.png",
  title: "Yatzy",
  description: "Classic dice game brought to the browser",
  whatIs: [
    "Yatzy is a classic dice game brought to the browser, built as my first TypeScript project.",
    "It's a fullstack app with user authentication, so players can register, log in, and track their games securely.",
    "This project was a way for me to learn TypeScript in a real-world context, while also having fun building a game I've always enjoyed.",
  ],
  why: [
    "I wanted a simple way to play Yatzy online, but every app I found was filled with ads, coins, and unnecessary extras.",
    "So I decided to make my own clean version — fast, focused, and mobile-friendly.",
    "I also needed a hands-on way to learn TypeScript, and combining it with authentication and backend logic made it the perfect learning project.",
  ],
  challenges: [
    "Learning TypeScript from scratch and applying strict typing across the stack",
    "Implementing JWT authentication with secure login and registration",
    "Designing and coding the Yatzy game logic, including scoring rules and bonus conditions",
    "Creating a responsive UI that works well on both desktop and mobile",
    "Keeping the codebase clean and scalable while exploring new tools and patterns",
  ],
  stack: {
    frontend: "React | TypeScript | CSS",
    backend: "Node.js | Express.js",
    database: "MongoDB",
    devops: "",
    other: "RestAPI | JSON Web Token",
  },
  links: {
    github: "https://github.com/reijjo/jazz",
    live: "https://dancing-mousse-cb6e47.netlify.app/",
  },
  images: {
    desktop: [
      "/assets/images/projects/yatzy/dash.png",
      "/assets/images/projects/yatzy/yatzyDesk.png",
      "/assets/images/projects/yatzy/points.png",
    ],
    mobile: [],
  },
};

export const projectInfo = [ropsit, tarpit, yatzy];
