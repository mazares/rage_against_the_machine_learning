import { useThemeStore } from "../store/themeStore";

export default function Footer() {
  const { theme } = useThemeStore();
  return (
    <footer className={`${theme} p-2`}>
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
