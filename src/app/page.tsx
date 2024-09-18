import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { HackerNewItem } from "@/lib/crawl.callbacks";
import { firstOption, secondOption } from "@/server/option.actions";
import clsx from "clsx";
import Link from "next/link";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: HomeProps) {

  const state = searchParams.state ? searchParams.state : 'first';

  let values: HackerNewItem[];
  if (state === 'second') {
    values = await secondOption();
  } else {
    values = await firstOption();
  }

  return (
    <main className="relative w-screen h-screen">
      <section className="w-full px-2 py-4">
        <ModeToggle />
      </section>
      <section className="w-full px-4 flex flex-col gap-4 max-w-[600px] mx-auto">
        <div className="flex justify-between gap-2 p-2 rounded-md dark:bg-slate-100/10 bg-slate-200/40">
          <Link href='?state=first' className={clsx('w-full', buttonVariants({ variant: state === 'first' ? 'default' : 'ghost' }))}>First option</Link>
          <Link href='?state=second' className={clsx('w-full', buttonVariants({ variant: state === 'second' ? 'default' : 'ghost' }))}>Second option</Link>
        </div>
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          <div>
            {values.map(e => (
              <div className="flex flex-col gap-2" key={e.title}>
                <div className="rounded-sm hover:bg-slate-100/10 p-2 transition ease-in-out delay-75">
                  <h4 className="text-center text-md font-bold">{e.title}</h4>
                  <div className="flex flex-row justify-around text-xs">
                    <p><span>Rank</span>: {e.number}</p>
                    <p><span>Points</span>: {e.points}</p>
                    <p><span>Comments</span>: {e.comments}</p>
                  </div>
                </div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>
    </main>
  );
}
