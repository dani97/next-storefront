import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const url = process.env.MAGENTO_GRAPHQL_ENDPOINT;

const handler = async (request, response) => {
  delete request.headers.host;
  if (request.method === "GET") {
    try {
      const { data } = await axios.get(url, {
        params: request.query,
        headers: request.headers,
        httpsAgent,
      });
      response.status(200).json(data);
    } catch (error) {
      console.log(error.response);
      response.status(500).json(error.response.data);
    }
  } else {
    try {
      const { data } = await axios({
        method: "post",
        url,
        data: request.body,
        headers: request.headers,
        httpsAgent,
      });
      response.status(200).json(data);
    } catch (error) {
      console.log(error.response);
      response.status(500).json(error.response.data);
    }
  }
};
export default handler;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb",
    },
  },
};
