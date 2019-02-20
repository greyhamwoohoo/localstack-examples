# Lambda
Creates a basic lambda function via Cloudformation on Localstack and invokes it from the AWS Command Line. When doing this, we need to have the Lambda code already in S3 (I couldn't get the ZipFile property to work in Cloudformation with Localstack):

To apply the Cloudformation template to Localstack:

```
docker-compose up
aws --endpoint-url http://localhost:4572 s3 mb s3://greyhamwoohoo-bucket-1
aws --endpoint-url http://localhost:4572 s3 cp .\nodejs6.10\index.zip s3://greyhamwoohoo-bucket-1
aws --endpoint-url http://localhost:4581 cloudformation create-stack --stack-name greyhamwoohoo-stack --template-body file://cloudformation.yaml
```

To confirm the resources have been created:

```
aws --endpoint-url http://localhost:4574 lambda get-function --function-name MyLambda
```

To invoke the Lambda:

```
aws --endpoint-url http://localhost:4574 lambda invoke --function-name MyLambda outputFile
```
