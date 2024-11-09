import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <span className="cursor-pointer" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-auto w-5 text-yellow-500" />
      ) : (
        <Moon className="h-auto w-5 text-purple-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </span>
  );
}
