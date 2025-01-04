import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  return (
    <nav className="h-20 flex items-center justify-between">
      <h1 className="font-bold">Joan Boix Àvalos</h1>
      <ThemeToggleButton />
    </nav>
  );
}
