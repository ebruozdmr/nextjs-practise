import Users from "../../../data.json";
/* Next.js sayesinde bir back end api'si oluşturulabilir.
Burada hazırlanan api ise front end kısmında kullanılabilir.*/
//pages/api dizini içindeki her bir dosya bir API route oluşturur.
export default function handleData(req, res) {
  //İşlem başarılı olursa datayı json formatında döndürür.
  res.status(200).json(Users);
}
