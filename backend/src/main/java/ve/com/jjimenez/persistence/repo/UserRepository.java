package ve.com.jjimenez.persistence.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import ve.com.jjimenez.persistence.model.user.User;

import java.util.Optional;

@Repository
@CrossOrigin
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByUsername(String username);

//    @Override
//    @RestResource(exported = false)
//    <S extends User> S save(S s);
}
