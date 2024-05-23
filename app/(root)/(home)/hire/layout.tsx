import AuthNav from "@/components/auth/AuthNav";

export default function HireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-[auto] min-h-[50vh]">
      {children}
    </div>
  );
}
