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
  argument: { label: string; title: string; paragraphs: string[] };
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
      "title": "Build a brand people choose.",
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
    "heroTitle": "Turn interest into action.",
    "standfirst": "We design and build websites that help people understand the offer, find the right experience and take the next step. Clear strategy, distinctive design and less friction between interest and action.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Talk to us about your website"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "/work/t2-design-solutions",
        "label": "See our digital work"
      }
    ],
    "heroImage": {
      "src": "/images/work/t2-design-solutions/04.webp",
      "alt": "T2 Design Solutions website interface"
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
        "src": "/images/work/t2-design-solutions/01.webp",
        "alt": "T2 Design Solutions digital identity"
      },
      "label": "Relevant proof",
      "title": "A digital identity with infinite range.",
      "paragraphs": [
        "T2 Design Solutions needed to explain a complex creative technology offer across retail, construction, entertainment and future services that did not yet exist.",
        "We created a brand and website around a living infinity mark made with T2's own 3D capabilities. The site gave the business a more credible international presence and a flexible way to show what its technology could make possible. T2 has since expanded from Worksop to London and Bahrain."
      ],
      "link": {
        "href": "/work/t2-design-solutions",
        "label": "See the T2 Design Solutions project"
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
  "interiors-environments": {
    "slug": "interiors-environments",
    "title": "Hospitality & Leisure Interior Design | Smith & Devil",
    "description": "Interior concepts, branded environments, customer journeys, signage and wayfinding for hospitality, leisure and entertainment venues.",
    "kicker": "Interiors & Environments",
    "heroTitle": "Make the brand somewhere people can enter.",
    "standfirst": "We turn brands and commercial propositions into places people understand instinctively, enjoy fully and want to return to.",
    "actions": [
      {
        "className": "service-module__T4otXW__primaryAction",
        "href": "#project-enquiry",
        "label": "Talk to us about your venue"
      },
      {
        "className": "service-module__T4otXW__secondaryAction",
        "href": "/work/levels",
        "label": "See our venue work"
      }
    ],
    "heroImage": {
      "src": "/images/levels.jpg",
      "alt": "Guests playing the Smith & Devil-designed mini golf course at Levels Prague"
    },
    "proofLine": "The Smith & Devil-designed mini golf course at Levels Prague recorded 13,000 rounds in its first three months.",
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
      "title": "What we can help you create.",
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
          "body": "Design the moments that shape perception, from entrances and hosts to tables, scorecards, menus and photo opportunities."
        },
        {
          "number": "05",
          "title": "Graphic surfaces",
          "body": "Use colour, typography, illustration and environmental graphics to give the space a distinctive character."
        },
        {
          "number": "06",
          "title": "Signage and wayfinding",
          "body": "Help customers understand where to go and what to do without filling the venue with instructions."
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
        "src": "/images/work/levels/05.webp",
        "alt": "The interior environment at Levels Prague"
      },
      "label": "Relevant proof",
      "title": "A destination within a destination.",
      "paragraphs": [
        "Levels Prague sits inside a 17,000 square metre entertainment centre filled with more than 200 games, simulators, bars, bowling, karaoke and other attractions. Its mini golf needed to earn attention in exceptional company.",
        "We designed the complete 18-hole course and managed the build and installation of 378 square metres of play. Prague's only indoor mini golf experience recorded 13,000 rounds in its first three months."
      ],
      "link": {
        "href": "/work/levels",
        "label": "See the Levels Prague project"
      },
      "related": [
        "Pop Playrooms: complete concept and interior design across Wembley and Kingston upon Thames.",
        "Humbug: brand and interior design support for an immersive London Christmas experience."
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
      "title": "Create a place people choose.",
      "intro": "Tell us what the venue needs to make possible, how far the project has progressed and where the customer experience needs creative leadership."
    }
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
      "title": "Give the experience a world of its own.",
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
