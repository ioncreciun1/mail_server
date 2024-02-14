import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity({ name: "emails" })
  export class Email {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ nullable: false })
    title: string;
  
    @Column({ nullable: false })
    content: string;
  
    @Column({ nullable: false })
    sender: string;
  
    @Column({ nullable: false })
    receiver: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }