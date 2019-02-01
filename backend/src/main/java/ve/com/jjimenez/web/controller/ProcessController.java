package ve.com.jjimenez.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ve.com.jjimenez.persistence.model.Process;
import ve.com.jjimenez.persistence.repo.ProcessRepository;

@RestController
@RequestMapping("/api/process")
public class ProcessController {

    private final ProcessRepository repository;

    @Autowired
    public ProcessController(ProcessRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    private Iterable findAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    private Process findById(@PathVariable Long id) {
        return repository.findById(id).get();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    private Process create(@RequestBody Process process) {
        return repository.save(process);
    }

    @PutMapping("/{id}")
    private Process update(@PathVariable Long id, @RequestBody Process process) {
        return repository.save(process);
    }

    @DeleteMapping("{id}")
    private void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
