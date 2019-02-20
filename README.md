# localstack-examples
Examples and snippets for using localstack:

| Folder | Details |
| ----------- | ------ |
| cloudformation-basic | Cloudformation snippets for S3, Kinesis, Sns and Sqs |
| cloudformation-dynamodb | Cloudformation snippets for DynamoDB Tables |
| cloudformation-dynamodbstreams | Cloudformation snippets for DynamoDB and DynamoDBStreams |
| cloudformation-lambda | Cloudformation snippets for setting up a Lambda function form code in S3 |
| lambda | Simple Lambda created and invoked from the command line |


## To convert from YAML to JSON
All of the Cloudformation files here are in Yaml. 

To convert them to Json, Amazon provide the 'aws-cfn-template-flip' tool. This has been dockerized already, so to convert the cloudformation.yaml files into cloudformation.json, 'cd' the folder containing the cloudformation.yaml file and then:

From PowerShell:

```
docker run -it --rm -v ${pwd}:/workdir joshdvir/aws-cfn-template-flip -j /workdir/cloudformation.yaml > cloudformation.json
```

From Cmdprompt:

```
docker run -it --rm -v %CD%:/workdir joshdvir/aws-cfn-template-flip -j /workdir/cloudformation.yaml > cloudformation.json
```

From Shell:

```
docker run -it --rm -v .:/workdir joshdvir/aws-cfn-template-flip -j /workdir/cloudformation.yaml > cloudformation.json
```


## References
| Description | Link |
| ----------- | ------ |
| Dockerized aws-cfn-template-flip | https://hub.docker.com/r/joshdvir/aws-cfn-template-flip |
