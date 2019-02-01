package ve.com.jjimenez.persistence.model.user;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

abstract class AbstractUserDTO {

    private String firstName;

    private String lastName;

    @NotNull
    @NotEmpty
    private String email;

    @NotNull
    @NotEmpty
    private String role;

    public AbstractUserDTO() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
