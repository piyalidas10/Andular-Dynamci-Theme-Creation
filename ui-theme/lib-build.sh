#build the library
ng build theme

#copy from dist of theme directory to webui/node_modules
cp -R ./dist/. ../webui/node_modules/