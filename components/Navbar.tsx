import { SunIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="h-20 flex items-center justify-between">
      <div>
        <h1 className="font-bold">Joan Boix Àvalos</h1>
      </div>
      <div>
        <SunIcon className="h-5 w-5 mb-1 mr-5" data-testid="sun-icon" />
      </div>
    </nav>
  );
}
