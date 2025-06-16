import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Game {

    private List<Player> players;
    private Deck deck;
    private TurnManager turnManager;
    private RuleEngine ruleEngine;
    private GamePhase currentPhase;

    public Game(List<Player> players) {
        this.players = players;
        this.deck = new Deck(); // Inicializa o baralho
        this.turnManager = new TurnManager(players);
        this.ruleEngine = new RuleEngine();
        this.currentPhase = GamePhase.PREPARATION;
    }

    public void startGame() {
        System.out.println("Iniciando o jogo Diamantes Arcanos!");
        deck.shuffle(); // Embaralha o baralho
        dealInitialCards(); // Distribui as cartas iniciais
        turnManager.determineStartingPlayer(); // Define o jogador inicial
        currentPhase = GamePhase.ROUND;
        System.out.println("Fase de Preparação Concluída. Começando a Rodada.");
        startRound();
    }

    private void dealInitialCards() {
        // Implementar a lógica para distribuir as cartas iniciais para cada jogador
        for (Player player : players) {
            for (int i = 0; i < 5; i++) { // Exemplo: distribui 5 cartas iniciais
                player.drawCard(deck);
            }
        }
    }

    public void nextTurn() {
        turnManager.nextTurn();
        System.out.println("Próximo turno: Jogador " + turnManager.getCurrentPlayer().getName());
        // Adicionar lógica para iniciar o turno do jogador atual
    }

    public void endRound() {
        System.out.println("Finalizando a rodada...");
        applyRoundScoring(); // Aplica as regras de pontuação da rodada
        if (isGameFinished()) {
            endGame();
        } else {
            currentPhase = GamePhase.ROUND; // Volta para a fase de rodada
            startRound();
        }
    }

    private void startRound() {
        System.out.println("Iniciando nova rodada.");
        // Lógica para o início de cada rodada (ex: resetar estados, etc.)
    }

    private void applyRoundScoring() {
        // Implementar a lógica para aplicar as regras de pontuação da rodada
        for (Player player : players) {
            int roundScore = ruleEngine.calculateRoundScore(player);
            player.addVictoryPoints(roundScore);
            System.out.println("Jogador " + player.getName() + " pontuou " + roundScore + " pontos.");
        }
    }

    private boolean isGameFinished() {
        // Implementar a lógica para verificar se o jogo terminou (ex: atingiu um limite de pontos)
        for (Player player : players) {
            if (player.getVictoryPoints() >= 20) { // Exemplo: jogo termina com 20 pontos
                return true;
            }
        }
        return false;
    }

    public void endGame() {
        System.out.println("O jogo terminou!");
        currentPhase = GamePhase.SCORING;
        Player winner = determineWinner();
        System.out.println("O vencedor é: " + winner.getName() + " com " + winner.getVictoryPoints() + " pontos!");
    }

    private Player determineWinner() {
        // Implementar a lógica para determinar o vencedor com base nos pontos de vitória
        Player winner = null;
        int maxPoints = -1;
        for (Player player : players) {
            if (player.getVictoryPoints() > maxPoints) {
                maxPoints = player.getVictoryPoints();
                winner = player;
            }
        }
        return winner;
    }

    public GamePhase getCurrentPhase() {
        return currentPhase;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public static void main(String[] args) {
        // Exemplo de uso:
        List<Player> players = new ArrayList<>();
        players.add(new Player("Alice"));
        players.add(new Player("Bob"));

        Game game = new Game(players);
        game.startGame();

        // Simulação de turnos e rodadas (apenas para demonstração)
        for (int i = 0; i < 3; i++) { // Simula 3 rodadas
            for (int j = 0; j < players.size(); j++) {
                game.nextTurn();
                // Simula ações do jogador
                players.get(j).playCard(new Card("Ataque")); //Simula jogar uma carta
                players.get(j).activateFactionAbility(); //Simula ativar habilidade de facção
            }
            game.endRound();
        }
    }
}