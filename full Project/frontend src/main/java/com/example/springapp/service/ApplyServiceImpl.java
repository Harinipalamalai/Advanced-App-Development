package com.example.springapp.service;

import org.springframework.stereotype.Service;

import com.example.springapp.entity.ApplyEntity;
import com.example.springapp.repository.ApplyRepository;

import java.util.List;

@Service
public class ApplyServiceImpl implements ApplyService {

    private final ApplyRepository applyRepository;

    public ApplyServiceImpl(ApplyRepository applyRepository) {
        this.applyRepository = applyRepository;
    }

    @Override
    public ApplyEntity saveApply(ApplyEntity applyEntity) {
        // Add any business logic if needed
        return applyRepository.save(applyEntity);
    }

    @Override
    public List<ApplyEntity> getAllApplies() {
        return applyRepository.findAll();
    }

}
