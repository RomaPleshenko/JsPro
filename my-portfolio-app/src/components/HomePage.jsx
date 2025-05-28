import React from "react";
import { Card, Tag } from "antd";
import {
  SmileOutlined,
  CodeOutlined,
  BulbOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const HomePage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-yellow-500 mb-4 animate-fadeInDown">
          Привет! Я Роман Плещенко
        </h1>
        <p className="text-xl text-gray-700 animate-fadeInUp max-w-2xl mx-auto">
          Я начинающий Frontend разработчик с опытом работы в React и ja
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card
          hoverable
          className="shadow-lg border border-gray-200 rounded-lg animate-fadeInLeft"
          title={
            <div className="flex items-center">
              <SmileOutlined className="text-2xl mr-2 text-blue-500" />
              <span className="text-xl font-semibold">Обо мне</span>
            </div>
          }
        >
          <p className="text-gray-700 leading-relaxed">
            Мне 25 лет, живу в Одессе. Моя цель — создавать высококачественный
            код, который решает реальные проблемы пользователей. Люблю изучать
            новые технологии и постоянно совершенствовать свои навыки. В
            свободное время занимаюсь рыбалкой, спортом, путешествиями.
          </p>
        </Card>
        <Card
          hoverable
          className="shadow-lg border border-gray-200 rounded-lg animate-fadeInUp"
          title={
            <div className="flex items-center">
              <CodeOutlined className="text-2xl mr-2 text-green-500" />
              <span className="text-xl font-semibold">Навыки</span>
            </div>
          }
        >
          <div className="flex flex-wrap gap-2">
            <Tag color="blue" className="px-3 py-1 text-base">
              JavaScript
            </Tag>
            <Tag color="green" className="px-3 py-1 text-base">
              React
            </Tag>
            <Tag color="purple" className="px-3 py-1 text-base">
              Next.js
            </Tag>
            <Tag color="volcano" className="px-3 py-1 text-base">
              TypeScript
            </Tag>
            <Tag color="cyan" className="px-3 py-1 text-base">
              Tailwind CSS
            </Tag>
            <Tag color="magenta" className="px-3 py-1 text-base">
              Ant Design
            </Tag>
            <Tag color="gold" className="px-3 py-1 text-base">
              Redux
            </Tag>
            <Tag color="geekblue" className="px-3 py-1 text-base">
              Node.js (Базовые)
            </Tag>
            <Tag color="lime" className="px-3 py-1 text-base">
              Git
            </Tag>
          </div>
        </Card>
        <Card
          hoverable
          className="shadow-lg border border-gray-200 rounded-lg animate-fadeInRight"
          title={
            <div className="flex items-center">
              <BulbOutlined className="text-2xl mr-2 text-orange-500" />
              <span className="text-xl font-semibold">Опыт</span>
            </div>
          }
        >
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Пока что нет коммерческого опыта, но я активно участвую в учебных
              проектах и личных разработках.
            </li>
          </ul>
        </Card>
        <Card
          hoverable
          className="shadow-lg border border-gray-200 rounded-lg animate-fadeInUp"
          title={
            <div className="flex items-center">
              <TrophyOutlined className="text-2xl mr-2 text-red-500" />
              <span className="text-xl font-semibold">Образование</span>
            </div>
          }
        >
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Одксский национальный университет Полите, Факультет компьютерных
              наук [Год окончания: 2023]
            </li>
            <li>Курс Front-end Pro [Год окончания 2025]</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
