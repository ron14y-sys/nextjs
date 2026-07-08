import { SiteHeader } from "./components/site-header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
