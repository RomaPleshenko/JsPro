import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <nav className="flex space-x-4">
        <NavLink to="/" className="hover:text-gray-400">Главная</NavLink>
        <NavLink to="/contacts" className="hover:text-gray-400">Контакты</NavLink>
        <NavLink to="/about" className="hover:text-gray-400">О нас</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}