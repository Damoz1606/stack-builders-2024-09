import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <section className="absolute top-0 left-0 w-screen px-2 py-4">
        <ModeToggle />
      </section>
      <section className="w-full h-full">

      </section>
    </main>
  );
}
