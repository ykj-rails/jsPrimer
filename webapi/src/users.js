import $ from 'jquery'

// API
const usersApi = 'https://jsonplaceholder.typicode.com/users'
// DOM
const addBtn = document.getElementById('addBtn')
const lists = document.getElementById('userList')

// リストにユーザーネームを追加
const addList = (user) => {
  const list = document.createElement('li')
  list.innerText = user.name
  lists.appendChild(list)
}

// ユーザーの情報を取得
const getUsers = async () => {
  const res = await fetch(usersApi)
  const users = await res.json()
  return users
}

// ユーザーの情報を取得して追加
const listUsers = async () => {
  const users = await getUsers()
  users.map(addList)
}

// イベント
export default function () {
  if (!lists) return
  window.addEventListener('load', listUsers)
  addBtn.addEventListener('click', listUsers)
}

// モダンな書き方（IE非対応）
export const callApi = async () => {
  const res = await fetch(usersApi)
  const users = await res.json()
  console.log('callApi')
  console.log(users)
}

// jQueryのajaxを使用した例
export const callApiAjax = () => {
  $.ajax({
    url: usersApi,
    // dataType: 'json',
    // timeout: 5000,
  })
    .done(function (data) {
      console.log('callApiAjax')
      console.log(data)
    })
    .fail(function () {
      console.log('error')
    })
}

// 古い書き方（覚えなくて良いよ）
export const callApiXhr = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', usersApi, true)
  xhr.responseType = 'json'
  xhr.onload = function () {
    console.log('XMLHttpRequest')
    console.log(xhr.response)
  }
  xhr.send()
}
