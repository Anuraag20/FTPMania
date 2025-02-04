FROM python:3.9-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# setup dependencies
RUN apt-get update
RUN apt-get install xz-utils
RUN apt-get -y install curl

# Download latest nodejs binary
RUN curl https://nodejs.org/dist/v14.15.4/node-v14.15.4-linux-x64.tar.xz -O

# Extract & install
RUN tar -xf node-v14.15.4-linux-x64.tar.xz
RUN ln -s /node-v14.15.4-linux-x64/bin/node /usr/local/bin/node
RUN ln -s /node-v14.15.4-linux-x64/bin/npm /usr/local/bin/npm
RUN ln -s /node-v14.15.4-linux-x64/bin/npx /usr/local/bin/npx

WORKDIR /usr/src/app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

ADD . .

WORKDIR /usr/src/app/frontend

RUN npm run build

WORKDIR /usr/src/app/

RUN python3 manage.py collectstatic --no-input 

