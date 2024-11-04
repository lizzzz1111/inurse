const Service = require('egg').Service;

class UserService extends Service {
    async addUser(user) {
        console.log("--------------addUser-----------------------");
        console.log(user);
        user.register_time = new Date();
        // 保存用户信息到数据库
        const users = await this.app.model.User.create(user);
        // 返回保存用户的信息
        return users;
    }
}
module.exports = UserService;