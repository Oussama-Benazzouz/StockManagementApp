package com.example.stockmanagementbackend.service;

import com.example.stockmanagementbackend.model.client;

import java.util.List;
import java.util.Optional;

public interface ClientServiceInterface {

    public client saveClient(client client);
    public Optional<client> getClientById(int id);
    List<client> getAllClients();
    client updateClient(int id, client client);
    void deleteClient(int id);
}
