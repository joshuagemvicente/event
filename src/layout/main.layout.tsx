import Navbar from "@/components/global/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <section className="w-full">
      <header className="w-full">
        <Navbar />
      </header>
      <Outlet />
      <footer></footer>
    </section>
  );
}
