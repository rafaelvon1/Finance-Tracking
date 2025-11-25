package com.calazzans.calazzans.service;

import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import com.calazzans.calazzans.entity.TableDespesa;
import com.calazzans.calazzans.repository.TableDespesaRepository;

class service {
    @Mock
    TableDespesaRepository TableDespesaRepository;

    @Autowired
    @InjectMocks
    TableDespesaService service;
     
    @BeforeEach
    void initializeMocks(){
        MockitoAnnotations.openMocks(this);
    }
    @Test
    @DisplayName("Teste Unitario Calazzans")
    void InsertDespesaServiceSuccessfully() throws Exception{

        //Arrange

        //simula dados de um aluno no BD
        TableDespesa despesa = new TableDespesa(1,1,"Descrição",22.99,"alimentação","pendente","Semanal","pix",5,null,LocalDate.of(2025, 11, 12));

        //simula chamadas de métodos "mockados"
        when(TableDespesaRepository.save(despesa)).thenReturn(despesa);

        //Act
        TableDespesa  resultado  =  service.insertDespesaService(despesa);
    
        
        //Assert

        verify(TableDespesaRepository, times(1)).save(despesa);
        assertEquals(despesa, resultado);
    }

    @Test
    @DisplayName("Should Update IMC from Aluno unsuccessfully")
    void InsertDespesaServiceUnSuccessfully() throws Exception{

        //Arrange
        TableDespesa despesa = new TableDespesa();

        //simula chamadas de métodos "mockados"
        when(TableDespesaRepository.save(any()))
            .thenThrow(new RuntimeException("Database error"));

        //Act
        Exception exception = assertThrows(Exception.class, () -> {
            service.insertDespesaService(despesa);
        });

        //Assert
        assertEquals("IMC não atualizado", exception.getMessage());
    }
}


