import { Column } from "typeorm";
import { BaseModelEntity } from "./base.entities";

export interface IUserEntities {
	email?: string;
	name?: string;
	password?: string;
	is_active?: boolean;
}

export class UserEntities extends BaseModelEntity implements IUserEntities {
	@Column()
	email?: string;

	@Column()
	name?: string;

	@Column()
	password?: string;

	@Column()
	is_active?: boolean;
}