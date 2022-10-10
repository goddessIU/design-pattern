public class Logger {
    private  FileWriter writer;

    private  static final Logger instance = new Logger();

    private  Logger() {
        File = new File("/Documents/pattern/singleton/hello.tst");
        writer = new FileWriter(file, true);
    }

    public  static  Logger getInstance() {
        return instance;
    }
}

public  class UserController {
    public  void login(String username, String )
}