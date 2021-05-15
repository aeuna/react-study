# react-study

# 프로젝트 PR 방법
### 💡 프로젝트 시작하기
1. 터미널에서 자신의 로컬 폴더에 프로젝트 클론하기  
   ```$ git clone https://github.com/aeuna/react-study.git```
2. 자신의 폴더로 이동하기  
   ```
   $ cd 2주차리액트
   $ cd 이미현
   ```
3. 의존성 설치  
  ```$ npm install```
4. 자기만의 브랜치 만들어서 체크아웃
   ```
   $ git branch 2-mihyun
   $ git checkout 2-mihyun
   ```
5. 작업시작!
 
### 💡 프로젝트 PR하기
1. 작업 커밋 후 푸시하기  
  - 커밋메시지에 `#이슈번호` 붙이면 이슈에서 참조할 수 있어요!
   ```
   $ git commit -am "#2 1-21 커스텀 훅 예제"
   $ git push
   ```
2. 저장소에서 `Pull requests` 탭 선택
3. `New pull request` 버튼 클릭
4. `compare:자신의 서브브랜치` 선택 후 `Create pull request` 클릭


### 💡 PR하기 귀찮을 때, 직접 merge!
1. 작업 커밋 후 main 브랜치로 체크아웃하기
  - 커밋메시지에 `#이슈번호` 붙이면 이슈에서 참조할 수 있어요!
   ```
   $ git commit -am "#2 1-21 커스텀 훅 예제"
   $ git checkout main
   ```
2. main브랜치에서 서브브랜치 병합하기
   ```
   $ git merge 2-mihyun
   ```
3. 저장소에 push하기
  ```$ git push```
