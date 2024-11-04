/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  exports.mysql = {
    // 单数据库信息配置
    client: {
      host: "localhost", // host
      port: "3306", // 端口号
      user: "root", // 用户名
      password: "123456", // 密码
      database: "inurse", // 数据库名
      define: {
        freezeTableName: true,
      },
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false, // 是否加载到 agent 上，默认关闭
  };

  /** ****** 允许跨域访问,关闭csrf认证 /config.default.js ********/
  exports.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["http://localhost:7001"], // 允许访问接口的白名单
  };

  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };



  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1730053610479_8173';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    database: 'inurse',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
