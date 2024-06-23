
import Users from "../../../data.json";

export default function getDataById(req, res) {
  console.log(req);
  const { method, cookies, query } = req;
  const { id } = query;

  const user = Users.users.find((post) => post.id == id);

  if (!user) {
    res
      .status(404)
      .json({ message: "Gönderilen id ile eşleşen user bulunamadı." });
  }
  res.status(200).json(user);
}
