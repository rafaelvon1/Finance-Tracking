package com.calazzans.calazzans.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.calazzans.calazzans.entity.TableSaldo;
import com.calazzans.calazzans.repository.TableSaldoRepository;

@Service
public class TableSaldoService {
    @Autowired
    TableSaldoRepository TableSaldoRepository;
    public List<TableSaldo> getAllSaldo() {
        List<TableSaldo> saldo = TableSaldoRepository.findAll();
        return saldo;
    }

    public TableSaldo insertSaldoService(TableSaldo TableUsuario) {
        return TableSaldoRepository.save(TableUsuario);
    }

    public Optional<TableSaldo> getSaldoService(Integer id){
        return TableSaldoRepository.findById(id);
    }
    public void deleteSaldoByIdService(Integer id){
        TableSaldoRepository.deleteById(id);
    }
    public TableSaldo updateSaldoService(TableSaldo TableSaldo){
        TableSaldo updatedProduct = TableSaldoRepository.findById(TableSaldo.getId()).get();
        updatedProduct = TableSaldo;
        return TableSaldoRepository.save(updatedProduct);
    }
    public List<TableSaldo> saldo_user(int id){
        List<TableSaldo> Saldo = TableSaldoRepository.saldo_user (id);
        return Saldo;
    }
    
}
