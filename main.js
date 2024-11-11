const menuItems = document.querySelectorAll('.GNB li a'); // 모든 메뉴 항목 선택

menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // 기존의 active 클래스 제거
        document.querySelector('.GNB li a.active')?.classList.remove('active');
        
        // 현재 마우스가 올라간 항목에 active 클래스 추가
        this.classList.add('active');
    });
});

//좋아요 버튼 기능
function favBtn() {
    const favBtn = document.querySelector(".favourite_btn img");
    favBtn.addEventListener("click", function () {
        // 현재 src에 따라 이미지 변경
        if (favBtn.src.includes("favourite_bnt.svg")) {
            favBtn.src = "./icon/favourite_bnt_0.svg";
        } else {
            favBtn.src = "./icon/favourite_bnt.svg";
        }
    });
}

favBtn();


