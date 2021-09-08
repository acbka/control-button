import React, { useRef, useEffect } from "react";
import "./userStatus.css";
import { color } from "../../../common/constants";
import { drawArc, drawCross, drawTitle, clear } from "../../../common/draw";

export const UserStatus = ({ member }) => {
  const canvasRef = useRef(null);
  const radius = 88;
  const center = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;
    clear(context);

    member.forEach((el) => {
      let startArc = ((el.start + 1) * Math.PI) / 180;
      let endtArc = ((el.end - 1) * Math.PI) / 180;
      drawArc(context, startArc, endtArc, color[el.status], center, radius);
      if (el.status === "broken") {
        let crossCenter = (endtArc - startArc) / 2 + startArc;
        let x = radius * Math.cos(crossCenter) + center;
        let y = radius * Math.sin(crossCenter) + center;
        drawCross(context, x, y, color[el.status]);
      }
    });
    drawTitle(context, member.length, center);
  }, [member]);

  const handleClick = (e) => {
    e.preventDefault();
    let xMouse = e.nativeEvent.offsetX;
    let yMouse = e.nativeEvent.offsetY;
    let angle;
    if (
      Math.pow(xMouse - center, 2) + Math.pow(yMouse - center, 2) >
        Math.pow(radius - 5, 2) &&
      Math.pow(xMouse - center, 2) + Math.pow(yMouse - center, 2) <
        Math.pow(radius + 5, 2)
    ) {
      if (xMouse > 188) {
        xMouse = 188;
      }
      if (yMouse < 100) {
        angle = 360 - (Math.acos((xMouse - center) / radius) * 180) / Math.PI;
      } else {
        angle = (Math.acos((xMouse - center) / radius) * 180) / Math.PI;
      }
    }

    member.forEach((el) => {
      if (angle > el.start && angle < el.end) {
        alert(`Member ${el.id + 1}`);
      }
    });
  };

  return <canvas className="canvas" ref={canvasRef} onClick={handleClick} />;
};
