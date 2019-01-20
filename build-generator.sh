openapiGeneratorBin=./target/openapi-generator/node_modules/@openapitools/openapi-generator-cli/bin
npm install @openapitools/openapi-generator-cli --prefix target/openapi-generator

rm -rf target/generators
java -jar ${openapiGeneratorBin}/openapi-generator.jar meta -o target/generators/kotlinx -n kotlinx -p edu.alex
cp -rf src/generators target
mvn -f target/generators/kotlinx/pom.xml package