import { VelocityScroll } from "../ui/scroll-based-velocity";

export default function Velocity() {
  return (
    <div className="w-full">
      <VelocityScroll
        className="text-5xl font-bold"
        text="Find Events Near You with Just One Click!"
        default_velocity={3}
      />
    </div>
  );
}
