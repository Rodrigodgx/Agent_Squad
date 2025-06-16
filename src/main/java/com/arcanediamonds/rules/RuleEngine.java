package com.arcanediamonds.rules;

import com.arcanediamonds.core.GameState;
import com.arcanediamonds.core.Player;

import java.util.ArrayList;
import java.util.List;

public class RuleEngine {

    private List<Rule> regras;

    public RuleEngine() {
        this.regras = new ArrayList<>();
        // Adicionar as regras ao motor
        regras.add(new CompraDeCartaRule());
        regras.add(new AtivacaoDeHabilidadeRule());
        // Adicione outras regras aqui
    }

    public boolean validarAcao(GameState gameState, Player jogador, Action acao) {
        for (Rule regra : regras) {
            if (!regra.validar(gameState, jogador, acao)) {
                return false; // Ação inválida
            }
        }
        return true; // Ação válida
    }

    public void aplicarAcao(GameState gameState, Player jogador, Action acao) {
        for (Rule regra : regras) {
            if (regra.validar(gameState, jogador, acao)) {
                regra.aplicar(gameState, jogador, acao);
            }
        }
    }

    public void adicionarRegra(Rule regra) {
        this.regras.add(regra);
    }
}