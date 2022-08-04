#!/bin/bash

docker build -t jomartz/mkay-development:v0.1 . --no-cache
docker image push jomartz/mkay-development:v0.1