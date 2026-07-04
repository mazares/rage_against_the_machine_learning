import { Link } from "@tanstack/react-router";
import LogoPic3 from "../assets/monkey3.svg";

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center content-center justify-center self-start justify-self-start max-w-content max-h-content aspect-ratio-square size-[10vh] lg:size-[20vh]">
        <img
          src={LogoPic3}
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
          <defs></defs>
          <path id="curve" fill="none" d="M 25 125 A 100 100 0 1 1 25 127" />

          <text
            fontSize={34}

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
