import React, { useContext } from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='bg-white shadow-md p-4 flex justify-between items-center'>
      <Link to='/dashboard'>
        <h2 className='text-xl font-bold text-blue-600'>TyariBot</h2>
      </Link>
      <ProfileInfoCard user={user} />
    </div>
  );
};

export default Navbar;
