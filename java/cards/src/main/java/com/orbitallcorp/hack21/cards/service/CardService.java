package com.orbitallcorp.hack21.cards.service;

import com.orbitallcorp.hack21.cards.domains.Card;
import com.orbitallcorp.hack21.cards.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class CardService {

    @Autowired
    private CardRepository cardRepository;

    public Page<Card> pageAll(Integer page, Integer size) {

        if (page == null) {
            page = 1;
        } else if (size == null) {
            size = 10;
        }

        return cardRepository.findAll(PageRequest.of(page, size));
    }

    public Card save(Card card) {
        return cardRepository.save((card));
    }
}
