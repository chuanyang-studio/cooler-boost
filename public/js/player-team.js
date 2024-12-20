/**
 * 取得所有隊伍
 */
function getAllTeams() {
  firebase.firestore().collection('team')
  .onSnapshot((querySnapshot) => {
    // alert(querySnapshot.size)
    querySnapshot.forEach((doc) => {
      const teamContainer = document.getElementById('team-container');
      let tag = `<option value="${doc.id}">${doc.id}</option>`
      teamContainer.innerHTML += tag
      console.log(tag)
    })
  })
}

/**
 * 綁定隊伍
 */
function setTeam() {
  const team = document.getElementById('team-container').value
  const uid = document.getElementById('uid').innerHTML

  firebase.firestore().collection("user").doc(uid).set({
    user: uid,
    team: team,
  })
  .then(() => {
      console.log("綁定隊伍成功");
      window.location = '/player-joystick.html'
  })
  .catch((error) => {
      console.error("綁定隊伍失敗", error);
  });
}
