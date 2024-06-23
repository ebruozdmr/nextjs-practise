"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
export default function Products() {
  const routerViaBtn = useRouter();
  const queryParams = useSearchParams();
  const pathName = usePathname();
  const name = queryParams.get("name");
  const surname = queryParams.get("surname");
  // console.log("pathName:", pathName);
  // console.log("queryParams:", name, surname);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Products</h1>
      <div onClick={() => routerViaBtn.back()} className="cursor-pointer mt-3">
        Back
      </div>
    </main>
  );
}
