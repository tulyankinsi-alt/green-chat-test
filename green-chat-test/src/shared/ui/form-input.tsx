import type { UseFormRegisterReturn } from "react-hook-form";

type FormInputProps= {
  label: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegisterReturn<string>;
}

export function FormInput({
  label,
  placeholder,
  error,
  register
}: FormInputProps) {
  return (
    <div className="form-input">
      <label>{label}</label>

      <input
        {...register}
        placeholder={placeholder}
      />

      {error && (
        <span>{error}</span>
      )}
    </div>
  )
}