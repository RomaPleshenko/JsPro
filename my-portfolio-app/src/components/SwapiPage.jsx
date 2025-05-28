import React, { useState, useEffect } from "react";
import { Card, Spin, Select, Alert, Divider } from "antd";

const { Option } = Select;

const SwapiPage = () => {
  const [category, setCategory] = useState("people");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://swapi.info/api/${category}/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.results);
    } catch (e) {
      setError("Не удалось загрузить данные. Попробуйте позже.");
      console.error("Ошибка загрузки SWAPI данных:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]); // Загружать данные при изменении категории

  const renderCardContent = (item, category) => {
    switch (category) {
      case "people":
        return (
          <>
            <p>
              <strong>Рост:</strong> {item.height} см
            </p>
            <p>
              <strong>Вес:</strong> {item.mass} кг
            </p>
            <p>
              <strong>Цвет волос:</strong> {item.hair_color}
            </p>
            <p>
              <strong>Цвет кожи:</strong> {item.skin_color}
            </p>
            <p>
              <strong>Год рождения:</strong> {item.birth_year}
            </p>
            <p>
              <strong>Пол:</strong> {item.gender}
            </p>
          </>
        );
      case "planets":
        return (
          <>
            <p>
              <strong>Климат:</strong> {item.climate}
            </p>
            <p>
              <strong>Рельеф:</strong> {item.terrain}
            </p>
            <p>
              <strong>Население:</strong> {item.population}
            </p>
            <p>
              <strong>Диаметр:</strong> {item.diameter}
            </p>
            <p>
              <strong>Период вращения:</strong> {item.rotation_period} часов
            </p>
          </>
        );
      case "starships":
        return (
          <>
            <p>
              <strong>Модель:</strong> {item.model}
            </p>
            <p>
              <strong>Производитель:</strong> {item.manufacturer}
            </p>
            <p>
              <strong>Стоимость:</strong> {item.cost_in_credits} кредитов
            </p>
            <p>
              <strong>Экипаж:</strong> {item.crew}
            </p>
            <p>
              <strong>Пассажиры:</strong> {item.passengers}
            </p>
          </>
        );
      default:
        return <p>Выберите категорию для просмотра деталей.</p>;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        SWAPI Данные (Star Wars API)
      </h1>

      <div className="flex justify-center mb-8">
        <Select
          defaultValue="people"
          style={{ width: 200 }}
          onChange={setCategory}
          className="shadow-md"
        >
          <Option value="people">Персонажи</Option>
          <Option value="planets">Планеты</Option>
          <Option value="starships">Звездные корабли</Option>
        </Select>
      </div>

      {loading && (
        <div className="text-center">
          <Spin size="large" tip="Загрузка данных..." />
        </div>
      )}

      {error && (
        <Alert
          message="Ошибка"
          description={error}
          type="error"
          showIcon
          className="max-w-xl mx-auto"
        />
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.name || item.title}
              className="shadow-lg border border-gray-200 rounded-lg"
              hoverable
            >
              {renderCardContent(item, category)}
            </Card>
          ))}
        </div>
      )}
      {data.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500 mt-8">
          Данные не найдены для выбранной категории.
        </p>
      )}
    </div>
  );
};

export default SwapiPage;
