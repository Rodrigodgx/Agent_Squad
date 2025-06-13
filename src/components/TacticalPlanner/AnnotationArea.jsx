import React, { useState } from 'react';

const AnnotationArea = () => {
  const [annotation, setAnnotation] = useState('');

  const handleChange = (event) => {
    setAnnotation(event.target.value);
  };

  return (
    <div className="annotation-area">
      <h2>Anotações</h2>
      <textarea
        value={annotation}
        onChange={handleChange}
        placeholder="Escreva suas estratégias aqui..."
      />
    </div>
  );
};

export default AnnotationArea;