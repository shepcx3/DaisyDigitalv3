// All site copy lives here, so words can change without touching components.
// Source: the Daisy Digital owner's brief and notes, rewritten in a calmer, professional voice.
// [placeholder] marks anything still to confirm with the client.

export const brand = {
  name: "Daisy Digital",
  tagline: "Creative by nature.",
  motto: "Stay cute. Stay current. Stay on everyone's feed.",
  email: "hello@daisydigital.ca",
  instagram: "daisydigital.ca",
  // Formspree (or similar) endpoint. Empty = forms open the visitor's email app instead.
  formEndpoint: "",
};

export const nav = [
  { href: "/work/", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/team/", label: "Team" },
  { href: "/careers/", label: "Careers" },
];

export const home = {
  title: "Creative by nature.",
  lead: "Social media, content, strategy and consulting for brands people love to follow.",
  body: "We're chronically online, creatively curious and always a few scrolls ahead, so your brand looks good, sounds right and shows up where your audience already is.",
  cta: "Start a project",
  secondary: "See our work",
  clientsTitle: "Brands we've worked with",
  servicesTitle: "What we do",
  servicesIntro: "Four ways we keep your brand a few scrolls ahead.",
  services: [
    { name: "Social media", blurb: "Your feed, handled. We plan it, post it and keep it looking like you, week after week." },
    { name: "Content", blurb: "Photo and video made for the feed, from the first idea on set to the final edit." },
    { name: "Strategy", blurb: "We track what's trending, work out what fits your brand, and turn it into a plan your team can follow." },
    { name: "Consulting", blurb: "Already have a team? We review what you're doing and show you exactly what to change." },
  ],
  workTitle: "Selected work",
  workIntro: "Real content from real launches, shot and styled by the team.",
  teamTitle: "The team",
  teamIntro: "A small team that lives online, so you don't have to.",
  ctaTitle: "Have something in mind?",
  ctaBody: "Tell us about your brand, the idea you can't stop thinking about, or where you want your feed to be in six months.",
};

export type Photo = { file: string; caption: string; alt: string; landscape?: boolean };

export type CaseStudy = {
  slug: string;
  brand: string;
  /** One line under the name. [placeholder] until the client confirms what was done. */
  kind: string;
  gallery?: { title: string; photos: Photo[] }[];
};

// No results, metrics or quotes until the client confirms them.
export const work: CaseStudy[] = [
  {
    slug: "lay-low",
    brand: "Lay Low",
    kind: "Café · content and space",
    gallery: [
      {
        title: "Content",
        photos: [
          { file: "matcha-latte", caption: "Matcha and latte art", alt: "A matcha latte, a cappuccino with latte art and a glass of orange juice on a wooden table in the sun" },
          { file: "orchard", caption: "Orchard day", alt: "A hand holding an iced drink in a Lay Low cup up among apple tree branches" },
          { file: "brunch", caption: "Brunch spread", alt: "Eggs benedict with salad, an iced coffee and a matcha latte, seen from above" },
          { file: "iced-matcha", caption: "Matcha to go", alt: "Four iced matcha drinks in Lay Low cups in a carrier on a red bench" },
          { file: "apple-bins", caption: "Apple season", alt: "An iced drink in a Lay Low cup sitting among bins of red apples" },
          { file: "martinis", caption: "Martini hour", alt: "Two martinis on a bar at night" },
          { file: "dessert", caption: "Dessert for the table", alt: "Plates of chocolate dessert and candles on a lace tablecloth, seen from above" },
          { file: "apples-grass", caption: "In the orchard", alt: "An iced drink in a Lay Low cup in the grass between fallen apples" },
          { file: "espresso-martini", caption: "Espresso martini", alt: "A hand with red nails spooning into a frothy espresso drink topped with coffee beans" },
          { file: "burger", caption: "Burger and caesar", alt: "A tall burger and a caesar salad on a plate, with flowers on the table" },
          { file: "apple-basket", caption: "Fall basket", alt: "A basket of apples with a coffee cup, held against a red sweater" },
          { file: "kale-salad", caption: "Kale salad", alt: "A kale salad with a creamy drizzle, seen from above" },
          { file: "pink-tote", caption: "Pink tote, green booth", alt: "A pink tote bag on a green velvet banquette under a plant" },
        ],
      },
      {
        title: "The space",
        photos: [
          { file: "sketch", caption: "The first sketch", alt: "A hand-drawn sketch of a green banquette with plants, next to fabric swatches" },
          { file: "swatches", caption: "Choosing the greens", alt: "Green paint chips and fabric swatches spread on a wooden table" },
          { file: "the-room", caption: "The finished room", alt: "The finished cafe: a curved green velvet banquette, round wood tables and arched lights" },
          { file: "storefront", caption: "Lay Low", alt: "The Lay Low storefront on a brick street", landscape: true },
        ],
      },
    ],
  },
  {
    slug: "holistically-hip",
    brand: "Holistically Hip",
    kind: "Wellness shop · content",
    gallery: [
      {
        title: "Content",
        photos: [
          { file: "sign", caption: "Holistically Hip", alt: "The Holistically Hip sign above a woven basket of products" },
          { file: "shelf-wall", caption: "The colour wall", alt: "A woman in a cap reaching up to a wall of colourful product shelves" },
          { file: "fruit-packs", caption: "Fruit packs", alt: "A hand holding four pastel fruit snack packs in the sun" },
          { file: "collagen", caption: "Bend collagen", alt: "A hand holding two Bend collagen pouches in front of the store window" },
          { file: "snack-basket", caption: "Snack basket", alt: "A white basket full of candy and snack bags on a wooden table" },
          { file: "skin-essence", caption: "Skin Essence", alt: "Skin Essence skincare boxes surrounded by plants" },
          { file: "salt-and-sage", caption: "Salt & Sage", alt: "Salt and Sage and Bubbly perfume boxes and a roller on a marble tray" },
          { file: "candles", caption: "Candles", alt: "Four jar candles stacked in front of a woven bag" },
          { file: "sample-basket", caption: "Sample basket", alt: "A basket full of sample packets on the pavement" },
          { file: "deodorant", caption: "Natural deodorant", alt: "Two boxes of natural deodorant held up in front of a plant" },
          { file: "skin-essence-shelf", caption: "On the shelf", alt: "Skin Essence serums and creams on a white shelf with a display card" },
          { file: "plant-corner", caption: "The plant corner", alt: "Tall leafy plants filling a bright corner of the shop" },
        ],
      },
    ],
  },
];

/** Every brand the owner listed, for the client strip. Only some have photos so far. */
export const clients = ["Bloom", "Glossier", "Lay Low", "Strong", "Holistically Hip", "Dreamers Club"];

export type Member = { slug: string; name: string; role: string; bio: string };

// Roles and bios rewritten from the owner's handwritten notes. [placeholder] confirm job titles.
export const team: Member[] = [
  { slug: "erica", name: "Erica", role: "Trends & strategy", bio: "Keeps 400 tabs open so nothing slips past. Spots what's next before everyone else, and decides which trends your brand should actually jump on." },
  { slug: "bri", name: "Bri", role: "Content & video", bio: "Works quietly behind the magic. Turns a passing thought into a campaign, and knows what makes a video travel." },
  { slug: "philie", name: "Philie", role: "Photography", bio: "Believes the right angle gets you very far, and teaches clients the skills to keep their feed looking its best." },
  { slug: "jany", name: "Jany", role: "On-camera talent", bio: "Camera-ready at all times, and the face behind much of the content you'll see on our clients' feeds." },
];

export const careers = {
  title: "Join the team",
  intro: "We're growing. If you live online, love making things and want to help brands bloom, we'd like to hear from you.",
  submit: "Send application",
  sentNoFile: `Almost done. Your email app will open; please attach your resume before sending it to ${brand.email}.`,
};

export const contact = {
  title: "Start a project",
  intro: "Tell us about your brand and what you'd like to do, and we'll get back to you.",
  submit: "Send message",
  services: ["Social media", "Content", "Strategy", "Consulting", "Not sure yet"],
  mailtoNote: "This opens your email app with your message ready to send.",
  errors: {
    name: "Please add your name.",
    email: "Please check your email address.",
    message: "Please add a short message.",
    send: "Something went wrong. Please try again, or email us directly.",
  },
};

export const screens = {
  notFound: { title: "Page not found", body: "The page you're looking for has moved or never existed." },
  thanks: { title: "Thank you", body: "Your message is on its way. We'll be in touch soon." },
};
