# 📌 자신이 원하는 사이트 레이아웃 클론

- 과제 기한:
  - 과제 수행 기간: 2022년 04월 14일(목) 19시 ~ 2022년 04월 28일(목) 19시
  - 코드 리뷰 기간: 2022년 04월 28일(목) 19시 ~ 2022년 05월 06일(금) 19시
- 내용:
  - 원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.
  - 평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.

## 필수 요구사항

- [ ] 정리된 README.md 파일을 제공하세요!
- [ ] 결과와 비교할 수 있는 선택 사이트의 주소를 명시하세요!
- [ ] 제출 프로젝트에 확인 가능한 HTML, CSS 파일이 모두 있어야 합니다!
- [ ] 브라우저에서 정상적으로 출력돼야 합니다!

## 선택 요구사항

- [ ] 시멘틱 태그를 최대한 활용해보세요.
- [ ] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- [ ] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [ ] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [ ] SCSS를 도입해보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
- [ ] BEM 방법론을 도입해보세요.

## 이미지 추출법

사이트 클론에 필요한 이미지를 좀 더 쉽게 추출하기 위해서 Chrome 확장 프로그램인 [Image Downloader](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj?hl=ko)를 사용하세요.

1. 원하는 사이트 접속
1. Image Downloader 확장 프로그램 실행
1. 다운로드 원하는 이미지 선택
1. 서브 폴더 이름(Save to subfolder) 명시
1. 다운로드!

# KFA 레이아웃 클론

## 사이트

- https://www.kfa.or.kr/

- https://glittering-pie-6e757b.netlify.app 

## 기술

HTML, SCSS, Javascript

### HTML

최대한 BEM 방법론을 생각하면서 코드를 작성하려고 했는데 이게 정확한지 확신은 없는 것 같다. 

Tag 를 최소한으로 사용하며 레이아웃을 생각하면서 코드를 짜는게 쉽지 않고 하다가 안되면 tag 끼워 넣고 하는 현상이 발생한다..

아직 container와 inner의 사용법이 익숙하지 않아 많은 반복 연습이 필요할 것 같다.

만드는 중에 div 태그를 주면 그 안에 내용들이 전 내용의 아래 수직으로 붙어야 하는데 자꾸 수평으로 붙는 현상이 발생했는데 그 이유가

가장 상위 태그에 너비나 높이를 안주다보니까 내용물만 생기고 그 안에 것들이 그 전 태그의 옆으로 가서 붙는 현상이 발생한 것이었다.

강사님이 클론코딩을 보여주시기 전에 시작을 해서 레이아웃을 먼저 짜놓고 내용을 넣는 것이 아닌 내용을 넣으면서 레이아웃을 짜는 방식으로 하다보니 더 어려웠던 것 같다. 

### SCSS

박영웅 강사님의 CSS 극혐(?) 으로 인해서 SCSS를 빨리 연습 해보고 싶어 SCSS를 사용했다.

처음 만들때는 CSS로 시작해서 하다가 중간에 SCSS로 바꿨는데 parcel이라는 컴파일러가 필요한 것 말고는 SCSS를 안 쓸 이유는 없는 것 같다.

선택자 구분하기도 쉽고 반복 작성을 줄일 수 있어 시간적으로도 효율적일 것 같다.

아직 상위 태그와 하위 태그의 속성 주는 부분이 어렵고 어디에 어떻게 줬을 때 안의 컨텐츠가 움직이는지 큰 틀에서만 이해가 된 것 같아 많이 해봐야 할 것 같다.

### JS

상위 헤더에 Menu 부분에 hover 하면 밑으로 sub-menu 내용이 내려오는 페이지 였는데,

CSS로 hover 속성 줘서 보이게 만들 수도 있을 것 같다.

실력이 부족해서 시간이 더 걸릴까봐 과제가 정확히 나오기 전에 강사님 말씀만 듣고 시작해서 이미 Javascript로 효과를 주고 난 뒤라 그냥 놔뒀다.

Swiper 부분은 스타벅스 배울 때 배웠던거라 조금 수월하게 하긴 했지만 완벽히 숙지하지는 못해 강의도 찾아보고 구글링도 하면서 했다.

swiper 부분이 2개가 있었는데 2개를 똑같이 작성했다가 위의 swiper가 밑의 swiper로 덮어씌어지는 상황이 나왔는데 first와 second를 줘서 구분해야 된다는 것도 알게 되었다.

scroll 하면 헤더 부분 사이즈가 줄어들면서 그 밑에 notice 부분이 고정되는 부분이 있는데 어떤식으로 구현해야 할지 몰라 포기했다.. 

## 느낀점

홈페이지를 만들기 위해 여러 홈페이지를 찾아보고 돌아다녀 보면서 보통의 홈페이지들은 거의 레이아웃의 큰 차이가 없다는 것을 깨달은 것 같다.

꼭 독특하고 새로운 느낌을 주는 홈페이지가 좋은 것은 아니고 사용자가 불편함 없이 사용할 수 있게 만드는 것이 더 중요한 것 같다.

홈페이지를 클론코딩 하면서는 강사님 수업과 강의를 듣고 정리만 하는 것과 직접 내가 부딪치면서 만들어 내는 것은 큰 차이가 있다는 것을 느꼈고

분명 내가 지금 짜는 레이아웃이 많이 부족하겠지만 이 과정에서 찾아보고 깨닫는 것들이 앞으로의 좋은 밑거름이 될 것으로 생각한다.