public class Card {

    private String name;
    private String type;
    private int cost;
    private String effect;

    public Card(String name) {
        this.name = name;
        this.type = "Generic";
        this.cost = 0;
        this.effect = "No effect";
    }

    public Card(String name, String type, int cost, String effect) {
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.effect = effect;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public int getCost() {
        return cost;
    }

    public String getEffect() {
        return effect;
    }
}