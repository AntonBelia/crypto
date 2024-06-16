import React from 'react';

import './Avatar.scss'

interface AvatarProps {
  avatarUrl: string;
}

const Avatar = ({ avatarUrl }: AvatarProps) => {
	
  return (
    <div className="avatar">
      <img src={avatarUrl} alt="Avatar" />
    </div>
  );
};

export default Avatar;