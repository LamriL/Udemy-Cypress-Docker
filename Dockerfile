FROM cypress/included:13.6.0
WORKDIR /app
COPY . /app
RUN npm install
#RUN $(npm bin)/cypress verify
#RUN $(npm bin)/cypress