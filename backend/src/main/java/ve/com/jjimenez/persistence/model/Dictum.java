package ve.com.jjimenez.persistence.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

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

//    @ManyToMany(mappedBy = "dictums", fetch = FetchType.EAGER)
//    private Set<Process> processes;
}

