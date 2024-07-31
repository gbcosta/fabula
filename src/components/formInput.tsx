import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { InputErrorMessage } from "./inputErrorMessage";

export const FormInput = (props: {
  register: UseFormRegister<FieldValues>;
  field: string;
  errors: FieldErrors;
  type?: string;
}) => {
  return (
    <div>
      <input
        {...props.register(props.field)}
        className="outline-none border-2 border-black rounded-md px-2"
        type={props.type}
      />
      <InputErrorMessage errors={props.errors} field={props.field} />
    </div>
  );
};
