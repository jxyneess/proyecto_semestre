#!/bin/bash

# Instala node version 18

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&sudo apt-get install -y nodejs

# Carga el entorno de nvm

source ~/.nvm/nvm.sh

# Instala la versión 18.10.0 de Node.js

nvm install 18.10.0

# Deja por defecto la versión 18.10.0 de Node.js

nvm use 18.10.0

# Instalar angular cli

npm install -g @angular/cli

# Crear links para poder ejecutar node y npm

sudo ln -s "$NVM_DIR/versions/node/v18.10.0/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/v18.10.0/bin/npm" "/usr/local/bin/npm"


