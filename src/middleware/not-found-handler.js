async function notFoundHandler ({ request, notFound, response }) {
  const details = `method => ${request.method} and path => ${request.path}`
  const message = `No matches for the request : ${details}`;
  response.body = { message, time: Date.now() }
}

export default notFoundHandler;
