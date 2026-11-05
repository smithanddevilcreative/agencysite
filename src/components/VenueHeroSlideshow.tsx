"use client";

import {useEffect, useState} from "react";
import styles from "./VenueHeroSlideshow.module.css";

type Slide = {src: string; alt?: string};
export function VenueHeroSlideshow({images, className, label}: {images: Slide[]; className: string; label: string}) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    setActive(0);
    if (images.length < 2) return;
    const interval = window.setInterval(() => setActive((i) => (i + 1) % images.length), 6000);
    return () => window.clearInterval(interval);
  }, [images.length]);
  return (
    <div className={`${className} ${styles.slideshow}`} role="img" aria-label={label}>
      {images.map((image, i) => (
        <img
          className={`${styles.slide} ${active === i ? styles.active : ""}`}
          key={i}
          src={image.src}
          alt=""
          width="1400"
          height="805"
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
