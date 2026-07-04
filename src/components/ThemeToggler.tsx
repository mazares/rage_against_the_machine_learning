import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useThemeStore } from "../store/themeStore";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className=" justify-self-end border rounded-full text-xs"
    >
      {theme === "dark" ? (
        <div className="flex items-center justify-center p-2 gap-2">
          <IoSunnyOutline />
          <span className="hidden lg:block">Light</span>
        </div>
      ) : (
        <div className="flex items-center justify-center p-2 gap-2">
          <IoMoonOutline />
          <span className="hidden lg:block">Dark</span>
        </div>
      )}
    </button>
  );
}
