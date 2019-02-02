package ve.com.jjimenez.persistence.model.user;

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
    private String email;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_process",
            joinColumns = @JoinColumn(name = "process_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"))
    private Set<Process> processes;

}
