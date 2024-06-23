const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
export default async function Product({ params }) {
  console.log("params.id:", params.id);
  const users = await fetchData();
  // console.log("data:", users);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{"Product-" + params.id}</h1>
    </main>
  );
}

export async function generateStaticParams() {
  const users = await fetchData();
  return users.map((user) => ({ params: { id: user.id.toString() } }));
}
