export default build =>
  build.query({
    query: id =>(
     {
      url: `uaa/oauth/token?scope=ui&username=hasimyilmaz&password=123456&grant_type=password`,
      method: 'POST',
      headers:{
        Authorization : "Basic YnJvd3Nlcjo="
      }
     })
  })