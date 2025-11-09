package com.calazzans.calazzans.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.calazzans.calazzans.entity.TableDespesa;

public interface TableDespesaRepository extends JpaRepository <TableDespesa, Integer >{
    @Query("SELECT d from TableDespesa d where d.id_usuario = :id")
    List<TableDespesa> despesa_user(@Param("id") int id);
}
