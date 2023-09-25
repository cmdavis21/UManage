package com.cdavis.umanage.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class ApiKeyFilter extends OncePerRequestFilter {

    // the expected API key for authentication
    private final String apiKey = "Sp4MdhkAuSCYoQdCWXSet5ssrwCXK1VarT5qM2cl1fPgkWSPqMP5kLFUa5jUAahZcunW1M1Eme8AfGTyMlrT6g==";

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request, // represents the incoming http request
            @NonNull HttpServletResponse response, // represents the http response to be sent back
            @NonNull FilterChain filterChain // represents a chain of filters to process the request
    ) throws ServletException, IOException {
        // retrieve the API key from the "X-API-Key" header of the request
        String providedApiKey = request.getHeader("X-API-Key");

        // check if the provided API key matches the expected API key
        if (apiKey.equals(providedApiKey)) {
            // if the API key is valid, continue processing the request
            filterChain.doFilter(request, response); // pass the request/response to the next filter in the chain
        } else {
            // if the API key is invalid, return an "Unauthorized" response
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Unauthorized");


        }
    }
}
