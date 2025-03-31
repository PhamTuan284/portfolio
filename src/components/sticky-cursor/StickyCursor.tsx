"use client";
import { useEffect, useState, useRef, memo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "framer-motion";
import "./StickyCursor.scss";

interface MagneticCursorProps {
  stickyElement: React.RefObject<HTMLDivElement>;
}

export default memo(function MagneticCursor({
  stickyElement,
}: MagneticCursorProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredText, setHoveredText] = useState("");
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  // Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 500, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const rotate = (distance: { x: number; y: number }) => {
    const angle = Math.atan2(distance.y, distance.x);
    if (cursor.current) {
      animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
    }
  };

  const manageMouseMove = (e: MouseEvent) => {
    if (!stickyElement.current) return;

    const { clientX, clientY } = e;
    const { left, top, height, width } =
      stickyElement.current.getBoundingClientRect();

    // Center position of the stickyElement
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      // Distance between the mouse pointer and the center of the custom cursor
      const distance = { x: clientX - center.x, y: clientY - center.y };

      // Rotate
      rotate(distance);

      // Stretch based on the distance
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      // Move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      // Move custom cursor to the current mouse position
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = (e: MouseEvent) => {
    setIsHovered(true);
    // Get the text content of the hovered element
    const target = e.target as HTMLElement;
    if (target) {
      const text = target.textContent || "";
      setHoveredText(text.charAt(0).toUpperCase());
    }
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    setHoveredText("");
    if (cursor.current) {
      animate(
        cursor.current,
        { scaleX: 1, scaleY: 1 },
        { duration: 0.1, type: "spring" }
      );
    }
  };

  useEffect(() => {
    if (!stickyElement.current) return;

    const element = stickyElement.current;
    element.addEventListener("mouseenter", manageMouseOver);
    element.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      element.removeEventListener("mouseenter", manageMouseOver);
      element.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered, stickyElement]);

  const template = ({ rotate, scaleX, scaleY }: any) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div>
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className="cursor"
        ref={cursor}
      >
        {hoveredText && <span className="cursor-text">{hoveredText}</span>}
      </motion.div>
    </div>
  );
});
