import React from "react";
import ProjArt from "./ProjArt";
import "./style/BigProj.css";
import { HtmlIcon, CssIcon, JsIcon, JQueryIcon, ReacIcon, TailwindIcon, PHPIcon } from "../Icon";

export default function BigProj() {
  return (
    <section className="comWindow">
      <ProjArt
        tit="대구 수목원 스탬프 투어"
        date="2024.05.01 ~ 2024.05.23"
        imgs={["sumok2.jpg", "sumok1.jpg"]}
        desc="대구 수목원 스탬프투어 모바일 전용 웹입니다. 하이브리드 앱에 적용하기 위한 웹사이트입니다. 팀 프로젝트로 제작했으며 기획, UI UX 디자인, 프론트 엔드를 담당했습니다."
        lis={["카카오, 구글 간편 회원가입, 로그인 기능", "회원 전용 GPS 기반 QR 코드 스캔 및 스탬프 저장 기능", "유저의 편의를 위한 다크 모드, 색맹 모드, 외국어 모드", "오픈 API를 활용한 지도 및 날씨 지원"]}
        compo={[ReacIcon, TailwindIcon]}
        host="https://daegusumokwon.netlify.app/"
        git="https://github.com/Kimeunryeong/su-mok-won"
        fig="https://www.figma.com/design/9XKViZ6WYcwNfBegUiyphq/%EC%88%98%EB%AA%A9%EC%9B%90?t=CU8SSed4lS7doLqM-1"
      />
      <ProjArt
        tit="대구 원데이 클래스 사이트"
        date="2024.04.01 ~ 2024.04.26"
        imgs={["oneday1.png", "oneday2.png"]}
        desc="대구의 원데이 클래스를 홍보하거나, 수강 신청할 수 있는 사이트입니다. 팀 프로젝트로 제작했으며 기획, UI UX 디자인, 웹 퍼블리싱, 프론트 엔드를 담당했습니다."
        lis={["회원 가입, 로그인 기능", "회원 전용 수강 신청 기능", "수강 신청 완료 시 알림톡 전송"]}
        compo={[ReacIcon, TailwindIcon]}
        host="https://one-day-git-master-jaesiks-projects.vercel.app/"
        git="https://github.com/sikkkkkw/OneDay"
        fig="https://www.figma.com/file/PnKLyCHOkxAUAYQZFZMgN2/one-day?type=design&mode=design&t=gJuwZCa96y3YZf6Z-0"
      />
      <ProjArt
        tit="동성로 관광 안내 사이트"
        date="2024.03.04 ~ 2024.03.28"
        imgs={["dongseong1.png", "dongseong2.png", "dongseong3.png"]}
        desc="대구광역시의 동성로를 안내하는 사이트입니다. 팀 프로젝트로 제작했으며 기획, UI UX 디자인과 웹 퍼블리싱, 프론트 엔드를 담당했습니다."
        lis={["네이버, 카카오 연동 소셜 로그인", "회원 전용 장소 찜목록 관리", "관리자 전용 회원 검색 및 삭제", "오픈 API를 연동한 정보 제공"]}
        compo={[HtmlIcon, CssIcon, JsIcon, PHPIcon]}
        host="http://dongseong.dothome.co.kr/"
        git="https://github.com/schentea/0304-NewProject"
        fig="https://www.figma.com/file/XXD4vpzMCScxfClxyP2Kq8/%EB%8F%99%EC%84%B1%EB%A1%9C?type=design&node-id=0-1&mode=design&t=gwBfhC3kYbAYkgqa-0"
      />
      <ProjArt
        tit="포켓몬 도감 사이트"
        date="2024.02.06 ~ 24.02.26"
        imgs={["pokemon1.png", "pokemon2.png", "pokemon3.png"]}
        desc="포켓몬 API로 만든 도감 사이트입니다."
        lis={["Vertical Timeline로 만든 포켓몬 게임 시리즈 연대표", "Framer motion로 만든 동적 요소", "모바일, 태블릿, PC 화면을 지원하는 반응형 디자인"]}
        compo={[ReacIcon]}
        host="https://pokemon-08.netlify.app/"
        git="https://github.com/asdf080/pokemon"
        fig="https://www.figma.com/file/O9loF8apZOcka9qZ1A65IE/pokemon?type=design&node-id=0-1&mode=design&t=gJuwZCa96y3YZf6Z-0"
      />
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
