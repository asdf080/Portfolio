import React, { useEffect, useState } from "react";
import "./index.css";
import MobileMain from "./MobileMain";
import ComputerMain from "./ComputerMain";

export default function MainPage() {
  const [showCompo, setshowCompo] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const 크기변경시실행함수 = () => {
      setshowCompo(window.innerWidth > 1024);
    };

    window.addEventListener("resize", 크기변경시실행함수);

    // 컴포넌트가 언마운트될 때 이벤트 제거
    return () => window.removeEventListener("resize", 크기변경시실행함수);
  }, []);
  return <>{showCompo ? <ComputerMain /> : <MobileMain />}</>;
}
