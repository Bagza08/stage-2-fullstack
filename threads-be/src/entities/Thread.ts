import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ManyToOne  } from "typeorm";
import { User } from "./User";


@Entity({name : "threads"})
export class Thread {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({nullable:true})
    image: string

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    posted_at: Date

    @ManyToOne(() => User, (user) => user.thread)  
    user: User


}

