# ritual

This is my boilerplate for React + Browserify + Gulp + Docker

To use this, clone it to a folder named for your project.
(git clone https://github.com/austintgriffith/ritual.git #YOURPROJECTNAME#)

In that folder, start a new git repo in a folder called "src".
(cd #YOURPROJECTNAME#; git clone https://github.com/austintgriffith/boiler.git src)
In the example above I'm actually cloning in the boiler repo, but usually
you will clone in a new, empty project and copy in the files from the boiler repo.

You will need to do an "npm install" in the #YOURPROJECTNAME# dir and an "npm init" the src dir.

Your src dir should have the following files:
  index.html
  server.js
  js/main.jsx
  css/main.css
  docker/*
  js.httpd.js comes with the boiler to provide a hello world backend load module

Your index.html is used to bootstrap all your client-side js, css, and html.

Your server.js needs to be a module with an init function that takes in an express app and builds the needed routes.
You can also define a port variable within your server.js module.

Your main.jsx will need to render your main react component.

Your main.css is just there to wire in styles to the index.html without clutter.

Run "gulp" in the #YOURPROJECTNAME# directory to start up the server.
It will watch for changes and reload everything.
(You may need to reload if your server.js routes change.)

You should also have a docker file for the #YOURPROJECTNAME# directory and the src directory.
You will need to build the top level first, then a build and run on the src should
fire up a production container that will pull in, build, and run your project.
