exports.handler = async function (event, content) {
  return {
    statusCode: 200,
    body: "hello world",
  };
};

// http://localhost:8888/.netlify/functions/hello
