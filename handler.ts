export async function hello(event) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
      my_ass: "tastes like chocolate pudding"
    })
  }
  return response
}

export async function register(event) {}
