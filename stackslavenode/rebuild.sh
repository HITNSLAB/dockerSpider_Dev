#!/bin/bash
#tar -cf slaveNode.tar slaveNode
docker build -t gcr.io/gcloud-159107/slavenode .
gcloud docker -- push gcr.io/gcloud-159107/slavenode
