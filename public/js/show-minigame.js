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