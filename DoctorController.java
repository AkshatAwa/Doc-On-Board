package com.hackaccino.doconboard.controller;

import org.springframework.beans.factory.annotation.Autowired;

import com.hackaccino.doconboard.model.Doctorh;
import com.hackaccino.doconboard.repository.DoctorRepository;


import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin("http://localhost:5173")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepo;

    @PostMapping("/doctors")
    public Doctorh newDoctor(@RequestBody Doctorh newDoctor) {
        return doctorRepo.save(newDoctor);
    }
    @GetMapping("/getdoctors")
    public List<Doctorh> getAllDoctors() {
        return doctorRepo.findAll();
    }
}
