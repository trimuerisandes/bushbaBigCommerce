# BigCommerce API V3 Client Library

## Development

This PHP package is automatically generated by the
[Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project,
using the YAML files in the `swagger` directory. Follow the steps below
to set up and run the build process.

0. Prerequisites: docker, git

1. Clone swagger-codegen and checkout commit `3f66e27a9`

```
$ git clone git@github.com:swagger-api/swagger-codegen.git swagger-codegen && cd swagger-codegen && git checkout 3f66e27a9 && cd ..
```

2. Run the build script for swagger-codegen.

```
$ cd swagger-codegen
$ ./run-in-docker.sh mvn clean package
$ cd ..
```

3. Run the generator script.

```
$ ./codegen.sh
```

## Cleaning up

To clean up all files created by the build process, remove the directories
`.swagger-codegen` and `~/.m2/repository`.