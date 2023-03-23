package com.example.configs;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET","POST","PUT","PATCH","OPTIONS","DELETE")
                .allowedHeaders("Authorization","x-xsrf-token",
                        "Access-Control-Allow-Headers", "Origin",
                        "Accept", "X-Requested-With", "Content-Type",
                        "Access-Control-Request-Method",
                        "Access-Control-Request-Headers", "Auth-Id-Token");
    }

}
