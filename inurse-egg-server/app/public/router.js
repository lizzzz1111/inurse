/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /**
 * 注册
 */
  router.post("/register", controller.login.register);
};


