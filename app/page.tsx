import NameType from "./components/NameType";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black antialiased bg-grid-white/[0.02]">
      <NavBar />
      <div className="mt-24 container mx-auto py-4 px-12">
        <NameType />
        <About />
        <ProjectsSection/>
        <EmailSection/>
      </div>
      <div>
        <footer className="Py-4 flex justify-center pb-8 relative z-10">
          <Footer/>
        </footer>
      </div>
      <Analytics/>
      <SpeedInsights/>
    </main>
  );
}
