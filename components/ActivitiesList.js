// components/ActivitiesList.js or wherever you use it
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher'; // or define fetcher directly here

function ActivitiesList() {
  const { data, error } = useSWR('/api/activities', fetcher);

  if (error) return <div>Failed to load activities</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.data.map((activity) => (
        <div key={activity._id}>{activity.name}</div> // Example; adjust based on your data structure
      ))}
    </div>
  );
}

export default ActivitiesList;
