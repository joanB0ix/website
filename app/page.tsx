import { HeartIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col font-fira-code w-2/5 m-auto">
      <nav className="h-20 flex items-center justify-between">
        <div>
          <h1 className="font-bold">Joan Boix Àvalos</h1>
        </div>
        <div>
          <SunIcon className="h-5 w-5 mb-1" />
        </div>
      </nav>
      <main className="flex-grow">
        <div className="my-6">
          <h2 className="font-semibold pb-2">Who am I?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ut
            aperiam pariatur sapiente dignissimos ratione quia vero explicabo
            nostrum sed dolorum harum repudiandae fugiat voluptatem est autem,
            debitis minima cupiditate!
          </p>
        </div>
        <div className="my-6">
          <h2 className="font-semibold pb-2">My projects</h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="underline">TicTacToe</span>: Built a TicTacToe
            </li>
            <li className="underline">Game of Life</li>
            <li className="underline">Summath</li>
            <li className="underline">Levenshtein Distance</li>
          </ul>
        </div>
        <div className="my-6">
          <h2 className="font-semibold pb-2">Socials</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link href="https://github.com/joanB0ix">GitHub</Link>
            </li>
            <li>
              <Link href="https://x.com/JoanBoixAv">X (Formerly twitter)</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/joanboixavalos/">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <footer className="flex items-center justify-center pb-5">
        <span className="mr-1">Made with</span>
        <HeartIcon className="h-5 w-5" />
      </footer>
    </div>
  );
}
