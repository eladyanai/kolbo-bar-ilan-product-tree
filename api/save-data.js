export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // Validate data structure
    if (!data || !Array.isArray(data.groups)) {
      return res.status(400).json({ error: 'Invalid data structure' });
    }

    // In production, save to database
    // For now, just validate and return success
    console.log(`[${new Date().toISOString()}] Saved data:`, {
      groups: data.groups.length,
      departments: data.groups.reduce((sum, g) => sum + g.departments.length, 0),
      subcategories: data.groups.reduce((sum, g) => 
        sum + g.departments.reduce((dsum, d) => dsum + d.subcategories.length, 0), 0
      )
    });

    return res.status(200).json({
      success: true,
      message: 'Data saved successfully',
      timestamp: new Date().toISOString(),
      counts: {
        groups: data.groups.length,
        departments: data.groups.reduce((sum, g) => sum + g.departments.length, 0),
        subcategories: data.groups.reduce((sum, g) => 
          sum + g.departments.reduce((dsum, d) => dsum + d.subcategories.length, 0), 0
        )
      }
    });
  } catch (error) {
    console.error('Save error:', error);
    return res.status(500).json({
      error: 'Failed to save data',
      message: error.message
    });
  }
}
