import Hero from "@/components/global/hero";
import Services from "@/components/global/services";

export default function MainPage() {
  return (
    <section className="w-full h-full">
      <div className="px-0 xl:px-12">
        <Hero />
        <Services />
      </div>

      {/* <Velocity /> */}
    </section>
  );
}
