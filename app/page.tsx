import NameType from "./components/NameType";
import NavBar from "./components/NavBar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <NavBar />
      <div className="mt-24 container mx-auto py-4 px-12">
        <NameType />
        <About />
      </div>
    </main>
  );
}
