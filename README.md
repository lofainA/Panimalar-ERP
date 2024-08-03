# ERP_System

## Project Setup

### 1. Git installation
* Check version of git in your command prompt by typing `git version` if it shows a version move on to the next step.
* If not, install from [here](https://gitforwindows.org/) and setup the application.
* Again go to cmd and check `git version` to see if git is installed.

### 2. Git repo setup
* Open Visual Studio Code
* Go to the terminal and type
 
  ```
  git clone "git@github.com:lofainA/Panimalar-ERP.git"
  ```
* All the code must be in a new file in your IDE now but nothing will work for now, so next step.
  
### 3. Frontend setup
#### i) Node and npm installation
* Check if Node and npm are installed by checking their versions in cmd.
  
  ```
  node -v
  npm -v
  ```
* If installed skip this step, if not then go to this [link](https://nodejs.org/en/download/prebuilt-installer), download and setup the application with all the default options.

### ii) Run the frontend code
* Go back to the repo in your vs code and in the terminal run below commands to start the application
  
  ```
  cd frontend
  npm run dev
  ```
* Follow the localhost link that is displayed to see the application in your browser
