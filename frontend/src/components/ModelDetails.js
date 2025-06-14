import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getModelDetails } from '../api/wordpress';

function ModelDetails() {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    const fetchModelDetails = async () => {
      const data = await getModelDetails(id);
      setModel(data);
    };
    fetchModelDetails();
  }, [id]);

  if (!model) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{model.title}</h1>
      <p>{model.content}</p>
      {model.thumbnail && <img src={model.thumbnail} alt={model.title} />}
    </div>
  );
}

export default ModelDetails;