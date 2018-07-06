
export async function checkApiStatus ({ response }) {
  const body = { message: 'OK', time: Date.now() };
  response.body = body;
}
