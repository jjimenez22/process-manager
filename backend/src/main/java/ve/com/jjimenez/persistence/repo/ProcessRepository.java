package ve.com.jjimenez.persistence.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import ve.com.jjimenez.persistence.model.Process;

@Repository
@CrossOrigin
public interface ProcessRepository extends CrudRepository<Process, Long> {
}
