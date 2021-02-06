import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="../../public/images/logo.png" alt="Todoist Logo" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
