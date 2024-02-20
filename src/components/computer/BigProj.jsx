import React from "react";
import ProjArt from "./ProjArt";
import "./style/BigProj.css";
import { HtmlIcon, CssIcon, JsIcon, JQueryIcon, ReacIcon, TailwindIcon } from "../Icon";

export default function BigProj() {
  return (
    <section className="comWindow">
      <ProjArt tit="Marvel Clone WEB" date="2024.01.22 ~ 2024.02.08" imgs={["marvel1.png", "marvel2.png", "marvel3.png"]} desc="Marvel 웹사이트 클론코딩입니다. " lis={["모든 화면 크기를 지원하는 반응형 디자인", "useInfiniteQuery를 활용한 무한 스크롤 UI", "React Router를 활용한 페이지 렌더링", "Framer motion을 활용한 동적 요소"]} compo={[ReacIcon, TailwindIcon]} host="https://spontaneous-meringue-3846b5.netlify.app/" git="https://github.com/asdf080/Marble-Web" />
      <ProjArt
        tit="Laptop web"
        date="2024.01.17 ~ 2024.01.31"
        imgs={["lap1.png", "lap2.png", "lap3.png", "lap4.png", "lap5.png", "lap6.png"]}
        desc="노트북의 기종과 브랜드에 대해 설명하는 웹페이지입니다. 설명용 메인 페이지와 노트북 찾기 서브 페이지, 두가지 페이지로 구성되어 있습니다."
        lis={["모든 화면 크기를 지원하는 반응형 디자인", "다크 모드/라이트 모드 토글 버튼", "getBoundingClientRect API를 활용한 커서/스크롤 연동 CSS 애니메이션", "오픈 API를 활용한 카카오맵 서비스", "MBTI 테스트 사이트를 오마주한 노트북 테스트 서브 페이지"]}
        compo={[HtmlIcon, CssIcon, JsIcon]}
        host="https://asdf080.github.io/Laptop-intro/"
        git="https://github.com/asdf080/Laptop-intro"
        fig="https://www.figma.com/file/KbxjzItSk3V23GCEuK1Awu/Laptop-wireframe?type=design&node-id=0%3A1&mode=design&t=Ysh8fm0VcqC6Mc2P-1"
      />
      <ProjArt
        tit="TMDB Clone web"
        date="2024.01.09 ~ 2024.01.19"
        imgs={["tmdb1.png", "tmdb2.png", "tmdb3.png"]}
        desc="TMDB 영화 사이트 클론코딩입니다. Open Api를 활용하여 현재 인기있는 영화, TV 시리즈의 목록과 상세정보를 볼 수 있습니다."
        lis={["다크 모드/라이트 모드 토글 버튼", "useNavigate를 활용한 데이터 검색 기능", "React Router를 활용한 페이지 렌더링", "React circular progressbar, React slick, React Spinners 등의 라이브러리를 활용한 컴포넌트"]}
        compo={[ReacIcon, TailwindIcon]}
        host="https://bejewelled-treacle-b6becd.netlify.app/"
        git="https://github.com/asdf080/Movie-homePage"
      />
      <ProjArt
        tit="eBook web"
        date="2023.12.14 ~ 2023.12.27"
        imgs={["ebook1.png", "ebook2.png", "ebook3.png"]}
        desc="전자책, eBook에 대해 소개하는 홈페이지입니다."
        lis={["모든 화면 크기를 지원하는 반응형 디자인", "다크 모드/라이트 모드 토글 버튼", "Intersection Observer API를 활용한 스크롤 연동 CSS 애니메이션", "jQuery 라이브러리를 활용한 폭죽 이스터에그"]}
        compo={[HtmlIcon, CssIcon, JsIcon, JQueryIcon]}
        host="https://asdf080.github.io/eBook-intro/"
        git="https://github.com/asdf080/eBook-intro"
      />
      <ProjArt tit="To do List" date="2023.12.14 ~ 2023.12.18" imgs={["todo1.png", "todo1.png"]} desc="할 일을 메모하고 정리할 수 있는 To-do-list입니다." lis={["로컬 스토리지를 이용한 메모 저장 및 삭제", "Weather API를 이용한 현재 장소의 날씨 표기", "명언 API를 이용한 랜덤 명언 표기"]} compo={[HtmlIcon, CssIcon, JsIcon]} host="https://asdf080.github.io/To-do-list/" git="https://github.com/asdf080/To-do-list" />
    </section>
  );
}
