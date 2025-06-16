package com.arcanediamonds.rules;

import com.arcanediamonds.core.GameState;
import com.arcanediamonds.core.Player;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.ArrayList;

public class RuleEngineTest {

    @Test
    void testValidarAcao() {
        RuleEngine ruleEngine = new RuleEngine();
        GameState gameState = new GameState(new ArrayList<>(), null);
        Player jogador = new Player("Test Player");
        Action acaoComprar = new Action("ComprarCarta");
        Action acaoAtivar = new Action("AtivarHabilidade");

        gameState.setFaseAtual("Compra");
        assertTrue(ruleEngine.validarAcao(gameState, jogador, acaoComprar));

        gameState.setFaseAtual("Acao");
        assertTrue(ruleEngine.validarAcao(gameState, jogador, acaoAtivar));
        assertFalse(ruleEngine.validarAcao(gameState, jogador, acaoComprar));
    }

    //Adicionar mais testes para cobrir diferentes cenários
}