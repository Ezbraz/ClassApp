package com.ufpb.classapp.repository;

import com.ufpb.classapp.models.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Integer> {

    //listar todos os estudantes
    List<Student> findAll();

    //pesquisar por estudante
    Student findStudentById(int id);

    //remover estudante
    void delete(Student student);

    //cadastrar ou editar estudante
    <Studentmod extends Student> Studentmod save(Studentmod student);
}

