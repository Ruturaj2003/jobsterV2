import { useState, useEffect } from 'react';
import { FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
  const handleChange = (e) => {
    const valueName = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [valueName]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (isMember) {
      if (!email | !password) {
        toast.warning('Please Fill All Fields');
      }
      dispatch(loginUser({ email: email, password: password }));
    }
    if (!isMember) {
      if (!email | !password | !name) {
        toast.warning('Please Fill All Fields');
      }
      dispatch(registerUser({ name: name, email: email, password: password }));
    }
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
        <button className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'Loading..' : 'Submit'}
        </button>
        {values.isMember && (
          <button
            type="button"
            className="btn btn-block btn-hipster"
            onClick={() => {
              dispatch(
                loginUser({ email: 'testUser@test.com', password: 'secret' })
              );
            }}
          >
            Test User
          </button>
        )}
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
