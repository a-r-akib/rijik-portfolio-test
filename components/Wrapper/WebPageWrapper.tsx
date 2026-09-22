export default function WebPageWrapper ({ children }:any) {
  return (
    <div className="max-w-7xl mx-auto">
        {children}
    </div>
  );
}
