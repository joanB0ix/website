import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  return (
    <nav className="mt-5 h-[50px] min-h-[50px] flex items-center justify-between">
      <h1 className="font-bold">
        <Link href="/">Joan Boix Àvalos</Link>
      </h1>
      <ThemeToggleButton />
    </nav>
  );
}
