export default function WebPageWrapper ({ children }:any) {
  return (
    <div className="w-full max-w-7xl mx-auto">
        {children}
    </div>
  );
}
