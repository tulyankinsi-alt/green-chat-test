import { useState } from 'react'
import { useAuthStore } from '../store/auth-store'
import { useForm } from 'react-hook-form';
import type { BaseAuthParams } from '../shared/types/base';
import { FormInput } from '../shared/ui/form-input';

export function LoginPage() {
  const login = useAuthStore((s) => s.login);
  const [isLoading, setIsLoading] = useState(false);

  const {register, handleSubmit, formState: {errors}} = useForm<BaseAuthParams>();

  const onSubmit = (data: BaseAuthParams) => {
    const {idInstance, apiTokenInstance, apiUrl} = data;
    setIsLoading(true);

    try {
      login({ idInstance, apiTokenInstance, apiUrl });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit(onSubmit)}>
        <h1>Telegram</h1>

        <p className="login-hint">
          Введите данные инстанса <a href='https://green-api.com/telegram' target='_blank'>GREEN-API</a>
        </p>

        <FormInput
          label="idInstance"
          error={errors.idInstance?.message}
          register={register('idInstance', {
            required: "Введите idInstance"
          })}
        />

        <FormInput
          label="apiTokenInstance"
          error={errors.apiTokenInstance?.message}
          register={register('apiTokenInstance', {
            required: "Введите apiTokenInstance"
          })}
        />

        <FormInput
          label="apiUrl"
          placeholder='https://0000.api.green-api.com'
          error={errors.apiUrl?.message}
          register={register('apiUrl', {
            required: "Введите apiUrl",
            pattern: {
              value: /^https:\/\/\d+\.api\.green-api\.com$/,
              message: 'Введите правильный URL'
            }
          })}
        />

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  )
}