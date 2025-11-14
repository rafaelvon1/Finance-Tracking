package com.calazzans.calazzans.service;

import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
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
        /*when(TableDespesaRepository.findById(id)).thenReturn(Optional.of(TableDespesa));
        when(TableDespesaRepository.save(TableDespesa)).thenReturn(TableDespesa);*/

        // mockado(mosquito)
        when(TableDespesaRepository.save(despesa)).thenReturn(despesa);
        //Act
        TableDespesa  resultado  =  service.insertDespesaService(despesa);
    
        

        //Assert

        verify(TableDespesaRepository, times(1)).save(despesa);
        assertEquals(despesa, resultado);
        /*verify(alunoRepository, times(1)).findById(id);
        verify(alunoRepository, times(1)).save(any());
        assertEquals(aluno.getMassaatual(), novamassa);*/
    }

    /*@Test
    @DisplayName("Should Update IMC from Aluno unsuccessfully")
    void updateImcAlunoServiceUnSuccessfully() throws Exception{

        //Arrange
        //não precisaria que simular id e nova massa de um estudante
        Integer id = 1;
        Double novamassa = 120D;

        //não precisaria simular dados de um aluno no BD
        Aluno aluno = new Aluno(1,"Dath Vader", 160D, 1.82, 48.3);

        //simula chamadas de métodos "mockados"
        when(alunoRepository.findById(id)).thenReturn(Optional.empty());

        //Act
        Exception exception = assertThrows(Exception.class, () -> {
            alunoService.updateImcAlunoService(id, novamassa).get();
        });

        //Assert
        assertEquals("IMC não atualizado", exception.getMessage());
    }
}*/


}
