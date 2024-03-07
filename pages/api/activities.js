// pages/api/activities.js
import dbConnect from '../../utils/dbConnect'; // Your MongoDB connection utility
import Activity from '../../models/Activity'; // Your Mongoose model

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const activities = await Activity.find(); // Fetch all activities from MongoDB
      res.status(200).json({ success: true, data: activities });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    // Handle other methods or return 405 for methods not allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
