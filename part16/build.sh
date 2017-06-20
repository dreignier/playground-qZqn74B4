#!/bin/bash

# ---- Install code viewer from GitHub
git clone https://github.com/LeonardA-L/techio-viewer-code.git
cd techio-viewer-code
./install.sh
cd ..
rm -rf techio-viewer-code
