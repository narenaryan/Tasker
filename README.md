# Tasker

A Teacher-Student task management system built in Django

## Requirements

- Django 1.9.1
- PostgreSQL 9.1
- Python2.7

## Procedure

Clone this repository and then

- First install a virtual environment with command

  $ virtualenv testenv $ source testenv/bin/activate

- Just do migration for the app from project root.

  $ python manage.py migrate

### Done till now

- Admin (Teacher) can be created by using this command. $ python manage.py createsuperuser

after that run server locally with following command $ python manage.py runserver 0.0.0.0:8000

Visit <http://localhost:8000/admin> in the browser.

Add few users i.e Students
