import React, { useState } from 'react';
import ProfileList from '../components/ProfileList';
import MapComponent from '../components/MapComponent';
import { profiles } from '../data/profiles';

const HomePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  console.log('Profiles:', profiles); // Check if profiles data is loading
  console.log('Selected Profile:', selectedProfile);
  const handleViewSummary = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <h1>Profiles</h1>
      <ProfileList profiles={profiles} onViewSummary={handleViewSummary} />
      {selectedProfile && (
        <div>
          <h2>Location of {selectedProfile.name}</h2>
          <MapComponent lat={selectedProfile.lat} lng={selectedProfile.lng} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
