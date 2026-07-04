import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import Header from "../components/Haeder";
import { useThemeStore } from "../store/themeStore";

const RootLayout = () => {
  const { theme } = useThemeStore();
  return (
    <>
      <Header />
      <main className={`grid h-screen place-content-center ${theme} `}>
        <Outlet />
        <TanStackRouterDevtools />
      </main>
      <Footer />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
