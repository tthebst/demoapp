FROM python:3.7.7

RUN pip3 install Flask gunicorn ipinfo requests

COPY . /flask_app

WORKDIR /flask_app

EXPOSE 8080

CMD exec gunicorn  --bind 0.0.0.0:8080 --workers 1 --threads 2 app:app