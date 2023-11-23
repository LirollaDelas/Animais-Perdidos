// src/components/ListaAnimais.js
import React from 'react';

const ListaAnimais = ({ animais, onRemover, onAlterarStatus }) => {
  const handleAlterarStatus = (index) => {
    onAlterarStatus(index);
  };

  return (
    <ul>
      {animais.map((animal, index) => (
        <li key={index}>
          <img src={animal.foto} alt={`Foto de ${animal.raca}`} />
          <div>
            <h3>{animal.raca}</h3>
            <ul>
              <li><strong>Local:</strong> {animal.local}</li>
              <li><strong>Tipo:</strong> {animal.tipo}</li>
            </ul>
            <div>
              <button onClick={() => onRemover(index)}>Remover</button>
              <button onClick={() => handleAlterarStatus(index)}>Alterar Status</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListaAnimais;
