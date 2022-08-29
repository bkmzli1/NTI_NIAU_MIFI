package ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.services.service;

import org.springframework.stereotype.Service;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.dao.NavItem;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.model.NavItemModel;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.repo.NavItemRepo;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.services.impl.NavItemService;

import java.util.Set;

@Service
public class NavItemServiceImpl implements NavItemService {
    private final NavItemRepo navItemRepo;

    public NavItemServiceImpl(NavItemRepo navItemRepo) {this.navItemRepo = navItemRepo;}

    @Override public void create(NavItemModel navItemModel) {
        if (navItemModel.getNumber() != -1)
            navItemRepo.save(new NavItem(navItemModel.getName(), navItemModel.getUrl(), navItemModel.getNumber()));
        else try {
            navItemRepo.save(new NavItem(navItemModel.getName(), navItemModel.getUrl(), navItemRepo.findMaxNumber()+1));
        } catch (Exception e) {
            navItemRepo.save(new NavItem(navItemModel.getName(), navItemModel.getUrl(), 0));
        }
    }


}
