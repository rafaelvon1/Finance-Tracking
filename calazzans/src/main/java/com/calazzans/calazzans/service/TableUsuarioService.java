package com.calazzans.calazzans.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.calazzans.calazzans.entity.TableUsuario;
import com.calazzans.calazzans.repository.TableUsuarioRepository;


@Service
public class TableUsuarioService {
    @Autowired
    TableUsuarioRepository TableUsuarioRepository;
    public List<TableUsuario> getAllUsuario() {
        List<TableUsuario> usuario = TableUsuarioRepository.findAll();
        return usuario;
    }

    public TableUsuario insertUsuarioService(TableUsuario TableUsuario) {
        return TableUsuarioRepository.save(TableUsuario);
    }

    public Optional<TableUsuario> getUsuarioService(Integer id){
        return TableUsuarioRepository.findById(id);
    }
    public void deleteUsuarioByIdService(Integer id){
        TableUsuarioRepository.deleteById(id);
    }
    public TableUsuario updateUsuarioService(TableUsuario TableUsuario){
        TableUsuario updatedProduct = TableUsuarioRepository.findById(TableUsuario.getid_usuario()).get();
        updatedProduct = TableUsuario;
        return TableUsuarioRepository.save(updatedProduct);
    }
    public List<TableUsuario> getAllNomeService(String nome){
        List<TableUsuario> usuario = TableUsuarioRepository.findByNome(nome);
        return usuario;
    }
}
