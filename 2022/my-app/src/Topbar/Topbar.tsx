import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";

const Topbar: React.FC = () => {
  const navRef = useRef<HTMLUListElement>(null);
  const [showRightArrow, setShowRightArrow] = useState<string>("show-arrow");
  const [showLeftArrow, setShowLeftArrow] = useState<string>("hide-arrow");

  // Each list item is 112px wide
  const listItemWidth = 112;
  const listItemsCount = 25;
  const topbarWidth = listItemWidth * listItemsCount;

  const lastSolvedDay = 17;

  const handleLeftArrowClick = () => {
    if (navRef.current) {
      navRef.current.scrollLeft -= navRef.current.scrollLeft;
    }
  };

  const handleRightArrowClick = () => {
    if (navRef.current) {
      navRef.current.scrollLeft +=
        listItemWidth * lastSolvedDay -
        navRef.current.clientWidth -
        navRef.current.scrollLeft;
    }
  };

  React.useEffect(() => {
    const showHideArrows = (clientWidth: number, scrollLeft: number) => {
      if (scrollLeft + clientWidth < topbarWidth) {
        setShowRightArrow("show-arrow");
      } else {
        setShowRightArrow("hide-arrow");
      }

      if (scrollLeft === 0) {
        setShowLeftArrow("hide-arrow");
      } else {
        setShowLeftArrow("show-arrow");
      }
    };

    const checkForShowHideArrows = () => {
      if (!navRef.current) return;
      const { clientWidth, scrollLeft } = navRef.current;

      showHideArrows(clientWidth, scrollLeft);
    };

    navRef.current?.addEventListener("scroll", checkForShowHideArrows);
    checkForShowHideArrows();

    return () => {
      navRef.current?.removeEventListener("scroll", checkForShowHideArrows);
    };
  }, []);

  return (
    <div className="topbar">
      <button
        className={`arrow-button left-arrow ${showLeftArrow}`}
        onClick={handleLeftArrowClick}>
        &lt;
      </button>
      <ul ref={navRef} className="navigation">
        <li>
          <NavLink className="day solved" to="day-1">
            Day 1
          </NavLink>
        </li>
        <li>
          <NavLink className="day solved" to="day-2">
            Day 2
          </NavLink>
        </li>
        <li>
          <NavLink className="day solved" to="day-3">
            Day 3
          </NavLink>
        </li>
        <li>
          <NavLink className="day solved" to="day-4">
            Day 4
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-5">
            Day 5
          </NavLink>
        </li>
        <li>
          <NavLink className="day solved" to="day-6">
            Day 6
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-7">
            Day 7
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-8">
            Day 8
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-9">
            Day 9
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-10">
            Day 10
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-11">
            Day 11
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-12">
            Day 12
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-13">
            Day 13
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-14">
            Day 14
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-15">
            Day 15
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-16">
            Day 16
          </NavLink>
        </li>
        <li>
          <NavLink className="day solved" to="day-17">
            Day 17
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-18">
            Day 18
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-19">
            Day 19
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-20">
            Day 20
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-21">
            Day 21
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-22">
            Day 22
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-23">
            Day 23
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-24">
            Day 24
          </NavLink>
        </li>
        <li>
          <NavLink className="day" to="day-25">
            Day 25
          </NavLink>
        </li>
      </ul>
      <button
        className={`arrow-button right-arrow ${showRightArrow}`}
        onClick={handleRightArrowClick}>
        &gt;
      </button>
    </div>
  );
};

export default Topbar;
