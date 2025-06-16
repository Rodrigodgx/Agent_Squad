package com.arcanediamonds.core;

import java.util.List;

public class GameState {

    private List<Player> jogadores;
    private Board tabuleiro; // A ser implementado
    private int turnoAtual;
    private String faseAtual; // Ex: "Compra", "Ação", "Combate", "Final"

    public GameState(List<Player> jogadores, Board tabuleiro) {
        this.jogadores = jogadores;
        this.tabuleiro = tabuleiro;
        this.turnoAtual = 1;
        this.faseAtual = "Compra";
    }

    public List<Player> getJogadores() {
        return jogadores;
    }

    public void setJogadores(List<Player> jogadores) {
        this.jogadores = jogadores;
    }

    public Board getTabuleiro() {
        return tabuleiro;
    }

    public void setTabuleiro(Board tabuleiro) {
        this.tabuleiro = tabuleiro;
    }

    public int getTurnoAtual() {
        return turnoAtual;
    }

    public void setTurnoAtual(int turnoAtual) {
        this.turnoAtual = turnoAtual;
    }

    public String getFaseAtual() {
        return faseAtual;
    }

    public void setFaseAtual(String faseAtual) {
        this.faseAtual = faseAtual;
    }

    public void proximoTurno() {
        this.turnoAtual++;
        this.faseAtual = "Compra"; // Reinicia a fase para o novo turno
    }
}