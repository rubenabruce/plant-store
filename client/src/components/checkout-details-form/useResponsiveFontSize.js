import { useEffect, useState } from "react";

export default function useResponsiveFontSize() {
  const getFontSize = () => (window.innerWidth < 650 ? "14px" : "20px");
  const [fontSize, setFontSize] = useState(getFontSize);

  useEffect(() => {
    const onResize = () => {
      setFontSize(getFontSize());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return fontSize;
}
