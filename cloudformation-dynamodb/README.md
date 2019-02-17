# DynamoDB Examples
Creates a simple and more complex DynamoDB Table in Localstack using Cloudformation. 

To apply the Cloudformation template to Localstack:

```
docker-compose up
aws --endpoint-url http://localhost:4581 cloudformation create-stack --stack-name greyhamwoohoo-stack --template-body file://cloudformation.yaml
```

To confirm the resources have been created:

```
aws --endpoint-url http://localhost:4569 dynamodb list-tables
aws --endpoint-url http://localhost:4569 dynamodb describe-limits
aws --endpoint-url http://localhost:4569 dynamodb describe-table --table-name greyhamwoohoo-dynamodb-1
aws --endpoint-url http://localhost:4569 dynamodb describe-time-to-live --table-name greyhamwoohoo-dynamodb-1
aws --endpoint-url http://localhost:4569 dynamodb describe-table --table-name greyhamwoohoo-full-dynamodb-1
aws --endpoint-url http://localhost:4569 dynamodb describe-time-to-live --table-name greyhamwoohoo-full-dynamodb-1
```
