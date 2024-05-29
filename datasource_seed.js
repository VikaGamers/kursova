var typeorm = require("typeorm")
var dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "34.38.180.188",
    port: 3306,
    username: "root",
    password: "g?($/po'FD5sTxC3",
    database: "kindergarten",
    synchronize: false,
    entities: [
        require("./entities/Child"),
        require("./entities/Group"),
        require("./entities/HobbyGroup"),
        require("./entities/Journal"),
        require("./entities/Parent"),
        require("./entities/Teacher"),
    ],
    migrations: [
      require("./migrations/1715439353814-seeding_db"),
      require("./migrations/1715451888953-journal_seeder_"),
      require("./migrations/1715504920074-hobby_seeder"),
    ],
    migrationsTableName: "kindergarten_migrations"
})
module.exports = dataSource;