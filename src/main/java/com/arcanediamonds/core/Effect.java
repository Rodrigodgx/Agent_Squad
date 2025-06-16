package com.arcanediamonds.core;

public interface Effect {
    void apply(GameState gameState, Player source, Player target);
}