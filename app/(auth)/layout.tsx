import AuthNav from "@/components/auth/AuthNav";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-[auto] min-h-[50vh]">
      <AuthNav />
      {children}
    </div>
  );
}
