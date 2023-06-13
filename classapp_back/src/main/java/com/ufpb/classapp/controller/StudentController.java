package com.ufpb.classapp.controller;

import com.ufpb.classapp.models.Message;
import com.ufpb.classapp.models.Student;
import com.ufpb.classapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class StudentController {

    //ações
    @Autowired
    private StudentRepository actions;


    //listar estudantes
    @RequestMapping(value="/students", method=RequestMethod.GET)
    public @ResponseBody List<Student> list() {
        return actions.findAll();
    }

    //cadastrar alunos
    @RequestMapping(value="/students", method = RequestMethod.POST)
    public @ResponseBody Student register(@RequestBody Student student) {
        return actions.save(student);
    }

    //filtrar alunos
    @RequestMapping(value="/students/{id}", method = RequestMethod.GET)
    public @ResponseBody Student filter(@PathVariable Integer id){
        return actions.findStudentById(id);
    }

    //editar alunois
    @RequestMapping(value="/students", method = RequestMethod.PUT)
    public @ResponseBody Student edit(@RequestBody Student student) {
        return actions.save(student);
    }

    //deletar

    @RequestMapping(value="/students/{id}", method = RequestMethod.DELETE)
    public @ResponseBody Message delete(@PathVariable Integer id){
        Message message = new Message();
        try{
        Student student = filter(id);
        this.actions.delete(student);
        message.setMessage("Aluno removido com sucesso!");
        } catch (Exception erro) {
            message.setMessage("falha ao remover aluno: " +erro.getMessage());
        }
        return message;

    }


}
