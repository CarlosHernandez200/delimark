#!/bin/bash

echo "El directorio actual es: $PWD"

python3 -m venv venv

source venv/bin/activate

python3 pip install -r requirements.txt

