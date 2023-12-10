package com.example.stockmanagementbackend.service;

import com.example.stockmanagementbackend.model.Part;

import java.util.List;
import java.util.Optional;

public interface PartsServiceInterface {

    public Part savePart(Part part);
    public Optional<Part> getPartById(int id);
    List<Part> getAllParts();
    Part updatePart(int id, Part part);
    void deletePart(int id);
}
