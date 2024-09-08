# Backend
## Backend Structure
```
movie-search\backend
├── Dockerfile
├── HELP.md
├── mvnw
├── mvnw.cmd
├── pom.xml
├── README.md
├── src
|  ├── main
|  |  ├── java
|  |  |  └── com
|  |  |     └── movie
|  |  |        ├── backend
|  |  |        ├── BackendApplication.java
|  |  |        ├── client
|  |  |        ├── configuration
|  |  |        ├── controller
|  |  |        ├── data
|  |  |        └── service
|  |  └── resources
|  |     └── application.properties
|  └── test
|     └── java
|        └── com
|           └── movie
|              ├── backend
|              ├── BackendApplicationTests.java
|              ├── configuration
|              ├── controller
|              └── resources
```
## Commands

Use `mvn clean install` to run the backend project

Use `mvn clean test` to run tests
