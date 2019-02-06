package ve.com.jjimenez.persistence.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import ve.com.jjimenez.persistence.model.User;

import java.util.List;
import java.util.Optional;

import static ve.com.jjimenez.config.SecurityConfig.ADMIN;

/**
 * {@link User} repository and Rest Resource exposed
 */
@Repository
@CrossOrigin
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByUsername(@Param("username") String username);

    List<User> findAllByRole(@Param("role") String role);

    /**
     * Create or update {@link User}, only ADMIN authority users are granted access to this method
     */
    @Override
    @PreAuthorize("hasAuthority(" + ADMIN + ")")
    <S extends User> S save(S s);

    /**
     * Delete existing {@link User}, only ADMIN authority users are granted access to this method
     */
    @Override
    @PreAuthorize("hasAuthority(" + ADMIN + ")")
    void delete(Long aLong);
}
