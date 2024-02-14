package com.example.springapp.service;

import java.util.List;

import com.example.springapp.entity.ApplyEntity;

public interface ApplyService {

    ApplyEntity saveApply(ApplyEntity applyEntity);

    List<ApplyEntity> getAllApplies();
   
    // Add other service methods as needed
}
