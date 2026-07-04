import { useThemeStore } from "../store/themeStore";
import Logo from "./Logo";
import NavBar from "./NavBar";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  const { theme } = useThemeStore();
  return (
    <header className={`${theme} grid p-2`}>
      <ThemeToggler />
      <Logo />

      <NavBar />
    </header>
  );
}
