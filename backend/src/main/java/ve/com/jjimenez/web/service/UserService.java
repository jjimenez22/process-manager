package ve.com.jjimenez.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ve.com.jjimenez.persistence.model.User;
import ve.com.jjimenez.persistence.model.UserDTO;
import ve.com.jjimenez.persistence.repo.UserRepository;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class UserService {

    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public Iterable findAll() {
        return StreamSupport.stream(repository.findAll().spliterator(), true)
                .map(this::dtoFromUser)
                .collect(Collectors.toList());
    }

    public UserDTO findById(Long id) {
        return dtoFromUser(repository.findById(id).get());
    }

    public UserDTO save(UserDTO dto) {
        return dtoFromUser(repository.save(userFromDto(dto)));
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private User userFromDto(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setPassword(dto.getPassword());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        return user;
    }

    private UserDTO dtoFromUser(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setPassword(user.getPassword());
        return dto;
    }
}
