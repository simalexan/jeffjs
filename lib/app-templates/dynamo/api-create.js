
api.post('/#{endpoint}', function (request) {
  var parameters = {
    TableName: '#{endpoint}',
    Item: {
      #{endpoint}id: request.body.#{endpoint}Id
    }
  };
  return dynamoDb
    .put(parameters)
    .promise()
}, { success: 201 });
