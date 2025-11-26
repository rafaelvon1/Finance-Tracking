package com.calazzans.calazzans.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.calazzans.calazzans.entity.TableDespesa;
import com.calazzans.calazzans.repository.TableDespesaRepository;


@Service
public class TableDespesaService {
   @Autowired
   TableDespesaRepository TableDespesaRepository;
   public List<TableDespesa> getAllDespesa() {
        List<TableDespesa> despesa = TableDespesaRepository.findAll();
        return despesa;
   }
   public TableDespesa insertDespesaService(TableDespesa TableDespesa)throws Exception{
     try {
        return TableDespesaRepository.save(TableDespesa);
     } catch (Exception e) {
        throw new Exception("IMC não atualizado");
     }
   }
   public Optional<TableDespesa> getDespesaService(Integer id){
        return TableDespesaRepository.findById(id);
   }
   public void deleteDespesaByIdService(Integer id){
        TableDespesaRepository.deleteById(id);
   }
   public TableDespesa updateDespesaService(TableDespesa TableDespesa){
        TableDespesa updateDespesa = TableDespesaRepository.findById(TableDespesa.getId()).get();
        updateDespesa = TableDespesa;
        return TableDespesaRepository.save(updateDespesa);
   }
   public List<TableDespesa> Despesa_user(int id){
        List<TableDespesa> despesa = TableDespesaRepository.despesa_user(id);
        return despesa;
   }
   public void Despesa_meta(int idUsuario, String metaGasto) {
        TableDespesaRepository.Despesa_meta(idUsuario, metaGasto);
    }
  
}
