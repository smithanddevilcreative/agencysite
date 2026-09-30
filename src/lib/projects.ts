export type ProjectCard = {
  slug: string;
  title: string;
  category: string;
  image: string;
  rollover: string;
  focal: string;
};

export const projects: ProjectCard[] = [
  { slug: "humbug", title: "Humbug", category: "Branding", image: "/images/humbug.webp", rollover: "/images/humbug-hover.webp", focal: "47% 30%" },
  { slug: "pop-playrooms", title: "Pop Playrooms", category: "Branding", image: "/images/pop-playrooms.webp", rollover: "/images/pop-playrooms-hover.webp", focal: "50% 34%" },
  { slug: "draughts", title: "Draughts", category: "CRM & Campaigns", image: "/images/work/draughts/cards/_DSC8972.jpg", rollover: "/images/work/draughts/cards/_DSC9226.jpg", focal: "50% 50%" },
  { slug: "mighty-adventures", title: "Mighty Adventures", category: "Branding", image: "/images/mighty-adventures.webp", rollover: "/images/mighty-adventures-hover.webp", focal: "50% 44%" },
  { slug: "levels", title: "Levels @ Maj", category: "Experience", image: "/images/levels.webp", rollover: "/images/levels-hover.webp", focal: "58% 48%" },
  { slug: "t2-design-solutions", title: "T2 Design Solutions", category: "Branding", image: "/images/t2-design-solutions.webp", rollover: "/images/t2-design-solutions-hover.webp", focal: "50% 45%" },
  { slug: "mama-bamboo", title: "Mama Bamboo", category: "Branding", image: "/images/mama-bamboo.webp", rollover: "/images/mama-bamboo-hover.webp", focal: "50% 34%" },
  { slug: "allstars-sports-bars", title: "Allstars Sports Bars", category: "Digital & Social", image: "/images/work/allstars-sports-bars/cards/Allstars_Sports_Bar_Weston_English-Pool-7403993.jpg", rollover: "/images/work/allstars-sports-bars/cards/Allstars_Sports_Bar_Weston_Darts-7403516.jpg", focal: "50% 50%" },
  { slug: "allstars-sports-bowl", title: "Allstars Sports Bowl", category: "Digital, Social & CRM", image: "/images/work/allstars-sports-bowl/cards/Allstars_Sports_Bowl_Weston_Families_Select-7405901.jpg", rollover: "/images/work/allstars-sports-bowl/cards/Allstars_Sports_Bowl_Weston_Families_Select-7405751.jpg", focal: "50% 50%" },
  { slug: "strike", title: "Strike", category: "Film & Design", image: "/images/work/strike/strike_5-short.jpg", rollover: "/images/work/strike/strike_5-long.jpg", focal: "50% 50%" },
  { slug: "fortune-favours", title: "Fortune Favours", category: "Branding", image: "/images/fortune-favours.webp", rollover: "/images/fortune-favours-hover.webp", focal: "50% 42%" },
  { slug: "more-concierge", title: "More Concierge", category: "Branding", image: "/images/more-concierge.webp", rollover: "/images/more-concierge-hover.webp", focal: "50% 45%" },
  { slug: "precision-microdrives", title: "Precision Microdrives", category: "Design", image: "/images/precision-microdrives.webp", rollover: "/images/precision-microdrives-hover.webp", focal: "50% 45%" },
];
