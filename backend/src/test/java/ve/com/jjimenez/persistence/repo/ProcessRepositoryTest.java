package ve.com.jjimenez.persistence.repo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import ve.com.jjimenez.persistence.model.Dictum;
import ve.com.jjimenez.persistence.model.Process;
import ve.com.jjimenez.persistence.model.User;

import java.io.Serializable;
import java.util.Collections;
import java.util.HashSet;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * {@link ProcessRepository} integration tests
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ProcessRepositoryTest {

    @Autowired
    ProcessRepository repository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    DictumRepository dictumRepository;

    /**
     * When {@link Process} is deleted, shouldn't delete related {@link User}s
     *
     * @see ProcessRepository#delete(Serializable)
     */
    @Test
    public void whenDelete_thenUserNotDeleted() {
//        given
        User user = new User();
        user.setUsername("UserNotDeleted");
        user.setPassword("test");
        user.setRole("role");
        user = userRepository.save(user);

        Process process = new Process();
        process.setName("UserNotDeleted");
        process = repository.save(process);
        process.setUsers(new HashSet<>(Collections.singletonList(user)));
        process = repository.save(process);

//        when
        repository.delete(process);

//        then
        User related = userRepository.findOne(user.getId());
        assertNotNull(related);
    }

    /**
     * When {@link Process} is deleted, should delete related {@link Dictum}s
     * @see ProcessRepository#delete(Serializable)
     */
    @Test
    public void whenDelete_thenDictumDeleted() {
        //        given
        Dictum dictum = new Dictum();
        dictum.setTitle("DictumDeleted");
        dictum.setContent("content");
        dictum = dictumRepository.save(dictum);

        Process process = new Process();
        process.setName("UserNotDeleted");
        process = repository.save(process);
        process.setDictums(new HashSet<>(Collections.singletonList(dictum)));
        process = repository.save(process);

//        when
        repository.delete(process);

//        then
        Dictum related = dictumRepository.findOne(dictum.getId());
        assertNull(related);
    }
}