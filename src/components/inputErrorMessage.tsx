import { FieldErrors, FieldValues } from "react-hook-form";

export const InputErrorMessage = (props: {
  errors: FieldErrors<FieldValues>;
  field: string;
}) => {
  return (
    <p className="text-red-500">
      {props.errors[props.field]?.message as string}
    </p>
  );
};
