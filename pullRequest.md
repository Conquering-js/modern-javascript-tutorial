# PR(Pull request) 보내는 법

1. 폴더를 만들어 해당 폴더에서 터미널을 연다.
2. `git init`  
3. `git clone 내가 포크 뜬 저장소 ssh 주소`
4. `cd modern-javascript-tutorial`
5. `git remote add upstream 원래 저장소 ssh 주소`
6. `git remote -v` 로 저장소들이 저장이 잘 되어 있는지 확인한다.
7. `git fetch upstream main` 으로 원래 저장소 정보를 받아오고
8. `git rebase upstream/main` 으로 원래 저장소 정보를 받아서 현재 코드에 합쳐준다.
9. `git switch -c 브랜치이름 upstream/main` 로 브랜치 새로 만들어주기 `git branch`로 확인가능
10. 새로운 파일을 만들어준다. (코드 작성)
11. `git status`로 내가 추가하거나 삭제한 상태를 확인한다.
12. `git add .`로 나의 변경사항을 저장 준비한다.
13. `git commit` 커밋메세지를 작성한다.
    - vim 편집기가 등장할거에요
    - i를 눌러 편집상태를 만듭니다.
    - 맨 첫줄에 커밋 제목을 쓰고 엔터를 두번 누른다음 커밋 내용을 쓸수 있습니다.
    - 모두 작성하면 esc버튼을 눌러 편집상태를 해제하고 맨 아래의 `:`를 누르고 `wq`를 치고 엔터를 누릅니다. (만약 잘못 편집기로 들어왔다.하면 q!로 아무것도 저장하지 않고 나갈수 있습니다.)
14. `git push origin 브랜치이름` 으로 내 코드를 올려준다.
15. 원래 저장소 페이지에서 풀 리퀘스트를 보낸다.
