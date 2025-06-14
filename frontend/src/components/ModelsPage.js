import React, { useState, useEffect } from 'react';
import { getModels } from '../api/wordpress';

function ModelsPage() {
  const [models, setModels] = useState([]);
  const [marca, setMarca] = useState('');

  useEffect(() => {
    const fetchModels = async () => {
      const data = await getModels(marca);
      setModels(data);
    };
    fetchModels();
  }, [marca]);

  const handleMarcaChange = (event) => {
    setMarca(event.target.value);
  };

  return (
    <div>
      <h1>Modelos de Carro</h1>
      <label htmlFor="marca">Filtrar por Marca:</label>
      <input
        type="text"
        id="marca"
        value={marca}
        onChange={handleMarcaChange}
      />
      {models.map(item => (
        <div key={item.title}>
          <h2><a href={`/model/${item.ID}`}>{item.title}</a></h2>
          <p>{item.content.substring(0, 200)}...</p>
          {item.thumbnail && <img src={item.thumbnail} alt={item.title} />}
        </div>
      ))}
    </div>
  );
}

export default ModelsPage;