package com.example.stockmanagementbackend.repository;

import com.example.stockmanagementbackend.model.client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<client, Integer> {
}
