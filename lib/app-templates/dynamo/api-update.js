api.put('/#{endpoint}/{id}', function (request) {
  return Promise.resolve('success')
}, { success: 200 });