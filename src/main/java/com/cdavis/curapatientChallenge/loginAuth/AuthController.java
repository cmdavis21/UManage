package com.cdavis.curapatientChallenge.loginAuth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth/login")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // endpoint to verify username and password saved in the userRepository
    @PostMapping
    public ResponseEntity<String> login(@RequestBody User user) {
        // retrieve the username and password from the client's login request
        String username = user.getUsername();
        String password = user.getPassword();

        // find if a user with the provided username exists in the userRepository
        User storedUser = userRepository.findByUsername(username);

        // check if the login credentials in the userRepository match the login supplied by the client
        if (storedUser != null && passwordEncoder.matches(password, storedUser.getPassword())) {
            // if authentication is successful, return an "Authentication successful" response
            try {
                return ResponseEntity.ok("Authentication successful");
            } catch (Exception e) {
                throw new IllegalArgumentException(e);
            }
        } else {
            // if authentication fails, return an "Authentication failed" response with HTTP status UNAUTHORIZED
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }
}
