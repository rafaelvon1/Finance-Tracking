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

import com.calazzans.calazzans.entity.TableUsuario;
import com.calazzans.calazzans.service.TableUsuarioService;

@RestController
public class UsuarioRestCalazzans {
    @Autowired
    TableUsuarioService TableUsuarioService;

    //Retorna Lista de produtos

    @GetMapping("/usuarios")

    public List<TableUsuario> getAllUsuario() {
        List<TableUsuario> getusuario = TableUsuarioService.getAllUsuario();
        return getusuario;
    }

    @PostMapping("/usuarios/add")

    public ResponseEntity<TableUsuario> insertUsuarioService(@RequestBody TableUsuario Usuario) {
        TableUsuario newUsuario = TableUsuarioService.insertUsuarioService(Usuario);
        return new ResponseEntity<TableUsuario>(newUsuario, HttpStatus.OK);
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Optional<TableUsuario>> getUsuarioService(@PathVariable Integer id) {
        Optional<TableUsuario> Usuario_id = TableUsuarioService.getUsuarioService(id);
        return ResponseEntity.ok(Usuario_id);
    }

    @DeleteMapping("/usuarios/delete/{id}")
    public ResponseEntity<Void> deleteUsuarioByIdService(@PathVariable Integer id){
        TableUsuarioService.deleteUsuarioByIdService(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/usuarios/update")
    public ResponseEntity<TableUsuario> updateUsuarioService(@RequestBody TableUsuario Usuario){
        TableUsuario updatedUsuario = TableUsuarioService.updateUsuarioService(Usuario);
        return ResponseEntity.ok(updatedUsuario);
    }

    @GetMapping("/usuarios/consulta_nome")
    public ResponseEntity<List<TableUsuario>> findByNome(@RequestParam("nome") String nome) {
        List<TableUsuario> viewUsuario= TableUsuarioService.getAllNomeService(nome);
        return ResponseEntity.ok(viewUsuario);
    }
}
