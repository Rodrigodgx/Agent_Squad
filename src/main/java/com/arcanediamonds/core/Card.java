package com.arcanediamonds.core;

import java.util.List;

public abstract class Card {

    private String nome;
    private int custo;
    private String tipo; // Ex: "Unidade", "Feitiço", "Estrutura"
    private String descricao;
    private List<Ability> habilidades;

    public Card(String nome, int custo, String tipo, String descricao, List<Ability> habilidades) {
        this.nome = nome;
        this.custo = custo;
        this.tipo = tipo;
        this.descricao = descricao;
        this.habilidades = habilidades;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getCusto() {
        return custo;
    }

    public void setCusto(int custo) {
        this.custo = custo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Ability> getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(List<Ability> habilidades) {
        this.habilidades = habilidades;
    }

    public abstract void ativarHabilidade(Ability habilidade, GameState gameState, Player jogadorAlvo); //Player jogadorAlvo opcional dependendo da habilidade
}