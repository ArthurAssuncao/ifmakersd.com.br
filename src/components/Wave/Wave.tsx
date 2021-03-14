import { useEffect, useState } from "react";
import { default as Wavify } from "react-wavify";
import styles from "./Wave.module.scss";

interface WaveProps {
  className: string;
}

const Wave = (props: WaveProps) => {
  const { className } = props;

  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  const verifyIsMobile = (width: number) => {
    if (width < 768) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  };

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setWidth(width);
    verifyIsMobile(width);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    verifyIsMobile(width);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <Wavify
      paused={true}
      options={{
        height: isMobile ? 10 : 10,
        amplitude: isMobile ? 150 : 300,
        points: 2,
      }}
      className={`${className} ${styles.container} ${
        isMobile ? styles.mobile : styles.noMobile
      }`}
    />
  );
};

export { Wave };
