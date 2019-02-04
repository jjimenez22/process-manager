FROM maven:3.5.3-jdk-8-alpine

# copy the project files
COPY ./pom.xml ./pom.xml

# build all dependencies for offline use
RUN mvn dependency:go-offline -B

COPY ./ /usr/app/

RUN cd /usr/app/ && mvn clean package -DskipTests && mv ./target/process-manager-exec.jar ./app.jar

EXPOSE 8080

CMD java -Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n -Dspring.profiles.active=prod -jar /usr/app/app.jar
