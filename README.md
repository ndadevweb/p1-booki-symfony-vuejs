# Project Booki

urls to know

- http://localhost:8800/images/* (Images uploaded)
- http://localhost:8801/ (Application front)
- http://localhost:8802/api (API used by the Application front)
- http://localhost:8802/management (Administration)

## Frontend VueJS

### Start the project from scratch (empty project)

Only if the image doesn't exists on your host.
> docker build -f DockerfileInitProject -t node-init .

Execute this command to run the container and initialize VueJS
> docker run --rm -it -v "$PWD":/app --name vue-init node-init

Now you should be connect at the container, so use this command to initialize VueJS
- At the question "Project Name" name it like that : frontend
- You can uncheck the others questions if you want

> npx create-vue@latest

### Start the project and start to coding

Build the image
> docker-compose build

Then start the container
> docker-compose up / docker-compose up -d


## Backend Nginx



## Images (Development)

