package ve.com.jjimenez.persistence.repo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import ve.com.jjimenez.persistence.model.User;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

/**
 * {@link UserRepository} integration tests
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository repository;

    /**
     * When findByUsername is called, should return the corresponding {@link User}
     *
     * @see UserRepository#findByUsername(String)
     */
    @Test
    public void whenFindByUsername_thenReturnUser() {
//        given
        User user = new User();
        user.setUsername("whenFindByUsername");
        user.setPassword("test");
        user.setRole("role");
        repository.save(user);

//        when
        Optional<User> found = repository.findByUsername(user.getUsername());

//        then
        assertTrue(found.isPresent());
        assertEquals(user.getUsername(), found.get().getUsername());
    }

    /**
     * When findAllByRole is called, should return a list with {@link User}s with that role.
     * @see UserRepository#findAllByRole(String)
     */
    @Test
    public void whenFindAllByRole_thenReturnUser() {
//        given
        User user = new User();
        user.setUsername("whenFindAllByRole");
        user.setPassword("test");
        user.setRole("role");
        repository.save(user);

//        when
        List<User> found = repository.findAllByRole(user.getRole());

//        then
        assertFalse(found.isEmpty());
        assertEquals(user.getRole(), found.get(0).getRole());
    }
}