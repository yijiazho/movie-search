# Use an official Maven image to build the application
FROM maven:3.8.6-openjdk-17 AS build
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

# Define environment variable for the MongoDB connection string
ENV DB_CONNECTION_STRING="mongodb://mongo:27017"

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]