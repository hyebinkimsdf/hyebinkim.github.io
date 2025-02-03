import { Link } from "react-router-dom";
import { Card } from "./Eyecane/card";

export function Design01() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl my-10 text-center font-semibold">
        누구나 쉽게 <br />
        AR로 세상과 연결되다
      </h1>
      <a href="https://www.cellico.com/" target="_blank" rel="cellico site">
        <img
          className="my-10 bg-black"
          src="./logo-ver-samsung-white.png"
          alt="카메라화면"
        />
      </a>
      <p className="w-[90vw]">
        이 AR 컨트롤 앱은 삼성의 지원을 받아 셀리코의 AR 글라스와 연결되어,
        저시력자들이 더 자유롭고 편리하게 세상과 소통할 수 있도록 돕습니다.
        직관적인 제어와 효율적인 정보 전달을 통해 시각적 제약을 극복할 수 있게
        돕는 혁신적인 기술입니다.
      </p>
      <img
        className="my-10 w-[700px]"
        src="./cameraScene.png"
        alt="카메라화면"
      />
      <p>저시력자 사용자층을 위해</p>
      <div className="flex gap-2">
        <Card
          firstText={"시야를 가리지 않는 라인 아이콘 디자인"}
          secondText={"라인 아이콘 보기 >"}
        />
        <Card
          firstText={"라운드에 배치된 UX"}
          secondText={"디벨롭 상세 설명 >"}
        />
        <Card
          firstText={"시야를 가리지 않는 라인 아이콘 디자인"}
          secondText={"라인 아이콘 보기 >"}
        />
      </div>
    </div>
  );
}
