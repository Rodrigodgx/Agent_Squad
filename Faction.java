public class Faction {

    private String name;
    private String abilityDescription;

    public Faction(String name, String abilityDescription) {
        this.name = name;
        this.abilityDescription = abilityDescription;
    }

    public String getName() {
        return name;
    }

    public String getAbilityDescription() {
        return abilityDescription;
    }

    public void activateAbility() {
        System.out.println("Ativando habilidade da facção " + name + ": " + abilityDescription);
        // Implementar a lógica específica da habilidade da facção
    }
}