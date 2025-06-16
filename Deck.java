import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Deck {

    private List<Card> cards;

    public Deck() {
        this.cards = new ArrayList<>();
        initializeDeck();
    }

    private void initializeDeck() {
        // Implementar a lógica para criar e adicionar as cartas ao baralho
        // Exemplo:
        cards.add(new Card("Ataque Fraco", "Ataque", 1, "Causa 2 de dano"));
        cards.add(new Card("Defesa Simples", "Defesa", 1, "Bloqueia 2 de dano"));
        cards.add(new Card("Cura Menor", "Magia", 1, "Cura 3 de vida"));
        cards.add(new Card("Ataque Forte", "Ataque", 2, "Causa 5 de dano"));
        cards.add(new Card("Defesa Forte", "Defesa", 2, "Bloqueia 5 de dano"));
        cards.add(new Card("Cura Maior", "Magia", 2, "Cura 7 de vida"));
        cards.add(new Card("Ataque Venenoso", "Ataque", 3, "Causa 3 de dano e envenena"));
        cards.add(new Card("Escudo Refletor", "Defesa", 3, "Bloqueia todo o dano e reflete 2"));
        cards.add(new Card("Ressurreição", "Magia", 3, "Revive com 5 de vida"));
        cards.add(new Card("Fúria", "Ataque", 4, "Causa 8 de dano"));
        cards.add(new Card("Armadura", "Defesa", 4, "Bloqueia 8 de dano"));
        cards.add(new Card("Cura Total", "Magia", 4, "Cura toda a vida"));
        cards.add(new Card("Drenagem de vida", "Ataque", 5, "Causa 10 de dano e cura 5"));
        cards.add(new Card("Invencibilidade", "Defesa", 5, "Bloqueia todo o dano"));
        cards.add(new Card("Invocação", "Magia", 5, "Invoca uma criatura"));
        // Adicionar mais cartas conforme necessário
    }

    public void shuffle() {
        Collections.shuffle(cards);
        System.out.println("Baralho embaralhado.");
    }

    public Card drawCard() {
        if (!cards.isEmpty()) {
            return cards.remove(0);
        } else {
            return null;
        }
    }
}