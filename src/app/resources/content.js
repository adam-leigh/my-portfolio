import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Adam",
  lastName: "Leigh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Sofware Developer",
  avatar: "/images/avatar.png",
  email: "thomasadam.leigh@gmail.com",
  location: "Africa/Johannesburg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adam-leigh",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adam-leigh-developer/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

{
  /* <>Building workflows for a world where humans and AI create together.</> */
  /* <>Engineering intelligent systems that reshape how we live and work.</> */
}
const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>Living on the cutting, bleeding edge of technological advancement.</>
  ),
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Neocortexa</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Adam, a software developer at
      <strong style={{ color: "var(--neutral-on-background-strong)" }}>
        {" "}
        The B4i Project
      </strong>
      , where I build agentic AI systems and full stack web applications.
      <br />
      <br />
      After hours, I experiment with AI as a life-operating system; monitoring,
      reflecting, and optimizing everything I do.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://mail.google.com/mail/?view=cm&to=thomasadam.leigh@gmail.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Adam writes code in Gauteng, South Africa and thinks a lot about
        feedback loops. He's building AI that watches what you do, remembers
        what you want, and helps close the gap between intention and action.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "The B4i Project",
        timeframe: "2025 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Built an e-commerce platform called SAKEwinkel for OntbytSAKE, an
            Afrikaans television show with millions of viewers that premieres
            every Saturday morning on KykNet, with PayFast payment integration.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            // src: "/images/projects/project-01/cover-01.jpg",
            src: "/images/projects/sakewinkel/cover-1.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "FVA Advisory",
        timeframe: "2024 - 2025",
        role: "AI Integration Engineer",
        achievements: [
          <>
            Built a chatbot connected to a vector database trained on valuation
            data, designed as an assistant for finance valuation experts to
            perform client valuations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor of Arts - Saint Augustine College of South Africa",
        description: (
          <>
            Triple-majored in Political Science, Philosophy, and Psychology. Top
            of college, 12 distinctions. The kind of interdisciplinary thinking
            that teaches you how to think, not what to think.
          </>
        ),
      },
      {
        name: "React.gg - ui.dev",
        description: (
          <>
            Interactive React mastery course. 90+ challenges, modern React v19
            features. Challenge-based learning that gets you shipping production
            apps.
          </>
        ),
      },
      {
        name: "Full-Stack Engineer - Codecademy",
        description: (
          <>
            JavaScript, Node.js, React, the whole stack. Built applications from
            database to deployment.
          </>
        ),
      },
      {
        name: "PCAP - Pearson Certified Associate in Python",
        description: (
          <>
            Intermediate Python certification. Object-oriented programming,
            modules, debugging.
          </>
        ),
      },
      {
        name: "PCEP - Pearson Certified Entry-Level in Python",
        description: (
          <>
            Entry-level Python fundamentals. Data types, functions, control
            flow.
          </>
        ),
      },
      {
        name: "PearsonVue Information Technology Specialist by Certiport",
        description: (
          <>Broad IT foundation covering development, databases, networking.</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Data Analysis & Big Data",
        description: (
          <>
            Processing large-scale datasets with Python, SQL, and modern
            analytics frameworks. Building data pipelines and extracting
            actionable insights from complex information streams.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Web Development",
        description: (
          <>
            Crafting full-stack applications with TypeScript, React, Next.js,
            and Node.js. Building scalable, type-safe systems from database
            design to intuitive user interfaces.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Agentic AI Systems",
        description: (
          <>
            Architecting intelligent agents using local LLMs with knowledge
            bases, human-in-the-loop feedback mechanisms, and self-improving
            capabilities across diverse domains.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts and musings...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
