import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1769781490299 implements MigrationInterface {
    name = 'Migration1769781490299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Movie" ADD "externalRating" double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Movie" DROP COLUMN "externalRating"`);
    }

}
