'use client';
import { useEffect, useState } from "react";
import "@/../styles/MouseStalker.css";

const Pointer = ({ name, position }) => (
  <div
    className={`${name}`}
    style={{
      transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  ></div>
);


function MouseStalker() {
  // マウスの座標
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveListener = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // マウント時：マウスイベントリスナを追加
    window.addEventListener("mousemove", mouseMoveListener);

    // アンマウント時：マウスイベントリスナを削除
    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);

  return (
    <div className="MouseStalker">
      <Pointer name="pointer small" position={mousePosition} />
      <Pointer name="pointer" position={mousePosition} />
      <Pointer name="pointer large" position={mousePosition} />
    </div>
  );
}

export default MouseStalker;
