package ve.com.jjimenez.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ve.com.jjimenez.persistence.model.User;
import ve.com.jjimenez.persistence.repo.UserRepository;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.Collections;

@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository repository;

    @Autowired
    public CustomUserDetailsService(UserRepository repository) {
        this.repository = repository;
    }

    private static Collection<GrantedAuthority> getAuthority(String role) {
        return Collections.singletonList(new SimpleGrantedAuthority(role));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = repository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("Not found user: " + username)
        );
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                true, /*enabled*/
                true, /*account non expired*/
                true, /*credentials non expired*/
                true, /*account non locked*/
                getAuthority(user.getRole())
        );
    }
}
