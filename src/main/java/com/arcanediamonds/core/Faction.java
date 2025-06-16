package com.arcanediamonds.core;

import java.util.Map;

public class Faction {

    private String nome;
    private Map<String, Integer> recursos; // Ex: {"Mana": 10, "Ouro": 5}
    private Ability habilidadeFaccao;

    public Faction(String nome, Map<String, Integer> recursos, Ability habilidadeFaccao) {
        this.nome = nome;
        this.recursos = recursos;
        this.habilidadeFaccao = habilidadeFaccao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Map<String, Integer> getRecursos() {
        return recursos;
    }

    public void setRecursos(Map<String, Integer> recursos) {
        this.recursos = recursos;
    }

    public Ability getHabilidadeFaccao() {
        return habilidadeFaccao;
    }

    public void setHabilidadeFaccao(Ability habilidadeFaccao) {
        this.habilidadeFaccao = habilidadeFaccao;
    }

    public void adicionarRecurso(String tipo, int quantidade) {
        recursos.put(tipo, recursos.getOrDefault(tipo, 0) + quantidade);
    }

    public void removerRecurso(String tipo, int quantidade) {
        if (recursos.containsKey(tipo)) {
            int novoValor = recursos.get(tipo) - quantidade;
            if (novoValor < 0) {
                novoValor = 0; // Não permitir recursos negativos
            }
            recursos.put(tipo, novoValor);
        }
    }
}