// Utilitário para formatar a saída dos jogadores
export const formatOutput = (players: any[]) => {
  // Retorna string formatada dos jogadores
  return players.map(p => `Nome: ${p.nome}, Posição: ${p.posicao}, Idade: ${p.idade}, Nacionalidade: ${p.nacionalidade}, Condição: ${p.condicao}%`).join('\n');
};
