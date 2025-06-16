package com.arcanediamonds.core;

public class Ability {

    private String nome;
    private String descricao;
    private Effect efeito; // Define o efeito da habilidade (a ser implementado)

    public Ability(String nome, String descricao, Effect efeito) {
        this.nome = nome;
        this.descricao = descricao;
        this.efeito = efeito;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Effect getEfeito() {
        return efeito;
    }

    public void setEfeito(Effect efeito) {
        this.efeito = efeito;
    }
}