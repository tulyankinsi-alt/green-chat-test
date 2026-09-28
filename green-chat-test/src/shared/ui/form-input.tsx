import type { UseFormRegisterReturn } from "react-hook-form";
import styles from './styles.module.css';


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
    <div className={styles.formInput}>
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