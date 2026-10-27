export type ServicePageData = 
{
  slug: string;
  title: string;
  description: string;
  kicker: string;
  heroTitle: string;
  standfirst: string;
  actions: { className: string; href: string; label: string }[];
  heroImage: { src: string; alt: string };
  proofLine: string;
  featuredProjects?: { title: string; href: string; image: { src: string; alt: string }; description: string }[];
  argument: { label: string; title: string; paragraphs: string[] };
  comparison?: { label: string; title: string; intro: string; items: { title: string; body: string }[]; closing: string };
  capabilities: { label: string; title: string; items: { number: string; title: string; body: string }[] };
  process: { label: string; title: string; items: { number: string; title: string; body: string }[] };
  caseStudy: {
    image: { src: string; alt: string };
    label: string;
    title: string;
    paragraphs: string[];
    link: { href: string; label: string } | null;
    related: string[];
  };
  fit: { label: string; title: string; items: string[] };
  faq: { label: string; title: string; items: { question: string; answer: string }[] };
  enquiry: { label: string; title: string; intro: string };
}

export const servicePages: Record<string, ServicePageData> = {
  "concept-to-market": {
  "slug": "concept-to-market",
  "title": "Concept to Market | Smith & Devil",
  "description": "Commercial strategy, proposition development, brand and go-to-market for new immersive experiences, entertainment technology, venues and licensed IP.",
  "kicker": "Concept to Market",
  "heroTitle": "Commercial strategy for new experiences, technology and leisure concepts.",
  "standfirst": "We help founders, developers and operators define the product, establish the customer proposition, build the brand and plan the launch. From early investment conversations to ticket sales, partnerships and bookings.",
  "actions": [
    {
      "className": "service-module__T4otXW__primaryAction",
      "href": "#project-enquiry",
      "label": "Talk about your concept"
    },
    {
      "className": "service-module__T4otXW__secondaryAction",
      "href": "/thinking",
      "label": "Explore our thinking"
    }
  ],
  "heroImage": {
    "src": "/images/work/fortune-favours/03.webp",
    "alt": "Fortune Favours entertainment venue concept from Smith & Devil"
  },
  "proofLine": "Proposition development, audience and revenue strategy, brand, investment narrative and go-to-market planning.",
  "argument": {
    "label": "The challenge",
    "title": "Define a compelling commercial proposition.",
    "paragraphs": [
      "We help founders, developers and operators define and articulate the commercial proposition behind new immersive experiences, entertainment technologies and leisure concepts.",
      "We establish what you’re selling, who it’s for, why people will choose it and how to communicate its value. Then we develop the brand, investment story and go-to-market strategy."
    ]
  },
  "comparison": {
    "label": "Different starting points",
    "title": "Four ways we take concepts to market.",
    "intro": "Our work is shaped by the product, the audiences and the stage you're at.",
    "items": [
      {
        "title": "Immersive experiences to market",
        "body": "Develop the commercial proposition for a new immersive or interactive experience. Define fan, consumer, family, group and corporate offers; ticketing and distribution; brand positioning; pre-sales and launch."
      },
      {
        "title": "Technology to market",
        "body": "Turn an entertainment technology into a customer product and investor-facing proposition. Identify applications, occasions, commercial assumptions and the experience brief before committing to expensive design."
      },
      {
        "title": "Venues to market",
        "body": "Establish the concept, customer proposition and revenue opportunities for a new hospitality, leisure or competitive socialising venue. Give the architect a commercially informed brief and the operator a launch plan."
      },
      {
        "title": "IP to market",
        "body": "Translate licensed entertainment, gaming or cultural IP into live products audiences will pay to experience. Define the fan proposition, wider consumer appeal, partnership opportunities and sales strategy."
      }
    ],
    "closing": "Whether the project is seeking investment or preparing to open, we define what you're selling, who you're selling it to and how it will reach customers."
  },
  "capabilities": {
    "label": "What we develop",
    "title": "A commercial plan that creative teams can deliver.",
    "items": [
      {
        "number": "01",
        "title": "Proposition and positioning",
        "body": "Define the product, value proposition, alternatives and reasons customers will choose it."
      },
      {
        "number": "02",
        "title": "Audience and revenue opportunities",
        "body": "Identify priority customers, purchase occasions, product packages and routes to revenue."
      },
      {
        "number": "03",
        "title": "Brand and experience direction",
        "body": "Shape the positioning, identity brief, tone of voice and experience principles that carry the proposition."
      },
      {
        "number": "04",
        "title": "Investment narrative",
        "body": "Express the customer opportunity, commercial assumptions and proposition in a persuasive investor-facing story. Financial forecasts and fundraising remain specialist work."
      },
      {
        "number": "05",
        "title": "Go-to-market and sales strategy",
        "body": "Plan launch stages, audience acquisition, fan campaigns, corporate offers, partnerships and booking conversion."
      },
      {
        "number": "06",
        "title": "Customer lifecycle",
        "body": "Map discovery, purchase, participation, CRM, repeat visits and advocacy so the launch supports a sustainable business."
      }
    ]
  },
  "process": {
    "label": "Our approach",
    "title": "From uncertainty to a route to market.",
    "items": [
      {
        "number": "1",
        "title": "Interrogate the opportunity",
        "body": "Understand the concept, technology or IP, the commercial ambition and what has already been tested."
      },
      {
        "number": "2",
        "title": "Define the product and its audiences",
        "body": "Establish the customer propositions, segments, occasions and commercial logic."
      },
      {
        "number": "3",
        "title": "Build the brand and business story",
        "body": "Create the proposition, narrative, creative direction and briefs for investment and development."
      },
      {
        "number": "4",
        "title": "Plan the launch",
        "body": "Define channels, sales products, partnerships, booking pathways and the pre-launch-to-opening plan."
      },
      {
        "number": "5",
        "title": "Deliver what matters",
        "body": "Bring in our branding, campaign, digital and experience-design capabilities, or collaborate with the client's existing teams."
      }
    ]
  },
  "caseStudy": {
    "image": {
      "src": "/images/work/humbug/03.webp",
      "alt": "Humbug live entertainment experience and campaign"
    },
    "label": "Proof from real projects",
    "title": "From concept development to live audiences.",
    "paragraphs": [
      "Humbug demonstrates our work on a ticketed experience: positioning, brand and campaigns developed to sell a distinctive live Christmas production.",
      "Fortune Favours is an example of upstream proposition and brand development for a proposed multi-location entertainment concept. It did not launch, so we present it as concept work rather than evidence of ticket sales or commercial performance.",
      "Pop Playrooms and Mighty Adventures demonstrate how a defined proposition can guide a physical customer experience. Different stages of work call for different evidence."
    ],
    "link": {
      "href": "/work/humbug",
      "label": "See Humbug"
    },
    "related": [
      "Fortune Favours: proposition and brand for a proposed entertainment concept; the venue did not launch.",
      "Pop Playrooms: a distinctive brand and physical competitive-socialising experience.",
      "Mighty Adventures: branded family entertainment and course experience."
    ]
  },
  "fit": {
    "label": "When to bring us in",
    "title": "Bring us in while decisions are still being made.",
    "items": [
      "You have a technology but not yet a clear customer product.",
      "An architect is designing around a brief that has no proposition.",
      "You need an investment story grounded in who will buy and why.",
      "You have licensed IP but need the live commercial experience.",
      "You are preparing to announce, pre-sell or launch an attraction.",
      "You need separate fan, family, group and corporate sales propositions.",
      "You want strategic development before commissioning branding, marketing or fit-out."
    ]
  },
  "faq": {
    "label": "Questions we hear",
    "title": "Useful answers before we talk.",
    "items": [
      {
        "question": "Can you help before we have funding?",
        "answer": "Yes. We can develop a clear commercial proposition, customer case and investment narrative so the concept is better prepared for investor conversations. We do not guarantee funding or act as a financial adviser."
      },
      {
        "question": "Is this the same as venue concept development?",
        "answer": "Venue Concept Development focuses on the proposition and creative brief for a physical venue, upstream of architecture and fit-out. Concept to Market goes further into commercial audiences, sales products, brand development, launch channels and acquisition strategy."
      },
      {
        "question": "Can you work with our architect or technical team?",
        "answer": "Yes. We can provide the commercial and brand brief they need, or work alongside them while the experience and operating model develop."
      },
      {
        "question": "What if we already have a brand?",
        "answer": "We start with what exists. The engagement might focus on audience products, commercial positioning, distribution and go-to-market rather than identity design."
      },
      {
        "question": "Do you deliver the launch as well?",
        "answer": "We can deliver branding, campaigns, content, digital and customer journeys, or guide the strategy while working with your existing teams."
      },
      {
        "question": "Can we engage you for the initial strategy only?",
        "answer": "Yes. A defined proposition and go-to-market engagement can stand alone, with delivery commissioned separately if needed."
      }
    ]
  },
  "enquiry": {
    "label": "Talk to us",
    "title": "What are you bringing to market?",
    "intro": "Tell us what you are developing, who you expect to buy it and whether you are seeking investment, preparing to build or planning a launch."
  }
},
  "venue-concept-development": {
    "slug": "venue-concept-development",
    "title": "Venue Concept Development for Leisure & Hospitality | Smith & Devil",
    "description": "Venue concept development for founders, operators, developers and architects. Proposition, audience, brand direction, customer journey and an experience brief ready to design, fund and build.",
    "kicker": "Venue Concept Development",
    "heroTitle": "Define the idea before you design the venue.",
    "standfirst": "Creating a leisure, entertainment or experience-led venue? We help founders, operators and developers turn early ideas into strong propositions, brands and experience briefs ready to design, fund and launch.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Talk to us about your concept"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "/work/fortune-favours",
        "label": "See our concept work"
      }
    ],
    "heroImage": {
      "src": "/images/work/pop-playrooms/10.webp",
      "alt": "Branded leisure venue concept developed by Smith & Devil"
    },
    "proofLine": "We help turn the thing in someone's head into a proposition that investors, architects, designers and customers can all understand.",
    "argument": {
      "label": "The problem",
      "title": "An idea is not yet a design brief.",
      "paragraphs": [
        "A founder has the product. An architect has the space. An investor wants the story. But if the proposition, audience, customer experience and brand are still unresolved, everyone is being asked to design around assumptions.",
        "We work upstream of architecture and fit-out to define what the business is actually trying to become. That gives the creative and delivery teams a stronger brief, gives investors a clearer proposition and gives customers a more compelling reason to choose it."
      ]
    },
    "comparison": {
      "label": "Where we fit",
      "title": "Before architecture. Before fit-out. Before the expensive decisions.",
      "intro": "Different specialists solve different parts of a venue project. Our job is to make sure the idea they are working from is strong enough.",
      "items": [
        {
          "title": "Founders and operators",
          "body": "You may know the product, technology or activity, but still need to turn it into a proposition people can understand, fund and buy."
        },
        {
          "title": "Architects and interior designers",
          "body": "You can design the space more effectively when the audience, brand, experience principles and commercial priorities are already clear."
        },
        {
          "title": "Developers and investors",
          "body": "A sharper concept makes it easier to test the opportunity, brief partners and understand what the finished venue is meant to achieve."
        },
        {
          "title": "IP owners and experience builders",
          "body": "The world or asset may already exist. We help define the customer product, proposition and commercial experience that should be built from it."
        }
      ],
      "closing": "We define what the place is before the delivery team has to decide what it looks like."
    },
    "capabilities": {
      "label": "What we define",
      "title": "Turn the raw idea into something everyone can work from.",
      "items": [
        {
          "number": "01",
          "title": "Commercial proposition",
          "body": "Clarify what the venue is, why it deserves to exist, who it is for and what should make people choose it."
        },
        {
          "number": "02",
          "title": "Audience and occasion",
          "body": "Define the priority audiences, visit occasions and behaviours that should shape the product and experience."
        },
        {
          "number": "03",
          "title": "Competitive position",
          "body": "Understand the alternatives customers will compare you with and identify a position the concept can credibly own."
        },
        {
          "number": "04",
          "title": "Product and experience logic",
          "body": "Stress-test the core activity, session, format, dwell time and reasons to return before they become expensive assumptions."
        },
        {
          "number": "05",
          "title": "Brand direction",
          "body": "Define the strategic and creative territory the name, identity, environment and communications should grow from."
        },
        {
          "number": "06",
          "title": "Customer journey",
          "body": "Map discovery, booking, arrival, participation, food and drink, social moments, exit and return as one connected experience."
        },
        {
          "number": "07",
          "title": "Spatial principles",
          "body": "Translate the proposition into useful principles for zoning, atmosphere, hierarchy, moments of theatre and operational flow."
        },
        {
          "number": "08",
          "title": "Architect-ready brief",
          "body": "Give architects, interior designers and technical partners a clearer creative and commercial brief to design against."
        },
        {
          "number": "09",
          "title": "Investor story",
          "body": "Turn the concept into a coherent narrative that explains the audience, opportunity, experience and reasons the idea can win."
        }
      ]
    },
    "process": {
      "label": "Process",
      "title": "From early idea to buildable proposition.",
      "items": [
        {
          "number": "1",
          "title": "Interrogate the idea",
          "body": "We get underneath the product, site, audience, commercial ambition and assumptions already sitting inside the brief."
        },
        {
          "number": "2",
          "title": "Stress-test the proposition",
          "body": "We challenge who it is for, what makes it different, what customers are really buying and where the concept could fall apart."
        },
        {
          "number": "3",
          "title": "Define the experience",
          "body": "We connect the proposition to the customer journey, brand direction and principles that should guide the physical environment."
        },
        {
          "number": "4",
          "title": "Create the working brief",
          "body": "We package the thinking into a clear story and practical brief for investors, architects, designers and delivery partners."
        }
      ]
    },
    "caseStudy": {
      "image": {
        "src": "/images/work/fortune-favours/03.webp",
        "alt": "Fortune Favours venue concept visualisation"
      },
      "label": "Relevant proof",
      "title": "A concept built to become a business.",
      "paragraphs": [
        "Fortune Favours needed more than a visual identity. The ambition was to create an entertainment proposition capable of working across multiple European destinations.",
        "We helped shape the proposition and brand as one system, creating an idea strong enough to guide the customer experience, environment and future rollout rather than leaving those decisions to be solved independently."
      ],
      "link": {
        "href": "/work/fortune-favours",
        "label": "See the Fortune Favours project"
      },
      "related": [
        "Pop Playrooms: brand and venue thinking brought together around one competitive-socialising proposition.",
        "Mighty Adventures: a family entertainment concept expanded to three venues in two years.",
        "Levels Prague: a playable attraction designed around the commercial role it needed to perform inside a much larger venue."
      ]
    },
    "fit": {
      "label": "A useful time to talk",
      "title": "Bring us in before the brief hardens.",
      "items": [
        "You have a leisure or hospitality idea but it is still difficult to explain.",
        "An architect is asking questions the current brief cannot answer.",
        "You are raising investment and need the concept to feel like a credible business, not just an exciting thought.",
        "An IP or technology exists, but the customer product has not been properly defined.",
        "Several activities need turning into one coherent venue proposition.",
        "You are about to spend heavily on architecture, fit-out or fabrication and want to test the idea first.",
        "A concept works operationally but lacks a brand, story or reason for customers to care."
      ]
    },
    "faq": {
      "label": "Questions founders and architects ask",
      "title": "Useful answers before we talk.",
      "items": [
        {
          "question": "What is venue concept development?",
          "answer": "It is the stage between having an idea and designing the finished venue. We define the proposition, audience, customer experience, brand direction and spatial principles so the teams that follow have a stronger brief."
        },
        {
          "question": "Should we do this before appointing an architect?",
          "answer": "Ideally, yes, or alongside them at the beginning. Architects can make better spatial decisions when the commercial proposition, audience and experience principles are already clear."
        },
        {
          "question": "Can you work with an architect we have already appointed?",
          "answer": "Yes. We often complement architecture and interior design teams by resolving the proposition, brand and customer experience questions that sit upstream of detailed spatial design."
        },
        {
          "question": "Can this help with fundraising?",
          "answer": "Yes. We can help turn an early concept into a clearer investor story, with a stronger proposition, audience case, experience logic and creative direction."
        },
        {
          "question": "What if the brand does not exist yet?",
          "answer": "That is common. We can define the strategic brand direction as part of concept development, then continue into naming and identity if the project needs it."
        },
        {
          "question": "Do you produce architectural drawings?",
          "answer": "No. We define the proposition, customer journey, brand and experience brief that architects and technical designers can then develop into detailed spatial and construction information."
        },
        {
          "question": "Can you work with established IP?",
          "answer": "Yes. Where the IP world and creative rules already exist, our role can be to define the customer product, proposition, operating experience and commercial logic that translate the IP into a physical experience."
        }
      ]
    },
    "enquiry": {
      "label": "Start with the idea",
      "title": "Before you build it, make sure it is worth building.",
      "intro": "Tell us what you have: a product, a site, an IP, a half-formed venue idea or a deck that is not quite convincing yet. We will help define what the business should actually become."
    }
  },
  "brand-strategy-design": {
    "slug": "brand-strategy-design",
    "title": "Brand Strategy & Design Agency | Smith & Devil",
    "description": "Brand strategy, naming, identity and messaging for hospitality, leisure, entertainment and experience-led businesses.",
    "kicker": "Brand Strategy & Design",
    "heroTitle": "Build something people choose.",
    "standfirst": "We create distinctive brands for hospitality, leisure, entertainment and ambitious businesses built around customer experience. Clear enough to guide the business. Powerful enough to win hearts — and markets.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Talk to us about your brand"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "/work/t2-design-solutions",
        "label": "See our brand work"
      }
    ],
    "heroImage": {
      "src": "/images/t2-design-solutions.jpg",
      "alt": "T2 Design Solutions living infinity identity"
    },
    "proofLine": "T2 Design Solutions used its new brand to support expansion from Worksop to London and Bahrain.",
    "argument": {
      "label": "Why it matters",
      "title": "A brand people can believe in — and a business can use.",
      "paragraphs": [
        "A strong brand makes choices easier. It gives customers a reason to choose you, gives teams a clear way to represent the business and gives every new product, place or campaign somewhere to belong.",
        "We find the idea that can hold all of that together. Then we build the strategy, language and identity around it, with enough character to be remembered and enough discipline to keep working as the business grows."
      ]
    },
    "capabilities": {
      "label": "Capabilities",
      "title": "What we can help you define.",
      "items": [
        {
          "number": "01",
          "title": "Positioning and proposition",
          "body": "Clarify where the commercial opportunity sits, who the brand needs to matter to and why they should choose it."
        },
        {
          "number": "02",
          "title": "Audience and customer insight",
          "body": "Turn research, stakeholder knowledge and customer behaviour into useful priorities for the brand."
        },
        {
          "number": "03",
          "title": "Brand architecture",
          "body": "Create a clear relationship between the company, venues, products, sub-brands and future offers."
        },
        {
          "number": "04",
          "title": "Naming and language",
          "body": "Develop names, brand lines, messaging systems and a tone of voice that sound like one business rather than a collection of campaigns."
        },
        {
          "number": "05",
          "title": "Visual identity",
          "body": "Build the logo, typography, colour, imagery and graphic system needed to make the brand distinctive wherever it appears."
        },
        {
          "number": "06",
          "title": "Guidelines and toolkits",
          "body": "Give internal teams and partners practical tools that protect the idea without making the brand difficult to use."
        },
        {
          "number": "07",
          "title": "Launch and rollout",
          "body": "Plan how the brand enters the world, from internal engagement and digital launch to venues, campaigns and customer communications."
        }
      ]
    },
    "process": {
      "label": "Process",
      "title": "How we build a brand.",
      "items": [
        {
          "number": "1",
          "title": "Find the commercial opportunity",
          "body": "We begin with the business, the audience and the market. The aim is to identify the most valuable choice the brand can own."
        },
        {
          "number": "2",
          "title": "Make the strategy useful",
          "body": "We define the proposition, positioning, personality and messaging in language that can guide real decisions."
        },
        {
          "number": "3",
          "title": "Create the identity",
          "body": "We develop and test the visual and verbal system across the places customers will actually meet it."
        },
        {
          "number": "4",
          "title": "Put it to work",
          "body": "We build the tools, templates and launch assets needed to carry the brand into the business."
        }
      ]
    },
    "caseStudy": {
      "image": {
        "src": "/images/work/t2-design-solutions/04.webp",
        "alt": "T2 Design Solutions identity in use"
      },
      "label": "Relevant proof",
      "title": "An identity designed to go anywhere.",
      "paragraphs": [
        "T2 Design Solutions had grown from a local 3D visualisation studio into a creative technology business with international clients. Its brand still told the smaller story.",
        "We positioned T2 around infinite creative possibility and created a living identity powered by the studio's own 3D capabilities. Since the 2022 rebrand, T2 has expanded to London and Manama, Bahrain, worked on global destinations and built a client roster of more than 45 major brands."
      ],
      "link": {
        "href": "/work/t2-design-solutions",
        "label": "See the T2 Design Solutions project"
      },
      "related": [
        "Mama Bamboo: a retail-ready identity and packaging system that reached Tesco.",
        "More Concierge: a new proposition for an employee benefit that helps clients recover an average of 500 billable hours.",
        "Fortune Favours: a scalable entertainment brand created for ambitions across more than 15 European destinations."
      ]
    },
    "fit": {
      "label": "A useful time to talk",
      "title": "When to bring us in.",
      "items": [
        "A new concept needs a complete brand.",
        "The business has grown beyond its original identity.",
        "The offer is difficult to explain.",
        "Several products or venues need a clearer relationship.",
        "A strong idea exists, but the brand lacks the system to carry it.",
        "A launch, investment process or expansion needs a more credible story."
      ]
    },
    "faq": {
      "label": "Questions clients ask",
      "title": "Useful answers before we talk.",
      "items": [
        {
          "question": "Do you work on new brands and rebrands?",
          "answer": "Yes. We can start with an early business idea or work with an established organisation that has outgrown its current positioning or identity."
        },
        {
          "question": "Does brand strategy have to include a new logo?",
          "answer": "No. Sometimes the commercial problem is the proposition, architecture or messaging. We recommend the level of change the business needs rather than assuming every project requires a complete visual reset."
        },
        {
          "question": "Can you help us name the business or product?",
          "answer": "Yes. Naming can sit within a wider brand programme or work as a defined stage. We consider meaning, distinctiveness, usability and the wider brand system."
        },
        {
          "question": "Can you take the brand into websites, venues and campaigns?",
          "answer": "Yes. That joined-up application is one of our strengths. Keep Smith & Devil involved across digital, physical and launch work, or use the tools with your existing partners."
        },
        {
          "question": "Do you only work with hospitality and leisure brands?",
          "answer": "No. Our specialist experience sits in hospitality, leisure, entertainment and customer experience, but the same approach works for ambitious businesses that need people to understand, choose and remember them."
        },
        {
          "question": "What will we have at the end?",
          "answer": "The exact outputs depend on the brief. A full programme can include strategy, positioning, messaging, tone of voice, visual identity, guidelines and a launch toolkit. We agree the deliverables before work begins."
        }
      ]
    },
    "enquiry": {
      "label": "Start a conversation",
      "title": "Give customers a stronger reason to choose you.",
      "intro": "Tell us what is changing in the business and where the current brand is holding it back."
    }
  },
  "campaigns-content": {
    "slug": "campaigns-content",
    "title": "Campaign Strategy & Content Agency | Smith & Devil",
    "description": "Campaign strategy, launch creative, social content, CRM and multi-channel campaigns for hospitality, leisure and experience brands.",
    "kicker": "Campaigns & Content",
    "heroTitle": "Give people a reason to act.",
    "standfirst": "We plan and create launch campaigns, always-on content and customer communications that give people a reason to notice, book and come back.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Plan a campaign with us"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "/work/humbug",
        "label": "See the Humbug campaign"
      }
    ],
    "heroImage": {
      "src": "/images/humbug.jpg",
      "alt": "Rock-and-roll Santa performing at Humbug"
    },
    "proofLine": "Humbug sold 12,000 tickets and filled 90% of key dates within one week of going on sale.",
    "argument": {
      "label": "Why it matters",
      "title": "A strong idea makes every channel work harder.",
      "paragraphs": [
        "Campaigns become expensive when every advert, email and post has to find its own reason to exist. A clear creative platform gives the whole programme one recognisable idea and enough flexibility to stay interesting.",
        "We connect that idea to the commercial job. It might be launching a venue, filling quieter sessions, creating urgency around a seasonal event or giving existing customers a reason to return. Then we create the assets and structure needed to carry it across the customer journey."
      ]
    },
    "capabilities": {
      "label": "Capabilities",
      "title": "What we can help you create.",
      "items": [
        {
          "number": "01",
          "title": "Campaign strategy",
          "body": "Define the audience, objective, proposition, channel roles and measures that give the creative a clear commercial job."
        },
        {
          "number": "02",
          "title": "Launch campaigns",
          "body": "Build anticipation, open the booking window and keep momentum moving through launch and the first weeks of trading."
        },
        {
          "number": "03",
          "title": "Creative platforms and key art",
          "body": "Create one strong campaign idea with the visual and verbal system to work across paid, owned and physical channels."
        },
        {
          "number": "04",
          "title": "Paid social and digital creative",
          "body": "Develop the concepts, copy, formats and variations media teams need to test and optimise performance."
        },
        {
          "number": "05",
          "title": "Organic social and content",
          "body": "Plan useful content territories, calendars and repeatable formats that give the brand a recognisable presence."
        },
        {
          "number": "06",
          "title": "CRM and email",
          "body": "Create customer journeys, campaigns and copy that move people from awareness to booking, return and advocacy."
        },
        {
          "number": "07",
          "title": "Film, photography and production",
          "body": "Plan shoots around the asset list the campaign actually needs, then direct specialist production partners where required."
        },
        {
          "number": "08",
          "title": "OOH, print and in-venue creative",
          "body": "Carry the campaign into streets, venues and customer touchpoints with clear hierarchy and a consistent reason to act."
        },
        {
          "number": "09",
          "title": "Toolkits and ongoing direction",
          "body": "Give internal teams, media partners and local operators a practical system they can keep using."
        }
      ]
    },
    "process": {
      "label": "Process",
      "title": "How we create a campaign.",
      "items": [
        {
          "number": "1",
          "title": "Define the commercial job",
          "body": "We agree what needs to change, which audience matters and what action the campaign must create."
        },
        {
          "number": "2",
          "title": "Find the campaign idea",
          "body": "We develop the proposition and creative platform that can hold the activity together."
        },
        {
          "number": "3",
          "title": "Design the customer journey",
          "body": "We plan how paid media, social, CRM, web and physical touchpoints work together rather than compete for attention."
        },
        {
          "number": "4",
          "title": "Build, learn and evolve",
          "body": "We create the core assets, support rollout and use live response to strengthen the next phase."
        }
      ]
    },
    "caseStudy": {
      "image": {
        "src": "/images/work/humbug/03.webp",
        "alt": "Humbug Christmas campaign artwork"
      },
      "label": "Relevant proof",
      "title": "Selling Christmas at speed.",
      "paragraphs": [
        "Humbug needed to establish a completely new London Christmas experience and sell a large volume of tickets quickly.",
        "We positioned it as Santa's Christmas Dive Bar, placed a rock-and-roll Santa at the centre of the story and built a launch campaign across OOH, performance creative, organic social, CRM and the website. The brand sold 12,000 tickets and filled 90% of key dates within one week of going on sale."
      ],
      "link": {
        "href": "/work/humbug",
        "label": "See the Humbug project"
      },
      "related": []
    },
    "fit": {
      "label": "A useful time to talk",
      "title": "When to bring us in.",
      "items": [
        "A new venue, product or event needs a launch idea.",
        "The marketing calendar feels busy but disconnected.",
        "Paid media needs stronger creative to work with.",
        "The brand has plenty to say but no recognisable content system.",
        "CRM is being used as a mailing list rather than a customer journey.",
        "Local teams need better tools without losing consistency."
      ]
    },
    "faq": {
      "label": "Questions clients ask",
      "title": "Useful answers before we talk.",
      "items": [
        {
          "question": "Can you work with our existing brand?",
          "answer": "Yes. We can create a campaign within an established identity or help extend the system where the current brand lacks enough range."
        },
        {
          "question": "Do you buy and manage paid media?",
          "answer": "Our core role is campaign strategy and creative. We can work directly with your media agency or bring in a specialist partner, while keeping the idea and asset programme connected to performance."
        },
        {
          "question": "Can you support both a launch and ongoing marketing?",
          "answer": "Yes. We work on defined campaigns and retained creative programmes. A launch often becomes the foundation for a more efficient always-on content system."
        },
        {
          "question": "Do you create the content as well as the idea?",
          "answer": "Yes. We can write, design and direct social assets, email, OOH, print, photography and film. The production model is agreed around the brief and budget."
        },
        {
          "question": "Can you work with our internal marketing team?",
          "answer": "Yes. We can lead the creative, add capacity around a busy period or create a toolkit your team can run with."
        },
        {
          "question": "How do you judge whether the campaign worked?",
          "answer": "We agree measures around the commercial job. These might include bookings, ticket sales, enquiry quality, cost per acquisition, database growth, repeat visits or engagement with a specific audience."
        }
      ]
    },
    "enquiry": {
      "label": "Start a conversation",
      "title": "Give people a reason to act.",
      "intro": "Tell us what you need to launch, fill or grow. We will help turn the commercial target into a campaign people want to respond to."
    }
  },
  "digital-web": {
    "slug": "digital-web",
    "title": "Web Design for Hospitality & Leisure | Smith & Devil",
    "description": "Digital strategy, UX, website design and build for hospitality, leisure, entertainment and experience-led brands.",
    "kicker": "Digital & Web",
    "heroTitle": "Websites designed to generate bookings, sales and enquiries.",
    "standfirst": "We design and build websites that help people understand the offer, find the right experience and take the next step. Clear strategy, distinctive design and less friction between interest and action.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Talk to us about your website"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "/work/mighty-adventures",
        "label": "See our digital work"
      }
    ],
    "heroImage": {
      "src": "/images/work/mighty-adventures/03.webp",
      "alt": "Mighty Adventures digital experience"
    },
    "proofLine": "",
    "argument": {
      "label": "Why it matters",
      "title": "Your website has a commercial job.",
      "paragraphs": [
        "For an experience business, the website is part storefront, part sales assistant and part customer service team. It may need to explain an unfamiliar concept, organise several venues, connect to booking or ticketing and answer the questions that stop people committing.",
        "We start with that job. Then we bring the content, customer journey, brand and technology together around it. The result should be easy to understand, enjoyable to use and straightforward for your team to keep current."
      ]
    },
    "capabilities": {
      "label": "Capabilities",
      "title": "What we can help you create.",
      "items": [
        {
          "number": "01",
          "title": "Digital strategy",
          "body": "Define the audiences, objectives, platform requirements and measures that should guide the project."
        },
        {
          "number": "02",
          "title": "Content and information architecture",
          "body": "Organise the proposition, services, locations and proof around the decisions customers need to make."
        },
        {
          "number": "03",
          "title": "Customer journeys",
          "body": "Map the route from discovery to enquiry, booking, purchase or return, then remove avoidable friction."
        },
        {
          "number": "04",
          "title": "UX and UI design",
          "body": "Create responsive interfaces that make complex choices feel clear while giving the brand a distinctive digital presence."
        },
        {
          "number": "05",
          "title": "Website copy",
          "body": "Write clear, persuasive content that works for people, paid landing pages, organic search and conversational search systems."
        },
        {
          "number": "06",
          "title": "Website design and build",
          "body": "Take responsibility for the full website, using the right technical approach and trusted development specialists where needed."
        },
        {
          "number": "07",
          "title": "Booking, ticketing and platform connections",
          "body": "Design the front-end journey around specialist systems rather than forcing customers to understand the supplier stack."
        },
        {
          "number": "08",
          "title": "Search and agentic foundations",
          "body": "Build clear page architecture, metadata, structured data, crawlability and accessible interactions into the project from the start."
        },
        {
          "number": "09",
          "title": "Analytics and conversion",
          "body": "Define useful events and reporting so the team can see what customers do and where the journey needs attention."
        },
        {
          "number": "10",
          "title": "Ongoing development",
          "body": "Keep the site useful as venues, services, campaigns and customer expectations change."
        }
      ]
    },
    "process": {
      "label": "Process",
      "title": "How we build a website.",
      "items": [
        {
          "number": "1",
          "title": "Define the decisions",
          "body": "We agree what customers need to understand or do, and what the business needs the website to achieve."
        },
        {
          "number": "2",
          "title": "Organise the experience",
          "body": "We create the sitemap, content structure and key journeys before visual design begins."
        },
        {
          "number": "3",
          "title": "Design the system",
          "body": "We develop the interface, copy and reusable components around the brand and real content."
        },
        {
          "number": "4",
          "title": "Build, connect and measure",
          "body": "We take the site through development, testing, launch and analytics setup, with a clear plan for ongoing ownership."
        }
      ]
    },
    "caseStudy": {
      "image": {
        "src": "/images/work/more-concierge/05.webp",
        "alt": "More Concierge website and digital proposition"
      },
      "label": "Relevant proof",
      "title": "Make a complicated offer easy to choose.",
      "paragraphs": [
        "More Concierge had a valuable service, but the category language made it difficult for decision-makers to understand why it mattered.",
        "We reframed the proposition around the commercial value of giving top talent their time back, then carried that clarity through the messaging, UX and website. The result was a digital journey built to move people from curiosity to understanding — and from understanding to enquiry."
      ],
      "link": {
        "href": "/work/more-concierge",
        "label": "See the More Concierge project"
      },
      "related": [
        "More Concierge: proposition, messaging, UX and web design for an employee benefit entering the legal sector.",
        "Precision Microdrives: a clear digital story for a business moving from component sales to regulated, co-engineered partnerships.",
        "Pop Playrooms: a brand website and launch journey for a new competitive socialising concept."
      ]
    },
    "fit": {
      "label": "A useful time to talk",
      "title": "When to bring us in.",
      "items": [
        "The current website no longer reflects the business.",
        "Customers struggle to understand or compare the offer.",
        "Several venues or services need a clearer structure.",
        "Booking, ticketing or enquiry journeys feel disconnected.",
        "A rebrand needs a digital expression, not a static reskin.",
        "Paid campaigns need more relevant landing pages.",
        "The site needs stronger foundations for organic and AI search."
      ]
    },
    "faq": {
      "label": "Questions clients ask",
      "title": "Useful answers before we talk.",
      "items": [
        {
          "question": "Do you design and build websites?",
          "answer": "Yes. We can lead the complete project from strategy and content through UX, design, development and launch. We bring in specialist technical partners where required and remain responsible for the joined-up result."
        },
        {
          "question": "Which website platform do you use?",
          "answer": "We recommend the platform around the content, integrations, internal capability and future needs. We do not force every client into one stack."
        },
        {
          "question": "Can you connect to booking, ticketing, CRM or loyalty systems?",
          "answer": "Yes. We design the customer-facing journey around those systems and work with suppliers on the required integrations, so the experience feels coherent even when several platforms sit behind it."
        },
        {
          "question": "Can you improve an existing website without replacing everything?",
          "answer": "Yes. We can review the proposition, architecture, journeys and visual system, then recommend the changes with the strongest commercial case."
        },
        {
          "question": "Will the site be optimised for search and AI discovery?",
          "answer": "We build clear content, crawlable pages, metadata, internal linking, structured data and accessible interactions into the site. Ongoing search programmes can then be scoped around the market and growth targets."
        },
        {
          "question": "Can our team update the website?",
          "answer": "Yes. Content ownership is part of the platform decision. We create reusable components and provide the guidance or training needed to keep the site accurate."
        }
      ]
    },
    "enquiry": {
      "label": "Start a conversation",
      "title": "Make the next step easier.",
      "intro": "Tell us where the current website loses people, or what the new one needs to make possible."
    }
  },
  "venue-experience-design": {
    "slug": "venue-experience-design",
    "title": "Venue & Experience Design for Hospitality & Attractions | Smith & Devil",
    "description": "Venue and experience design for hospitality, leisure and attractions. Interior creative direction, branded environments, signage, wayfinding and guest experiences.",
    "kicker": "Venue & Experience Design",
    "heroTitle": "Brand-rich environments designed around your customers.",
    "standfirst": "We design branded environments for leisure, attractions, competitive socialising and retail. We connect your brand and customer proposition to interiors, signage, wayfinding and the moments customers remember.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Talk to us about your experience"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "#venue-experience-design-projects",
        "label": "See our venue work"
      }
    ],
    "heroImage": {
      "src": "/images/work/pop-playrooms/03.webp",
      "alt": "Brand and interior design by Smith & Devil for Pop Playrooms"
    },
    "proofLine": "Pop Playrooms: brand, mini golf and interior design across Wembley and Kingston upon Thames.",
    "argument": {
      "label": "Why it matters",
      "title": "The space is part of the product.",
      "paragraphs": [
        "A customer forms an opinion before they reach the main attraction, order a drink or sit down. The entrance, route, atmosphere, signs and small operational details all shape what the business feels worth.",
        "We connect those moments to the brand and commercial model. That creates a place with a clear idea, a more intuitive customer journey and a design language that can survive contact with the real world."
      ]
    },
    "capabilities": {
      "label": "Capabilities",
      "title": "What we can help you design.",
      "items": [
        {
          "number": "01",
          "title": "Venue concept and proposition",
          "body": "Define the role of the space, the experience it should create and the reasons customers will choose it."
        },
        {
          "number": "02",
          "title": "Customer journey and zoning",
          "body": "Plan how people arrive, orientate themselves, move, wait, play, order, spend and leave."
        },
        {
          "number": "03",
          "title": "Interior creative direction",
          "body": "Create the visual and material language that carries the brand through the environment."
        },
        {
          "number": "04",
          "title": "Experience touchpoints",
          "body": "Design guest experiences within venues and attractions, from themed areas and café environments to menus, scorecards and memorable brand touchpoints."
        },
        {
          "number": "05",
          "title": "Graphic surfaces",
          "body": "Use colour, typography, illustration and environmental graphics to give the space a distinctive character."
        },
        {
          "number": "06",
          "title": "Signage and wayfinding",
          "body": "Create signage and wayfinding for venues and attractions that helps guests explore, understand and enjoy the experience."
        },
        {
          "number": "07",
          "title": "Furniture, fixtures and finishes",
          "body": "Set the creative direction and selection principles for the objects and materials customers experience directly."
        },
        {
          "number": "08",
          "title": "Design development and delivery support",
          "body": "Work with architects, fabricators, fit-out teams and specialist consultants to protect the central idea through delivery."
        },
        {
          "number": "09",
          "title": "Multi-site systems",
          "body": "Define what should remain consistent, what can adapt and how the design works across different buildings and budgets."
        }
      ]
    },
    "process": {
      "label": "Process",
      "title": "How we shape a place.",
      "items": [
        {
          "number": "1",
          "title": "Start with the business",
          "body": "We understand the proposition, revenue model, audience, operations and constraints before drawing the experience."
        },
        {
          "number": "2",
          "title": "Map the customer journey",
          "body": "We identify the moments that matter and the spatial decisions that influence behaviour."
        },
        {
          "number": "3",
          "title": "Create the design language",
          "body": "We develop the concept, references, materials, graphics and key touchpoints as one system."
        },
        {
          "number": "4",
          "title": "Carry it through delivery",
          "body": "We collaborate with technical and build teams, review decisions and help resolve the compromises every real venue creates."
        }
      ]
    },
    "caseStudy": {
      "image": {
        "src": "/images/work/pop-playrooms/10.webp",
        "alt": "Pop Playrooms interior design"
      },
      "label": "Relevant proof",
      "title": "Pop Playrooms: one brand across the whole experience.",
      "paragraphs": [
        "Pop Playrooms needed a multi-activity competitive socialising concept anchored by mini golf. We developed the brand, course design and interiors across Wembley and Kingston upon Thames.",
        "Pop music gave the venues a shared creative direction. Each golf hole places players on the set of a music video, connecting the brand to the game, the environment and the moments customers share."
      ],
      "link": {
        "href": "/work/pop-playrooms/",
        "label": "See the Pop Playrooms project"
      },
      "related": [
        "Fortune Favours: brand, interior and experience design for a premium entertainment concept.",
        "Levels Prague: an 18-hole course that recorded 13,000 rounds in its first three months."
      ]
    },
    "fit": {
      "label": "A useful time to talk",
      "title": "When to bring us in.",
      "items": [
        "A new venue needs a clear concept and customer experience.",
        "A brand needs translating into a real place.",
        "An existing site feels generic, confusing or commercially underworked.",
        "Several activities need to feel like one coherent offer.",
        "A successful concept needs a repeatable multi-site system.",
        "Architects and fit-out teams need a stronger creative brief."
      ]
    },
    "faq": {
      "label": "Questions clients ask",
      "title": "Useful answers before we talk.",
      "items": [
        {
          "question": "Do you replace the architect or technical interior designer?",
          "answer": "No. We lead the proposition, customer experience, creative concept, brand expression and key design decisions. We collaborate with architects, consultants, fabricators and fit-out teams on technical delivery."
        },
        {
          "question": "Can you work on a refurbishment as well as a new venue?",
          "answer": "Yes. Existing venues often benefit from a sharper customer journey, clearer zoning, stronger brand expression and targeted changes rather than a complete rebuild."
        },
        {
          "question": "Can you design signage and wayfinding?",
          "answer": "Yes. We consider wayfinding as part of the experience and design the language, hierarchy and visual system needed to help customers move confidently."
        },
        {
          "question": "Do you work on multi-site concepts?",
          "answer": "Yes. We can create a system for rollout, including fixed brand elements, adaptable zones and principles that keep the experience recognisable across different sites."
        },
        {
          "question": "How early should you join the project?",
          "answer": "As early as practical. The proposition and customer journey can influence the brief, space planning, technical requirements and budget. Early involvement reduces the risk of decorating decisions that have already been made."
        },
        {
          "question": "Can you stay involved during the build?",
          "answer": "Yes. We can review design development, work with suppliers and help the team protect the central idea while responding to technical and budget realities."
        }
      ]
    },
    "enquiry": {
      "label": "Start a conversation",
      "title": "What should happen when people walk through the door?",
      "intro": "Tell us what you’re making, where you’ve got to and what still needs figuring out."
    },
    "featuredProjects": [
      {
        "title": "Pop Playrooms",
        "href": "/work/pop-playrooms/",
        "image": {
          "src": "/images/work/pop-playrooms/03.webp",
          "alt": "The music-inspired environment at Pop Playrooms"
        },
        "description": "Brand, mini golf and interiors for a competitive socialising concept across two sites."
      },
      {
        "title": "Fortune Favours",
        "href": "/work/fortune-favours/",
        "image": {
          "src": "/images/work/fortune-favours/03.webp",
          "alt": "Fortune Favours branded environment concept"
        },
        "description": "Brand, interior and experience design for a premium multi-activity entertainment concept."
      },
      {
        "title": "Levels Prague",
        "href": "/work/levels/",
        "image": {
          "src": "/images/work/levels/05.webp",
          "alt": "The 18-hole mini golf course at Levels Prague"
        },
        "description": "An 18-hole attraction that recorded 13,000 rounds in its first three months."
      }
    ]
  },
  "mini-golf": {
    "slug": "mini-golf",
    "title": "Mini Golf Course Designers & Builders UK | Smith & Devil",
    "description": "Premium mini golf course design and build in the UK and internationally. Explore our work for Levels Prague, Pop Playrooms and Mighty Adventures.",
    "kicker": "Mini Golf Design & Build",
    "heroTitle": "Premium mini golf course design.",
    "standfirst": "We design and build distinctive mini golf courses in the UK and internationally. From Levels Prague to Pop Playrooms, our work brings together original themes, memorable environments and a game worth playing.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Talk to us about your course"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "#mini-golf-projects",
        "label": "Explore our mini golf projects"
      }
    ],
    "heroImage": {
      "src": "/images/levels.jpg",
      "alt": "Premium mini golf course designed by Smith & Devil at Levels Prague"
    },
    "proofLine": "Our 18-hole course at Levels Prague recorded 13,000 rounds in its first three months.",
    "argument": {
      "label": "Why it matters",
      "title": "Mini golf designed to drive revenue.",
      "paragraphs": [
        "Mini golf can be a destination, a high-performing secondary spend or the activity that gives an entire venue its identity. The commercial role changes the design.",
        "We design indoor and outdoor courses around the audience, site and business model. Player flow, capacity, replay value and the wider venue experience shape every decision."
      ]
    },
    "comparison": {
      "label": "Choosing the right partner",
      "title": "Not all mini golf designers do the same job.",
      "intro": "There are several ways to buy a mini golf course. The right choice depends on whether you simply need holes in a space, or a venue people actively choose, remember and return to.",
      "items": [
        {
          "title": "Course builders",
          "body": "Best when the main requirement is fabrication and installation of a defined course."
        },
        {
          "title": "Specialist mini golf designers",
          "body": "Focused on course layout, hole design, playability and the golf experience itself."
        },
        {
          "title": "Theming companies",
          "body": "Strong when scenic treatment, props and spectacle are the main creative requirement."
        },
        {
          "title": "Architects and interior designers",
          "body": "Useful when mini golf sits inside a wider venue project, although the game may be only one part of their brief."
        },
        {
          "title": "Smith & Devil",
          "body": "We connect the commercial proposition, brand, course, customer journey, interiors, theming and wider venue experience. The golf is designed as part of the business, not as something dropped into it."
        }
      ],
      "closing": "If all you need is someone to fabricate nine holes, we may be more than you need. If you are building a venue people have to choose, remember and come back to, that is where we are strongest."
    },
    "capabilities": {
      "label": "Capabilities",
      "title": "From first idea to playable course.",
      "items": [
        {
          "number": "01",
          "title": "Commercial concept",
          "body": "Define the audience, occasion, pricing role, capacity needs and place mini golf should occupy within the wider venue."
        },
        {
          "number": "02",
          "title": "Course planning",
          "body": "Plan hole count, routing, pacing, player flow and footprint around the realities of the site and operating model."
        },
        {
          "number": "03",
          "title": "Hole design",
          "body": "Create varied, intuitive holes with enough challenge, spectacle and rhythm to keep different groups engaged."
        },
        {
          "number": "04",
          "title": "Theme and world-building",
          "body": "Develop the visual idea, narrative and environmental language that make the course feel like one complete experience."
        },
        {
          "number": "05",
          "title": "Brand and naming",
          "body": "Create or extend the brand so the course has a clear identity before customers ever pick up a putter."
        },
        {
          "number": "06",
          "title": "Customer journey",
          "body": "Design arrival, queuing, briefing, gameplay, scoring, photo moments, F&B connections and the route into a return visit."
        },
        {
          "number": "07",
          "title": "Interior and graphic design",
          "body": "Carry the concept through materials, signage, wayfinding, graphic surfaces, lighting direction and branded touchpoints."
        },
        {
          "number": "08",
          "title": "Build coordination",
          "body": "Work with trusted fabricators, contractors and technical specialists to move the design into a safe, durable playable environment."
        },
        {
          "number": "09",
          "title": "Turnkey delivery",
          "body": "Bring strategy, creative direction, course design and delivery together under one joined-up team where the project needs it."
        },
        {
          "number": "10",
          "title": "Rollout and refresh",
          "body": "Create repeatable design principles for multi-site operators or evolve an existing course when the offer needs new reasons to return."
        }
      ]
    },
    "process": {
      "label": "Process",
      "title": "How we design a mini golf course.",
      "items": [
        {
          "number": "1",
          "title": "Define the commercial job",
          "body": "We agree who the course is for, what the site needs it to achieve and the constraints that should shape the brief."
        },
        {
          "number": "2",
          "title": "Design the experience",
          "body": "We create the creative concept, routing, hole ideas, customer journey and visual world as one connected system."
        },
        {
          "number": "3",
          "title": "Develop the course",
          "body": "We turn the concept into detailed creative and technical information, resolving materials, graphics, theming and operating details."
        },
        {
          "number": "4",
          "title": "Build and open",
          "body": "We coordinate with the delivery team through fabrication, installation, snagging and launch so the final experience stays true to the idea."
        }
      ]
    },
    "caseStudy": {
      "image": {
        "src": "/images/work/levels/05.webp",
        "alt": "Mini golf at Levels Prague"
      },
      "label": "Relevant proof",
      "title": "13,000 rounds in three months.",
      "paragraphs": [
        "Levels Prague needed an 18-hole course that could hold its own inside a large multi-activity entertainment venue rather than feel like an add-on.",
        "We created a visually distinctive course around the venue experience, balancing spectacle with playability and throughput. The course recorded 13,000 rounds in its first three months."
      ],
      "link": {
        "href": "/work/levels",
        "label": "See the Levels Prague project"
      },
      "related": [
        "Mighty Adventures: a family mini golf concept expanded to three venues in two years.",
        "Pop Playrooms: competitive socialising shaped around music, play and a highly distinctive visual world.",
        "Putt Crazy: mini golf brand, venue design and digital work for a leisure concept built around repeatable fun."
      ]
    },
    "fit": {
      "label": "A useful time to talk",
      "title": "When to bring us in.",
      "items": [
        "A new venue needs a premium mini golf offer.",
        "Mini golf needs to sit inside a larger hospitality or leisure concept.",
        "An existing site needs a stronger course and clearer identity.",
        "A developer needs to understand what will fit the space and commercial model.",
        "A family attraction needs more story, play value or repeatability.",
        "A competitive socialising venue needs an experience customers cannot get elsewhere.",
        "A successful concept needs a design system that can roll into more sites."
      ]
    },
    "faq": {
      "label": "Questions clients ask",
      "title": "Useful answers before we talk.",
      "items": [
        {
          "question": "Do you design and build mini golf courses?",
          "answer": "Yes. We can take a project from commercial concept and course design through brand, theming, customer journey and build coordination. The delivery model is agreed around the site, programme and procurement route."
        },
        {
          "question": "Do you work on indoor and outdoor mini golf?",
          "answer": "Yes. We design indoor, outdoor and mixed-format courses. The site conditions, audience and operating model determine the materials, technical approach and level of theming."
        },
        {
          "question": "Do you work on mini golf projects outside the UK?",
          "answer": "Yes. We work with UK and international operators, developers and design teams. Our 18-hole course at Levels Prague brings together course design, theming and build delivery inside a major entertainment venue."
        },
        {
          "question": "Can you work with an architect or existing contractor?",
          "answer": "Yes. We can lead the mini golf creative and experience work inside a wider design team, or bring trusted specialists into the project where needed."
        },
        {
          "question": "Can you help before we have a final site?",
          "answer": "Yes. Early feasibility work can help establish likely footprint, hole count, customer flow, experience direction and the role mini golf should play in the wider business."
        },
        {
          "question": "Do you only create heavily themed courses?",
          "answer": "No. Theme is one tool. Some venues need a full world and story; others need a more architectural, brand-led or premium design approach. We design around the audience and proposition."
        },
        {
          "question": "Can you design a course for more than one venue?",
          "answer": "Yes. We can create a repeatable course and brand system with enough fixed principles to stay recognisable and enough flexibility to adapt to different sites."
        }
      ]
    },
    "enquiry": {
      "label": "Start a conversation",
      "title": "Build a course people choose on purpose.",
      "intro": "Tell us about the site, audience and commercial ambition. We will help shape the right mini golf experience around them."
    },
    "featuredProjects": [
      {
        "title": "Levels Prague",
        "href": "/work/levels/",
        "image": {
          "src": "/images/work/levels/05.webp",
          "alt": "Smith & Devil’s 18-hole indoor mini golf course at Levels Prague"
        },
        "description": "An 18-hole course inside Prague’s multi-activity entertainment venue."
      },
      {
        "title": "Pop Playrooms",
        "href": "/work/pop-playrooms/",
        "image": {
          "src": "/images/work/pop-playrooms/03.webp",
          "alt": "Music-inspired mini golf designed by Smith & Devil for Pop Playrooms"
        },
        "description": "Music-inspired mini golf in Wembley and Kingston upon Thames."
      },
      {
        "title": "Mighty Adventures",
        "href": "/work/mighty-adventures/",
        "image": {
          "src": "/images/mighty-adventures.jpg",
          "alt": "The dinosaur-themed world created by Smith & Devil for Mighty Adventures"
        },
        "description": "A dinosaur-themed family experience across three venues."
      }
    ]
  },
  "themed-experiences": {
    "slug": "themed-experiences",
    "title": "Themed Experience Design Agency | Smith & Devil",
    "description": "Themed experience, attraction and competitive socialising design, including concepts, stories, characters, play and customer journeys.",
    "kicker": "Themed Experiences",
    "heroTitle": "Build a world worth stepping into.",
    "standfirst": "We create original worlds, stories and play experiences that give people more to feel, talk about and come back for.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Tell us what you are creating"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "/work/mighty-adventures",
        "label": "See our experience work"
      }
    ],
    "heroImage": {
      "src": "/images/mighty-adventures.jpg",
      "alt": "A family exploring the Mighty Adventures dinosaur world"
    },
    "proofLine": "Mighty Adventures grew from the first concept to three family mini golf venues in two years.",
    "argument": {
      "label": "Why it matters",
      "title": "Give people more reasons to visit—and return.",
      "paragraphs": [
        "The strongest leisure concepts have a clear reason to exist beyond the activity. The story shapes what people expect, how they play, what they remember and why the experience could only belong to that brand.",
        "We build that world around the audience and commercial model. The result may include a proposition, narrative, characters, visual identity, activity design and spatial experience. Every part should support the same customer promise and remain practical to operate."
      ]
    },
    "capabilities": {
      "label": "Capabilities",
      "title": "What we can help you create.",
      "items": [
        {
          "number": "01",
          "title": "Experience proposition",
          "body": "Define the audience, occasion, customer promise and commercial idea that make the concept worth choosing."
        },
        {
          "number": "02",
          "title": "Original concepts",
          "body": "Develop the central creative idea and experience format for a new attraction, venue or activity."
        },
        {
          "number": "03",
          "title": "Naming and brand",
          "body": "Create the name, language and identity that give the experience a recognisable place in the market."
        },
        {
          "number": "04",
          "title": "Narrative and world-building",
          "body": "Build the story, rules, locations and visual references that hold the experience together."
        },
        {
          "number": "05",
          "title": "Characters and content",
          "body": "Create characters, scripts, signage, books, challenges and other content that bring the world to life."
        },
        {
          "number": "06",
          "title": "Play and activity design",
          "body": "Shape the format, interaction and progression around the people taking part and the realities of the venue."
        },
        {
          "number": "07",
          "title": "Customer journey",
          "body": "Design what happens before, during and after the activity, including preparation, arrival, results, sharing and return."
        },
        {
          "number": "08",
          "title": "Spatial experience",
          "body": "Translate the world into zones, environments, scenic elements, branded touchpoints and memorable moments."
        },
        {
          "number": "09",
          "title": "Repeatability and rollout",
          "body": "Create modes, stories, content and design principles that help the experience stay fresh and work across more than one site."
        },
        {
          "number": "10",
          "title": "Delivery coordination",
          "body": "Work with architects, fabricators, technical designers, operators and build teams to carry the concept into reality."
        }
      ]
    },
    "process": {
      "label": "Process",
      "title": "How we build an experience.",
      "items": [
        {
          "number": "1",
          "title": "Find the idea worth entering",
          "body": "We connect the audience, activity and commercial opportunity to one clear creative proposition."
        },
        {
          "number": "2",
          "title": "Build the world",
          "body": "We develop the story, identity, characters, rules and visual language around the proposition."
        },
        {
          "number": "3",
          "title": "Design the play",
          "body": "We map the journey, interactions and spatial moments that turn the world into something people can do."
        },
        {
          "number": "4",
          "title": "Make it repeatable",
          "body": "We consider operations, content renewal, return visits and rollout while the experience is still being designed."
        }
      ]
    },
    "caseStudy": {
      "image": {
        "src": "/images/work/mighty-adventures/02.webp",
        "alt": "Mighty Adventures character and story world"
      },
      "label": "Relevant proof",
      "title": "A family experience with real teeth.",
      "paragraphs": [
        "Mighty Adventures began as a dinosaur-themed outdoor mini golf concept. We turned it into a mission-led family world built around laughing, learning and sharing through play.",
        "We created a cast of dinosaur characters, stories about kindness and bravery, take-home books, Horrible Histories-style course content and curriculum-linked activity packs for schools. The concept expanded to three venues in two years."
      ],
      "link": {
        "href": "/work/mighty-adventures",
        "label": "See the Mighty Adventures project"
      },
      "related": [
        "Pop Playrooms: a competitive socialising concept that places players inside the energy of a pop video.",
        "Levels Prague: an 18-hole attraction that recorded 13,000 rounds in its first three months.",
        "Fortune Favours: a scalable entertainment world created for ambitions across more than 15 European destinations."
      ]
    },
    "fit": {
      "label": "A useful time to talk",
      "title": "When to bring us in.",
      "items": [
        "An activity needs a stronger reason for customers to choose it.",
        "A new attraction needs a complete concept and identity.",
        "Several activities need one coherent entertainment proposition.",
        "A family experience needs more meaning and repeat value.",
        "A competitive socialising concept needs to stand apart from the category.",
        "An early concept needs enough creative and commercial definition to attract partners or investment.",
        "A successful experience needs a system for new sites or new modes."
      ]
    },
    "faq": {
      "label": "Questions clients ask",
      "title": "Useful answers before we talk.",
      "items": [
        {
          "question": "What counts as a themed experience?",
          "answer": "It can be an attraction, competitive socialising venue, family entertainment concept, immersive event, mini golf course or another activity shaped by a clear world and story. The theme should influence the experience rather than sit on top of it."
        },
        {
          "question": "Do you only design mini golf experiences?",
          "answer": "No. Mini golf is one area of specialist experience, but the method applies across interactive leisure, entertainment, attractions and mixed-activity venues."
        },
        {
          "question": "Can you improve a concept that already exists?",
          "answer": "Yes. We can sharpen the proposition, build a stronger world around the activity, redesign the customer journey or create the content needed to make it more distinctive."
        },
        {
          "question": "How early should you become involved?",
          "answer": "Early involvement gives the concept more influence over the commercial model, site brief and technical plan. We can also join later to solve a defined creative or experience problem."
        },
        {
          "question": "Do you take the experience through build?",
          "answer": "We can lead the creative development and work alongside the specialist technical and build teams required by the project. The exact delivery role depends on the experience and procurement structure."
        },
        {
          "question": "Can the concept be designed for several sites?",
          "answer": "Yes. We consider the fixed world, adaptable content, operational requirements and site variables needed to make the experience recognisable and repeatable."
        }
      ]
    },
    "enquiry": {
      "label": "Start a conversation",
      "title": "Create something people want to enter.",
      "intro": "Bring us the activity, the site, the audience or simply the ambition. We will help find the world that can hold it all together."
    }
  }
} as const;
