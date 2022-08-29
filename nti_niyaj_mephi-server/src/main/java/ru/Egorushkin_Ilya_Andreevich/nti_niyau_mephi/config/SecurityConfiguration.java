package ru.Egorushkin_Ilya_Andreevich.nti_niyau_mephi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
public class SecurityConfiguration {
    @Bean
    @Order(1)
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/**").permitAll().anyRequest().authenticated().and().formLogin()
            .loginPage("/login").defaultSuccessUrl("/ordersCreate").permitAll().and().logout().permitAll().and().csrf()
            .disable().httpBasic();
        http.csrf().disable();
        return http.build();
    }
}

