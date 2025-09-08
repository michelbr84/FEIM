import React from 'react';

interface Player {
  nome: string;
  posicao: string;
  idade: number;
  nacionalidade: string;
  condicao: number;
}

interface OutputBoxProps {
  players: Player[];
}

// OutputBox.tsx - mostra uma tabela de jogadores
export const OutputBox: React.FC<OutputBoxProps> = ({ players }) => {
  return (
    <section style={sectionStyle} aria-label="Tabela de Jogadores">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Posição</th>
            <th>Idade</th>
            <th>Nacionalidade</th>
            <th>Condição %</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr key={i}>
              <td>{p.nome}</td>
              <td>{p.posicao}</td>
              <td>{p.idade}</td>
              <td>{p.nacionalidade}</td>
              <td>{p.condicao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`
        section {
          flex-grow: 1;
          overflow-x: auto;
          padding: 15px;
          color: white;
          font-family: Arial, Verdana, sans-serif;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #00194a;
        }
        th, td {
          border: 1px solid #0066cc;
          padding: 8px 12px;
          text-align: center;
        }
        thead {
          background-color: #0066cc;
          color: #ffcc00;
          font-weight: bold;
        }
        tbody tr:nth-child(odd) {
          background-color: #002a7a;
        }
        tbody tr:hover {
          background-color: #ffcc00;
          color: #00194a;
          cursor: default;
        }
      `}</style>
    </section>
  );
};

export default OutputBox;
