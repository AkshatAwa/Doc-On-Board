package com.hackaccino.doconboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackaccino.doconboard.model.Patienth;

public interface Patientrepository extends JpaRepository<Patienth, Long> {

}
