package com.arcanediamonds.rules;

import com.arcanediamonds.core.GameState;
import com.arcanediamonds.core.Player;

public class CompraDeCartaRule implements Rule {

    @Override
    public boolean validar(GameState gameState, Player jogador, Action acao) {
        if (gameState.getFaseAtual().equals("Compra") && acao.getTipo().equals("ComprarCarta")) {
            // Adicionar lógica para verificar se o jogador pode comprar cartas (recursos, limite de mão, etc.)
            return true;
        }
        return false;
    }

    @Override
    public void aplicar(GameState gameState, Player jogador, Action acao) {
        // Adicionar lógica para comprar a carta (remover recursos, adicionar à mão do jogador, etc.)
        System.out.println("Carta comprada por " + jogador.getNome());
    }
}