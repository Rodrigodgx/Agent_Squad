package com.arcanediamonds.rules;

import com.arcanediamonds.core.GameState;
import com.arcanediamonds.core.Player;

public interface Rule {
    boolean validar(GameState gameState, Player jogador, Action acao);
    void aplicar(GameState gameState, Player jogador, Action acao);
}