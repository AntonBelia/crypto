import React from 'react';

import './Avatar.scss'

import frame from '../../helpers/icon/avatar-frame.png'

interface AvatarProps {
  avatarUrl: string;
}

const Avatar = ({ avatarUrl }: AvatarProps) => {
  return (
    <div className="avatar">
      <img src={avatarUrl} alt="Avatar" />
      <div className="avatar-frame">
        <img src={frame} alt="Avatar frame" />
      </div>
    </div>
  );
};

export default Avatar;