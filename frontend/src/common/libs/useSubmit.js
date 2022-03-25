import axios from "axios";
import { useState } from "react";

const useSubmit = () => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const submit = async ({ url, method = "POST", body }) => {
    try {
      const response = await axios({
        method: "POST",
        url,
        data: body,
      });
      if (response.status == 200) setData(response.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return { data, error, submit };
};

export default useSubmit;
