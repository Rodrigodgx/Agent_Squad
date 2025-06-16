package com.arcanediamonds.core;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CardTest {

    @Test
    void testCardCreation() {
        Ability dummyAbility = new Ability("Dummy Ability", "Does nothing", null);
        ArrayList<Ability> abilities = new ArrayList<>();
        abilities.add(dummyAbility);

        Card card = new Card("Test Card", 3, "Unit", "A test card", abilities) {
            @Override
            public void ativarHabilidade(Ability habilidade, GameState gameState, Player jogadorAlvo) {
                // Dummy implementation
            }
        };

        assertEquals("Test Card", card.getNome());
        assertEquals(3, card.getCusto());
        assertEquals("Unit", card.getTipo());
        assertEquals("A test card", card.getDescricao());
        assertEquals(1, card.getHabilidades().size());
    }
}