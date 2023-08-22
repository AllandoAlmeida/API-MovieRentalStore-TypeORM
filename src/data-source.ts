import path from "path";
import {DataSource, DataSourceOption} from "typeorm";

export const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
    const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

    const bdUrl:string | undefined = process.env.DATABASE_URL;
    const nodeEnv: string | undefined = process.env.NODE_ENV;

    if(nodeEnv === "test") {
        return{
            type:"sqlite",
            database: "memory",
            synchronize: true,
            entities: {entitiesPath},
        };
    }

    if (!dbUrl) throw new Error("Missing env var: 'DATABASE_RUL' ");

    return{
        type: "postgres",
        url: bdUrl,
        synchronize: false,
        logging:true,
        entities:[entitiesPath],
        migrations:[migrationPath]
    };
};