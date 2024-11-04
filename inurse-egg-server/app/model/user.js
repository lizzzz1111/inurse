"use strict";
module.exports = (app) => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define(
        "user",
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            account: STRING(11),
            password: STRING(30),
            img: STRING(225),
            nackname: STRING(50),
            age: STRING(10),
            sex: STRING(10),
            email: STRING(100),
            region_id: STRING(32),
            realname: STRING(50),
            address: STRING(225),
            identity: STRING(225),
            job_img: STRING(225),
            register_time: DATE,
            update_time: DATE,
            application_time: DATE,
            update_person: STRING(50),
            status: INTEGER,
            role: STRING(32),
            college: STRING(50),
            subject: STRING(30),
        },
        {
            timestamps: false,
            freezeTableName: true,
        },
    );

    // User.hasOne(app.model.Announce, {foreignKey: 'fk_companyname', targetKey: 'name'})
    return User;
};