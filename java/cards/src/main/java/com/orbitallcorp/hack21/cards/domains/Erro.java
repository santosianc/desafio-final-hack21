package com.orbitallcorp.hack21.cards.domains;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Erro {
    private String message;

    public Erro(String message) {
        this.message = message;
    }
}
