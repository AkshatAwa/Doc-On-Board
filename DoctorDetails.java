package com.hackaccino.doconboard.model;

import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class DoctorDetails {

    @Id
    @GeneratedValue

    private Long id;
    private LocalTime starttime;
    private LocalTime endtime;
    private String location;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public LocalTime getStarttime() {
        return starttime;
    }
    public void setStarttime(LocalTime starttime) {
        this.starttime = starttime;
    }
    public LocalTime getEndtime() {
        return endtime;
    }
    public void setEndtime(LocalTime endtime) {
        this.endtime = endtime;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
}
