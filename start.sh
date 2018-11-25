#!/bin/bash
git pull
cd srsFireSafetyUi && npm install && npm run-script build
cd .. && npm start
