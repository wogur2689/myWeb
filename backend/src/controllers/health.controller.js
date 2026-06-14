export function getHealth(_req, res) {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  })
}
