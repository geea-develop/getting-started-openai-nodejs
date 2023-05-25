const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const asyncFunc = async () => {
  let response;

  try {
    response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 7,
    });
    
  } catch (e) {
    if (e.response?.data) {
      console.error(e.response?.data)
    }
    throw e;
  }
  
  console.log(response);
}

asyncFunc().catch(e => console.error(e));