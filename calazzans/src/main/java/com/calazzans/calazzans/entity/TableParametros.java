package com.calazzans.calazzans.entity;
import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "parametros")
public class TableParametros {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_parametros;

    @Column(name="parametro", nullable = false)
    private String parametro;

    @Column(name="data_ingestao",nullable = false)
    @Temporal(TemporalType.DATE)
    private LocalDate data_ingestao;

    public int getId_parametros(){
        return id_parametros;
    }
    public void setId(int id_parametros) {
        this.id_parametros = id_parametros;
    }
    public String getParametro(){
        return parametro;
    }
    public void setParametro(String parametro){
        this.parametro = parametro;
    }
    public LocalDate getData_ingestao(){
        return data_ingestao;
    }
    public void setDadta_ingestao(LocalDate data_ingestao){
        this.data_ingestao = data_ingestao;
    }
}