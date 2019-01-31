package ve.com.jjimenez.persistence.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

//@Getter @Setter @NoArgsConstructor
public class UserDTO {
    @NotNull
    @NotEmpty
    private String firstName;

    @NotNull
    @NotEmpty
    private String lastName;

    @NotNull
    @NotEmpty
    private String email;

    @NotNull
    @NotEmpty
    private String password;
    private String matchingPassword;
}
