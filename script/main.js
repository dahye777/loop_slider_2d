// 변수 선언

/*
1 list : 전체 list의 첫번째, 마지막의 li를 마지막, 첫번째로 보내면서
슬라이더가 순환하는 구조이기 때문에 list를 변수로 담아야 합니다

이 슬라이드의 순환구조는 nth-of type(nth-child)를 그대로 살리고 (date-index를
사용하지 않음) append와 prepend를 사용해서 li를 붙이고 떼어주면서 순환하는 
슬라이더입니다.

첫번째로 배운 loop슬라이드의 원리는 nth-of의 순서를 가지지 않고 data-index를
이용해서 고유한 스타일 유지한채로 슬라이더 DOM구조를 변형시켜서 loop슬라이더를
구현 하였습니다
두번째로 배우는 loop슬라이드의 원리는 nth-of의 순서를 그대로 둔 채
슬라이더 DOM구조를 변형시켜서 loop슬라이더를 구현한 내용입니다
*/

const list = document.querySelector(".list");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
// prev버튼을 클릭하면
prev.addEventListener("click", ()=>{
      list.prepend(list.lastElementChild);
   // 마지막의 슬라이드 li를 떼어서 list의 가장 앞부분에 넣어줌으로 
   // 전체 li를 순서를 밀어서 이전 슬라이드가 보이도록 합니다 =>
   // 결과적으로 prepend를 사용한다 
   prev.classList.add("on");
   setTimeout(()=>{
    prev.classList.remove("on");
   },500)
   //setTimeout : 얼마 시간 뒤에 반복적으로 해달라는 것
})

next.addEventListener("click",()=>{
    list.append(list.firstElementChild);
    next.classList.add("on");
    setTimeout(()=>{
        next.classList.remove("on");
    },500)
})

