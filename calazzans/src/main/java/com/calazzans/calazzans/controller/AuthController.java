package com.calazzans.calazzans.controller;

import com.calazzans.calazzans.entity.TableUsuario;
import com.calazzans.calazzans.repository.TableUsuarioRepository;
import com.calazzans.calazzans.dto.LoginRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private TableUsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        
        TableUsuario usuarioDoBanco = usuarioRepository.findByEmail(loginRequest.getEmail());

        if (usuarioDoBanco == null) {
            return ResponseEntity.badRequest().body("Usuário não encontrado");
        }

        if (!usuarioDoBanco.getSenha().equals(loginRequest.getSenha())) {
            return ResponseEntity.status(401).body("Senha incorreta");
        }

        return ResponseEntity.ok(usuarioDoBanco);
    }
}