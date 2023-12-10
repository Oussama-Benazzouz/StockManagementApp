package com.example.stockmanagementbackend.repository;

import com.example.stockmanagementbackend.model.Part;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartsRepository extends JpaRepository<Part, Integer>{

}
