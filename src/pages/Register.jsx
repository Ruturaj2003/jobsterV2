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
    const valueName = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [valueName]: value });

    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo></Logo>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {!values.isMember && (
          // Name Field
          <FormRow
            type={'text'}
            value={values.name}
            labelText={'Name'}
            name={'name'}
            handleChange={handleChange}
          ></FormRow>
        )}

        {/* Email Field */}
        <FormRow
          type={'email'}
          value={values.email}
          labelText={'Email'}
          name={'email'}
          handleChange={handleChange}
        ></FormRow>
        {/* Password Field */}
        <FormRow
          type={'password'}
          value={values.password}
          labelText={'Password'}
          name={'password'}
          handleChange={handleChange}
        ></FormRow>
        {/* Submit */}
        <button className="btn btn-block">Submit</button>
        <p>
          {values.isMember ? 'Not a member yet? ' : 'Already a member'}
          <button onClick={toggleMember} type="button" className="member-btn">
            {!values.isMember ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
