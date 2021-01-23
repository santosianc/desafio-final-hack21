package com.orbitallcorp.hack21.cards.controllers;

import com.orbitallcorp.hack21.cards.domains.Card;
import com.orbitallcorp.hack21.cards.domains.Erro;
import com.orbitallcorp.hack21.cards.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cards/paginationAndSorting")
public class CardController {

    @Autowired
    private CardService cardService;


    @GetMapping
    public Page<Card> pageAll(@RequestParam("page") Integer page,
                              @RequestParam("size") Integer size) {
        return cardService.pageAll(page, size);
    }
}
