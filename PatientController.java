package com.hackaccino.doconboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hackaccino.doconboard.model.Patienth;
import com.hackaccino.doconboard.repository.Patientrepository;

@RestController
@CrossOrigin("http://localhost:5173")
public class PatientController {

    @Autowired
    private Patientrepository patRepo;

    @PostMapping("/patients")
    Patienth newPatient(@RequestBody Patienth newPatient){
        return patRepo.save(newPatient);
    }
}
