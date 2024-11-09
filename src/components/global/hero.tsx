import AnimatedGradientText from "../ui/animated-gradient-text";
import BlurIn from "../ui/blur-in";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center gap-4 items-center flex-col">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline items-center animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Introducing Eventist
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <BlurIn
            className="max-w-4xl text-center font-bold leading-tight text-5xl lg:text-7xl "
            word="Host, Discover, and Enjoy Amazing Events Near You!"
          />
          <span className="max-w-4xl text-[18.5px] font-normal">
            Join our community of event creators and attendees. Find events you
            love or host your own and earn rewards for every ticket sold!
          </span>
        </div>
      </div>
    </div>
  );
}
