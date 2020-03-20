FROM python:3.7.7

RUN pip3 install Flask gunicorn requests

COPY . /flask_webapp

WORKDIR /flask_webapp

EXPOSE 8088

CMD exec gunicorn  --bind 0.0.0.0:8088 --workers 1 --threads 2 --log-level debug app:app


