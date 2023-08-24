import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export default class Movie {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({length: 50, unique: true  })
    name: string

    @Column({type: "text", nullable: true})
    description?: string | null | undefined

    @Column("integer")
    duration: number

    @Column("integer")
    price: number
}

