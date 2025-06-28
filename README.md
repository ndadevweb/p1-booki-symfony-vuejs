# Project Booki



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