import { useEffect } from "react";
import useSubmit from "../src/common/libs/useSubmit";

const Form = () => {
  const { data, error, submit } = useSubmit();

  // using useEffect to simulate a one-time submission,
  // in reality it would be a button
  useEffect(() => {
    const body = {
      firstName: "edwin",
      lastName: "lim",
    };
    submit({ url: "/api/form", body });
  }, []);

  return (
    <div>
      <p>Submitting a form</p>
      <div>{data ? JSON.stringify(data) : "submission in progress"}</div>
    </div>
  );
};

export default Form;
