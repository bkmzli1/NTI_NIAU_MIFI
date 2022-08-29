package ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.exceptions.OKExceptions;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.model.NavItemModel;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.services.service.NavItemServiceImpl;

@RestController("")
public class NavItemController {
    private final NavItemServiceImpl navItemService;

    public NavItemController(NavItemServiceImpl navItemService) {this.navItemService = navItemService;}

    @PostMapping(value = "/create")
    @ResponseBody
    public void create(@RequestBody NavItemModel navItemModel) {
        navItemService.create(navItemModel);
    }
}
