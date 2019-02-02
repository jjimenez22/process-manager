//package ve.com.jjimenez.web.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//import ve.com.jjimenez.persistence.model.Process;
//import ve.com.jjimenez.web.service.ProcessService;
//
//@RestController
//@RequestMapping("/api/process")
//public class ProcessController {
//
//    private final ProcessService service;
//
//    @Autowired
//    public ProcessController(ProcessService service) {
//        this.service = service;
//    }
//
//    @GetMapping
//    private Iterable findAll() {
//        return service.findAll();
//    }
//
//    @GetMapping("/{id}")
//    private Process findById(@PathVariable Long id) {
//        return service.findById(id);
//    }
//
//    @PostMapping
//    @ResponseStatus(HttpStatus.CREATED)
//    private Process create(@RequestBody Process process) {
//        return service.save(process);
//    }
//
//    @PutMapping("/{id}")
//    private Process update(@PathVariable Long id, @RequestBody Process process) {
//        return service.save(process);
//    }
//
//    @DeleteMapping("{id}")
//    private void delete(@PathVariable Long id) {
//        service.delete(id);
//    }
//
//}
