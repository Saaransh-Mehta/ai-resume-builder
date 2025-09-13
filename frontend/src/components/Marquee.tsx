const LogoMarquee = () => {
  const logos = [
    { name: "Bloomberg", svg: "Bloomberg" },
    { name: "Microsoft", svg: "Microsoft" },
    { name: "Adobe", svg: "Adobe" },
    { name: "Google", svg: "Google" },
    { name: "Meta", svg: "Meta" },
    { name: "Netflix", svg: "NETFLIX" },
    { name: "Amazon", svg: "amazon" },
    { name: "Airbnb", svg: "airbnb" },
  ];

  const LogoItem = ({ name, svg }: { name: string; svg: string }) => (
    <div className="flex items-center justify-center px-8 py-4 min-w-[180px]">
      <span 
        className="text-2xl font-bold text-marquee-filter transition-all duration-300 hover:text-foreground select-none"
        style={{
          fontFamily: name === 'Google' ? 'Arial, sans-serif' : 
                     name === 'Netflix' ? 'Arial Black, sans-serif' :
                     name === 'Meta' ? 'Helvetica, sans-serif' :
                     name === 'Adobe' ? 'Myriad Pro, sans-serif' :
                     name === 'Microsoft' ? 'Segoe UI, sans-serif' :
                     'system-ui, sans-serif'
        }}
      >
        {svg}
      </span>
    </div>
  );

  return (
    <div className="w-full bg-marquee py-12 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <LogoItem key={`first-${index}`} name={logo.name} svg={logo.svg} />
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <LogoItem key={`second-${index}`} name={logo.name} svg={logo.svg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;