import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-">
        <div className="logo text-lg font-bold text-yellow-500">
          Моё Портфолио
        </div>
        <Menu theme="dark" mode="horizontal" className="border-b-0">
          <Menu.Item key="/">
            <Link to="/">Главная</Link>
          </Menu.Item>
          <Menu.Item key="/todo">
            <Link to="/todo">Список TODO</Link>
          </Menu.Item>
          <Menu.Item key="/swapi">
            <Link to="/swapi">SWAPI</Link>
          </Menu.Item>
        </Menu>
      </div>
    </AntHeader>
  );
};

export default Header;
