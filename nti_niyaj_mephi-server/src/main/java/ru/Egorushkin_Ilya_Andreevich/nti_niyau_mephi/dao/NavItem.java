package ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.dao;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Set;
import java.util.TreeSet;
import java.util.UUID;

@Entity public class NavItem implements Comparable<NavItem> {
    @Id
    @GeneratedValue(generator = "UUID")
    @Column(name = "id", nullable = false)
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;
    private int number;
    @Column(unique = true, nullable = false, length = 255) private String name;
    @Column(unique = true, nullable = false) private String url;
    @OneToMany(fetch = FetchType.EAGER) private Set<NavItem> navItems = new TreeSet<>();

    public NavItem() {}

    public NavItem(String name, String url, int number) {
        this.number = number;
        this.name = name;
        this.url = url;
    }

    public NavItem(String name, String url) {
        this.name = name;
        this.url = url;
    }

    public UUID getId() {return id;}

    public void setId(UUID id) {this.id = id;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getUrl() {return url;}

    public void setUrl(String url) {this.url = url;}

    public Set<NavItem> getNavItems() {return navItems;}

    public void setNavItems(Set<NavItem> navItem) {this.navItems = navItem;}

    public int getNumber() {return number;}

    public void setNumber(int number) {this.number = number;}

    @Override public int compareTo(NavItem o) {return this.getNumber() - o.getNumber();}

    public void addNavItem(NavItem navItem) {this.navItems.add(navItem);}
}
