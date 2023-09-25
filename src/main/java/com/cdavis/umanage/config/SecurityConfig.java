package com.cdavis.curapatientChallenge.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
public class SecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

    // method to configure the security filter chain.
    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {

        // add the ApiKeyFilter before the BasicAuthenticationFilter in the filter chain
        http.addFilterBefore(new ApiKeyFilter(), BasicAuthenticationFilter.class)
                .authorizeHttpRequests((requests) ->
                        requests
                                // permit all requests to the following endpoints without authentication
                                .requestMatchers(HttpMethod.POST, "/api/v1/employee/add").permitAll()
                                .requestMatchers(HttpMethod.PUT, "/api/v1/employee/**").permitAll()
                                .requestMatchers(HttpMethod.DELETE, "/api/v1/employee/**").permitAll()
                                .requestMatchers(HttpMethod.GET, "/api/v1/employee/**").permitAll()
                                // for any other request, authentication is required
                                .anyRequest().authenticated()
                );
        http
                .csrf().disable();

        // build and return the configured HttpSecurity object
        return http.build();
    }
}
