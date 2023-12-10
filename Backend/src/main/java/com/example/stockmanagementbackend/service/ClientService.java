package com.example.stockmanagementbackend.service;

import com.example.stockmanagementbackend.model.client;
import com.example.stockmanagementbackend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService implements ClientServiceInterface{

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public client saveClient(client client) {
        return clientRepository.save(client);
    }

    @Override
    public Optional<client> getClientById(int id) {
        return clientRepository.findById(id);
    }

    @Override
    public List<client> getAllClients() {
        return clientRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public client updateClient(int id, client client) {
       client clientToUpdate = clientRepository.findById(id).orElseThrow();
       clientToUpdate.setFirstName(client.getFirstName());
       clientToUpdate.setLastName(client.getLastName());
       clientToUpdate.setEmail(client.getEmail());
       clientToUpdate.setPhone(client.getPhone());
       return clientRepository.save(clientToUpdate);
    }

    @Override
    public void deleteClient(int id) {
        clientRepository.deleteById(id);
    }
}
