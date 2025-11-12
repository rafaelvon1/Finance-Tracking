package com.calazzans.calazzans.dto;
import java.time.LocalDate;

public record despesa(Integer id,
LocalDate dataDespesa,
 String descricaoDespesa,
 String formaPagamento,
 String frequencia,
 Integer idUsuario,
 String metaGasto,
 Integer parcelas,
 String statusDespesa,
 String tag,
 Double valor) {

}
