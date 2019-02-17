# Basic Examples
Creates an S3 bucket, Kinesis Stream, Sns Topic and Sqs Queue in Localstack using Cloudformation. 

To apply the Cloudformation template to Localstack:

```
docker-compose up
aws --endpoint-url http://localhost:4581 cloudformation create-stack --stack-name greyhamwoohoo-stack --template-body file://cloudformation.yaml
```

To confirm the resources have been created:

```
aws --endpoint-url http://localhost:4568 kinesis list-streams
aws --endpoint-url http://localhost:4572 s3 ls
aws --endpoint-url http://localhost:4575 sns list-topics
aws --endpoint-url http://localhost:4576 sqs list-queues
```
