var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Journal", // Will use table name `post` as default behaviour.
    tableName: "journal", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        childId: {
            type: "int",
            unique:false
        },
        presence: {
            type: "tinyint",
        },
        date: {
            type:"date"
        }
    },
    relations: {
        childrens: {
            target: "Child",
            type: "many-to-one",
            cascade: true,
            joinColumn:{
                name:"childId",
                referencedColumnName:"id",
                foreignKeyConstraintName:"journal_childrens"
            },
        },
    },
})