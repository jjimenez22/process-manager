//package ve.com.jjimenez.web.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//import ve.com.jjimenez.persistence.model.user.ResponseUserDTO;
//import ve.com.jjimenez.persistence.model.user.UserDTO;
//import ve.com.jjimenez.web.service.UserService;
//
//@RestController
//@RequestMapping("/api/admin")
//public class AdminController {
//
//    private final UserService service;
//
//    @Autowired
//    public AdminController(UserService service) {
//        this.service = service;
//    }
//
//    @PostMapping
//    @ResponseStatus(HttpStatus.CREATED)
//    public ResponseUserDTO register(@RequestBody UserDTO user) {
//        return service.save(user);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseUserDTO update(@PathVariable Long id, @RequestBody UserDTO user) {
//        return service.save(user);
//    }
//
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable Long id) {
//        service.delete(id);
//    }
//}
