import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { router } from "./constants/router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="app text-[#2b2b2b] dark:text-gray-300">
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  );
}

export default App;
