
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ContactTest {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @Column()
    title: string;

    @Column()
    email: string;

    @Column()
    address: string;


    @Column()
    city: string;


}