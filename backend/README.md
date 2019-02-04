# Process Manager Backend

## Docker
You can build this individual image with: `docker build . -t process-manager-backend`

Then run it with: `docker run -d -p 8080:8080 process-manager-backend`

## Maven

> Spring Boot

Run the app with: `mvn spring-boot:run`

> Java

- `mvn clean package -DskipTests` - Generate jars
- `java -jar /target/process-manager-exec.jar` - Run the dependency jar

## Docs

- Swagger: `$BASE_URL/swagger-ui.html` (Example: `localhost:8080/api/swagger-ui.html`)