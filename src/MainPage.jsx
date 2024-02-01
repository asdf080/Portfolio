import React, { useEffect, useState } from "react";
import "./index.css";
import MobileMain from "./MobileMain";

export default function MainPage() {
  const [showCompo, setshowCompo] = useState(window.innerWidth > 768);

  useEffect(() => {
    const 크기변경시실행함수 = () => {
      setshowCompo(window.innerWidth > 768);
    };

    window.addEventListener("resize", 크기변경시실행함수);

    // 컴포넌트가 언마운트될 때 이벤트 제거
    return () => window.removeEventListener("resize", 크기변경시실행함수);
  }, []);
  return <>{showCompo ? <div>컴퓨터</div> : <MobileMain />}</>;
}
