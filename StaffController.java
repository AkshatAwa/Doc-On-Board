package com.hackaccino.doconboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hackaccino.doconboard.model.Staff;
import com.hackaccino.doconboard.repository.StaffRepository;


@RestController
@CrossOrigin("http://localhost:5173")
public class StaffController {

    @Autowired
    private StaffRepository staRepo;

    @PostMapping("/staffs")
    Staff newStaff(@RequestBody Staff newStaff){
        return staRepo.save(newStaff);
    }
}
