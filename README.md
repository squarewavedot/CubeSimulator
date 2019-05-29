## Quickstart

## Do these steps once
### Install Node modules

`$ npm install`

### Protobuf
To use the .proto files, the following steps need to be executed.

#### create the JS file    
```bash
chmod +x ./node_modules/protobufjs/cli/bin/pb*
./node_modules/protobufjs/cli/bin/pbjs -t static-module -w commonjs -o model.js matrixserver.proto
```
#### create the TS file    
```bash
./node_modules/protobufjs/cli/bin/pbts -o model.d.ts model.js
```
#### copy the files in the appropriate folders                 
```bash
cp model.js src/ && mv model.js out-tsc/ && mv model.d.ts src/
```

## compile & start

`$ npm start`.

### start via electron (if above doesn't start the app) 
`$ electron .`

# Packaging
## install packager
```bash
npm install electron-packager -g
```
## Packaging
```
electron-packager . test --platform=win32 --arch=x64 --out=build
electron-packager . test --platform=darwin --arch=x64 --out=build
```

