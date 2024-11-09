export default function Footer() {
  return (
    <footer className="bg-gray-800 text-[#2b2b2b] dark:text-gray-300 p-4">
      <div className="container mx-auto">
        <p className="text-center">
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
