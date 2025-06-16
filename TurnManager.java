import java.util.List;
import java.util.Collections;

public class TurnManager {

    private List<Player> players;
    private int currentPlayerIndex;

    public TurnManager(List<Player> players) {
        this.players = players;
        this.currentPlayerIndex = 0;
    }

    public void determineStartingPlayer() {
         //Escolhe o primeiro jogador aleatoriamente
        Collections.shuffle(players);
        System.out.println("O jogador " + players.get(0).getName() + " começa o jogo.");
    }

    public void nextTurn() {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.size();
    }

    public Player getCurrentPlayer() {
        return players.get(currentPlayerIndex);
    }
}