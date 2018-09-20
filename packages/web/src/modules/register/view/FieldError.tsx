import * as React from "react";

const FieldError = ({ label }: { label: any }) => (
  <span className="d-block text-danger mt-1">{label}</span>
);

export default FieldError;
