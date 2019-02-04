package ve.com.jjimenez.persistence.model.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import ve.com.jjimenez.persistence.model.Process;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Data
@EqualsAndHashCode(exclude = {"processes"})
@ToString(exclude = {"processes"})
public class User implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column(nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Column(nullable = false)
    private String role;

    @ManyToMany(mappedBy = "users", fetch = FetchType.EAGER)
    private Set<Process> processes;

}
