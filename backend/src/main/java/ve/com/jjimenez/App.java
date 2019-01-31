package ve.com.jjimenez;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("ve.com.jjimenez.persistence.repo")
@EntityScan("ve.com.jjimenez.persistence.model")
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
