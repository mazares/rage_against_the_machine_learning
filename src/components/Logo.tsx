import { Link } from "@tanstack/react-router";

import LogoPic1 from "../assets/monkey1.webp";
import LogoPic2 from "../assets/monkey2.webp";

import { useThemeStore } from "../store/themeStore";

export default function Logo() {
  const { theme } = useThemeStore();

  return (
    <Link to="/">
      <div className="flex items-center content-center justify-center self-start justify-self-start max-w-content max-h-content aspect-ratio-square size-[10vh] lg:size-[20vh]">
        <img
          src={theme === "dark" ? LogoPic2 : LogoPic1}
          alt="logo"
          className="flex absolute z-1 size-[8vh] lg:size-[16vh] aspect-ratio-square"
        />

        <svg
          viewBox="0 0 250 250"
          role="img"
          aria-labelledby="title"
          width="250"
          height="250"
          aria-label="Logo graphic"
          className="z-2 aspect-ratio-square pointer-events-none"
        >
          <defs>
            {/*<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5733" />
              <stop offset="100%" stopColor="#FFC300" />
            </linearGradient>*/}
          </defs>
          <path id="curve" fill="none" d="M 25 125 A 100 100 0 1 1 25 127" />

          <text
            fontSize={34}
            // fill="url(#gradient)"
            className="logo--text"
          >
            <textPath href="#curve">
              Rage Against The Machine Learning!
            </textPath>
          </text>
        </svg>
      </div>
    </Link>
  );
}
