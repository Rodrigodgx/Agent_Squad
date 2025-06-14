import React from 'react';
import './CarsPage.css';

const CarsPage = () => {
  const cars = [
    { id: 1, name: 'Car 1', description: 'Description of Car 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Car 2', description: 'Description of Car 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Car 3', description: 'Description of Car 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Car 4', description: 'Description of Car 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Car 5', description: 'Description of Car 5', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="cars-page">
      <h1>Our Cars</h1>
      <div className="car-list">
        {cars.map(car => (
          <div key={car.id} className="car-item">
            <img src={car.imageUrl} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;