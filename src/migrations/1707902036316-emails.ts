import { MigrationInterface, QueryRunner } from "typeorm";

export class Emails1707902036316 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // this part you will add your self
    await queryRunner.query(
        ` 
            --Table Definition
            CREATE TABLE "emails"  (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
              "title" varchar(255) NOT NULL,
              "content" varchar(255) NOT NULL,
              "sender" varchar(255) NOT NULL,
              "receiver"  varchar(255) NOT NULL,
              "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
              "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
              CONSTRAINT "PK_Email" PRIMARY KEY ("id")
            )
  
            `
      ),
        undefined;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "emails"`, undefined);
    }

}
