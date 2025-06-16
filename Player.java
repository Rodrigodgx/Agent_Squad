import java.util.ArrayList;
import java.util.List;

public class Player {

    private String name;
    private List<Card> hand;
    private Faction faction;
    private int victoryPoints;

    public Player(String name) {
        this.name = name;
        this.hand = new ArrayList<>();
        this.victoryPoints = 0;
    }

    public void drawCard(Deck deck) {
        Card card = deck.drawCard();
        if (card != null) {
            hand.add(card);
            System.out.println(name + " comprou a carta: " + card.getName());
        } else {
            System.out.println("O baralho está vazio!");
        }
    }

    public void playCard(Card card) {
        if (hand.contains(card)) {
            hand.remove(card);
            System.out.println(name + " jogou a carta: " + card.getName());
            // Implementar a lógica para aplicar o efeito da carta
        } else {
            System.out.println(name + " não tem a carta " + card.getName() + " na mão.");
        }
    }

    public void activateFactionAbility() {
        if (faction != null) {
            System.out.println(name + " ativou a habilidade da facção " + faction.getName());
            // Implementar a lógica para ativar a habilidade da facção
        } else {
            System.out.println(name + " não tem uma facção atribuída.");
        }
    }

    public String getName() {
        return name;
    }

    public List<Card> getHand() {
        return hand;
    }

    public void setFaction(Faction faction) {
        this.faction = faction;
    }

    public Faction getFaction() {
        return faction;
    }

    public int getVictoryPoints() {
        return victoryPoints;
    }

    public void addVictoryPoints(int points) {
        this.victoryPoints += points;
        System.out.println(name + " ganhou " + points + " pontos de vitória. Total: " + victoryPoints);
    }
}