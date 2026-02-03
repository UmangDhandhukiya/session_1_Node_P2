const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 3306,
  dialect: "mysql",
});

const dbConnect = async () => {
    try{
        await sequelize.authenticate()
        console.log("connect")
    }
    catch (e){
        console.log("not connect",e)
    }
}

module.exports = {
    dbConnect,
    sequelize
}