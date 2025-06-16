package com.arcanediamonds.core;

import java.util.ArrayList;
import java.util.List;

public class Player {

    private String nome;
    private List<Card> maoDeCartas;

    public Player(String nome) {
        this.nome = nome;
        this.maoDeCartas = new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Card> getMaoDeCartas() {
        return maoDeCartas;
    }

    public void setMaoDeCartas(List<Card> maoDeCartas) {
        this.maoDeCartas = maoDeCartas;
    }

    public void adicionarCartaAMao(Card carta) {
        this.maoDeCartas.add(carta);
    }

    public void removerCartaDaMao(Card carta) {
        this.maoDeCartas.remove(carta);
    }
}