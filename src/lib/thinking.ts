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
  /** Date an article should enter the RSS feed; earlier undated articles stay on the site. */
  publishedAt?: string;
  heroImage: ThinkingMedia;
  sections: ThinkingSection[];
  relatedProjects: { title: string; href: string }[];
};

export const thinkingArticles: ThinkingArticle[] = [
{
  "slug": "the-business-of-being-worth-visiting",
  "publishedAt": "2026-11-19",
  "title": "The business of being worth visiting.",
  "seoTitle": "The Business of Being Worth Visiting | Smith & Devil",
  "description": "How creative strategy, storytelling, venue design and programming give hospitality and attractions businesses stronger reasons for customers to visit and return.",
  "eyebrow": "Creative strategy / Visitation",
  "standfirst": "How creative strategy, storytelling and experience design can help hospitality and attractions businesses grow.",
  "heroImage": {
    "src": "/images/levels.webp",
    "alt": "Levels @ Máj mini golf venue experience in Prague",
    "caption": "Levels @ Máj: an 18-hole mini golf experience inside Prague's entertainment complex.",
    "href": "/work/levels"
  },
  "sections": [
    {
      "paragraphs": [
        "I recently saw a presentation at IAAPA that made a rather good point. Visitation isn't inherently a marketing problem. It's a business strategy problem that marketing is often asked to solve.",
        "It's an interesting way to look at things, particularly when you consider how much time, money and creative energy goes into attracting customers to hospitality venues and visitor attractions.",
        "Marketing is obviously essential to that process, but visitor numbers are influenced by decisions made right across a business. What you offer, how you price it, how you design the experience and whether people feel it's worth their time and money.",
        "There's a great deal that can be done to influence those decisions, and some of the most valuable opportunities are discovered before the marketing brief has even been written."
      ]
    },
    {
      "heading": "What are people really buying?",
      "paragraphs": [
        "Consider a mini golf venue. It might be tempting to think you're competing with every other mini golf venue in the area. In reality, your potential customers are choosing between all manner of things they could do with their afternoon or evening.",
        "A restaurant, a cinema, a few drinks, bowling, or simply staying at home.",
        "And the customer looking for somewhere to take the kids on a rainy Saturday has quite different priorities from someone planning a first date.",
        "Understanding those different motivations can open up opportunities to rethink what you're selling.",
        "Perhaps there's a better way to package the experience for different audiences. Perhaps there's an occasion nobody has really catered for. Or a partnership that could introduce the business to an entirely new customer base.",
        "These are commercial opportunities that can be uncovered through creative strategy. The findings can influence everything from the proposition and pricing to the venue design, programming and marketing."
      ]
    },
    {
      "heading": "A venue needs a story",
      "paragraphs": [
        "We're particularly interested in the role that creative strategy plays in designing physical experiences.",
        "There are plenty of attractive venues around. Some have had an extraordinary amount of money spent on their interiors. But being expensive to build and interesting to visit are two quite different achievements.",
        "The best places have a point of view. Something that gives them character and helps people connect with the experience.",
        "We often think of this as the story behind the venue.",
        "That doesn't mean every bar needs a fictional mythology or that the barman needs to be in character. It means developing a compelling idea that gives the experience its own identity.",
        "In a themed attraction, that story might create an entire world for customers to explore, with opportunities for discovery, interaction and surprise.",
        "In a hospitality venue, it might come from the building's history, the neighbourhood, a cultural reference or a particular attitude towards hospitality.",
        "Whatever the starting point, a strong idea can inform the interiors, the customer journey, the food and drink offer, the staff experience and the details people remember afterwards.",
        "It also gives the business something distinctive to build on.",
      "For Wonderball at The Park RVA in Virginia, we took the familiar idea of a day in the park and turned it into two mini golf courses, moving from parkland play to the colour of the fairground. The setting gave us a world of details to design around, including skate ramps, giant ice creams and a carousel horse.",
        "A neon sign can make a decent photograph. It's probably going to take a bit more than that to build a lasting relationship with your customers."
      ],
      "media": {
        "src": "https://cdn.sanity.io/images/6y2dn5q3/production/8399b6c9d0f6372b4da2c45ca2b01e97e8d463e8-3087x1931.jpg",
        "alt": "Wonderball mini golf attraction at The Park RVA, Richmond",
        "caption": "Wonderball: two mini golf courses inspired by a day in the park, from skate ramps to fairground spectacle.",
        "href": "/work/wonderball-mini-golf"
      }
    },
    {
      "heading": "Design for the next visit",
      "paragraphs": [
        "There's another consideration we think deserves a place in the design brief: what will bring people back?",
        "Imagine opening a beautifully designed attraction. People visit, enjoy themselves, tell their friends and go home happy.",
        "Excellent. Job done.",
        "Except, of course, the business needs to keep attracting customers long after the launch party.",
        "For some venues, the experience itself is naturally repeatable. People return to their favourite pub or bowling alley because they enjoy spending time there. The familiarity is part of the appeal.",
        "Other attractions face a different challenge. Once you've played the course, explored the rooms or discovered the surprises, you've experienced much of what there is to offer.",
        "It's worth thinking about that when you're designing the experience.",
        "Could the environment accommodate changing content? Could new challenges, characters or storylines encourage visitors to explore again? Could the format support different ways of playing?",
        "There are opportunities to make a venue more adaptable without continually spending a fortune rebuilding it.",
        "And the creative thinking doesn't stop when the doors open.",
        "Programming can introduce entirely new reasons to visit. Competitions, social events, seasonal experiences, collaborations and community activities can all help turn an occasional destination into somewhere people visit regularly.",
        "In fact, a strong creative concept can make programming easier. There's already an identity to play with, a story to develop and an audience whose interests you understand.",
        "The trick is to keep the things people love while finding new ways for them to enjoy the place."
      ]
    },
    {
      "heading": "There's a commercial opportunity in all of this",
      "paragraphs": [
        "Take a venue that struggles to attract customers early in the week.",
        "A promotional campaign might help. But perhaps there's an opportunity to create a genuinely appealing reason to visit on a Tuesday. Something aimed at a different audience, or a new occasion that fits naturally with the venue.",
        "That might involve changes to programming, operations, pricing or the experience itself.",
        "The same applies to repeat visitation. A loyalty scheme can encourage people to return, but it becomes a much easier sell when there's something they're actually looking forward to.",
        "And once those opportunities have been developed, marketing has a much richer story to tell.",
        "You can communicate new experiences to previous visitors, build anticipation for upcoming events, introduce different audiences to different parts of the offer and use customer insight to refine what you're doing.",
        "You can also start measuring which ideas genuinely influence bookings, spending and return visits.",
        "That's a useful feedback loop between creative thinking and commercial performance."
      ]
    },
    {
      "heading": "Bringing creative thinking into the business conversation",
      "paragraphs": [
        "At Smith & Devil, our work covers brand strategy, marketing, interior design and the development of experiences for hospitality and attractions businesses.",
        "We're interested in how all those disciplines can work together to make a business more attractive to its customers and more commercially successful.",
        "That might mean creating a compelling story for a new venue, developing the experience itself, finding ways to generate repeat business or helping an established operator discover opportunities for growth.",
        "It means getting involved in the conversation about what the business could offer, as well as how it presents itself to the world.",
        "Because every decision that makes a venue more desirable, enjoyable or worth returning to has the potential to influence visitation.",
        "And that's a pretty good reason to get creative strategy involved early."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Levels @ Máj",
      "href": "/work/levels"
    },
    {
      "title": "Wonderball mini golf",
      "href": "/work/wonderball-mini-golf"
    },
    {
      "title": "Fortune Favours",
      "href": "/work/fortune-favours"
    }
  ]
},
{
  "slug": "selling-immersive-experience",
  "title": "How do you sell an experience nobody's experienced yet?",
  "seoTitle": "Selling Immersive Experiences | Smith & Devil",
  "description": "What Humbug taught us about giving audiences a compelling reason to book an unfamiliar live experience.",
  "eyebrow": "Immersive experiences / Strategy",
  "standfirst": "When the show is unusual, the hardest part can be explaining why someone should book it.",
  "heroImage": {
    "src": "https://cdn.sanity.io/images/6y2dn5q3/production/3cb5ada47d21360c09a34a920220d362925c2276-2200x1200.jpg",
    "alt": "Present-wrapped entrance tunnel at the Humbug Christmas experience",
    "caption": "Humbug's present-wrapped entrance: the audience steps into the story before the show starts.",
    "href": "/work/humbug"
  },
  "sections": [
    {
      "paragraphs": [
        "Try explaining Humbug to someone who's never heard of it. There's Santa, a live band, audience games, a bar, a cast of oddballs and a Christmas story that doesn't behave quite like the ones you grew up with.",
        "It's a cracking night out. It's also a lot to cram into an advert.",
        "When people are buying a ticket for something unfamiliar, they need enough to imagine the evening. A long list of features is rarely the best way to do that."
      ]
    },
    {
      "heading": "Sell the night people want to have",
      "paragraphs": [
        "For Humbug, we started with the kind of evening people were looking for. A Christmas party with live entertainment, plenty of laughs and an excuse to get a group together.",
        "Santa's dive bar gave us a place, a character and an attitude to hang the whole thing on. As the show evolved, so did the story and the campaign. There was always a clear idea people could explain to their friends.",
        "You don't have to spoil the surprises to sell an immersive experience. In fact, please don't. But people should have a decent idea of what they're signing up for."
      ]
    },
    {
      "heading": "Make the promise easy to believe",
      "paragraphs": [
        "Photos and film of the real experience do a different job from key art. An illustration can establish the world. A room full of people laughing, singing or joining in shows what being there actually feels like.",
        "The website needs to answer the unglamorous questions too. How long is it? What happens when you arrive? Can you bring a group? Are you expected to take part? People are much happier spending money when they know roughly how their evening will work.",
        "Those decisions are part of the customer experience, and they affect how confidently someone books."
      ]
    },
    {
      "heading": "The experience and the marketing should develop together",
      "paragraphs": [
        "There's useful creative work to do long before tickets go on sale. The audience, the occasion and the promise can influence the show format, the venue, the booking journey and the campaign.",
        "With Humbug we've worked across the brand, experience and marketing over three Christmas seasons. That meant the story people saw in the advertising had a proper relationship with the night they came to enjoy.",
        "Over those three years, the production sold 30,000 tickets. A good reminder that the commercial story and the creative one have to get along."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Humbug",
      "href": "/work/humbug"
    },
    {
      "title": "Strike",
      "href": "/work/strike"
    }
  ]
},
{
  "slug": "technology-to-market-customer-proposition",
  "title": "You've invented the technology. Now what are you selling?",
  "seoTitle": "Turning Entertainment Technology Into a Product | Smith & Devil",
  "description": "How to turn entertainment technology into an experience customers understand, want and are willing to pay for.",
  "eyebrow": "Technology / Commercial strategy",
  "standfirst": "A clever system can impress a room. The customer still needs a reason to book.",
  "heroImage": {
    "src": "/images/work/allstars-sports-bars/omni-darts.jpg",
    "alt": "OMNI auto-scoring darts technology at Allstars Sports Bar",
    "caption": "Auto-scoring darts makes the game easier to play. Customers are there for the competition and the company.",
    "href": "/work/allstars-sports-bars"
  },
  "sections": [
    {
      "paragraphs": [
        "There's something irresistible about a clever piece of entertainment technology. A new way to track players, project a world around them or make a game respond in real time. You can see why the people who build it get excited.",
        "The trouble starts when the sales pitch sounds like a tour of the engineering department.",
        "Most customers aren't studying the specifications. They're deciding what to do on Saturday night."
      ]
    },
    {
      "heading": "What does it let people do?",
      "paragraphs": [
        "Take auto-scoring darts. The cameras and software are impressive, but you don't round up six mates because you're desperate to see a tracking algorithm in action.",
        "You want a good game, a bit of competition and an evening that's easy to organise. The technology makes that experience possible and, ideally, makes it better.",
        "That's the difference between demonstrating a system and having something people want to buy."
      ]
    },
    {
      "heading": "There's a product to work out",
      "paragraphs": [
        "A technology might suit a quick game in a bar, a longer ticketed experience, a family attraction or a corporate event. Each comes with different expectations.",
        "How many people play together? How long should a session last? What does someone pay for? Is the game still enjoyable if half the group has never tried anything like it? What happens if they want another go?",
        "Those answers affect the space, staffing, booking setup and commercial model. It's better to find the awkward bits while you're still shaping the offer than after you've ordered the fit-out."
      ]
    },
    {
      "heading": "Give the technology a customer-facing idea",
      "paragraphs": [
        "Once the format is clear, you can build a story around the experience, decide who it's for and give it a recognisable identity. The website and campaign can then talk about the fun people will have, with the technology doing its job in the background.",
        "Of course, technical performance and the numbers still have to stack up. A brilliant headline won't fix a game that regularly breaks or a venue that can't serve enough customers.",
        "Our role is to connect the invention to a proposition someone can understand, a place they'll want to visit and a credible plan for taking it to market."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Allstars Sports Bars",
      "href": "/work/allstars-sports-bars"
    },
    {
      "title": "T2 Design Solutions",
      "href": "/work/t2-design-solutions"
    }
  ]
},
{
  "slug": "before-architect-designs-venue",
  "title": "Before your architect designs the venue, define the business",
  "seoTitle": "Define Your Leisure Venue Before Architecture | Smith & Devil",
  "description": "Why leisure venue founders should define their proposition, audience and commercial model before detailed spatial design.",
  "eyebrow": "Concept to Market / Venues",
  "standfirst": "The first expensive design decision is sometimes made before anybody has answered why customers will visit.",
  "heroImage": {
    "src": "/images/work/pop-playrooms/10.webp",
    "alt": "Pop Playrooms venue interior developed with its brand proposition"
  },
  "sections": [
    {
      "paragraphs": [
        "A founder brings an activity or a technology. An architect brings spatial expertise. The drawing can start surprisingly quickly.",
        "But a brief that explains what the venue contains is different from one that explains what customers are buying. The second is the one that makes the first useful."
      ]
    },
    {
      "heading": "What happens before the floor plan?",
      "paragraphs": [
        "Decide the audiences, the occasions and the reasons to choose the experience over other ways of spending an evening or afternoon.",
        "That helps define the right product mix, experience sequence, dwell time, atmosphere, staffing requirements and opportunities for secondary spend. The architect now has commercial objectives to design around."
      ]
    },
    {
      "heading": "Make different buying occasions explicit",
      "paragraphs": [
        "The same venue may host families at weekends, adults in the evening and businesses during the working week.",
        "Those customers need different offers and sometimes different physical requirements. A corporate experience may demand meeting space, hosting, catering and a sales process very unlike consumer ticketing."
      ]
    },
    {
      "heading": "The brand is part of the brief",
      "paragraphs": [
        "Positioning should guide the character of the environment, the hierarchy of spaces, signage, storytelling and moments customers will remember.",
        "At Pop Playrooms, the organising idea brought different competitive-socialising activities together as one coherent brand and venue experience."
      ],
      "media": {
        "src": "/images/work/pop-playrooms/03.webp",
        "alt": "Pop Playrooms interior",
        "href": "/work/pop-playrooms"
      }
    },
    {
      "heading": "The next useful document",
      "paragraphs": [
        "Before committing to detailed design, establish a shared proposition and commercial experience brief. It should give architects, operators, investors and creatives consistent answers about the business they are building.",
        "Smith & Devil develops that brief through Venue Concept Development. Where the challenge extends into audience products, investment narrative and launch strategy, our Concept to Market offer connects the work to the route to revenue."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Pop Playrooms",
      "href": "/work/pop-playrooms"
    },
    {
      "title": "Fortune Favours",
      "href": "/work/fortune-favours"
    }
  ]
},
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
  "slug": "experience-economy-customer-value",
  "title": "What are people really buying?",
  "seoTitle": "What Customers Really Buy in the Experience Economy | Smith & Devil",
  "description": "A look at how occasions and customer motivations influence the design and marketing of hospitality and leisure experiences.",
  "eyebrow": "Customer value",
  "standfirst": "The same activity can be a family treat, a first date or a Friday night with friends.",
  "heroImage": {
    "src": "/images/work/allstars-sports-bowl/cards/allstars_sports_bowl_weston_families_select-7405751.jpg",
    "alt": "Family enjoying bowling at Allstars Sports Bowl",
    "caption": "Allstars Sports Bowl: people choose activities for the time they'll have together.",
    "href": "/work/allstars-sports-bowl"
  },
  "sections": [
    {
      "paragraphs": [
        "Someone books a bowling lane for their child's birthday. Someone else books the same lane because they can't face another first date conducted across a restaurant table.",
        "Same activity. Rather different expectations.",
        "That's worth remembering when you're designing a venue, deciding what to charge or wondering why one offer sells better than another."
      ]
    },
    {
      "heading": "The occasion does a lot of the selling",
      "paragraphs": [
        "A family needs an easy afternoon: a game the children can enjoy, somewhere to sit and a booking that doesn't require a phone call and three follow-up emails.",
        "A group of friends might care more about music, drinks and whether they can play another round. A couple might want something fun that leaves room for conversation.",
        "There's no reason a venue can't cater for all of them. There is a good reason to understand what each group needs before expecting the same message to work on everyone."
      ]
    },
    {
      "heading": "Design around what makes the visit enjoyable",
      "paragraphs": [
        "This thinking can affect some surprisingly practical choices. The layout between games and the bar. How groups move through a venue. Whether the experience has moments worth sharing. How a family with younger children navigates the place.",
        "At Mighty Adventures, the golf is wrapped in a family adventure with characters and a mission. Those details give parents and children something to follow together as they play.",
        "The activity remains mini golf, but the design gives the visit its own character."
      ],
      "media": {
        "src": "/images/mighty-adventures.jpg",
        "alt": "Family exploring the Mighty Adventures themed mini golf experience",
        "caption": "Mighty Adventures: the story becomes part of the family activity.",
        "href": "/work/mighty-adventures"
      }
    },
    {
      "heading": "Give the business something useful to work with",
      "paragraphs": [
        "Once you know which occasions matter, you can shape packages, opening hours, programming and the way you talk about the venue. You can also spot the gaps: the audience you aren't reaching or the time of week that needs a better reason to visit.",
        "Marketing still has plenty to do. It simply gets to work with an offer that understands the people buying it.",
        "And if the visit turns out to be as good as promised, you've got a much better chance of seeing those people again."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Allstars Sports Bowl",
      "href": "/work/allstars-sports-bowl"
    },
    {
      "title": "Mighty Adventures",
      "href": "/work/mighty-adventures"
    }
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
