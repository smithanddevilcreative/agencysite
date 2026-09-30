import Link from "next/link";
import { serviceLinks, workLinks } from "@/lib/site-data";

const c = {
  footer: "Footer-module__S6Hkya__footer",
  inner: "Footer-module__S6Hkya__inner",
  brand: "Footer-module__S6Hkya__brand",
  logoLink: "Footer-module__S6Hkya__logoLink",
  logo: "Footer-module__S6Hkya__logo",
  narrative: "Footer-module__S6Hkya__narrative",
  copyright: "Footer-module__S6Hkya__copyright",
  nav: "Footer-module__S6Hkya__nav",
  colTitle: "Footer-module__S6Hkya__colTitle",
  list: "Footer-module__S6Hkya__list",
  link: "Footer-module__S6Hkya__link",
};

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className={c.colTitle}>{title}</h2>
      <ul className={c.list}>{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className={c.footer}>
      <div className={c.inner}>
        <div className={c.brand}>
          <Link className={c.logoLink} aria-label="Smith & Devil — home" href="/">
            <img
              alt="Smith & Devil"
              width="2517"
              height="433"
              className={c.logo}
              src="/brand/smith-and-devil-logo.png"
            />
          </Link>
          <p className={c.narrative}>
            At over 6000 years old The Smith & The Devil is the world’s most enduring fairy tale.
            Not bad for a narrative that pre-dates the written word. It’s had a refresh or two along
            the way, but the devil’s in the detail. A great story well-told has the power to last forever.
          </p>
          <p className={c.copyright}>© 2026 Smith & Devil Creative Ltd.</p>
        </div>

        <nav className={c.nav} aria-label="Footer">
          <Column title="Work">
            <li><Link className={c.link} href="/work">All Work</Link></li>
            {workLinks.map(([label, href]) => (
              <li key={href}><Link className={c.link} href={href}>{label}</Link></li>
            ))}
          </Column>

          <Column title="Studio">
            <li><Link className={c.link} href="/studio">About</Link></li>
          </Column>

          <Column title="Services">
            {serviceLinks.map(([label, href]) => (
              <li key={href}><Link className={c.link} href={href}>{label}</Link></li>
            ))}
          </Column>

          <Column title="Contact">
            <li><Link className={c.link} href="/contact">Get in touch</Link></li>
            <li><a href="mailto:hello@smithanddevil.com" className={c.link}>hello@smithanddevil.com</a></li>
            <li><a href="https://www.instagram.com/smithanddevil/" className={c.link} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/smith-devil/" className={c.link} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </Column>
        </nav>
      </div>
    </footer>
  );
}
