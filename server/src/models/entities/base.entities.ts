import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export interface IBaseModelEntity {
	id?: number;
	created_at?: Date;
	updated_at?: Date;
}

export class BaseModelEntity extends BaseEntity implements IBaseModelEntity {
	@PrimaryGeneratedColumn()
	id?: number;

	@CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	public created_at?: Date;

	@UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
	public updated_at?: Date;
}