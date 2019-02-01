package ve.com.jjimenez.persistence.model.user;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class UserDTO extends AbstractUserDTO {

    @NotNull
    @NotEmpty
    private String password;

    @NotNull
    @NotEmpty
    private String matchingPassword;

    public UserDTO() {
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMatchingPassword() {
        return matchingPassword;
    }

    public void setMatchingPassword(String matchingPassword) {
        this.matchingPassword = matchingPassword;
    }

}
