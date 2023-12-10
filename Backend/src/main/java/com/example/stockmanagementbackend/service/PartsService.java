package com.example.stockmanagementbackend.service;

import com.example.stockmanagementbackend.model.Part;
import com.example.stockmanagementbackend.repository.PartsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PartsService implements PartsServiceInterface{

    @Autowired
    private PartsRepository partsRepository;

    @Override
    public Part savePart(Part part) {
        return partsRepository.save(part);
    }

    @Override
    public Optional<Part> getPartById(int id) {
        return partsRepository.findById(id);
    }

    @Override
    public List<Part> getAllParts() {
        return partsRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Part updatePart(int id, Part part) {
        Part partToUpdate = partsRepository.findById(id).orElseThrow();
        partToUpdate.setPartName(part.getPartName());
        partToUpdate.setDescription(part.getDescription());
        partToUpdate.setCategory(part.getCategory());
        partToUpdate.setQuantity(part.getQuantity());
        partToUpdate.setPrice(part.getPrice());
        return partsRepository.save(partToUpdate);
    }

    @Override
    public void deletePart(int id) {
        partsRepository.deleteById(id);
    }
}
