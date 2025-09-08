import React, { useState } from 'react';
import { Jogador } from '../models/Jogador';

interface Props {
  // Aqui podem ser definidas props futuras
}

export const Form: React.FC<Props> = () => {
  // Estado local para os dados do formulário
  const [nome, setNome] = useState('');
  const [posicao, setPosicao] = useState('');
  const [idade, setIdade] = useState<number | ''>('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [condicao, setCondicao] = useState<number | ''>('');

  // Função para limpar o formulário
  const limparFormulario = () => {
    setNome('');
    setPosicao('');
    setIdade('');
    setNacionalidade('');
    setCondicao('');
  };

  // Função para tratar submissão do formulário
  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    // Aqui: manipulação dos dados, integração com estado global ou API
  };

  return (
    <form onSubmit={onSubmit} style={formStyle}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
      </label>
      <label>
        Posição:
        <input type="text" value={posicao} onChange={e => setPosicao(e.target.value)} required />
      </label>
      <label>
        Idade:
        <input type="number" value={idade} onChange={e => setIdade(Number(e.target.value))} required />
      </label>
      <label>
        Nacionalidade:
        <input type="text" value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} required />
      </label>
      <label>
        Condição (%):
        <input type="number" value={condicao} onChange={e => setCondicao(Number(e.target.value))} required min={0} max={100} />
      </label>
      <button type="submit">Adicionar Jogador</button>
      <button type="button" onClick={limparFormulario}>Limpar</button>
    </form>
  );
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '1rem',
  backgroundColor: '#003366',
  color: 'white',
  borderRadius: '5px',
};

export default Form;
