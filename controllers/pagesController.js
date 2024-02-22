async function index(req, res) {
  console.log("funciona en el controller");
  return res.end("WELCOME TO HOME");
}

module.exports = {
  index,
};
