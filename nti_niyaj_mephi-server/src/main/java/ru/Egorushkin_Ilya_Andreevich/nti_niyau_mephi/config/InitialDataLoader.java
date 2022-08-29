package ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.services.impl.NavItemService;

@Component
@CrossOrigin()
public class InitialDataLoader implements ApplicationRunner {

    final NavItemService navItemService;

    @Autowired
    public InitialDataLoader(NavItemService navItemService) {this.navItemService = navItemService;}

    @Override public void run(ApplicationArguments args) throws Exception {

    }
}
