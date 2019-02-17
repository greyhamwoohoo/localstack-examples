# DynamoDBStreams Examples
Creates a DynamoDB Table in Localstack and configure DynamoDB Streams using Cloudformation. 

To apply the Cloudformation template to Localstack:

```
docker-compose up
aws --endpoint-url http://localhost:4581 cloudformation create-stack --stack-name greyhamwoohoo-stack --template-body file://cloudformation.yaml
```

## PowerShell
To insert an item in DynamoDB:

```
aws --endpoint-url http://localhost:4569 dynamodb put-item --table-name greyhamwoohoo-dbstream-1 --item file://put-item-record.json
```

To confirm it has been published to the Stream:

```
$tableName="greyhamwoohoo-dbstream-1"
$streamsForTable = (aws --endpoint-url http://localhost:4570 --output json dynamodbstreams list-streams | ConvertFrom-Json | Select-Object -ExpandProperty Streams | ?{$_.TableName -eq $tableName})
$streamDescription = (aws --endpoint-url http://localhost:4570 --output json dynamodbstreams describe-stream --stream-arn $streamsForTable.StreamArn | ConvertFrom-Json | Select-Object -ExpandProperty StreamDescription)
$shardIterator = (aws --endpoint-url http://localhost:4570 --output json dynamodbstreams get-shard-iterator --stream-arn $streamsForTable.StreamArn --shard-id $streamDescription.Shards[0].ShardId --shard-iterator-type TRIM_HORIZON | ConvertFrom-Json | Select-Object -ExpandProperty ShardIterator)
aws --endpoint-url http://localhost:4570 --output json dynamodbstreams get-records --shard-iterator $shardIterator
```

## Bash
To insert an item in DynamoDB:

```
aws --endpoint-url http://localhost:4569 dynamodb put-item --table-name greyhamwoohoo-dbstream-1 --item file://put-item-record.json
```

To confirm it has been published to the Stream:

```
aws --endpoint-url http://localhost:4569 dynamodb list-tables
aws --endpoint-url http://localhost:4570 dynamodbstreams list-streams
aws --endpoint-url http://localhost:4570 dynamodbstreams describe-stream --stream-arn "<theArnFromThePreviousCommand>"
aws --endpoint-url http://localhost:4570 dynamodbstreams get-shard-iterator --stream-arn "<theArnFromThePreviousCommand>" --shard-id "<shardIdFromPreviousCommand>" --shard-iterator-type TRIM_HORIZON
aws --endpoint-url http://localhost:4570 dynamodbstreams get-records --shard-iterator "<fromPreviousCommand>"
```

## References
| Description | Link|
| ----------- | ------ |
| The different stream types. | https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_StreamSpecification.html <br/><br/>My .yaml uses 'NEW_AND_OLD_IMAGES'; regardless of the value I used, get-records always returns a StreamViewType of 'NEW_AND_OLD_IMAGES' on localstack |


