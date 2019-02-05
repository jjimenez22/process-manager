package ve.com.jjimenez.persistence.model.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Getter
@Setter
public class UserDTO extends AbstractUserDTO {

    @NotNull
    @NotEmpty
    private String password;
}
