import React from 'react';

export const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1>Gerenciador de Jogadores FAIM</h1>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  padding: '20px',
  backgroundColor: '#004080',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Arial, Verdana, sans-serif',
};

export default Header;
