package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

// it is feature branch
@Controller
public class WebController {
    @RequestMapping(value="/",method = RequestMethod.GET)
    public String homepage(){
        return "index";
    }
}