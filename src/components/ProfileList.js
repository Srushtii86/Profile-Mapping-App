import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css'; // Import custom CSS for Flexbox

const ProfileList = ({ profiles, onViewSummary }) => (
  <div className="profile-list">
    {profiles.map((profile) => (
      <div key={profile.id} className="profile-item">
        <ProfileCard profile={profile} onViewSummary={onViewSummary} />
      </div>
    ))}
  </div>
);

export default ProfileList;
