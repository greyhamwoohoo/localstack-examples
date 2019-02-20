# Lambda
Creates a basic Node lambda function and invokes it via the Command Line. 

To apply the Cloudformation template to Localstack:

```
docker-compose up
```

Create a Node Lambda function from the command line:

```
aws --endpoint-url http://localhost:4574 lambda create-function --function-name MyLambda --runtime nodejs6.10 --handler index.handler --zip-file fileb://nodejs6.10/index.zip --role ThisIsNotImportant
```

To list the function:

```
aws --endpoint-url http://localhost:4574 lambda get-function --function-name MyLambda
```

To invoke the Lambda:

```
aws --endpoint-url http://localhost:4574 lambda invoke --function-name MyLambda outputFile
```

NOTE: It might take a few attemps / several minutes for the lambda to be invoked for the very first time. You will notice something like this in the logs from docker-compose up appearing a few times:

```
...OSTNAME="$LOCALSTACK_HOSTNAME"  "lambci/lambda:nodejs6.10" "index.handler")....
```

This is because Docker is pulling down the lambci/lambda container in order to invoke the Lambda for the first time; to see its progress, just do this:

```
docker pull lambci/lambda:nodejs6.10
```
