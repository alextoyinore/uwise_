import AuthNav from "@/components/auth/AuthNav";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-blue-1/5"
      // style={{ backgroundImage: "url('/authbg2.svg')", objectFit: "contain" }}
    >
      <div className="w-1/2 z-10 border-[1px]  bg-white p-5 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

