package com.calazzans.calazzans.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.calazzans.calazzans.entity.TableDespesa;
import com.calazzans.calazzans.service.TableDespesaService;


@RestController
public class DespesaRestCalazzans {
    @Autowired
    TableDespesaService TableDespesaService;

    @GetMapping("/despesas")
    public List<TableDespesa> getAllDespesa() {
        List<TableDespesa> getdespesa = TableDespesaService.getAllDespesa();
        return getdespesa;
    }

    @PostMapping("/despesas/add")

    public ResponseEntity<TableDespesa> insertDespesaService(@RequestBody TableDespesa TableDespesa) throws Exception{
        TableDespesa newDespesa = TableDespesaService.insertDespesaService(TableDespesa);
        return new ResponseEntity<TableDespesa>(newDespesa, HttpStatus.OK);
    }

    @GetMapping("/despesas/{id}")
    public ResponseEntity<Optional<TableDespesa>> getDespesaService(@PathVariable Integer id) {
        Optional<TableDespesa> Despesa_id = TableDespesaService.getDespesaService(id);
        return ResponseEntity.ok(Despesa_id);
    }

    @DeleteMapping("/despesas/delete/{id}")
    public ResponseEntity<Void> deleteDespesaByIdService(@PathVariable Integer id){
        TableDespesaService.deleteDespesaByIdService(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/despesas/update")
    public ResponseEntity<TableDespesa> updateDespesaService(@RequestBody TableDespesa TableDespesa){
        TableDespesa updatedDespesa = TableDespesaService.updateDespesaService(TableDespesa);
        return ResponseEntity.ok(updatedDespesa);
    }
    @GetMapping("/despesas/user")
    public ResponseEntity<List<TableDespesa>> Despesa_user(@RequestParam("id_usuario") int id) {
        List<TableDespesa> viewDespesa= TableDespesaService.Despesa_user(id);
        return ResponseEntity.ok(viewDespesa);
    }
    /*isso vai sera alterado!*/
    @PutMapping("/despesas/meta")
    public ResponseEntity<Void> Despesa_meta(
            @RequestParam("id_usuario") int idUsuario,
            @RequestParam("meta") String metaGasto) {
        
        TableDespesaService.Despesa_meta(idUsuario, metaGasto);
        return ResponseEntity.ok().build();
    }
}
