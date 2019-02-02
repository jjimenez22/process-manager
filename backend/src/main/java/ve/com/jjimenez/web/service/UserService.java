package ve.com.jjimenez.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ve.com.jjimenez.persistence.model.user.ResponseUserDTO;
import ve.com.jjimenez.persistence.model.user.User;
import ve.com.jjimenez.persistence.model.user.UserDTO;
import ve.com.jjimenez.persistence.repo.UserRepository;

@Service
@Transactional
public class UserService {

    private final UserRepository repository;
    private final PasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository repository, PasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }

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
        user.setRole(dto.getRole());
        return user;
    }

    private ResponseUserDTO fromUserToDTO(User user) {
        ResponseUserDTO dto = new ResponseUserDTO();
        dto.setId(user.getId());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setRole(user.getRole());
        return dto;
    }
}
