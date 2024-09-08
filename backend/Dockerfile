# Use an official Maven image to build the application
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

# Copy the pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Use a smaller base image for running the application
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the built jar from the build stage
COPY --from=build /app/target/backend-*.jar app.jar

# Expose the port that the backend runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]