import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id: id }: IRequest): User {
    const user = this.usersRepository.findById(id);

    if (!user) {
      throw new Error("User dont exists in database");
    }

    const updatedUser = this.usersRepository.turnAdmin(user);

    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
