import { Entity } from "typeorm"
import { UserEntities } from "./entities/user.entities";

@Entity('users')
export class User extends UserEntities {
	// 
}