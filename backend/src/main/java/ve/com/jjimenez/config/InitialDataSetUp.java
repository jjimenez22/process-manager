package ve.com.jjimenez.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import ve.com.jjimenez.persistence.model.User;
import ve.com.jjimenez.persistence.repo.UserRepository;

@Component
public class InitialDataSetUp implements ApplicationListener<ContextRefreshedEvent> {

    private final UserRepository userRepository;

    @Autowired
    public InitialDataSetUp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        User user = new User();
        user.setUsername("admin");
        user.setPassword("admin");
        user.setRole("ADMIN");
        userRepository.save(user);

        user = new User();
        user.setUsername("manager");
        user.setPassword("manager");
        user.setRole("MANAGER");
        userRepository.save(user);

        user = new User();
        user.setUsername("enduser");
        user.setPassword("enduser");
        user.setRole("END_USER");
        userRepository.save(user);
    }
}
