#!/bin/bash

for i in {1..10000}; do \
    echo "{\"name\": \"$(pwgen 12 -N 1)\", \"age\": $((18 + $RANDOM % 40)), \"sex\":$(($RANDOM % 2))}," ;
done
