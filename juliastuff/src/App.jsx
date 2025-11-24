import React, { useState, useEffect } from "react";

function App() {
  // Big Dipper stars (adapted coordinates)
  const scaleX = 40;
  const scaleY = 40;
  const offset = 50;
  const SVG_HEIGHT = 700;

  const [dots] = useState([
    { id: 7, x: 0 * scaleX + offset, y: SVG_HEIGHT - (15 * scaleY + offset) },
    { id: 6, x: 4 * scaleX + offset, y: SVG_HEIGHT - (14 * scaleY + offset) },
    { id: 5, x: 7 * scaleX + offset, y: SVG_HEIGHT - (11 * scaleY + offset) },
    { id: 4, x: 11 * scaleX + offset, y: SVG_HEIGHT - (8 * scaleY + offset) },
    { id: 3, x: 10 * scaleX + offset, y: SVG_HEIGHT - (5 * scaleY + offset) },
    { id: 2, x: 15 * scaleX + offset, y: SVG_HEIGHT - (3 * scaleY + offset) },
    { id: 1, x: 17 * scaleX + offset, y: SVG_HEIGHT - (6 * scaleY + offset) },
  ]);

  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);

  // Start line on a dot
  const handleMouseDown = (dot) => {
    setCurrentLine({ x1: dot.x, y1: dot.y, x2: dot.x, y2: dot.y });
  };

  // Update line while dragging
  const handleMouseMove = (e) => {
    if (currentLine) {
      setCurrentLine({
        ...currentLine,
        x2: e.nativeEvent.offsetX,
        y2: e.nativeEvent.offsetY,
      });
    }
  };
  
  useEffect(() => {
    const handleMouseUp = (e) => {
      if (currentLine) {
        const svg = document.querySelector("svg"); // get SVG element
        const rect = svg.getBoundingClientRect();  // get SVG position
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const dot = dots.find(
          (d) => Math.abs(d.x - mouseX) < 10 && Math.abs(d.y - mouseY) < 10
        );

        if (dot) {
          setLines((prev) => [
            ...prev,
            { x1: currentLine.x1, y1: currentLine.y1, x2: dot.x, y2: dot.y },
          ]);
        }

        setCurrentLine(null);
      }
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [currentLine, dots]);

  const handleUndo = () => {
    setLines((prev) => prev.slice(0, -1));
    setCurrentLine(null);
  };

  const handleClear = () => {
    setLines([]);
    setCurrentLine(null);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      <h1 className="text-3xl text-yellow-300 mb-4">Constellation Drawer</h1>
      <div className="mb-4 space-x-2">
        <button
          onClick={handleUndo}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Undo
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Clear
        </button>
      </div>

      <svg
        width="1000"
        height="1000"
        className="border border-gray-600"
        onMouseMove={handleMouseMove}
      >
        {/* Draw existing lines */}
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="black"
            strokeWidth="2"
          />
        ))}

        {/* Draw stars */}
        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r="8"
            fill="black"
            onMouseDown={() => handleMouseDown(dot)}
            className="cursor-pointer hover:fill-yellow-400"
          />
        ))}

        {/* Draw current dragging line */}
        {currentLine && (
          <line
            x1={currentLine.x1}
            y1={currentLine.y1}
            x2={currentLine.x2}
            y2={currentLine.y2}
            stroke="black"
            strokeWidth="2"
          />
        )}
      </svg>
    </div>
  );
}

export default App;
