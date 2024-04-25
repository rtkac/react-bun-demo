import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Form } from '@components';

interface SignUpValues {
  firstName: string;
  lastName: string;
}

export const SignUp: React.FC = () => {
  const methods = useForm<SignUpValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const { register, handleSubmit, formState } = methods;

  const onSubmit = async (data: SignUpValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.Input {...register('firstName', { required: true })} placeholder="Enter first name" />
        <Form.Input {...register('lastName', { required: true })} placeholder="Enter last name" />
        <button
          type="submit"
          disabled={!formState.isValid}
          className="mb-2 me-2 w-full rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 disabled:bg-blue-500"
        >
          Submit
        </button>
      </Form.Root>
    </FormProvider>
  );
};
