import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  return (
    <nav className="mt-5 h-56 flex items-center justify-between">
      <h1 className="font-bold">Joan Boix Àvalos</h1>
      <ThemeToggleButton />
    </nav>
  );
}
