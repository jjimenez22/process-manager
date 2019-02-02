package ve.com.jjimenez.persistence.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Data
@EqualsAndHashCode(exclude = {"processes"})
@ToString(exclude = {"processes"})
public class Dictum implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @ManyToMany(mappedBy = "dictums", fetch = FetchType.EAGER)
    private Set<Process> processes;
}

