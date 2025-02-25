export const getUsers =
  ("/",
  (req, res) => {
    res.json({ message: "GET" });
  });
export const postUsers =
  ("/",
  (req, res) => {
    res.json({ message: "POST" });
  });
export const putUsers =
  ("/",
  (req, res) => {
    res.json({ message: "PUT" });
  });
export const deleteUsers =
  ("/",
  (req, res) => {
    res.json({ message: "DELETE" });
  });
