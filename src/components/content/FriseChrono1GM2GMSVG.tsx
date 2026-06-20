import React from 'react';

export const FriseChrono1GM2GMSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg my-8 overflow-x-auto">
      <div className="text-xl font-bold mb-10 text-center text-white">Les deux Guerres mondiales : Chronologie comparée</div>
      <div className="min-w-[800px] relative h-48 mt-12 mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-600 rounded -translate-y-1/2"></div>
        
        {/* 1914 */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="absolute -top-16 bg-red-500/20 text-red-300 px-3 py-1 rounded text-[10px] text-center border border-red-500/50 w-24">Attentat de<br/>Sarajevo</div>
          <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-background z-10 relative"></div>
          <div className="mt-4 font-bold text-xs">1914</div>
        </div>

        {/* 1916 */}
        <div className="absolute left-[18%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="absolute -top-16 bg-orange-500/20 text-orange-300 px-3 py-1 rounded text-[10px] text-center border border-orange-500/50 w-24">Bataille de<br/>Verdun</div>
          <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-background z-10 relative"></div>
          <div className="mt-4 font-bold text-xs">1916</div>
        </div>

        {/* 1917 */}
        <div className="absolute left-[28%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="absolute -top-16 bg-orange-500/20 text-orange-300 px-3 py-1 rounded text-[10px] text-center border border-orange-500/50 w-24">Révolution<br/>Russe</div>
          <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-background z-10 relative"></div>
          <div className="mt-4 font-bold text-xs">1917</div>
        </div>

        {/* 1918 */}
        <div className="absolute left-[38%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="absolute -top-16 bg-green-500/20 text-green-300 px-3 py-1 rounded text-[10px] text-center border border-green-500/50 w-24">Armistice<br/>(11 nov.)</div>
          <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-background z-10 relative"></div>
          <div className="mt-4 font-bold text-xs">1918</div>
        </div>

        {/* Période entre deux guerres */}
        <div className="absolute left-[48%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-32 flex justify-center mt-14 text-muted text-[10px] text-center italic font-medium">
          Entre-deux-Guerres<br/>(20 ans de paix)
        </div>

        {/* 1939 */}
        <div className="absolute left-[60%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="absolute -top-16 bg-red-500/20 text-red-300 px-3 py-1 rounded text-[10px] text-center border border-red-500/50 w-24">Invasion de<br/>la Pologne</div>
          <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-background z-10 relative"></div>
          <div className="mt-4 font-bold text-xs">1939</div>
        </div>

        {/* 1942 */}
        <div className="absolute left-[75%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="absolute -top-16 bg-orange-500/20 text-orange-300 px-3 py-1 rounded text-[10px] text-center border border-orange-500/50 w-24">Tournant :<br/>Stalingrad</div>
          <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-background z-10 relative"></div>
          <div className="mt-4 font-bold text-xs">1942</div>
        </div>

        {/* 1945 */}
        <div className="absolute left-[92%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="absolute -top-16 bg-green-500/20 text-green-300 px-3 py-1 rounded text-[10px] text-center border border-green-500/50 w-24">Capitulation<br/>nazie / Japon</div>
          <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-background z-10 relative"></div>
          <div className="mt-4 font-bold text-xs">1945</div>
        </div>

        {/* Périodes blocs colorés sur la ligne */}
        <div className="absolute left-[5%] top-1/2 w-[33%] h-2 bg-red-500/30 -translate-y-1/2 rounded-full"></div>
        <div className="absolute left-[60%] top-1/2 w-[32%] h-2 bg-red-500/30 -translate-y-1/2 rounded-full"></div>

      </div>
    </div>
  );
};
