import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const ProfileInfoCard = ({ user }) => {
  const navigate = useNavigate();
  const { clearUser } = useContext(UserContext);

  const handleLogout = () => {
    clearUser(); 
    navigate('/login'); 
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
        {user?.name?.[0]?.toUpperCase() || 'U'}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold">
          {user?.name || 'User'}
        </span>
        <button
          onClick={handleLogout}
          className="text-xs text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
