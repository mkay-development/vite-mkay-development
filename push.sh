#!/bin/bash

docker build -t jomartz/mkay-web-dev:v0.1 . --no-cache
docker image push jomartz/mkay-web-dev:v0.1