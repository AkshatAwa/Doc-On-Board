package com.hackaccino.doconboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackaccino.doconboard.model.DoctorDetails;

public interface DoctorDetailsRepo extends JpaRepository<DoctorDetails, Long> {

}
