FROM node:19

RUN apt update
RUN npm install -g @vue/cli

CMD [ "/bin/sh", "./docker/dev/docker-start.sh" ]

#ENTRYPOINT ["tail", "-f", "/dev/null"]