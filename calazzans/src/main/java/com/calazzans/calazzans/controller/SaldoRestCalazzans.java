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

import com.calazzans.calazzans.entity.TableSaldo;
import com.calazzans.calazzans.service.TableSaldoService;


@RestController
public class SaldoRestCalazzans {
    @Autowired
    TableSaldoService TableSaldoService;

    //Retorna Lista de produtos

    @GetMapping("/saldo")

    public List<TableSaldo> getAllSaldo() {
        List<TableSaldo> getsaldo = TableSaldoService.getAllSaldo();
        return getsaldo;
    }

    @PostMapping("/saldo/add")

    public ResponseEntity<TableSaldo> insertSaldoService(@RequestBody TableSaldo TableSaldo) {
        TableSaldo newSaldo = TableSaldoService.insertSaldoService(TableSaldo);
        return new ResponseEntity<TableSaldo>(newSaldo, HttpStatus.OK);
    }

    @GetMapping("/saldo/{id}")
    public ResponseEntity<Optional<TableSaldo>> getSaldoService(@PathVariable Integer id) {
        Optional<TableSaldo> Saldo_id = TableSaldoService.getSaldoService(id);
        return ResponseEntity.ok(Saldo_id);
    }

    @DeleteMapping("/saldo/delete/{id}")
    public ResponseEntity<Void> deleteSaldoByIdService(@PathVariable Integer id){
        TableSaldoService.deleteSaldoByIdService(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/saldo/update")
    public ResponseEntity<TableSaldo> updateSaldoService(@RequestBody TableSaldo TableSaldo){
        TableSaldo updatedSaldo = TableSaldoService.updateSaldoService(TableSaldo);
        return ResponseEntity.ok(updatedSaldo);
    }
}
