package com.arcanediamonds.rules;

public class Action {

    private String tipo; // Ex: "ComprarCarta", "AtivarHabilidade", "Atacar"
    // Pode ser adicionado informações adicionais necessárias para a ação (alvo, carta, etc.)

    public Action(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}