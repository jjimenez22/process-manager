package ve.com.jjimenez.persistence.repo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import ve.com.jjimenez.persistence.model.User;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
class UserRepositoryTest {

    @Autowired
    EntityManager entityManager;

    @Autowired
    UserRepository repository;

    @Test
    public void whenFindByUsername_thenReturnUser() {
//        given
        User user = new User();
        user.setUsername("test");
        entityManager.persist(user);
        entityManager.flush();

//        when
        Optional<User> found = repository.findByUsername(user.getUsername());

//        then
        assertTrue(found.isPresent());
        assertEquals(user.getUsername(), found.get().getUsername());
    }

    @Test
    public void whenFindAllByRole_thenReturnUser() {
//        given
        User user = new User();
        user.setUsername("test");
        user.setRole("role");
        entityManager.persist(user);
        entityManager.flush();

//        when
        List<User> found = repository.findAllByRole(user.getRole());

//        then
        assertFalse(found.isEmpty());
        assertEquals(user.getRole(), found.get(0).getRole());
    }
}