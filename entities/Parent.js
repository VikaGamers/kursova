var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Parent", // Will use table name `post` as default behaviour.
    tableName: "parents", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        job: {
            type: "varchar",
        },
        sex: {
            type: "varchar"
        },
        phone: {
            type: "varchar"
        }
    },
    relations: {
        childrens: {
            target: "Child",
            type: "many-to-one",
            cascade: true,
        },
    },
})