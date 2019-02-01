package ve.com.jjimenez.persistence.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ve.com.jjimenez.persistence.model.user.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
