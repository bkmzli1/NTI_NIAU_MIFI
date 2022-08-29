package ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.dao.NavItem;

import java.util.Set;
import java.util.UUID;

public interface NavItemRepo extends JpaRepository<NavItem, String> {
    NavItem findById(UUID id);
    NavItem findByName(String name);
    @Query("select max(t.number) from #{#entityName} t")
    int findMaxNumber();
}
