import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const ProfileCard = ({ profile, onViewSummary }) => (
  <Card sx={{ maxWidth: 345 }}>
    {/* Ensures the image maintains aspect ratio */}
    <CardMedia
      component="img"
      height="200"
      image={profile.image}
      alt={profile.name}
      style={{ objectFit: 'cover' }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {profile.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {profile.description}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => onViewSummary(profile)}>
        View Summary
      </Button>
    </CardContent>
  </Card>
);

export default ProfileCard;
