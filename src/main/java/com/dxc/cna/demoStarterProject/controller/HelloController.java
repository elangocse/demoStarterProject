package com.dxc.cna.demoStarterProject.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping("/greet")
    public String index() {
        return "Greetings from Spring Starter Project !";
    }

}
