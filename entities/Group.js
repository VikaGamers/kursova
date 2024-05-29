var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Group", // Will use table name `post` as default behaviour.
    tableName: "groups", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        cabinet: {
            type: 'int'
        },
        title: {
            type: "varchar",
        },
        teacherId: {
            type: "int",
        },
    },
    relations: {
        teachers: {
            target: "Teacher",
            type: "one-to-one",
            joinColumn:{
                name:"teacherId",
                referencedColumnName:"id",
                foreignKeyConstraintName:"group_teachers"
            },
            cascade: true,
        },
    },
})