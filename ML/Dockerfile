FROM python:alpine
WORKDIR /app
ADD . /app
RUN pip install -r requirements.txt
EXPOSE 8000
CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver
