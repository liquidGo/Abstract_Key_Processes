// @ts-nocheck
import React, { useRef } from "react";
import { Ctx } from "./context";

const Form = ({ form, children, initialValues }) => {
  const mountRef = useRef(false);
  form.setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  return (
    <form>
      <Ctx.Provider value={form}>{children}</Ctx.Provider>
    </form>
  );
};

export default Form;
