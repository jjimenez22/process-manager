package ve.com.jjimenez.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import ve.com.jjimenez.persistence.model.user.User;
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
        User root = new User();
        root.setEmail("admin");
        root.setPassword(encoder.encode("admin"));
        root.setRole("ADMIN");
        userRepository.save(root);
    }
}
