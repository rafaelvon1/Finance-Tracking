package com.calazzans.calazzans.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.calazzans.calazzans.entity.TableParametros;
public interface TableParametrosRepository  extends JpaRepository <TableParametros, Integer >{
    
}
