var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "HobbyGroup", // Will use table name `post` as default behaviour.
    tableName: "hobbygroups", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar",
        },
        time: {
            type: 'time',
        },
    },
    relations: {
        childrens: {
            target: "Child",
            type: "many-to-many",
            joinTable: true,
            cascade: true,
        },
    },
})