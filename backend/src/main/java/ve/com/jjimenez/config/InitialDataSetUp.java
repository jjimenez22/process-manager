package ve.com.jjimenez.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import ve.com.jjimenez.persistence.model.User;
import ve.com.jjimenez.persistence.repo.UserRepository;

@Component
public class InitialDataSetUp implements ApplicationListener<ContextRefreshedEvent> {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    @Autowired
    public InitialDataSetUp(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        User user = new User();
        user.setUsername("admin");
        user.setPassword(/*encoder.encode(*/"admin"/*)*/);
        user.setRole("ADMIN");
        userRepository.save(user);

        user = new User();
        user.setUsername("manager");
        user.setPassword(/*encoder.encode(*/"manager"/*)*/);
        user.setRole("MANAGER");
        userRepository.save(user);

        user = new User();
        user.setUsername("enduser");
        user.setPassword(/*encoder.encode(*/"enduser"/*)*/);
        user.setRole("END_USER");
        userRepository.save(user);
    }
}
