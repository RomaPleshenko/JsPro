import React from "react";

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">SWAPI Інтерфейс</h1>

      <div className="mb-3">
        <label htmlFor="resourceType" className="form-label">Виберете ресурс:</label>
        <select className="form-select" id="resourceType">
          <option value="people">Люди</option>
          <option value="planets">Планети</option>
          <option value="starships">Космические корабли</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="resourceId" className="form-label">ID ресурса:</label>
        <input type="number" className="form-control" id="resourceId" placeholder="Введите ID" />
      </div>

      <button className="btn btn-primary mb-4">Полученные данные</button>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Результат</h5>
          <p className="card-text">Информация про ресурс.</p>
        </div>
      </div>
    </div>
  );
};

export default App;