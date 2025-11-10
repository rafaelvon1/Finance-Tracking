package com.calazzans.calazzans.entity;

import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "despesas")
public class TableDespesa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "id_usuario", nullable = false)
    private int id_usuario;

    @Column(name = "descricao_despesa", nullable = false)
    private String descricao_despesa;

    @Column(name = "valor", nullable = false)
    private double valor;

    @Column(name = "tag",length = 30)
    private String tag;

    @Column(name = "status_despesa",length = 30, nullable = false)
    private String status_despesa;

    @Column(name = "frequencia", nullable = false,length = 30)
    private String frequencia;

    @Column(name = "forma_pagamento",length = 30, nullable = false)
    private String forma_pagamento;

    @Column(name = "parcelas")
    private int parcelas;

    @Column(name = "meta_gasto")
    private String meta_gasto;

    @Column(name = "data_despesa", nullable = false)
    @Temporal(TemporalType.DATE)
    private LocalDate data_despesa;

    // Getters e Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getDescricao_despesa() {
        return descricao_despesa;
    }

    public void setDescricao_despesa(String descricao_despesa) {
        this.descricao_despesa = descricao_despesa;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getStatus_despesa() {
        return status_despesa;
    }

    public void setStatus_despesa(String status_despesa) {
        this.status_despesa = status_despesa;
    }

    public String getFrequencia() {
        return frequencia;
    }

    public void setFrequencia(String frequencia) {
        this.frequencia = frequencia;
    }

    public String getForma_pagamento() {
        return forma_pagamento;
    }

    public void setForma_pagamento(String forma_pagamento) {
        this.forma_pagamento = forma_pagamento;
    }

    public int getParcelas() {
        return parcelas;
    }

    public void setParcelas(int parcelas) {
        this.parcelas = parcelas;
    }

    public String getMeta_gasto() {
        return meta_gasto;
    }

    public void setMeta_gasto(String meta_gasto) {
        this.meta_gasto = meta_gasto;
    }

    public LocalDate getData_despesa() {
        return data_despesa;
    }

    public void setData_despesa(LocalDate data_despesa) {
        this.data_despesa = data_despesa;
    }
    public String getTag(){
        return tag;
    }
    public void setTag(String tag){
        this.tag = tag;
    }
}
