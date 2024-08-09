import { useState, useEffect } from 'react';
import { FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo></Logo>
        <h3>Login</h3>
        {/* Name Field */}
        <FormRow
          type={'text'}
          value={values.name}
          labelText={'Name'}
          name={'name'}
          handleChange={handleChange}
        ></FormRow>
        {/* Email Field */}
        <FormRow
          type={'email'}
          value={values.email}
          labelText={'email'}
          name={'Email'}
          handleChange={handleChange}
        ></FormRow>
        {/* Submit */}
        <button className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  );
};
export default Register;
