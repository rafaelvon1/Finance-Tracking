package com.calazzans.calazzans.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.calazzans.calazzans.entity.TableDespesa;
import org.springframework.transaction.annotation.Transactional;


public interface TableDespesaRepository extends JpaRepository <TableDespesa, Integer >{
    @Query(value = "SELECT * FROM despesas " +
               "WHERE id_usuario = :id " +
               "AND MONTH(data_despesa) = MONTH(CURDATE()) " +
               "AND YEAR(data_despesa) = YEAR(CURDATE())", 
       nativeQuery = true)
    List<TableDespesa> despesa_user(@Param("id") int id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE despesas SET meta_gasto = ?2 WHERE id_usuario = ?1", nativeQuery = true)
    void Despesa_meta(int idUsuario, String metaGasto);
}
