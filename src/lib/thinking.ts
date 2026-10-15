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
        heading: "The danger of starting with the category",
        paragraphs: [
          "The experience economy has grown quickly enough that a lot of categories now come with their own visual shorthand.",
          "Competitive socialising can look like competitive socialising. Immersive experiences can look very immersive. Premium mini golf can acquire a lot of neon remarkably quickly.",
          "None of that is inherently wrong. The problem starts when the category becomes the idea.",
          "If three concepts can all credibly promise great drinks, great games and a great atmosphere, the customer still has a decision to make. That is where positioning earns its keep."
        ],
        media: {
          src: "/images/work/pop-playrooms/03.webp",
          alt: "Pop Playrooms competitive socialising interior",
          caption: "Pop Playrooms: the activities needed one recognisable world around them.",
          href: "/work/pop-playrooms"
        }
      },
      {
        heading: "Mighty Adventures: the golf was only the start",
        paragraphs: [
          "Mighty Adventures began with outdoor mini golf. Perfectly good product. But 'come and play mini golf' leaves a lot of the experience on the table.",
          "We helped turn the visit into a mission-led family adventure. Characters, story, signage and the way the course was presented all began working towards the same idea.",
          "The proposition gave the golf a role inside something bigger. That matters because the more distinctive parts of an experience are usually harder to copy than the activity itself."
        ],
        media: {
          src: "/images/work/mighty-adventures/signage-kids.jpg",
          alt: "Children interacting with Mighty Adventures story signage",
          caption: "The proposition shaped the story, characters and moments around the course.",
          href: "/work/mighty-adventures"
        }
      },
      {
        heading: "If it takes ten minutes to explain, it probably is not ready",
        paragraphs: [
          "Some experience concepts are naturally harder to sell than others. Humbug is a good example.",
          "It combines live music, interactive performance, party games, singalongs, drinks and a Christmas story. All true. All useful. And all capable of becoming a fairly exhausting paragraph if everything is asked to lead at once.",
          "A large part of the strategic job is deciding what people need to understand first, what creates desire and what can wait until they are already interested.",
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
          "Not every strategic question needs a 70-page deck. But before committing to an identity or taking a new experience to market, we would want confident answers on the audience, the value, the difference, the promise, the personality and the commercial reality.",
          "Can the proposition support the price? Does it give the experience room to grow? Can it survive a second venue? Does it help the team decide what belongs and what does not?",
          "Those answers do not have to be perfect forever. They do need to be good enough to make the next decisions with confidence."
        ]
      },
      {
        heading: "What gets easier once the proposition is clear",
        paragraphs: [
          "Once the proposition is clear, the rest of the work tends to sharpen up.",
          "The identity has something to express. The interior has something to bring to life. The website knows what to lead with. The campaign has a reason for people to pay attention.",
          "And everyone involved in building the thing has a shared idea of what they are trying to create.",
          "Which is rather more useful than agreeing on a Pantone."
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
    standfirst: "The job is to give customers a reason to choose this one.",
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
          "The point is to decide where the brand should matter, who it should matter to and why."
        ]
      },
      {
        heading: "Category is not position",
        paragraphs: [
          "Saying you are a premium competitive socialising venue describes the market you are entering. It does not tell anyone why your version deserves their evening.",
          "The same is true of boutique hotels, immersive attractions, sports bars, food halls and family entertainment. Customers are rarely comparing you with an empty space. They are comparing you with other ways to spend the same money and time.",
          "Positioning gives them a reason to choose you over those alternatives."
        ]
      },
      {
        heading: "Start with a tension, not an adjective",
        paragraphs: [
          "Brand workshops can produce a heroic quantity of adjectives. Fun. Premium. Social. Bold. Inclusive. Energetic.",
          "Most of them are perfectly pleasant. Very few are positions.",
          "We are more interested in tensions the business can resolve. Parents want an activity that keeps children happy without making the adults endure it. Groups want something to do without sacrificing the quality of the night out. Fans want immersion without needing a doctorate in the source material.",
          "That is more useful because it leads to choices."
        ],
        media: {
          src: "/images/work/mighty-adventures/05.webp",
          alt: "Family playing at Mighty Adventures",
          caption: "Mighty Adventures was built around a family experience adults could enjoy too.",
          href: "/work/mighty-adventures"
        }
      },
      {
        heading: "Positioning should make things easier to say no to",
        paragraphs: [
          "A good position should make it easier to reject the wrong ideas.",
          "If an offer, partnership, interior treatment or campaign makes the business less like the thing it has chosen to be, the strategy should make that visible.",
          "That discipline matters more as a concept grows. The first venue can rely on founders making instinctive decisions. The fifth cannot."
        ]
      },
      {
        heading: "Fortune Favours: thinking beyond the first site",
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
    standfirst: "The activity is often only the delivery mechanism.",
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
          "The functional product tells you what to operate. The customer value tells you what to build the brand around."
        ]
      },
      {
        heading: "Features are evidence, not always the reason",
        paragraphs: [
          "Eighteen holes. Four karaoke rooms. Twenty taps. Live band. Ninety minutes of gameplay.",
          "Necessary information, sometimes."
          "But features tend to become interchangeable quickly. The emotional job is often much more durable: make this group feel closer, make this date easier, make this family outing feel worth the effort, give this fan a story to tell afterwards."
        ]
      },
      {
        heading: "Occasion changes value",
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
        heading: "Mighty Adventures: more than a scorecard",
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
        heading: "Why this matters commercially",
        paragraphs: [
          "If you know what people value, price becomes easier to defend. Marketing becomes less dependent on offers. New products can be judged against the same idea. Repeat visits can be designed rather than simply hoped for.",
          "It also helps identify where not to spend. Customers do not need every part of an experience to be extraordinary. They need the parts that carry the value to be right."
        ]
      },
      {
        heading: "A useful question to keep asking",
        paragraphs: [
          "If we removed the activity name from the proposition, would there still be something worth wanting?",
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
          "That is normal."
          "The strategic job is to find the organising idea that helps customers understand the offer and helps the business make consistent decisions."
        ]
      },
      {
        heading: "Separate the ingredients from the idea",
        paragraphs: [
          "A bar, darts, karaoke and food are ingredients. So are dinosaurs, golf and educational content.",
          "The brand idea is the thing that explains why those ingredients belong together.",
          "Without it, each part tends to get designed separately and the customer experiences the joins."
        ]
      },
      {
        heading: "Build the hierarchy before the identity",
        paragraphs: [
          "What leads? What supports? What is a reason to visit and what is simply expected?",
          "This is one of the least glamorous parts of brand strategy and one of the most commercially useful.",
          "If everything is equally important, the website becomes a menu. The launch campaign becomes a list. The interior tries to communicate six things at once."
        ]
      },
      {
        heading: "Pop Playrooms: one world around many activities",
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
        heading: "Then give the brand enough range",
        paragraphs: [
          "A concept needs consistency, but hospitality brands also live hard lives.",
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
        heading: "Do not confuse completeness with readiness",
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
    standfirst: "Once the category is understood, the question is why yours.",
    heroImage: {
      src: "/images/work/pop-playrooms/10.webp",
      alt: "Pop Playrooms competitive socialising venue",
      caption: "Pop Playrooms: the brand had to hold the whole experience together.",
      href: "/work/pop-playrooms"
    },
    sections: [
      {
        paragraphs: [
          "Competitive socialising is now an established category."
          "Customers understand the broad idea. The problem is that concepts can quickly end up describing themselves with the same handful of ingredients: games, drinks, food, music, groups."
          "So the strategic question moves on: why this one?"
        ]
      },
      {
        heading: "Games are product. The occasion is often the proposition",
        paragraphs: [
          "Different games attract different people, create different group dynamics and produce different dwell times. They matter enormously.",
          "But the customer may still be choosing the venue because it solves a social problem: something everyone can join in with, somewhere lively enough for a birthday, a date that gives you something to do, or an office night out with less standing around.",
          "The proposition needs to connect the mechanics of the games to the occasion people are actually buying."
        ]
      },
      {
        heading: "Hospitality is not the bit around the games",
        paragraphs: [
          "If food and drink are important to the commercial model, they need to belong to the same experience.",
          "That does not mean themed cocktails with funny names are compulsory. It means service style, seating, ordering, pacing and atmosphere should support the way people play.",
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
        heading: "Design for spectators as well as players",
        paragraphs: [
          "One of the useful realities of social games is that not everyone is active every second.",
          "Those gaps can be dead time or they can create theatre: watching, teasing, ordering another drink, noticing what is happening elsewhere in the venue.",
          "Brand and spatial design should make those moments feel intentional."
        ]
      },
      {
        heading: "Give repeat visits a reason",
        paragraphs: [
          "Novelty is powerful at launch and unreliable as a long-term strategy.",
          "Repeat can come from mastery, social ritual, new modes, leagues, changing content, different occasions or simply a venue people enjoy spending time in.",
          "The brand strategy should know which of those it is betting on. Otherwise 'come back' becomes a CRM message rather than a product truth."
        ]
      },
      {
        heading: "Pop Playrooms: a concept beyond the equipment",
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
    standfirst: "The customer never sees the strategy deck. They see whether the idea survives contact with the real world.",
    heroImage: {
      src: "/images/work/mighty-adventures/12.webp",
      alt: "Mighty Adventures brand expressed through the physical experience",
      caption: "Mighty Adventures: one idea carried through story, signage and the visit.",
      href: "/work/mighty-adventures"
    },
    sections: [
      {
        paragraphs: [
          "A clear proposition gives the business a shared idea. The next job is getting it to the customer intact.",
          "Hospitality and experience brands have more chances than most to lose it. Website, booking flow, arrival, signage, host, room, game, menu, music, results, follow-up email. Every one is capable of feeling like it came from a different meeting.",
          "The job is to join those moments up."
        ]
      },
      {
        heading: "Start with the moments that change behaviour",
        paragraphs: [
          "Not every touchpoint deserves the same amount of attention.",
          "We are interested in moments where confusion stops a booking, where anticipation can increase value, where waiting can become part of the experience, where a result creates a reason to share, or where the end of the visit can become the start of the next one.",
          "Those moments usually matter more than decorative consistency."
        ]
      },
      {
        heading: "The website is already part of the experience",
        paragraphs: [
          "For an unfamiliar concept, the website has to teach people how to buy it without making the experience feel complicated.",
          "What is it? Who can play? How long does it take? What should we book? What happens when we arrive?",
          "The brand promise is already being tested before anybody gets near the front door."
        ]
      },
      {
        heading: "The room has to keep the promise",
        paragraphs: [
          "This is where brand and interiors stop being separate disciplines.",
          "If the proposition promises social energy, the layout cannot make every group feel isolated. If it promises discovery, the whole journey cannot be visible from reception. If it promises premium hospitality, the game cannot be surrounded by operational clutter.",
          "Strategy earns its keep when it helps resolve those choices."
        ],
        media: {
          src: "/images/work/pop-playrooms/03.webp",
          alt: "Pop Playrooms interior brand experience",
          caption: "Brand strategy becomes spatial when the room has to deliver the same promise.",
          href: "/work/pop-playrooms"
        }
      },
      {
        heading: "Mighty Adventures: one story, lots of touchpoints",
        paragraphs: [
          "The Mighty Adventures proposition could move naturally from identity into character design, on-course storytelling, school materials and take-home content.",
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
        heading: "The end of the visit is part of it too",
        paragraphs: [
          "Experience businesses often spend heavily getting people through the door and comparatively little thinking about what happens once they leave.",
          "Results, photos, rewards, CRM, reviews, new content and return reasons can all extend the experience beyond the visit.",
          "If repeat custom matters to the model, that is not aftercare. It is part of the product strategy."
        ]
      },
      {
        heading: "Joined-up does not mean one agency has to make everything",
        paragraphs: [
          "Architects, operators, developers, media specialists and production partners will all bring expertise.",
          "The important thing is that somebody protects the organising idea while those disciplines do their jobs.",
          "That is how the strategy becomes something a customer can actually feel."
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
