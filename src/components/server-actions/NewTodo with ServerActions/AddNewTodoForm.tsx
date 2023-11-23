'use client';
import React, { FormEvent, useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { addTodoAction } from '@/utils/actions/_action';

const AddNewTodoForm = () => {
  const [email, setEmail] = useState('');
  const onChange = (event: FormEvent<HTMLInputElement>) =>
    setEmail(event.currentTarget.value);
  const formActionHandler = async (formData: FormData) => {
    const title = formData.get('title');
    if (!title || typeof title !== 'string') return;
    await addTodoAction(title);
    setEmail("")
  };
  return (
    <form className={'relative flex'} action={formActionHandler}>
      <Input
        variant='outlined'
        label='Add Todo'
        type={'text'}
        crossOrigin
        value={email}
        onChange={onChange}
        name={'title'}
      />
      <Button
        size='sm'
        color={email.trim().length > 3 ? 'gray' : 'blue-gray'}
        disabled={email.trim().length < 4}
        className='!absolute right-1 top-1 rounded'
        type={'submit'}
      >
        ADD
      </Button>
    </form>
  );
};

export default AddNewTodoForm;