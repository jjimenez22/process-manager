package ve.com.jjimenez.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ve.com.jjimenez.persistence.model.Dictum;
import ve.com.jjimenez.persistence.repo.DictumRepository;

@Service
@Transactional
public class DictumService {

    private final DictumRepository repository;

    @Autowired
    public DictumService(DictumRepository repository) {
        this.repository = repository;
    }

    public Iterable<Dictum> findAll() {
        return repository.findAll();
    }

    public Dictum findById(Long id) {
        return repository.findById(id).get();
    }

    public Dictum save(Dictum dictum) {
        return repository.save(dictum);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
