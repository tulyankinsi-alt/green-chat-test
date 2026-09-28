import { useState } from 'react'

import { useForm } from 'react-hook-form';

import styles from './styles.module.css';
import { useAuthStore } from '../../store';
import type { BaseAuthParams } from '../../shared/types';
import { FormInput } from '../../shared/ui';

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
    <div className={styles.loginPage}>
      <form className={styles.loginCard} onSubmit={handleSubmit(onSubmit)}>
        <h1>Telegram</h1>

        <p className={styles.loginHint}>
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

        <button type="submit" className={styles.btnPrimary} disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  )
}