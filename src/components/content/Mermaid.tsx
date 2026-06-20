import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Inter, system-ui, sans-serif',
});

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`).current;
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    
    const renderChart = async () => {
      if (!chart) return;
      try {
        setError(false);
        const { svg } = await mermaid.render(id, chart);
        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err) {
        console.error("Mermaid parsing error:", err);
        if (isMounted) {
          setError(true);
        }
      }
    };
    
    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart, id]);

  return (
    <div className="flex justify-center my-8 bg-surface/30 p-6 rounded-2xl border border-border overflow-x-auto" ref={containerRef}>
      {error ? (
        <div className="text-danger flex flex-col items-center">
            <span className="font-bold">Erreur de rendu du schéma</span>
            <pre className="text-xs mt-2 bg-background p-2 rounded max-w-full overflow-x-auto">{chart}</pre>
        </div>
      ) : svgContent ? (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      ) : (
        <div className="text-muted animate-pulse">Chargement du schéma...</div>
      )}
    </div>
  );
};

export default Mermaid;
