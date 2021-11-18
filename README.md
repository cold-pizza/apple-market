# Apple Market WebSite

### 공지 (2021.11.18)

- 리액트 배우고 첫 프로젝트인 사과마켓입니다. (당근마켓 클론)

* 데이터들은 useState에 저장하거나 json server를 불러와서 사용했습니다.

### 폴더 구조

- 컴포넌트들은 Components에 저장하고 scss파일은 styles에 저장했습니다. (App.js, App.scss 제외) 모두 src파일 안에 있습니다.
- 이미지는 public/images 파일 안에 있습니다.
- 모든 style은 scss로 작성했습니다. (index.css 제외)
- { Link } 라우터는 styled-components로 링크 특유의 파란색과 밑줄만 없앤 { StyledLink } 로 만들어서 사용했습니다.

##### 주의❗️

- 하트를 눌러도 숫자가 안올라갑니다.
- 동네인증안되는 버그발생.
- 물건 등록시 이미지는 절대경로가 뜹니다.
- 여러물품을 관심등록하고 하나만 취소해도 전부 사라집니다.
- 관심물품을 나의 관심목록에서 해제를 할 수 없습니다.
