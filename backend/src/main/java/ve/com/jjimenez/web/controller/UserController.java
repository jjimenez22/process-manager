package ve.com.jjimenez.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ve.com.jjimenez.persistence.model.user.ResponseUserDTO;
import ve.com.jjimenez.web.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public Iterable findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseUserDTO findById(@PathVariable Long id) {
        return service.findById(id);
    }

}
