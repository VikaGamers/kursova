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
      require("./migrations/1715436927238-initial_migration"),
      require("./migrations/1715439932215-deleting_examples"),
      require("./migrations/1715447819615-tables_fix"),
      require("./migrations/1715447018364-tables_fix"),
      require("./migrations/1715447691999-tables_fix"),
    ],
    migrationsTableName: "kindergarten_migrations"
})
module.exports = dataSource;