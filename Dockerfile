# Use Node runtime as parent image
FROM node:8.9

RUN mkdir /app

# The Working Directory
WORKDIR /app

CMD ["npm", "start"]
