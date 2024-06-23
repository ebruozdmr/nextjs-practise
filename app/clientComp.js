"use client";
import { useRouter } from "next/navigation";

export default function ClientComp() {
//   console.log("CSR example:", "Tarayıcı konsolunda görülür. ");
  const routerViaBtn = useRouter();
//   console.log(routerViaBtn);

  return (
    <>
      <div className="mt-5">Client Component</div>
      <div
        onClick={() => routerViaBtn.push("/products")}
        className="cursor-pointer mt-3"
      >
        Products
      </div>

      <div onClick={() => routerViaBtn.forward()} className="cursor-pointer">
        Forward
      </div>
      <div onClick={() => routerViaBtn.refresh()} className="cursor-pointer">
        Refresh
      </div>
    </>
  );
}
