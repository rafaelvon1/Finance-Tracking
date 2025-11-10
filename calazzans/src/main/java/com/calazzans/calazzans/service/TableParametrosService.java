package com.calazzans.calazzans.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.calazzans.calazzans.entity.TableParametros;
import com.calazzans.calazzans.repository.TableParametrosRepository;


@Service
public class TableParametrosService {
    @Autowired
    TableParametrosRepository TableParametrosRepository;
    public List<TableParametros> getAllParametros(){
        List<TableParametros> Parametros = TableParametrosRepository.findAll();
        return Parametros;
   }

}
