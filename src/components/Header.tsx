import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const navigation = [
    { path: "/", text: "Home" },
    { path: "/explore", text: "Explore" },
  ];

  return (
    <header className="mt-10 flex justify-between items-center">
      <img src={logo} alt="dot dev logo" className="w-14 sm:w-16" />
      <nav>
        <ul className="flex gap-6">
          {navigation.map(({ path, text }) => (
            <li key={path}>
              <NavLink 
                to={path}
                className={`
                  text-silver/70
                  transition-colors
                  hover:text-lime
                  sm:text-lg
                `}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};