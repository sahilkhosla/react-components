// imports
import React, { useState } from 'react';
import { TextInput } from '../components/TextInput';

// boilerplate
export default {
  title: 'TextInput',
  component: TextInput,
  // argTypes: {
  //   placeholder: { control: 'text' },
  //   value: { control: { disabled: true }},
  //   onSubmit: { control: 'submit'}
  // },
};

// dummy app
const RenderComponent = ({ placeholder, value, onChange, onSubmit }) => {
  // handle state and events -- "parent component"
  const [v, setV] = useState(value ?? '');

  const handleOnChange = (event) => {
    setV(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // take the value and do something with it...
    setV('');
  }

  return (
    <TextInput 
      placeholder={placeholder}
      value={v}  
      onChange={handleOnChange}    
      onSubmit={handleOnSubmit}  
    />
  );
}

// component demo
export const TextInputDemo = RenderComponent.bind({});
TextInputDemo.args = { placeholder: 'Enter text here...' }

export const TextInputDemo2 = RenderComponent.bind({});
TextInputDemo2.args = { placeholder: 'Placeholder...' }