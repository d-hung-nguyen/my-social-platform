// components/ActivityForm.js
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';

export default function ActivityForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    const response = await fetch('/api/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Revalidate SWR cache
      mutate('/api/activities');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields here */}
      <input {...register("name", { required: true })} placeholder="Name of Activity" />
      {/* Include other fields with validation */}
      <input type="submit" value="Create Activity" />
    </form>
  );
}
