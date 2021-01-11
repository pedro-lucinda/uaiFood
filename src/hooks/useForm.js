import { useState } from "react";

export const useForm = (inintialState) => {
  const [form, setForm] = useState(inintialState);

  const onChangeInput = (event) => {
    const newValue = event.target.checked;
    const fieldName = event.target.name;

    setForm({  [fieldName]: newValue });
  };

  return [form, onChangeInput];
};
