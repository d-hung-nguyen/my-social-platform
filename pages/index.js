import React from 'react';
import ActivitiesList from '../components/ActivitiesList';
import ActivityForm from '../components/ActivityForm';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Activities Page</h1>
      <ActivitiesList />
      <ActivityForm />
    </div>
  );
}
