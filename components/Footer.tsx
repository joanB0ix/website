import { HeartIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center pb-5">
      <span className="mr-1">Made with</span>
      <HeartIcon className="h-5 w-5 text-red-600" data-testid="heart-icon" />
    </footer>
  );
}
