export default build =>
  build.query({
    query: id => `api/v1/folders`
  })
