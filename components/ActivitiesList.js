// components/ActivitiesList.js
import useSWR from 'swr'
import React from 'react';

const fetcher = url => fetch(url).then(res => res.json())

function ActivitiesList() {
  const { data, error } = useSWR('/api/activities', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.activities.map(activity => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  )
}

export default ActivitiesList;
