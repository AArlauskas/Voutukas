package application;

import LoggerLogic.Logger;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

import static org.springframework.boot.SpringApplication.run;

@SpringBootApplication
public class Application {
    public static void main(String[] args) throws IOException {
        run(Application.class, args);
        Logger logger = new Logger();

    }
}
