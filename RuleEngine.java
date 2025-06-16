public class RuleEngine {

    public int calculateRoundScore(Player player) {
        // Implementar a lógica para calcular a pontuação do jogador na rodada
        // Exemplo:
        int score = 0;
        // Adicionar lógica para pontuar com base nas cartas jogadas, habilidades usadas, etc.
        score += player.getHand().size(); // Exemplo: Pontua com base no número de cartas na mão
        return score;
    }

    public boolean isValidAction(Player player, Card card) {
        // Implementar a lógica para verificar se a ação do jogador é válida de acordo com as regras do jogo
        // Exemplo:
        if (card.getCost() > player.getVictoryPoints()) {
            System.out.println("Pontos de vitória insuficientes para jogar esta carta.");
            return false;
        }
        return true;
    }
}