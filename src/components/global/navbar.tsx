import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="w-full py-0 xl:py-8 px-0 xl:px-44">
      <div className=" hidden xl:flex text-[#2b2b2b] dark:text-gray-300 justify-between  ">
        <div>Parsons</div>
        <div className=" pl-0 xl:pl-36">
          <ul className="flex text-[15.5px]  gap-6">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="#events">
              <li>Events</li>
            </Link>
            <Link to="#faq">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <span className="text-[13.5px] text-gray-500">Already a user?</span>
          <Link to="/auth/login">
            <Button variant="outline" className="px-[32px]">
              Login
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
