package ve.com.jjimenez.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ve.com.jjimenez.persistence.model.Dictum;
import ve.com.jjimenez.web.service.DictumService;

@RestController
@RequestMapping("/api/dictum")//todo separar manager de ender
public class DictumController {

    private final DictumService service;

    @Autowired
    public DictumController(DictumService service) {
        this.service = service;
    }

    @GetMapping
    public Iterable findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Dictum findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Dictum create(@RequestBody Dictum dictum) {
        return service.save(dictum);
    }

    @PutMapping("/{id}")
    public Dictum update(@PathVariable Long id, @RequestBody Dictum dictum) {
        return service.save(dictum);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}

