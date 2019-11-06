export default (_req, res) => {
  const date = new Date().toISOString();
  res.status(200).send(date);
};
