package ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.dao.NavItem;

@RestController
public class HomeController {
    @GetMapping("/123")
    public NavItem home() {
        return new NavItem("1","2");
    }
}
