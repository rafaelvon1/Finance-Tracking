package com.calazzans.calazzans.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.calazzans.calazzans.entity.TableSaldo;
public interface TableSaldoRepository extends JpaRepository <TableSaldo, Integer>{

    /*@Query(value = "select * from calazzans where salario < :salario", nativeQuery=true)
    List<TableSaldo> findBySalario(@Param("salario") double salario);*/
}
