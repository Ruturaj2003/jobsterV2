import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.warn('Fill all the fields');
      return;
    }
    dispatch(updateUser({ name, email, lastName, location }));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type={'text'}
            name="name"
            value={userData.name}
            handleChange={handleChange}
            labelText={'Name'}
          ></FormRow>
          <FormRow
            type={'text'}
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
            labelText={'Last Name'}
          ></FormRow>
          <FormRow
            type={'email'}
            name="email"
            value={userData.email}
            handleChange={handleChange}
            labelText={'Email Id'}
          ></FormRow>
          <FormRow
            type={'text'}
            name="location"
            value={userData.location}
            handleChange={handleChange}
            labelText={'Location'}
          ></FormRow>
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Saving Changes' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
