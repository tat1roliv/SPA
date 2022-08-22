import React from 'react';
import Button from './Button';

import Input from './Input'

const Form = () => {
  return (
    <form>
        <p>
            <Input id="nome" label="nome" required/>
        </p>
        <p>
            <Input id="email" label="email"/>
        </p>
        <p>
            <Input id="password" type="password" label="password"/>
        </p>
        <Button />
    </form>
  )
}

export default Form