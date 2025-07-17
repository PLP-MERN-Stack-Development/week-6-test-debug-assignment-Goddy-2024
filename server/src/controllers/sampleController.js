exports.doubleValue = (req, res) => {
  const { value } = req.body;
  res.json({ result: value * 2 });
}; 