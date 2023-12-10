package com.example.stockmanagementbackend.controller;

import com.example.stockmanagementbackend.model.Part;
import com.example.stockmanagementbackend.service.PartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/parts")
public class PartController {

    @Autowired
    private PartsService partsService;

    @PostMapping
    public Part savePart(@RequestBody Part part) {
        return partsService.savePart(part);
    }

    @GetMapping
    public List<Part> getAllParts() {
        return partsService.getAllParts();
    }

    @GetMapping("/{id}")
    public Optional<Part> getPartById(@PathVariable int id) {
        return partsService.getPartById(id);
    }

    @PutMapping("/{id}")
    public Part updatePart(@PathVariable int id, @RequestBody Part part) {
        return partsService.updatePart(id, part);
    }

    @DeleteMapping("/{id}")
    public void deletePart(@PathVariable int id) {
        partsService.deletePart(id);
    }
}
