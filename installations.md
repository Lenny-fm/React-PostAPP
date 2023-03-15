# Installation

In order to achieve the React-PostAPP workshop you should follow these instructions. 

## VS Code extensions
To have a better coding experience add these extensions to your VS Code:
 - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
## front-end

First, create a new github repository and clone it into your computer.

Secondly, make sure you have node.js installed. If not you can install it [here](https://nodejs.org/en/download/package-manager/#centos-fedora-and-red-hat-enterprise-linux).

Then we need to [install](https://cli.vuejs.org/guide/installation.html) vue-cli to config and manage easily our project.
After it is installed you can create a new vue project with `vue create front` command line, it will create a `front` directory with all the files you need.

You are now invited to select projects settings: use **arrow keys** to navigate, **enter** to go to next step and **space** to select/unselect.
 - if requested, choose vue 2 instead of vue 3
 - choose `Manually select features`
 - select `Router`, `CSS Pre-procesors` and unselect `Linter / formatter`
 - say Yes to Use history mode for router
 - choose `Sass/SCSS (with node-sass)`
 - choose `In dedicated config files`
 - and finally say No to Save this as a preset for future projects
 
Now you can replace your `front/src/` folder by downloading [this one](https://github.com/TristanB12/postApp_workshop/raw/master/asides/content/src_content.zip) to have no useless files.

Finally go into your `front/` folder and run `yarn serve` or `npm run dev`, go into your browser at http://localhost:8080/. You should have a full white screen.

## Back-end

First, create a new github repository and clone it to your computer.

[Download](https://github.com/TristanB12/postApp_workshop/raw/master/asides/content/back-end-base.zip) `front/` and `back/` directories and place them at the root of your repo.

You need to open two terminals in order to launch two local servers: one for `back/` and one for `front/`.

 - In `back/` run `npm install`
 - In `front/` run `npm install` and `npm run serve`

Create a free account on [MongoDB](https://www.mongodb.com/cloud/atlas/signup) and then create a *cluster* with **AWS** and only the free options.

While the cluster is starting, click on *Database Access* and create a new user (don't forget the username and the password). Make sure to have the **read and write to any database** option and click on *add user*.

Once finished, go back in the *cluster* pannel and click on *connect* then add you current IP adress. Now you need to select a connection method with *connect your application*.

Copy the generated string and go into your `app.js` file. Find this line: `mongoose.connect('STRING TO REPLACE',` and replace `STRING TO REPLACE` by the string you've copied (don't forget to replace `<password>` by your password).

Finally run `nodemon serve` or `./node_modules/.bin/nodemon serve` in your `back/` directory
