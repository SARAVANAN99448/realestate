const MarqueeText = () => {
  return (
    <div className="bg-black overflow-hidden w-full py-2">
      <div className="w-[200%]">
        <div
          className="text-white text-base sm:text-lg whitespace-nowrap inline-block animate-marquee-right"
          style={{
            animation: 'scroll-right 15s linear infinite',
          }}
        >
          "Premium lake & mountain view plots – your dream retreat awaits!" &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <style>
        {`
          @keyframes scroll-right {
            0% { transform: translateX(-100vw); }
            100% { transform: translateX(100vw); }
          }
        `}
      </style>
    </div>
  );
};

export default MarqueeText;
