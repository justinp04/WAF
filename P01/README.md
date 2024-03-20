# Django
What is Djano? \
Django is an open-source backend frameowkr, written in and used in Python.

Typical Web Applications use the MVC-architecture, this is known as the 'Model-View-Controller' architecture.

### Model
The model, as the name states, is the over-arching model of the application, controlling the database, the back-end logic, server calls, RPCs, etc. \
Controlling the organisation and storage of data

### View
This is what the users see, the front-end, the graphics, and the display.\
Controls how data is displayed.

### Controller
The controller is the medium between the model and the view, determing what information is retrieved from the model and what is displayed on the view, as well as what data to store in the model.

### MVC in Django
In Django, we do not have MVC, but rather MTV, which stands for **Model**, **Template**, **View**, where **Template** assumes the role of **View** and **View** assumes the role of **Controller**.

### Apps in Django
Web applications in Django are composed of many apps. Each app represents one component of a much larger web-application.\
\
Examples of an app can be: Authentication, News Feed, Chat, etc. 


## Creating a Django Project
1. **Creating the Project**\
Run the command: \
`django-admin startproject <projectname>` in terminal.\
\
This will create a new project called \<projectname\> in the current directory.\
\
The following files are then made, each with a specific purpose.
<img alt="Boilerplate files " src="images/boilerplate.png"/>

2. **Creating an app**\
Run the command:\
`python3 manage.py startapp <appname>` in the terminal.\
This will create a new app with \<appname\> in your current project.\

3. **Creating the database**\
Run the command:\
`python3 manage.py migrate` in the terminal.\
This will create the database for the project.

4. **Generate migrations**\
Run the command:\
`python3 manage.py makemigrations` in the terminal.\ 

5. **Running the server**\
Run the command:\
`python3 manage.py runserver` in the terminal.\
This will run on port 8000 by default. 

## Questions
1. What is the purpose fo the \_\_innit\_\_.py file?\
The purpose of the \_\_init\_\_.py file is to tell python to treat the directory as a package.
2. What is the purpose fo the settings.py file?\
The purpose of the settings.py file is it to contain the settings of the project.
3. What is the purpose of the urls.py file?\
The purpose of this file is to contain all the route definition of the project.
4. What is the purpose of the wsgi.py file?\
The purpoes of the wsgi.py file is to communicate with server software.
5. What is the purpose of the manage.py file?\
The manage.py file is to manage the project, this includes the utility functions like the development web server, and database migration.

