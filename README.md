# Auto Operator

- initiliaze application

```sh
docker-compose run web django-admin.py startproject instagram .
docker-compose run web python3 manage.py startapp polls
docker-compose run web python3 manage.py migrate
```

- start application

```sh
docker-compose up
```
