const shortid = require("shortid");
const URL = require("../models/url");
async function createNewShortURL(req, res) {
  const body = req.body;
  if (!body.URL) return res.status(400).json({ error: "url is required!" });
  const shortid = shortid(7);
  await URL.create({
    shortId: shortid,
    redirectURL: body.URL,
    customURL: body.customURL,
  });
  return res.json({ id: shortid });
}

module.exports = {
    createNewShortURL
}
