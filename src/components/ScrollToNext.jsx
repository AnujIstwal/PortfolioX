import { RiScrollToBottomFill } from "react-icons/ri";
import { NavbarContext } from "../context/NavbarContextFile";
import { useContext } from "react";
import { Link } from "react-scroll";

export default function ScrollToNext() {
  // const { activePage, setActivePage } = useContext(NavbarContext);

  return (
    <div className="absolute bottom-0 left-1/2 z-50 mb-5 -translate-x-1/2 transform animate-pulse">
      <Link
        to="about"
        smooth={true}
        duration={1500}
        className="cursor-pointer hover:underline"
      >
        <RiScrollToBottomFill className="text-5xl text-zinc-900" />
      </Link>
    </div>
  );
}
