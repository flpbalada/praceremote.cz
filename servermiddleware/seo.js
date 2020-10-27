const redirects = [
  { from: "/old", to: "/new" },
  { from: "/veryold", to: "/verynew" },
  { from: "/too-old", to: "/new" }
];

module.exports = function(req, res, next) {
  const redirect = redirects.find(r => r.from === req.url);
  if (redirect) {
    console.log(`redirect: ${redirect.from} => ${redirect.to}`);
    res.writeHead(301, { Location: redirect.to });
    res.end();
  } else {
    next();
  }
};
