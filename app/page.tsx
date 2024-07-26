import Image from "next/image";
import NameType from "./components/NameType";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <div className="mt-24 container mx-auto py-4 px-12">
      <NameType/>
    </div>
    </main>
  );
}
