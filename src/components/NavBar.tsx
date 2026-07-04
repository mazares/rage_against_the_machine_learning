import { Link } from "@tanstack/react-router";
import { Activity, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

interface Page {
  name: string;
  path: string;
}

export default function NavBar() {
  const pages: Page[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const [isOpen, setIsOpen] = useState("hidden");
  const activityMode = isOpen ? "visible" : "hidden";
  const toggleMenu = () =>
    setIsOpen(isOpen === "hidden" ? "visible" : "hidden");

  function Menu() {
    return (
      <ul
        className={`flex p-2 flex-col justify-self-start items-start gap-2 absolute border rounded-2xl ${isOpen} lg:flex lg:justify-self-start  lg:flex-row lg:items-center lg:justify-evenly`}
      >
        {pages.map((page) => (
          <li key={page.name}>
            <Link
              to={page.path}
              className="[&.active]:font-bold [&.active]:text-orange-600 p-2 ]"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav>
      <Activity mode={activityMode}>
        <div className="flex justify-between items-center p-2 lg:hidden">
          {isOpen === "hidden" ? (
            <IoMenu onClick={toggleMenu} />
          ) : (
            <IoClose onClick={toggleMenu} />
          )}
        </div>
        <Menu />
      </Activity>
    </nav>
  );
}
