export type ThinkingMedia = {
  src: string;
  alt: string;
  caption?: string;
  href?: string;
  kind?: "image" | "vimeo";
  vimeoId?: string;
};

export type ThinkingSection = {
  heading?: string;
  paragraphs: string[];
  media?: ThinkingMedia;
};

export type ThinkingArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  standfirst: string;
  heroImage: ThinkingMedia;
  sections: ThinkingSection[];
  relatedProjects: { title: string; href: string }[];
};

export const thinkingArticles: ThinkingArticle[] = [
  {
    slug: "hospitality-brand-strategy-value-proposition",
    title: "Getting the value proposition right before you go to market",
    seoTitle: "Hospitality Brand Strategy: Getting Your Value Proposition Right",
    description: "How to define a clear value proposition before launching a hospitality, leisure or experience-led concept.",
    eyebrow: "Brand strategy for the experience economy",
    standfirst: "A new venue can get surprisingly far before anyone asks the awkward question: why will people choose it?",
    heroImage: {
      src: "/images/work/mighty-adventures/02.webp",
      alt: "Mighty Adventures brand world and family experience",
      caption: "Mighty Adventures: turning mini golf into a mission-led family experience.",
      href: "/work/mighty-adventures"
    },
    sections: [
      {
        paragraphs: [
          "The venue might be found. The games selected. The renders underway. The name may even be causing arguments in a WhatsApp group.",
          "But if the answer to that question is still a little woolly, there is work to do before serious money starts bringing the idea to life.",
          "That is the proposition."
        ]
      },
      {
        heading: "What are you actually selling?",
        paragraphs: [
          "Most new concepts begin with the thing they do. Mini golf. Bowling. Darts. Live music. Immersive theatre. A sports bar. A collection of games under one roof.",
          "That tells us the category. It does not necessarily tell us why anyone should choose you.",
          "A useful proposition gets underneath the activity and works out what the customer is really being offered. Easy family time. A bit of healthy competition. Escapism. A proper night out. Something worth talking about the next day.",
          "The activity matters. But it is often the mechanism rather than the value."
        ]
      },
      {
        heading: "A proposition is not a tagline",
        paragraphs: [
          "A tagline is something you might say. A proposition is why the business makes sense to the customer.",
          "It should help answer who this is really for, why they would choose it, what it gives them that the alternatives do not, and what the experience needs to feel like for that promise to be believable.",
          "If the strategy is doing its job, those answers start making decisions for you. Not just in the identity, but in the venue, website, pricing, launch campaign and the way the team talks about the experience."
        ]
      },
      {
        heading: "Do not rely on category cues to do the work",
        paragraphs: [
          "Many experience categories now come with familiar visual cues.",
          "Competitive socialising, immersive experiences and premium mini golf can all start to look very similar.",
          "The problem starts when those category cues become the whole idea.",
          "If three concepts can all credibly promise great drinks, great games and a great atmosphere, the customer still has a decision to make. That is why clear positioning matters."
        ],
        media: {
          src: "/images/work/pop-playrooms/03.webp",
          alt: "Pop Playrooms competitive socialising interior",
          caption: "Pop Playrooms: the activities needed one recognisable world around them.",
          href: "/work/pop-playrooms"
        }
      },
      {
        heading: "Mighty Adventures: turning mini golf into a fuller family experience",
        paragraphs: [
          "Mighty Adventures began with outdoor mini golf. Perfectly good product. But 'come and play mini golf' leaves a lot of the experience on the table.",
          "We helped turn the visit into a mission-led family adventure. Characters, story, signage and the way the course was presented all began working towards the same idea.",
          "The proposition turned the golf into part of a bigger experience. That gave the brand more to own than the activity alone."
        ],
        media: {
          src: "/images/work/mighty-adventures/signage-kids.jpg",
          alt: "Children interacting with Mighty Adventures story signage",
          caption: "The proposition shaped the story, characters and moments around the course.",
          href: "/work/mighty-adventures"
        }
      },
      {
        heading: "If the idea is hard to explain, it needs more work",
        paragraphs: [
          "Some experience concepts are naturally harder to sell than others. Humbug is a good example.",
          "It combines live music, interactive performance, party games, singalongs, drinks and a Christmas story. All true. All useful. And all capable of becoming a fairly exhausting paragraph if everything is asked to lead at once.",
          "The strategic job is to decide what people need to understand first, what makes them want to come and what can wait until later.",
          "This happens before the media plan. Buying more attention does not make a complicated proposition simpler."
        ],
        media: {
          src: "/images/work/humbug/03.webp",
          alt: "Humbug Christmas experience campaign artwork",
          caption: "Humbug: an unusual product needs a clear hierarchy of what leads and what supports.",
          href: "/work/humbug"
        }
      },
      {
        heading: "What should be clear before branding starts?",
        paragraphs: [
          "Before committing to an identity or taking a new experience to market, you need clear answers on the audience, the value, the difference, the promise, the personality and the commercial model.",
          "Can the proposition support the price? Does it give the experience room to grow? Can it survive a second venue? Does it help the team decide what belongs and what does not?",
          "Those answers do not have to be perfect forever. They do need to be good enough to make the next decisions with confidence."
        ]
      },
      {
        heading: "What becomes easier once the proposition is clear",
        paragraphs: [
          "Once the proposition is clear, the next decisions become easier.",
          "The identity has a clear idea to express. The interior has a clear role. The website knows what to lead with. The campaign has a clear message.",
          "And everyone involved in building the thing has a shared idea of what they are trying to create.",
          "That is more useful than starting with colours and logos."
        ]
      }
    ],
    relatedProjects: [
      { title: "Mighty Adventures", href: "/work/mighty-adventures" },
      { title: "Pop Playrooms", href: "/work/pop-playrooms" },
      { title: "Humbug", href: "/work/humbug" }
    ]
  },
  {
    slug: "hospitality-brand-positioning",
    title: "Brand positioning for hospitality and experience businesses",
    seoTitle: "Hospitality Brand Positioning for Experience-Led Businesses",
    description: "How hospitality and experience brands can find a distinctive position customers understand and choose.",
    eyebrow: "Brand positioning",
    standfirst: "Positioning should explain why customers should choose you over the alternatives.",
    heroImage: {
      src: "/images/work/fortune-favours/lead.webp",
      alt: "Fortune Favours entertainment brand",
      caption: "Fortune Favours: a scalable entertainment brand needed a position bigger than one venue.",
      href: "/work/fortune-favours"
    },
    sections: [
      {
        paragraphs: [
          "Positioning is often treated as the bit of strategy that produces a diagram with several competitors dotted around it.",
          "That can be useful. It is not the point.",
          "The point is to decide who the brand is for, where it should compete and why people should choose it."
        ]
      },
      {
        heading: "Your category is not your positioning",
        paragraphs: [
          "Saying you are a premium competitive socialising venue describes the market you are entering. It does not tell anyone why your version deserves their evening.",
          "The same is true of boutique hotels, immersive attractions, sports bars, food halls and family entertainment. Customers are rarely comparing you with an empty space. They are comparing you with other ways to spend the same money and time.",
          "Positioning gives them a reason to choose you over those alternatives."
        ]
      },
      {
        heading: "Start with a real customer problem",
        paragraphs: [
          "Brand workshops often produce long lists of adjectives. Fun. Premium. Social. Bold. Inclusive. Energetic.",
          "Most of them describe how you would like the brand to feel. They do not explain why customers should choose it.",
          "We are more interested in real customer problems the business can solve. Parents want an activity that keeps children happy without making the adults endure it. Groups want something to do without sacrificing the quality of the night out. Fans want immersion without needing a doctorate in the source material.",
          "Those problems are useful because they lead to practical choices."
        ],
        media: {
          src: "/images/work/mighty-adventures/05.webp",
          alt: "Family playing at Mighty Adventures",
          caption: "Mighty Adventures was built around a family experience adults could enjoy too.",
          href: "/work/mighty-adventures"
        }
      },
      {
        heading: "Good positioning helps you make decisions",
        paragraphs: [
          "A good position should make it easier to choose what fits the brand and reject what does not.",
          "If an offer, partnership, interior treatment or campaign makes the business less like the thing it has chosen to be, the strategy should make that visible.",
          "That becomes more important as a concept grows. The first venue can rely on founders making instinctive decisions. The fifth needs a clearer system."
        ]
      },
      {
        heading: "Fortune Favours: building for more than one site",
        paragraphs: [
          "Fortune Favours was created for an entertainment business with ambitions across more than fifteen European destinations.",
          "That changes the strategic job. The brand cannot depend on one building, one local audience or one fashionable execution.",
          "The position has to be elastic enough to travel, but specific enough to remain recognisable. That is the difference between designing a nice venue and building an asset the business can keep using."
        ],
        media: {
          src: "/images/work/fortune-favours/09.webp",
          alt: "Fortune Favours brand applied in venue",
          caption: "A position has to survive new locations without becoming generic.",
          href: "/work/fortune-favours"
        }
      },
      {
        heading: "A simple test",
        paragraphs: [
          "Can a customer understand the difference without hearing the strategy presentation?",
          "Can the team explain it without reaching for a list of features?",
          "Can it influence product, service, space and marketing rather than only the copy deck?",
          "And could a competitor copy the sentence tomorrow without changing anything about its business?",
          "If the last answer is yes, there is probably more work to do."
        ]
      }
    ],
    relatedProjects: [
      { title: "Fortune Favours", href: "/work/fortune-favours" },
      { title: "Mighty Adventures", href: "/work/mighty-adventures" },
      { title: "Pop Playrooms", href: "/work/pop-playrooms" }
    ]
  },
  {
    slug: "experience-economy-customer-value",
    title: "What are people really buying?",
    seoTitle: "Customer Value in the Experience Economy",
    description: "Why experience-led brands need to understand the emotional and social value customers are really buying.",
    eyebrow: "Customer value",
    standfirst: "People are often buying more than the activity itself.",
    heroImage: {
      src: "/images/work/humbug/06.webp",
      alt: "Guests inside the Humbug Christmas experience",
      caption: "Humbug: the product is a show, but the value is a shared Christmas night out.",
      href: "/work/humbug"
    },
    sections: [
      {
        paragraphs: [
          "A customer can book bowling and be buying an excuse to get everyone together. They can book mini golf and be buying an easy family afternoon. They can buy a theatre ticket and be buying permission to behave differently for two hours.",
          "The activity tells you what to operate. The customer value tells you what to build the brand around."
        ]
      },
      {
        heading: "Features do not explain why people choose you",
        paragraphs: [
          "Eighteen holes. Four karaoke rooms. Twenty taps. Live band. Ninety minutes of gameplay.",
          "Necessary information, sometimes.",
          "Features become interchangeable quickly. What matters more is the value they create: an easier date, a better family day out, a stronger group occasion or a story worth sharing afterwards."
        ]
      },
      {
        heading: "The occasion changes what people need",
        paragraphs: [
          "The same venue can mean different things at different times.",
          "A sports bar on a Tuesday afternoon is not selling the same value as the same room during a cup final. A bowling lane for a children's party is not the same product as a late-night date.",
          "Occasion tells you who matters, what they need, how much friction they will tolerate and what should lead in the message."
        ],
        media: {
          src: "/images/work/pop-playrooms/07.webp",
          alt: "Guests inside Pop Playrooms",
          caption: "The activity is part of the offer. The occasion determines what the customer needs from it.",
          href: "/work/pop-playrooms"
        }
      },
      {
        heading: "Mighty Adventures: creating more value around the game",
        paragraphs: [
          "With Mighty Adventures, the opportunity was not simply to improve a golf course.",
          "The family value sat in the shared mission: characters to discover, things to learn, moments parents and children could talk about together.",
          "That gave us more to design and the customer more to remember. It also created material for schools, stories, take-home content and future locations."
        ],
        media: {
          src: "/images/work/mighty-adventures/08.webp",
          alt: "Mighty Adventures family experience content",
          caption: "A richer definition of value creates more places for the brand to live.",
          href: "/work/mighty-adventures"
        }
      },
      {
        heading: "Why this matters to the business",
        paragraphs: [
          "If you know what people value, price becomes easier to defend. Marketing becomes less dependent on offers. New products can be judged against the same idea. Repeat visits can be designed rather than simply hoped for.",
          "It also helps identify where not to spend. Customers do not need every part of an experience to be extraordinary. They need the parts that carry the value to be right."
        ]
      },
      {
        heading: "A simple test",
        paragraphs: [
          "If you remove the activity name from the proposition, is there still a clear reason to want it?",
          "If there is, you may be getting close to the real value."
        ]
      }
    ],
    relatedProjects: [
      { title: "Humbug", href: "/work/humbug" },
      { title: "Mighty Adventures", href: "/work/mighty-adventures" },
      { title: "Pop Playrooms", href: "/work/pop-playrooms" }
    ]
  },
  {
    slug: "branding-new-hospitality-concept",
    title: "Turning a new hospitality concept into a brand",
    seoTitle: "Branding a New Hospitality or Experience Concept",
    description: "How to turn an early hospitality or experience concept into a clear, coherent brand customers can understand.",
    eyebrow: "New concept development",
    standfirst: "Early ideas are messy. Brand strategy turns them into choices a business can use.",
    heroImage: {
      src: "/images/work/pop-playrooms/01.webp",
      alt: "Pop Playrooms concept and interior",
      caption: "Pop Playrooms: many activities, one world.",
      href: "/work/pop-playrooms"
    },
    sections: [
      {
        paragraphs: [
          "Early concepts tend to arrive with lots of good things attached. References. Features. Audiences. Revenue ideas. A name somebody loves. A name somebody else hates.",
          "That is normal.",
          "The strategic job is to find one clear idea that helps customers understand the offer and helps the business make consistent decisions."
        ]
      },
      {
        heading: "Separate what you offer from what the brand stands for",
        paragraphs: [
          "A bar, darts, karaoke and food are ingredients. So are dinosaurs, golf and educational content.",
          "The brand idea explains why those ingredients belong together and why the customer should care.",
          "Without it, each part tends to get designed separately and the customer experiences the joins."
        ]
      },
      {
        heading: "Decide what leads before you design the identity",
        paragraphs: [
          "What leads? What supports? What is a reason to visit and what is simply expected?",
          "This is basic brand strategy, but it has a direct commercial effect.",
          "If everything is equally important, the website becomes a menu. The launch campaign becomes a list. The interior tries to communicate six things at once."
        ]
      },
      {
        heading: "Pop Playrooms: bringing different activities under one brand",
        paragraphs: [
          "Pop Playrooms brought together multiple competitive socialising activities inside a concept inspired by the energy of pop performance.",
          "The opportunity was not to give every room its own theme. It was to make the entire place feel like one recognisable experience.",
          "That organising thought carried into identity, interiors, signage and the customer journey."
        ],
        media: {
          src: "/images/work/pop-playrooms/09.webp",
          alt: "Pop Playrooms branded interior",
          caption: "A clear organising idea lets very different spaces still feel like the same brand.",
          href: "/work/pop-playrooms"
        }
      },
      {
        heading: "Make sure the identity works in the real world",
        paragraphs: [
          "A hospitality brand needs to work across many different touchpoints.",
          "They need to work on a fascia, a menu, a booking screen, an Instagram post, a staff T-shirt, a toilet sign and a piece of performance creative asking someone to book by Friday.",
          "The identity needs a recognisable centre and enough range to survive all of that without becoming repetitive."
        ],
        media: {
          src: "/images/work/fortune-favours/05.webp",
          alt: "Fortune Favours brand application",
          caption: "The useful test of an identity is what happens once it leaves the brand presentation.",
          href: "/work/fortune-favours"
        }
      },
      {
        heading: "You do not need everything before launch",
        paragraphs: [
          "You do not need every future campaign line before launch. You do need the central choices to be clear.",
          "Audience. Proposition. Position. Personality. The visual and verbal principles that hold them together.",
          "A brand is ready when those choices help the business move faster, not when the guidelines reach a particular page count."
        ]
      }
    ],
    relatedProjects: [
      { title: "Pop Playrooms", href: "/work/pop-playrooms" },
      { title: "Fortune Favours", href: "/work/fortune-favours" },
      { title: "Mighty Adventures", href: "/work/mighty-adventures" }
    ]
  },
  {
    slug: "competitive-socialising-brand-strategy",
    title: "Building a competitive socialising brand",
    seoTitle: "Competitive Socialising Brand Strategy",
    description: "How competitive socialising venues can build a distinctive proposition around games, hospitality and the occasion.",
    eyebrow: "Competitive socialising",
    standfirst: "Customers understand the category. Your brand still has to explain why they should choose your venue.",
    heroImage: {
      src: "/images/work/pop-playrooms/10.webp",
      alt: "Pop Playrooms competitive socialising venue",
      caption: "Pop Playrooms: the brand had to hold the whole experience together.",
      href: "/work/pop-playrooms"
    },
    sections: [
      {
        paragraphs: [
          "Competitive socialising is now easy for customers to understand as a category.",
          "The problem is that many venues now describe themselves with the same ingredients: games, drinks, food, music and groups.",
          "The next question is simple: why should someone choose your venue?"
        ]
      },
      {
        heading: "The games matter, but the occasion matters too",
        paragraphs: [
          "Different games attract different audiences, create different group dynamics and affect dwell time. They matter.",
          "But the customer may still be choosing the venue because it solves a social problem: something everyone can join in with, somewhere lively enough for a birthday, a date that gives you something to do, or an office night out with less standing around.",
          "The proposition needs to connect the games to the occasion people are actually buying."
        ]
      },
      {
        heading: "Food and drink need to work with the games",
        paragraphs: [
          "If food and drink are important to the commercial model, they need to belong to the same experience.",
          "That means service style, seating, ordering, pacing and atmosphere should support the way people play.",
          "A beautiful bar that interrupts the game journey can still be bad experience design."
        ],
        media: {
          src: "/images/work/pop-playrooms/05.webp",
          alt: "Pop Playrooms bar and social space",
          caption: "The hospitality offer and the game experience need to feel like one night out.",
          href: "/work/pop-playrooms"
        }
      },
      {
        heading: "Design for the people who are waiting too",
        paragraphs: [
          "In most social games, not everyone is active every second.",
          "Those gaps can be dead time or they can create theatre: watching, teasing, ordering another drink, noticing what is happening elsewhere in the venue.",
          "Brand and spatial design should make those moments feel intentional."
        ]
      },
      {
        heading: "Plan for repeat visits from the start",
        paragraphs: [
          "Novelty helps at launch, but it is not enough to drive repeat visits.",
          "Repeat can come from mastery, social ritual, new modes, leagues, changing content, different occasions or simply a venue people enjoy spending time in.",
          "The brand strategy should know which of those it is betting on. Otherwise 'come back' becomes a CRM message rather than a product truth."
        ]
      },
      {
        heading: "Pop Playrooms: creating a brand around the whole venue",
        paragraphs: [
          "Our work on Pop Playrooms was about creating an environment where the activities felt like parts of one entertainment world.",
          "That gave the brand something distinctive to own beyond the individual game formats and gave the physical design a central idea to amplify."
        ],
        media: {
          src: "/images/work/pop-playrooms/11.webp",
          alt: "Pop Playrooms customer experience",
          caption: "The more recognisable the world, the less the concept depends on a list of equipment.",
          href: "/work/pop-playrooms"
        }
      }
    ],
    relatedProjects: [
      { title: "Pop Playrooms", href: "/work/pop-playrooms" },
      { title: "Strike", href: "/work/strike" },
      { title: "Levels", href: "/work/levels" }
    ]
  },
  {
    slug: "hospitality-brand-experience-strategy",
    title: "Taking the brand proposition through the whole experience",
    seoTitle: "Hospitality Brand Experience Strategy",
    description: "How to carry a hospitality brand proposition through identity, interiors, digital, campaigns and the customer journey.",
    eyebrow: "Brand experience",
    standfirst: "A proposition only matters if it carries through the website, venue, service and customer journey.",
    heroImage: {
      src: "/images/work/mighty-adventures/12.webp",
      alt: "Mighty Adventures brand expressed through the physical experience",
      caption: "Mighty Adventures: one idea carried through story, signage and the visit.",
      href: "/work/mighty-adventures"
    },
    sections: [
      {
        paragraphs: [
          "A clear proposition only matters if customers experience it consistently.",
          "Hospitality and experience brands have many touchpoints where that consistency can break: website, booking flow, arrival, signage, hosts, the room, the game, the menu and the follow-up.",
          "Those moments need to feel like parts of the same brand."
        ]
      },
      {
        heading: "Focus on the moments that affect the customer journey",
        paragraphs: [
          "Not every touchpoint matters equally.",
          "Focus on the moments that affect behaviour: where confusion stops a booking, where anticipation adds value, where waiting becomes part of the experience, where results create a reason to share and where the end of the visit can lead to the next one.",
          "Those moments usually matter more than decorative consistency."
        ]
      },
      {
        heading: "The experience starts on the website",
        paragraphs: [
          "For an unfamiliar concept, the website has to teach people how to buy it without making the experience feel complicated.",
          "What is it? Who can play? How long does it take? What should we book? What happens when we arrive?",
          "Customers are already judging the brand before they reach the front door."
        ]
      },
      {
        heading: "The venue has to deliver the same idea",
        paragraphs: [
          "This is where brand strategy has to inform the interior.",
          "If the proposition promises social energy, the layout cannot make every group feel isolated. If it promises discovery, the whole journey cannot be visible from reception. If it promises premium hospitality, the game cannot be surrounded by operational clutter.",
          "The strategy should help resolve those choices."
        ],
        media: {
          src: "/images/work/pop-playrooms/03.webp",
          alt: "Pop Playrooms interior brand experience",
          caption: "Brand strategy becomes spatial when the room has to deliver the same promise.",
          href: "/work/pop-playrooms"
        }
      },
      {
        heading: "Mighty Adventures: carrying one idea across the experience",
        paragraphs: [
          "The Mighty Adventures proposition carried from the identity into character design, on-course storytelling, school materials and take-home content.",
          "That continuity came from giving each touchpoint a role inside the same world, not by making every surface look identical."
        ],
        media: {
          src: "/images/work/mighty-adventures/14.webp",
          alt: "Mighty Adventures branded touchpoint",
          caption: "Consistency is not repetition. It is every part behaving like it belongs to the same idea.",
          href: "/work/mighty-adventures"
        }
      },
      {
        heading: "The customer journey does not end when they leave",
        paragraphs: [
          "Experience businesses often spend heavily on acquisition and less on what happens after the visit.",
          "Results, photos, rewards, CRM, reviews, new content and return reasons can all extend the experience beyond the visit.",
          "If repeat custom matters, the post-visit journey is part of the product strategy."
        ]
      },
      {
        heading: "Different specialists still need one clear direction",
        paragraphs: [
          "Architects, operators, developers, media specialists and production partners will all bring expertise.",
          "The important thing is that everyone is working from the same proposition and brand direction.",
          "That is how the strategy turns into a consistent customer experience."
        ]
      }
    ],
    relatedProjects: [
      { title: "Mighty Adventures", href: "/work/mighty-adventures" },
      { title: "Pop Playrooms", href: "/work/pop-playrooms" },
      { title: "Humbug", href: "/work/humbug" }
    ]
  }
];

export const thinkingBySlug = Object.fromEntries(thinkingArticles.map((article) => [article.slug, article])) as Record<string, ThinkingArticle>;
