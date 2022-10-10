interface IUserController {
    login(telephone: string, password: string);
}

class UserController implements IUserController {
    public login(telephone: string, password: string) {
        //dosomething   
    }
}

class UserControllerProxy implements IUserController {
    private userController: UserController;

    constructor(userController: UserController) {
        this.userController = userController;
    }
    
    public login(telephone: string, password: string) {
        const startTime = new Date();

        this.userController.login(telephone, password);

        const endTime = new Date();

        const responseTime = endTime.getTime() - startTime.getTime();
    }
}

const userController: IUserController = new UserControllerProxy(new UserController());