package ve.com.jjimenez.persistence.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ve.com.jjimenez.persistence.model.Process;

@Repository
public interface ProcessRepository extends CrudRepository<Process, Long> {
}
