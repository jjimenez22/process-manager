package ve.com.jjimenez.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ve.com.jjimenez.persistence.model.user.ResponseUserDTO;
import ve.com.jjimenez.persistence.model.user.UserDTO;
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

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseUserDTO create(@RequestBody UserDTO user) {
        return service.save(user);
    }

    @PutMapping("/{id}")
    public ResponseUserDTO update(@PathVariable Long id, @RequestBody UserDTO user) {
        return service.save(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
