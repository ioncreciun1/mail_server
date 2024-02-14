import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1707902027617 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // this part you will add your self
    await queryRunner.query(
        ` 
            --Table Definition
            CREATE TABLE "users"  (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
              "name" varchar(255)  NOT NULL,
              "email" varchar(255)  NOT NULL,
              "password" varchar(255)  NOT NULL,
              "role"  varchar(255)  NOT NULL DEFAULT 'user',
              "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
              "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
              CONSTRAINT "PK_User" PRIMARY KEY ("id")
            )
  
            `
      ),
        undefined;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
