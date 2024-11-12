import AnimatedGradientText from "../ui/animated-gradient-text";
import BlurIn from "../ui/blur-in";
import { ChevronRight, PartyPopper, CalendarRange } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="w-full h-full py-12 xl:py-28">
      <div className="flex justify-center gap-4 items-center flex-col">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline items-center animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Introducing Parsons
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <div className="flex flex-col justify-center items-center text-center gap-10">
          <BlurIn
            className="w-full xl:max-w-4xl text-center font-bold leading-tight text-5xl lg:text-7xl "
            word="Host, Discover, and Enjoy Amazing Events Near You!"
          />
          <span className="max-w-2xl text-[18px] font-normal">
            Join our community of event creators and attendees. Find events you
            love or host your own and earn rewards for every ticket sold!
          </span>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <Button className="flex items-center" variant="default">
            Discover Events
            <PartyPopper />
          </Button>
          <Button className="flex items-center" variant="outline">
            Host an Event
            <CalendarRange />
          </Button>
        </div>
        <div>
          <p className="">
            Yes it is free to host an event,{" "}
            <span className="font-bold">100% FREE</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
