const Controller = require('egg').Controller;
// import { Controller } from "egg";
class LoginController extends Controller {
    /**
     * 注册接口-----------------------------start-----------------------------
     */
    async register() {
        const { ctx } = this;
        // 获取前端传来的参数
        ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
        ctx.body = ctx.request.body;
        // 用于在控制台输出信息
        console.info(ctx.body);
        console.log('models', this.app.model);
        let retrunMap = {};
        try {
            const users = await this.ctx.service.userService.addUser(ctx.body);
            retrunMap = { code: "1", msg: "注册成功", data: users };
        } catch (error) {
            console.log(error);
            retrunMap = { code: "0", msg: "注册失败" };
        }
        // 把注册信息传递后service用于保存数据库
        // 调用用户的service保存注册信息
        ctx.body = retrunMap;
    }
}
module.exports = LoginController;