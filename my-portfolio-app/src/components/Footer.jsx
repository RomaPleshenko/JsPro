import React from "react";
import { Layout } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold mb-3">Мои Контакты</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="mailto:romaple28@gmail.com"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <MailOutlined className="mr-2" /> romaple28@gmail.com
          </a>
          <a
            href="tel:+380964997332"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <PhoneOutlined className="mr-2" /> +380964997332
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/RomaPleshenko"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <GithubOutlined className="text-2xl" />
          </a>
        </div>
        <p className="mt-4 text-gray-400">
          &copy; {new Date().getFullYear()} Ваше Имя. Все права защищены.
        </p>
      </div>
    </AntFooter>
  );
};

export default Footer;
