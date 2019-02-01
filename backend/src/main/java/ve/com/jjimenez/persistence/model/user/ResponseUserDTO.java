package ve.com.jjimenez.persistence.model.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Getter
@Setter
public class ResponseUserDTO extends AbstractUserDTO {

    @NotNull
    private Long id;
}
