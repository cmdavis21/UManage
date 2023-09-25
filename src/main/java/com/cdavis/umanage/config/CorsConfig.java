package com.cdavis.curapatientChallenge.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() { // utilize webMvcConfigurer to customize spring MVC framework
        return new WebMvcConfigurer() { // create an instance of WebMvcConfigurer
            @Override
            public void addCorsMappings(@NonNull CorsRegistry registry) {
                // override the addCorsMappings method to configure CORS (Cross-Origin Resource Sharing) settings

                registry.addMapping("/**") // CORS mapping for all endpoints
                        .allowedOrigins("http://localhost:4200") // allow requests from the frontend (localhost:4200)
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // allow these HTTP methods in CORS requests
                        .allowedHeaders("authorization", "content-type", "accept", "X-API-Key") // allow these HTTP headers
                        .allowCredentials(true); // allow credentials (e.g., cookies) to be included in CORS requests
            }
        };
    }
}
