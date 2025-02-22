export function validateSearchRequest(req, res, next) {
  const query = req.query.query;

  const offset = req.query.offset;

  if (!query) {
    res.status(400).send({ error: `missing query param 'query'` });
  }
  if (offset) {
    if (typeof offset != "number") {
      res.status(400).send({ error: `wrong offset type` });
    }
  }

  next();
}
