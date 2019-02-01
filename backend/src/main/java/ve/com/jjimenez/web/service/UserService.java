package ve.com.jjimenez.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ve.com.jjimenez.persistence.model.user.ResponseUserDTO;
import ve.com.jjimenez.persistence.model.user.User;
import ve.com.jjimenez.persistence.model.user.UserDTO;
import ve.com.jjimenez.persistence.repo.UserRepository;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class UserService {

    private final UserRepository repository;
    private final PasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository repository, PasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }

    public Iterable findAll() {
        return StreamSupport.stream(repository.findAll().spliterator(), true)
                .map(this::fromUserToDTO)
                .collect(Collectors.toList());
    }

    public ResponseUserDTO findById(Long id) {
        return fromUserToDTO(repository.findById(id).get());
    }//todo: notfound exception

    public ResponseUserDTO save(UserDTO dto) {
        return fromUserToDTO(repository.save(fromDTOtoUser(dto)));
    }

    public ResponseUserDTO update(Long id, UserDTO dto) {
        User user = fromDTOtoUser(dto);
        user.setId(id);
        return fromUserToDTO(repository.save(user));
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private User fromDTOtoUser(UserDTO dto) {
        User user = new User();
        user.setPassword(encoder.encode(dto.getPassword()));
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        return user;
    }

    private ResponseUserDTO fromUserToDTO(User user) {
        ResponseUserDTO dto = new ResponseUserDTO();
        dto.setId(user.getId());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        return dto;
    }
}
