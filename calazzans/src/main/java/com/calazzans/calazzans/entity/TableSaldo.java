package com.calazzans.calazzans.entity;
import java.util.Date;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Saldo")
public class TableSaldo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Column(name = "id_usuario",nullable = false)
    private int id_usuario;

    @Column(name = "descricao_saldo",length = 255,nullable = false)
    private String descricao_saldo;

    @Column(name = "tipo_saldo",length = 30, nullable = false)
    private String tipo_saldo;

    @Column(name = "valor",nullable = false)
    private double valor;

    @Column(name = "data_saldo", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date data_saldo;

    @Column(name = "frequencia",length = 30, nullable = false)
    private String frequencia;

    // Getters e Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public int getid_usuario() {
        return id_usuario;
    }

    public void setid_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getDescricao_saldo() {
        return descricao_saldo;
    }

    public void setDescricao_saldo(String descricao_saldo) {
        this.descricao_saldo = descricao_saldo;
    }
    public String getTipo_saldo(){
        return tipo_saldo;
    }
    public void setTipo_saldo(String tipo_saldo){
        this.tipo_saldo = tipo_saldo;
    }
    public double getValor(){
        return valor;
    }
    public void setValor(double valor){
        this.valor = valor;
    }
    public Date getData_saldo(){
        return data_saldo;
    }
    public void setData_saldo(Date data_saldo){
        this.data_saldo = data_saldo;
    }
    public String getFrequencia(){
        return frequencia;
    }
    public void setFrequencia(String frequencia){
        this.frequencia = frequencia;
    }

}
