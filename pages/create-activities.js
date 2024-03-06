// pages/create-activity.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateActivity() {
  const [activity, setActivity] = useState({
    userName: '',
    activityName: '',
    date: '',
    time: '',
    location: '',
    category: '',
    description: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation logic here
    // Post to API route
    const response = await fetch('/api/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activity),
    });

    if (response.ok) {
      // Redirect to homepage or display success message
      router.push('/');
    } else {
      // Handle errors or display warning message
    }
  };

  // Form UI
  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields here */}
      <button type="submit">Save</button>
    </form>
  );
}
