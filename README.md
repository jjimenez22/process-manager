# Process Manager

A Spring Boot and React.js application for SoftPlan test.

- The application is responsible for managing processes.
- There are three (3) types of Users: Administrator, Manager and End-User.
- The Administrator can register, browse, modify and delete users.
- The Manager can create, browse, modify and delete processes. Users can be assigned to processes in order to be commented by them, then comments for each process can be browsed.
- The End-User can browse its assigned processes and state a comment on each one. 

## Docker

Run containerized application: `docker-compose up --build -d`

Run individual service: `docker-compose up frontend -d`

service names:

- `backend`

- `frontend`

## Back-End

> Spring Boot

- Run the app with: `mvn spring-boot:run`
- Run tests with: `mvn test`

> Java

- `mvn clean package -DskipTests` - Generate jars
- `java -jar /target/process-manager-exec.jar` - Run the dependency jar

### Docs

- Swagger: `$BASE_URL/swagger-ui.html` (Example: `localhost:8080/swagger-ui.html`)
- JavaDocs: `mvn javadoc:javadoc` then open in browser `./target/site/apidocs/index.html`

## Front-End

- Install dependencies with `npm install`
- Run the app with `npm start`


