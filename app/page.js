import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientComp from "./clientComp";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
function load(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/* Data fetching işlemlerinde CSR kullanıldığında useEffect ve useState hook'larından yararlanılarak fetch işlemi yapılır.  */
/* SSR kullanıldığında ise async-await yapısı kullanılarak fonksiyon oluşturulur ve fetch edilen data return edilir. */
async function getCountryData() {
  const data = await fetch("https://restcountries.com/v3.1/name/deutschland");
  return data.json();
}
async function getLanguageData() {
  const data = await fetch("https://restcountries.com/v3.1/lang/spanish");
  return data.json();
}
const Home = async () => {
  await load(3000);
  const newCookies = cookies().getAll();
  // console.log("cookies:", newCookies);
  let isRoute = false;
  /* Data fetching işlemleri promise yapıda oldukları için fetch işleminin sonucunun beklenilmesi gerekir.
  Bu nedenle eğer sayfada iki farklı api'den gelen data bekleniyorsa bu durum sayfada yavaşlamaya sebep olabilir.
  const country = await getCountryData();
  const language = await getLanguageData(); */
  /* Fonksiyonların await kısımlarını aldığımız için datalar otomatik olarak promise olarak döndüler. */
  // const country = getCountryData();
  // const language = getLanguageData();
  /* Sayfanın yavaşlamasını engellemek için Promise.all metodu kullanıldı. */
  /* Promise.all yapısı kullanılan teknolojiden bağımsız olarak çoklu api kulllanımlarında datanın hızlı bir şekilde çekilmesini sağlamak için kullanılabilir. */
  // const data = await Promise.all([country, language]);

  // console.log("country:", country);
  // console.log("language:", language);
  // console.log("data:", data);

  if (isRoute) {
    /*  user işlemleri olduğunda ya da sayfada belli  işlemleri yaptırdıktan 
    sonra uygulamanın farklı bir sayfaya yönlenmesini istiyorsak "redirect" kullanabiliriz. */
    redirect("/products");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className={`text-2xl ${inter.variable}`}>Next.js</h1>
      <Link
        href="/products"
        className={`pt-20 text-red-500 ${roboto.variable} `}
      >
        Products
      </Link>
      <Link
        href="/products?name=ebru&surname=ozdemir"
        className="pt-4 text-red-800"
      >
        Rotating with Query String
      </Link>
      <Link
        href={{
          pathname: "/products",
          query: {
            name: "ebru",
            surname: "ozdemir",
          },
        }}
        className="p-4 text-orange-400"
      >
        Rotating with Query Object
      </Link>
      <Image
        src="https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg"
        alt="Nature"
        width={600}
        height={400}
        className="pt-20"
      ></Image>
      <ClientComp></ClientComp>
    </main>
  );
};

export default Home;
