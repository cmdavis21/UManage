package com.cdavis.curapatientChallenge.config;

import java.security.SecureRandom;
import java.util.Base64;

public class ApiKeyGenerator {
    public static void main(String[] args) {
        // generate a random api key of 64 bytes
        byte[] apiKeyBytes = new byte[64];
        new SecureRandom().nextBytes(apiKeyBytes);

        // encode the API key as a Base64 string
        String apiKey = Base64.getEncoder().encodeToString(apiKeyBytes);

        // print the generated API key to the console
        System.out.println("Generated API Key: " + apiKey);
    }
}
