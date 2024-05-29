var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Teacher", // Will use table name `post` as default behaviour.
    tableName: "teachers", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        salary: {
            type: "double",
        },
        phone: {
            type:"varchar"
        }
    },
    
    relations: {
    },
})