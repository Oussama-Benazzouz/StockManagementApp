package com.example.stockmanagementbackend.controller;


import com.example.stockmanagementbackend.model.client;
import com.example.stockmanagementbackend.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping
    public client saveClient(@RequestBody client client) {
        return clientService.saveClient(client);
    }

    @GetMapping
    public List<client> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{id}")
    public Optional<client> getClientById(@PathVariable int id) {
        return clientService.getClientById(id);
    }

    @PutMapping("/{id}")
    public client updateClient(@PathVariable int id, @RequestBody client client) {
        return clientService.updateClient(id, client);
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable int id) {
        clientService.deleteClient(id);
    }
}
