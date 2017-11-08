#!/bin/bash
gcloud docker -a
docker stack deploy --with-registry-auth -c docker-stack.yml slavestack
