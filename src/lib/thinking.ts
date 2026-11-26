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
  "title": "Before anybody draws the floor plan",
  "seoTitle": "Planning a New Leisure Venue: Start With the Commercial Brief | Smith & Devil",
  "description": "The questions worth answering before architects and designers start planning a hospitality or leisure venue.",
  "eyebrow": "Venue development / Strategy",
  "standfirst": "The floor plan gets expensive surprisingly quickly. It's worth knowing what the place needs to achieve first.",
  "heroImage": {
    "src": "https://cdn.sanity.io/images/6y2dn5q3/production/e20b78d33ad6b767a6dc0a5650c040c95f0fad10-3089x1722.jpg",
    "alt": "Wonderball's bespoke mini golf courses at The Park RVA in Richmond, Virginia",
    "caption": "Wonderball: two courses with a connected park-and-fairground idea, designed and built for The Park RVA.",
    "href": "/work/wonderball-mini-golf"
  },
  "sections": [
    {
      "paragraphs": [
        "There's a lovely moment in a new venue project when the building has been found, the ideas are flying and everyone wants to see a drawing. A floor plan makes the whole thing feel real.",
        "It's also the point where assumptions can quietly become very expensive.",
        "An architect can tell you how to use the space. But the brief needs to say who the business is for, what people are coming to do and how the place is meant to earn its keep. Otherwise an awful lot of important decisions get made by whoever picks up the pencil first."
      ]
    },
    {
      "heading": "Work out how the place will make money",
      "paragraphs": [
        "Take a venue planning to combine games, food and drink. You need a rough understanding of which parts bring people in, which keep them there and which generate the spend. There's little point in designing a beautiful bar if the people using the games can barely reach it.",
        "A family visit, a group night out and a private event may use the same space very differently. Think about where everyone arrives, waits, eats, plays and leaves. The answers can affect capacity and staffing as much as the look of the venue.",
        "Nobody needs every detail settled on day one. They do need a credible idea of the business they're drawing."
      ]
    },
    {
      "heading": "Give the design something to work with",
      "paragraphs": [
        "A good creative brief gives a venue a character of its own. It might be a story visitors explore, a particular atmosphere or a simple idea that holds several experiences together.",
        "For Wonderball at The Park RVA, we built two mini golf courses around a day in the park, moving from familiar parkland to the colour and spectacle of the fairground. That idea gave the obstacles, scenery and journey something to belong to. We then managed the design, fabrication and installation.",
        "That sort of thinking makes design decisions easier because there's a reason behind them. It can also give the venue scope to evolve."
      ]
    },
    {
      "heading": "The conversation belongs around one table",
      "paragraphs": [
        "Founders, operators, designers and commercial people will all see different things in a plan. That's useful, provided those conversations happen before walls, equipment and budgets are fixed.",
        "We like to start with the customer, the proposition and the way the venue needs to work. Then the space can do a much better job of bringing the business to life.",
        "A drawing can make a project exciting. A decent brief can stop it becoming an expensive lesson."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Wonderball mini golf",
      "href": "/work/wonderball-mini-golf"
    },
    {
      "title": "Levels @ Maj",
      "href": "/work/levels"
    }
  ]
},
{
  "slug": "hospitality-brand-strategy-value-proposition",
  "publishedAt": "2026-11-24T09:00:00Z",
  "title": "How to identify a compelling value proposition",
  "seoTitle": "Developing a Compelling Hospitality Value Proposition | Smith & Devil",
  "description": "How to identify a compelling value proposition for a hospitality or attractions business, and use it to shape the experience, brand and marketing.",
  "eyebrow": "Brand strategy / The proposition",
  "standfirst": "Understanding what customers value gives a new venue a stronger proposition and clearer decisions about what to create.",
  "heroImage": {
    "src": "/images/mighty-adventures.jpg",
    "alt": "Family exploring the Mighty Adventures themed mini golf experience",
    "caption": "Mighty Adventures: the family adventure gave the mini golf a much richer reason to visit.",
    "href": "/work/mighty-adventures"
  },
  "sections": [
    {
      "paragraphs": [
        "New venue ideas often arrive with an impressive amount already decided. Someone has a site in mind, the games have been chosen and there's a Pinterest board that could comfortably furnish three buildings.",
        "Then somebody asks what makes the place different and the answer is 'great games, great food and a brilliant atmosphere'.",
        "Well, yes. You'd hope so.",
        "The proposition is the bit that gives customers a reason to choose this place, for this occasion, at this price."
      ]
    },
    {
      "heading": "Make a promise you can actually deliver",
      "paragraphs": [
        "For a family attraction, that might mean an afternoon the children will talk about on the journey home. For a sports bar, it could be the best place to watch a match with friends. Those ideas sound simple, but they have consequences.",
        "If the family experience depends on discovery, you'll need more than a row of obstacles. If the sports bar is promising a great match-day atmosphere, the sightlines, screens, sound and service have to earn that claim.",
        "A useful proposition helps the team decide what to invest in, what to leave out and what the marketing should lead with."
      ]
    },
    {
      "heading": "A dinosaur can do quite a lot of work",
      "paragraphs": [
        "With Mighty Adventures, we had a family mini golf offer built around dinosaurs. We developed it into a mission-led experience with characters and stories that children could discover as they played.",
        "Those characters went into books, course signage and learning activities. We also worked with teachers on curriculum-linked materials, giving schools a reason to see the venue as a trip worth organising.",
        "The proposition gave us opportunities beyond the round of golf. That's the sort of thing a good strategic idea should do."
      ],
      "media": {
        "src": "/images/work/mighty-adventures/signage-kids.jpg",
        "alt": "Children exploring character storytelling signage at Mighty Adventures",
        "caption": "The story turned course signage and learning activities into part of the visit.",
        "href": "/work/mighty-adventures"
      }
    },
    {
      "heading": "Put the idea under a little pressure",
      "paragraphs": [
        "Try explaining your proposed venue to someone who has no reason to be polite. Can they picture the sort of visit they'd have? Do they know who they'd bring? Would they choose it over the other things they could do with their money?",
        "If the answers are fuzzy, there's still useful work to do. Better to discover that in the strategy than after the signage has been fitted.",
        "Once the proposition feels right, the identity and campaign have something worth expressing."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Mighty Adventures",
      "href": "/work/mighty-adventures"
    },
    {
      "title": "Wonderball mini golf",
      "href": "/work/wonderball-mini-golf"
    }
  ]
},
{
  "slug": "hospitality-brand-positioning",
  "title": "Everyone wants to be premium. So what?",
  "seoTitle": "Brand Positioning for Hospitality and Attractions | Smith & Devil",
  "description": "Why sounding premium is no substitute for a distinctive position in hospitality, attractions and competitive socialising.",
  "eyebrow": "Brand strategy / Positioning",
  "standfirst": "When the whole category promises the same things, being excellent at them might still leave you looking rather familiar.",
  "heroImage": {
    "src": "/images/work/fortune-favours/lead.webp",
    "alt": "Fortune Favours entertainment brand concept identity",
    "caption": "Fortune Favours: a brand developed for an ambitious multi-location entertainment concept.",
    "href": "/work/fortune-favours"
  },
  "sections": [
    {
      "paragraphs": [
        "Premium. Immersive. Elevated. Unforgettable. There are certain words that make their way into almost every hospitality brief.",
        "None of them is necessarily wrong. But if the venue next door can describe itself in exactly the same way, you haven't given the customer much help.",
        "Positioning is about deciding which part of the market you want to occupy and giving people a recognisable reason to choose you there."
      ]
    },
    {
      "heading": "You can't own 'great atmosphere'",
      "paragraphs": [
        "Have a look at how many entertainment venues promise great games, delicious cocktails and an amazing atmosphere. It's the industry's equivalent of a hotel promising clean sheets.",
        "People expect those things. The harder question is what sort of night your venue is particularly good at delivering, for whom, and why someone would pick it over the alternatives.",
        "That might be the spirit of the place, its approach to entertainment, a particular audience or an experience nobody else is offering in quite the same way."
      ]
    },
    {
      "heading": "A position should show up in the work",
      "paragraphs": [
        "When a business has a clear position, creative decisions become more purposeful. The tone of voice has an attitude. The interiors develop a character. You can judge whether a partnership or new activity feels like a natural fit.",
        "It should also help with what you turn down. Adding another fashionable game because the competition has one isn't always a good reason to spend money."
      ]
    },
    {
      "heading": "Fortune Favours: an attitude that could travel",
      "paragraphs": [
        "Fortune Favours was developed as a brand for a proposed multi-venue entertainment business with ambitions across European cities. The challenge was to create an identity that could work in very different buildings without losing its personality.",
        "We took inspiration from the creative confidence of Manchester's Factory Records scene. The resulting identity, tone and interior direction had a shared attitude: 'Nothing ventured, nothing gained'.",
        "It's concept and brand-development work, rather than a claim about live venue performance. The ambition was to create an idea capable of travelling from one location to another while still feeling like Fortune Favours."
      ],
      "media": {
        "src": "/images/work/fortune-favours/09.webp",
        "alt": "Fortune Favours brand and interior concept application",
        "caption": "The brand's visual language was designed to work across different settings.",
        "href": "/work/fortune-favours"
      }
    },
    {
      "heading": "Could anyone else make the same claim?",
      "paragraphs": [
        "Here's a useful test when you think you've found your position: take your name off the presentation and replace it with a competitor's.",
        "If everything still makes perfect sense, it's worth another look.",
        "There's nothing wrong with being excellent. You'd just like customers to know what makes your version of excellent worth choosing."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Fortune Favours",
      "href": "/work/fortune-favours"
    },
    {
      "title": "Pop Playrooms",
      "href": "/work/pop-playrooms"
    }
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
  "slug": "branding-new-hospitality-concept",
  "title": "Building a brand for a new hospitality venue",
  "seoTitle": "Building a Brand for a New Hospitality Venue | Smith & Devil",
  "description": "How to turn a hospitality venue concept into a recognisable brand across interiors, identity, digital and marketing.",
  "eyebrow": "Brand development / New venues",
  "standfirst": "From the initial concept to signage, interiors and marketing, a clear brand idea helps everything work together.",
  "heroImage": {
    "src": "/images/work/pop-playrooms/01.webp",
    "alt": "Pop Playrooms branded entertainment venue and mini golf concept",
    "caption": "Pop Playrooms: the energy of pop music gave a multi-activity venue a shared identity.",
    "href": "/work/pop-playrooms"
  },
  "sections": [
    {
      "paragraphs": [
        "There's usually a stage in developing a venue when the ideas are all there but they're still having separate conversations. The games have one personality, the food offer another and the interiors are full of references somebody saved on their phone.",
        "It's exciting. It can also become a bit of a jumble.",
        "A brand gives the people making all those decisions a shared idea. One they can use when the designers, operators, web team and marketing team are working on different parts of the same business."
      ]
    },
    {
      "heading": "Find something with a bit of mileage in it",
      "paragraphs": [
        "A good name helps. A distinctive logo helps too. But the idea behind them needs to hold up when you're writing a menu, designing a room, training staff or trying to explain the experience in a fifteen-second video.",
        "Otherwise the brand lives in a presentation while the actual business gets on with doing something else."
      ]
    },
    {
      "heading": "Pop Playrooms found its rhythm in pop music",
      "paragraphs": [
        "Pop Playrooms brought mini golf and other competitive socialising activities together across its venues. We built the creative direction around the energy of pop music and performance.",
        "The mini golf placed players on the sets of imagined pop music videos, giving the courses their own moments to explore and share. That thinking travelled into the identity, interiors, signage, website and launch creative.",
        "It gave the different activities a reason to feel like part of the same place. And it was considerably more interesting than decorating every room with a different neon slogan."
      ]
    },
    {
      "heading": "Think about the bits nobody puts in the mood board",
      "paragraphs": [
        "Brands earn their keep in the practical details too. What does a booking confirmation sound like? How does the menu look when it's covered in fingerprints? Can the signage tell people where to go without spoiling the atmosphere?",
        "One recognisable approach across those things makes the place easier to navigate and easier to remember. It also makes life simpler when another venue opens and the new team needs to know how everything should work."
      ]
    },
    {
      "heading": "Leave room for the business to grow",
      "paragraphs": [
        "You don't need to invent every future campaign on opening day. You do need enough clarity that new ideas can be judged against something.",
        "That way the brand can develop with the business rather than needing a new personality every time somebody has a bright idea on a Tuesday morning."
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
  "slug": "competitive-socialising-brand-strategy",
  "publishedAt": "2026-11-26T09:00:00Z",
  "title": "Making competitive socialising work as a night out",
  "seoTitle": "Designing a Competitive Socialising Venue | Smith & Devil",
  "description": "How the games, bar, layout and experience combine to make a competitive socialising venue an enjoyable night out.",
  "eyebrow": "Competitive socialising / Venues",
  "standfirst": "The games bring people in. How the venue works around them determines whether it's a good night out.",
  "heroImage": {
    "src": "/images/work/strike/20220619_strike_1041.webp",
    "alt": "Guests enjoying the atmosphere at Strike bowling and hospitality venue",
    "caption": "Strike: our film and photography presented the Wandsworth venue as a complete night out.",
    "href": "/work/strike"
  },
  "sections": [
    {
      "paragraphs": [
        "Bowling, darts, mini golf, shuffleboard, karaoke. The games are doing a lot of heavy lifting in competitive socialising, and quite right too.",
        "But anyone who's organised a group night out knows the game is only part of the evening. People have to arrive, find each other, order a drink, figure out what they're playing and decide whether they fancy staying for another round.",
        "The best venues make all of that feel easy. The less successful ones make you wonder whether the architect has ever been out with eight friends."
      ]
    },
    {
      "heading": "Think about the whole group",
      "paragraphs": [
        "Not everyone will be playing at once. Some people want to compete, some want to watch and some are really there for the drinks. The design has to work for all of them.",
        "Can people see the action? Is there somewhere to put a glass? Does the bar feel close enough to be part of the experience? If the only place to stand is directly behind someone's backswing, the evening could get interesting for the wrong reasons.",
        "Those little details affect how people feel about the venue and how long they stay."
      ]
    },
    {
      "heading": "The bar isn't an optional extra",
      "paragraphs": [
        "Food and drink can be a major part of the business, so the offer and the service need to suit the way people play. A complicated ordering system or nowhere comfortable to sit can undo a lot of otherwise excellent design.",
        "Equally, a brilliant drinks offer can make an ordinary game feel like a proper occasion. It's worth thinking about the two together when you're planning the venue."
      ],
      "media": {
        "src": "/images/work/allstars-sports-bars/pool-player.jpg",
        "alt": "A customer playing pool at Allstars Sports Bar",
        "caption": "The game, the company and the venue atmosphere all contribute to the night.",
        "href": "/work/allstars-sports-bars"
      }
    },
    {
      "heading": "Give people another reason to organise it",
      "paragraphs": [
        "Leagues, alternative game formats, competitions and seasonal events can turn a place someone tries once into somewhere their group returns to. Sometimes the best reason to come back is simply that it became their regular Thursday night.",
        "We've worked on the venue concept and brand experience at Pop Playrooms, and on film, photography and menus for Strike. Different briefs, but the same useful question runs through both: what will make someone want to spend their evening here?",
        "Once you've worked that out, the marketing has a far better story to tell."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Strike",
      "href": "/work/strike"
    },
    {
      "title": "Pop Playrooms",
      "href": "/work/pop-playrooms"
    },
    {
      "title": "Allstars Sports Bars",
      "href": "/work/allstars-sports-bars"
    }
  ]
},
{
  "slug": "hospitality-brand-experience-strategy",
  "title": "Designing the whole customer experience",
  "seoTitle": "Hospitality Customer Experience Design | Smith & Devil",
  "description": "Connecting the website, booking journey, in-venue experience and post-visit communication to improve customer experience and repeat visits.",
  "eyebrow": "Brand experience / Customer journey",
  "standfirst": "A joined-up experience should make it easy to discover a venue, book, enjoy the visit and find a reason to return.",
  "heroImage": {
    "src": "/images/work/draughts/draughts-lead.jpg",
    "alt": "Draughts board game café customer experience",
    "caption": "Draughts: a better relationship with previous visitors started with making the existing customer data useful.",
    "href": "/work/draughts"
  },
  "sections": [
    {
      "paragraphs": [
        "You can put a great deal of effort into a venue, only for the first impression to be a website that makes booking feel like applying for a mortgage.",
        "Or deliver a cracking night out and then never speak to the customers again.",
        "The brand lives in those moments too. From somebody first hearing about the place to getting a booking confirmation, walking through the door and deciding whether to return."
      ]
    },
    {
      "heading": "The website is part of the experience",
      "paragraphs": [
        "People need to understand what they're booking, who it's for, what it costs and where they're supposed to turn up. They shouldn't need to phone the venue to solve a puzzle you accidentally put on the booking page.",
        "With Allstars Sports Bowl, we built a digital home for several venues, with individual activities, local offers and booking journeys. The work included filming and photographing the actual experience so customers could see the places they were choosing.",
        "That's useful creative work, but it's also practical: making the offer easier to find and easier to buy."
      ]
    },
    {
      "heading": "The physical space has to keep the promise",
      "paragraphs": [
        "Once someone arrives, everything they've been shown should feel recognisable. A family attraction promising discovery needs interesting things to discover. A venue selling a sociable night out needs spaces where groups actually enjoy being together.",
        "That doesn't mean covering every surface in the logo. It means paying attention to atmosphere, wayfinding, the people delivering the experience and the moments people will remember."
      ]
    },
    {
      "heading": "And there ought to be a next chapter",
      "paragraphs": [
        "For Draughts, the opportunity was sitting in a customer database of 18,000 records that had gone quiet. We sorted out deliverability, organised the audience and developed a set of reactivation journeys, supported by social and in-venue activity.",
        "The first three email flows generated £14,125 in attributed revenue. That's what happens when the business uses what it knows about its visitors to give them a timely reason to return.",
        "There's no magic trick here. If you've earned somebody's attention and they've enjoyed the visit, it's worth staying in touch with something they'd actually like to hear about."
      ],
      "media": {
        "src": "/images/work/draughts/reactivation-clean-desktop.png",
        "alt": "Draughts customer reactivation email campaign",
        "caption": "Draughts: creative and CRM designed around getting previous customers back through the door.",
        "href": "/work/draughts"
      }
    },
    {
      "heading": "One business, one experience",
      "paragraphs": [
        "Brand strategists, interior designers, web developers, operators and marketers all do different jobs. Customers don't see the handovers. They see whether the place makes sense and whether they enjoyed themselves.",
        "Getting those disciplines working together is how you make the whole experience better, rather than polishing each part in isolation."
      ]
    }
  ],
  "relatedProjects": [
    {
      "title": "Draughts",
      "href": "/work/draughts"
    },
    {
      "title": "Allstars Sports Bowl",
      "href": "/work/allstars-sports-bowl"
    },
    {
      "title": "Mighty Adventures",
      "href": "/work/mighty-adventures"
    }
  ]
}
];

export const thinkingBySlug = Object.fromEntries(thinkingArticles.map((article) => [article.slug, article])) as Record<string, ThinkingArticle>;
