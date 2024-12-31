import { useId } from 'react';
// Generating IDs for several related elements 
// If you need to give IDs to multiple related elements, you can call useId to generate a shared prefix for them:
export default function UseHook2() {
  const id = useId();
  return (
    <form>
      <label htmlFor={id + '-firstName'}>First Name:</label>
      <input id={id + '-firstName'} type="text" />
      <hr />
      <label htmlFor={id + '-lastName'}>Last Name:</label>
      <input id={id + '-lastName'} type="text" />
    </form>
  );
}
