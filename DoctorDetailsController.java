package com.hackaccino.doconboard.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hackaccino.doconboard.model.DoctorDetails;
import com.hackaccino.doconboard.repository.DoctorDetailsRepo;

@RestController
@CrossOrigin("http://localhost:5173")
public class DoctorDetailsController {

    @Autowired
    private DoctorDetailsRepo doctordetailsRepo;

    @PostMapping("/doctor/docsetdetails")
    public DoctorDetails newDoctorDetails(@RequestBody DoctorDetails newDoctorDetails) {
        return doctordetailsRepo.save(newDoctorDetails);
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<DoctorDetails> getDoctorDetailsById(@PathVariable Long id) {
        Optional<DoctorDetails> optionalDoctorDetails = doctordetailsRepo.findById(id);
        if (optionalDoctorDetails.isPresent()) {
            return new ResponseEntity<>(optionalDoctorDetails.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getdoctordetails")
    public List<DoctorDetails> getAllDoctors() {
        return doctordetailsRepo.findAll();
    }
}