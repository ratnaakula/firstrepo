package com.example.demo.controller;

import com.example.demo.model.Customer;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

//it is feature branch
// it is master branch
@RestController
public class RestWebController {

    List<Customer> cust = new ArrayList<Customer>();

    @RequestMapping(value = "/getallcustomer", method = RequestMethod.GET)
    public List<Customer> getResource(){
        return cust;
    }

    @RequestMapping(value="/postcustomer", method=RequestMethod.POST)
    public String postCustomer(@RequestBody Customer customer){
        cust.add(customer);
        return "Sucessful!";
    }

    @RequestMapping("/roles")
    public List<String> roles() {
        List<String> model = new ArrayList<>();
        model.add("Administrator");
        model.add("Super Admin");
        model.add("User");
        model.add("View-Only");
        return model;
    }


    @RequestMapping("/users")
    public List<String> users() {
        List<String> model = new ArrayList<>();
        model.add("Ratna Akula");
        model.add("Venkata Akula");
        model.add("Prathyusha Akula");
        model.add("Raj Akula");
        return model;
    }
}
