package ve.com.jjimenez.persistence.model.user;

import javax.validation.constraints.NotNull;

public class ResponseUserDTO extends AbstractUserDTO {

    @NotNull
    private Long id;

    public ResponseUserDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
