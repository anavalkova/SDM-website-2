interface BrowserMockupProps {
  src: string;
  alt: string;
}

const BrowserMockup = ({ src, alt }: BrowserMockupProps) => {
  return (
    <div className="rounded-lg border border-border shadow-lg overflow-hidden bg-background">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-section border-b border-border">
        <span className="w-3 h-3 rounded-full bg-border" />
        <span className="w-3 h-3 rounded-full bg-border" />
        <span className="w-3 h-3 rounded-full bg-border" />
        <span className="ml-3 text-xs text-muted-foreground flex-1 text-center">app.smartdatamanagement.com</span>
      </div>
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
};

export default BrowserMockup;
