import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <section>
      <div>
        <Outlet />
      </div>
    </section>
  );
}
