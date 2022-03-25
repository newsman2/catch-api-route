import {
  fetchWrapper,
  authHeader,
} from "../../src/common/helpers/fetchWrapper";
import axios from "axios";

export default async function handler(req, res) {
  const url = `http://localhost:8000${req.url}`;
  const method = req.method;
  if (req.method === "GET") {
    const result = await fetchWrapper(req.method)(url);
    res.status(200).send(result);
  } else {
    const data = req.body;
    const result = await axios({
      method,
      url,
      data,
      headers: authHeader(url),
    });
    res.status(200).send(result.data);
  }
}
