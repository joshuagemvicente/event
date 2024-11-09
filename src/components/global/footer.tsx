import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <p className="text-center">
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
