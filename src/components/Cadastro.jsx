import React, { useState } from 'react';

const Cadastro = ({ onSubmit }) => {
  const [animal, setAnimal] = useState({
    foto: '',
    raca: '',
    local: '',
    tipo: 'perdido', 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(animal);
  
    setAnimal({
      foto: '',
      raca: '',
      local: '',
      tipo: 'perdido',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="URL da foto"
        name="foto"
        value={animal.foto}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Raça"
        name="raca"
        value={animal.raca}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Local"
        name="local"
        value={animal.local}
        onChange={handleInputChange}
      />
      <select name="tipo" value={animal.tipo} onChange={handleInputChange}>
        <option value="perdido">Perdido</option>
        <option value="resgatado">Resgatado</option>
      </select>
      <button type="submit">Cadastrar Animal</button>
    </form>
  );
};

export default Cadastro;
