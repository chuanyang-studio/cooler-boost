/**
 * 讀取隊伍抽獎次數
 */
function getAllTeamsFire() {
    firebase.firestore().collection('team')
    .onSnapshot((querySnapshot) => {
        const teamContainer = document.getElementById('team-container')
        querySnapshot.forEach((doc) => {

            // bind html
            teamContainer.innerHTML += `<option value="${doc.data()['fire']}">${doc.id}</option>`
        })
    })
}

/**
 * 下拉選單選項改變時
 */
function handleChange() {
    const teamContainer = document.getElementById('team-container');
    const fire = teamContainer.value;
    const team = teamContainer.options[teamContainer.selectedIndex].text;

    const teamFire = document.getElementById('team-fire')
    teamFire.innerHTML = `<h1>${fire} 🔥🔥🔥</h1>`
}

/**
 * 延遲翻牌，翻太快會有潛在非同步問題
 * 先保持 1.5 秒
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function delayedLoop() {
    const teamContainer = document.getElementById('team-container');
    const fire = teamContainer.value;
    const team = teamContainer.options[teamContainer.selectedIndex].text;

    for (let i = 0; i < fire; i++) {
        pick(team)
        await delay(1500); // Wait for 1 second between iterations
        pick()
    }
}