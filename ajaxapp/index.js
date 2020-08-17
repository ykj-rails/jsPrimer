// mainの関数
const searchUserId = async () => {
  try {
    const userId = document.getElementById('userId').value
    const userInfo = await fetchUserInfo(userId)
    const view = createView(userInfo)
    displayView(view)
  } catch (error) {
    const errorView = `エラーが発生しました(${error})`
    displayView(errorView)
  }
}

// githubのuser_idを取得する
// fetchはPromiseを返す
const fetchUserInfo = (userId) => {
  return fetch(
    `https://api.github.com/users/${encodeURIComponent(userId)}`
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(new Error(`${res.status}: ${res.statusText}`))
    } else {
      return res.json()
    }
  })
}

// user情報を受け取ってHTMLを組み立てる
const createView = (userInfo) => {
  return `
            <h4>${userInfo.name} (@${userInfo.login})</h4>
            <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
            <ul>
                <li>Location：${userInfo.location}</li>
                <li>Repositories：${userInfo.public_repos}</li>
            </ul>`
}

// id="result"に結果を描画する
const displayView = (view) => {
  const result = document.getElementById('result')
  result.innerHTML = view
}

// const sampleFetch = () => {
//   fetch(
//     URL
//   ).then((res) => {
//     console.log('OK')
//   }).catch((error) => {
//     console.log('error')
//   }).finaly(() => {
//     console.log('finaly')
//   })
// }

// const btn = $('#btn')
// const test = $('#test')

// btn.on('click', function() {
//   test.text('デザイン')
// })
