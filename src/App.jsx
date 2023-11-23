import React, { useState } from 'react';
import FormularioCadastro from './components/Cadastro';
import ListaAnimais from './components/ListaAnimais';
import './App.css';

const App = () => {
  const [animais, setAnimais] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const adicionarAnimal = (novoAnimal) => {
    setAnimais([...animais, novoAnimal]);
    setMostrarFormulario(false);
  };

  const removerAnimal = (index) => {
    const novosAnimais = animais.filter((_, i) => i !== index);
    setAnimais(novosAnimais);
  };

  const alterarStatus = (index) => {
    const novosAnimais = [...animais];
    novosAnimais[index].tipo =
      novosAnimais[index].tipo === 'perdido' ? 'resgatado' : 'perdido';
    setAnimais(novosAnimais);
  };

  return (
    <div className="container">
      <h1>Animais Perdidos.com</h1>
      {!mostrarFormulario ? (
        <button onClick={() => setMostrarFormulario(true)} className="botaoCadastrar">
          Cadastrar Novo Animal
        </button>
      ) : (
        <FormularioCadastro onSubmit={adicionarAnimal} />
      )}
      <ListaAnimais animais={animais} onRemover={removerAnimal} onAlterarStatus={alterarStatus} />
    </div>
  );
};

export default App;
