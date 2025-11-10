package com.calazzans.calazzans.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.calazzans.calazzans.entity.TableSaldo;

public interface TableSaldoRepository extends JpaRepository <TableSaldo, Integer>{
    /*List<TableSaldo> findByIdUsuario(int id_usuario);*/

    @Query(value = "SELECT * FROM saldo " +
               "WHERE id_usuario = :id " +
               "AND MONTH(data_saldo) = MONTH(CURDATE()) " +
               "AND YEAR(data_saldo) = YEAR(CURDATE())", 
       nativeQuery = true)
    List<TableSaldo> saldo_user(@Param("id") int id);

    /*@Query(value = "select * from calazzans where salario < :salario", nativeQuery=true)
    List<TableSaldo> findBySalario(@Param("salario") double salario);*/
}
