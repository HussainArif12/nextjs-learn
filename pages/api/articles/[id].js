import { dataset } from "../../../dataset";
export default (req, res) => {
  const data = dataset.find((item) => item.id === req.query.id);
  if (data === undefined) {
    res.statusCode = 404;
    return res.json({ data: "Not found" });
  }
  res.statusCode = 200;
  res.json(data);
};
