# ritual

This is my boilerplate for React + Webpack + Docker.

To use this, clone it to a folder named for your project:
```
git clone https://github.com/austintgriffith/ritual.git #YOURPROJECTNAME#
```

In that folder, clone your project into the src folder:
```
cd #YOURPROJECTNAME#; git clone https://github.com/austintgriffith/helloworld.git src
```
(This is a good example project and you can copy all of its files to your new project.)

You need to pick a port you want your app to run on and update the following files with that port:
```
server.js
webpack.config.js
docker/Dockerfile
docker/run.sh
```

You also need to update the name of the project in:
```
docker/build.sh
docker/run.sh
```

Then, run the npm install for both your project, and the ritual app:
```
npm install
npm run inject
```

Finally, start your app with:
```
npm start
```

If you want to take advantage of hot reloads
```
npm test
```
(this runs in a second window along with the npm start command.)

You can now view your app at http://localhost:8080


# docker

First, you want to build the ritual base container:
```
cd docker; ./build.sh
```

Next, you want to build your project's container:
```
cd src/docker; ./build.sh
```

Finally, run your container:
```
cd src/docker; ./run.sh
```
(You can follow the logs with "Docker logs helloworld")
