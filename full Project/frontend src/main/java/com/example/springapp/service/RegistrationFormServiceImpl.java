package com.example.springapp.service;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.entity.RegistrationFormEntity;
import com.example.springapp.repository.RegistrationFormRepository;

import java.util.List;

@Service
public class RegistrationFormServiceImpl implements RegistrationFormService {

    private final RegistrationFormRepository registrationFormRepository;

    // @Autowired
    public RegistrationFormServiceImpl(RegistrationFormRepository registrationFormRepository) {
        this.registrationFormRepository = registrationFormRepository;
    }

    @Override
    public RegistrationFormEntity saveRegistrationForm(RegistrationFormEntity registrationFormEntity) {
        // Add any business logic if needed
        return registrationFormRepository.save(registrationFormEntity);
    }

    @Override
    public List<RegistrationFormEntity> getAllRegistrationForms() {
        return registrationFormRepository.findAll();
    }
    
    @Override
    public RegistrationFormEntity updateRegistrationFormByName(String fullName, RegistrationFormEntity updatedEntity) {
        // Find the entity by name
        RegistrationFormEntity existingEntity = registrationFormRepository.findByFullName(fullName);

        // Update the fields with new values
        if (existingEntity != null) {
            existingEntity.setEmail(updatedEntity.getEmail());
            existingEntity.setPhoneNumber(updatedEntity.getPhoneNumber());
            existingEntity.setBirthDate(updatedEntity.getBirthDate());
            existingEntity.setGender(updatedEntity.getGender());
            existingEntity.setStreetAddress(updatedEntity.getStreetAddress());
            existingEntity.setCity(updatedEntity.getCity());
            existingEntity.setRegion(updatedEntity.getRegion());
            existingEntity.setPostalCode(updatedEntity.getPostalCode());
            existingEntity.setAadhaarNumber(updatedEntity.getAadhaarNumber());
            existingEntity.setPanNumber(updatedEntity.getPanNumber());
            existingEntity.setApplicantSalary(updatedEntity.getApplicantSalary());
            existingEntity.setLoanAmountRequired(updatedEntity.getLoanAmountRequired());

            // Save the updated entity
            return registrationFormRepository.save(existingEntity);
        }

        // Handle the case where the entity with the given name is not found
        return null;
    }

    @Override
    public void deleteRegistrationFormByName(String fullName) {
        // Find the entity by name
        RegistrationFormEntity existingEntity = registrationFormRepository.findByFullName(fullName);

        // Delete the entity if found
        if (existingEntity != null) {
            registrationFormRepository.delete(existingEntity);
        }
    }
    // Add other service methods as needed
}
