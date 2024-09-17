import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Home({ searchParams }: HomeProps) {

  const state = searchParams.state ? searchParams.state : 'first';

  return (
    <main className="relative w-screen h-screen">
      <section className="w-full px-2 py-4">
        <ModeToggle />
      </section>
      <section className="w-full px-4">
        <div className="flex justify-between gap-2 p-2 rounded-md dark:bg-slate-100/10 bg-slate-200/40">
          <Link href='?state=first' className={clsx('w-full', buttonVariants({ variant: state === 'first' ? 'default' : 'ghost' }))}>First option</Link>
          <Link href='?state=second' className={clsx('w-full', buttonVariants({ variant: state === 'second' ? 'default' : 'ghost' }))}>Second option</Link>
        </div>
      </section>
    </main>
  );
}
