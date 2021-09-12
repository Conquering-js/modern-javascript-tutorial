import fetch from 'node-fetch';

// 스터디 저장소의 커밋을 출력하는 코드를 작성 

const repo = 'javascript-tutorial/en.javascript.info';

(async () => {
    for await (let commit of fetchCommits(repo)) {
        console.log(commit);
    }    
})();

async function* fetchCommits(repo) {
    const url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
        try{
            const response = await fetch(url, {
                headers: { 'User-Agent': 'Our script'},
            });
            
            const body = await response.json();

            for( let commit of body) {
                yield commit;
            }

        } catch(e) {
            console.log(e);
            break;
        }
    }
}
