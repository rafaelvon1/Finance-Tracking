package com.calazzans.calazzans.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.calazzans.calazzans.entity.TableUsuario;

public interface TableUsuarioRepository extends JpaRepository <TableUsuario, Integer>{
    List<TableUsuario> findByNome(String nome);

    @Query(value = "select * from calazzans where salario < :salario", nativeQuery=true)
    List<TableUsuario> findBySalario(@Param("salario") double salario);
}
