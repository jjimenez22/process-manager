package ve.com.jjimenez.persistence.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Data
@EqualsAndHashCode(exclude = {"users"})
@ToString(exclude = {"users"})
public class Process implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(name = "user_process",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "process_id", referencedColumnName = "id"))
    private Set<User> users;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "process_dictum",
            joinColumns = @JoinColumn(name = "dictum_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "process_id", referencedColumnName = "id"))
    private Set<Dictum> dictums;

}
