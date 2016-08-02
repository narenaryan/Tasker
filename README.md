# Tasker

A Teacher-Student task management system built in Django
#### Teacher view

![command_open](https://github.com/narenaryan/Tasker/raw/master/images/admin.png)

![command_open](https://github.com/narenaryan/Tasker/blob/master/images/addTask.png)


#### Student View

![command_open](https://github.com/narenaryan/Tasker/blob/master/images/student.png)

## Requirements

- Django 1.9.1
- PostgreSQL 9.1
- Python2.7

## Procedure

Clone this repository and then

- First install a virtual environment with command
```
    $ virtualenv testenv 
    $ source testenv/bin/activate
    $ pip install -r requirements.txt
```
- Just do migration for the app from project root.

```
    $ python manage.py migrate
```
### Creating users

- Admin (Teacher) can be created using this command. 
```
   $ python manage.py createsuperuser
```
after that run server locally with following command 
```
   $ python manage.py runserver 0.0.0.0:8000
```

Visit <http://localhost:8000/admin> in the browser to add few students(users).

#### Done 

- Admin(teacher) can create new tasks and assign them to multiple students.
- Can see all taskes he created and who else are assigned to him from dashboard.
- User(student) can login to his account and see tasks assigned to him.
- He/She can change the status of task assigned to him like todo, doing, done etc.

#### Todo

- Signup & Password recovery
- Approval & Disapproval of assignments by Admin(Teacher)
- Real time notifications to the Admin about the student task updates.
- Please check the ![issues/features](https://github.com/narenaryan/Tasker/issues) and give pull requests to improve tasker. 

Check <b>images/</b> directory for screenshots.
