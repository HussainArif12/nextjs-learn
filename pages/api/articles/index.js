import { dataset } from "../../../dataset.js";
export default (req, res) => {
  res.statusCode = 200;
  res.json(dataset);
};
