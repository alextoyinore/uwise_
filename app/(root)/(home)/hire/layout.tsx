import AuthNav from "@/components/auth/AuthNav";

export default function HireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col h-screen">
      <div className="w-full">{children}</div>
    </div>
  );
}

