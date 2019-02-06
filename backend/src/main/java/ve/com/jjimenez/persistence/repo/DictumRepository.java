package ve.com.jjimenez.persistence.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import ve.com.jjimenez.persistence.model.Dictum;

/**
 * {@link Dictum} repository and Rest Resource exposed
 */
@Repository
@CrossOrigin
public interface DictumRepository extends CrudRepository<Dictum, Long> {
}
