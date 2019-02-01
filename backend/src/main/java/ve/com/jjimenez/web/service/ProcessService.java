package ve.com.jjimenez.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ve.com.jjimenez.persistence.model.Process;
import ve.com.jjimenez.persistence.repo.ProcessRepository;

@Service
@Transactional
public class ProcessService {

    private final ProcessRepository repository;

    @Autowired
    public ProcessService(ProcessRepository repository) {
        this.repository = repository;
    }

    public Iterable<Process> findAll() {
        return repository.findAll();
    }

    public Process findById(Long id) {
        return repository.findById(id).get();
    }

    public Process save(Process process) {
        return repository.save(process);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
