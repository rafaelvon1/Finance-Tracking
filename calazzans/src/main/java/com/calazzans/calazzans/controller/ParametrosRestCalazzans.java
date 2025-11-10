package com.calazzans.calazzans.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.calazzans.calazzans.entity.TableParametros;
import com.calazzans.calazzans.service.TableParametrosService;

@RestController
public class ParametrosRestCalazzans {
    @Autowired
    TableParametrosService TableParametrosService;

    @GetMapping("/Parametros")
    public List<TableParametros> getAllParametros() {
        List<TableParametros> getParametros = TableParametrosService.getAllParametros();
        return getParametros;
    }
}
