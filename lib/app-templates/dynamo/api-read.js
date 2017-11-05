api.get('/#{endpoint}', function (request) {
  return Promise.resolve('success')
}, { success: 200 });

api.get('/#{endpoint}/{id}', function (request) {
  return Promise.resolve('success')
}, { success: 200 });