package com.arcanediamonds.rules;

import com.arcanediamonds.core.GameState;
import com.arcanediamonds.core.Player;

public class AtivacaoDeHabilidadeRule implements Rule {

    @Override
    public boolean validar(GameState gameState, Player jogador, Action acao) {
        if (acao.getTipo().equals("AtivarHabilidade")) {
            // Adicionar lógica para verificar se a habilidade pode ser ativada (fase correta, custo, alvo válido, etc.)
            return true;
        }
        return false;
    }

    @Override
    public void aplicar(GameState gameState, Player jogador, Action acao) {
        // Adicionar lógica para ativar a habilidade (aplicar efeitos, remover custos, etc.)
        System.out.println("Habilidade ativada por " + jogador.getNome());
    }
}