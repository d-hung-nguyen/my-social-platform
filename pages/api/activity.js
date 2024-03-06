import dbConnect from '../../utils/dbConnect'; // Ensure you have a util to connect to MongoDB
import Activity from '../../models/ActivityModel';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const activity = await Activity.create(req.body);
      res.status(201).json({ success: true, activity });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
