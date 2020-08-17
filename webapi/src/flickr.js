const API_KEY = 'c7210c361c6168c848ea525ee0d70515'
const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&text=cat`
const lists = document.getElementById('imgList')
const searchBtn = document.getElementById('searchBtn')

// イベント
export default function () {
  searchBtn.addEventListener('click', flickrApi)
  // searchBtn.addEventListener('click', flickrApiAjax)
}

// メイン
const flickrApi = async () => {
  console.log('fetchAPI')
  const photos = await getFlickrImg()
  photos.map(createImgHtml)
}

// Flickrからimg取得
const getFlickrImg = async () => {
  const res = await fetch(apiUrl)
  const data = await res.json()
  const photos = data.photos.photo
  return photos
}

// imgのHTML生成
const createImgHtml = (photo) => {
  const list = document.createElement('li')
  list.innerHTML = `<img src="http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg">`
  lists.appendChild(list)
}

// jQueryバージョン
const flickrApiAjax = () => {
  $.ajax({
    url: apiUrl,
    // dataType: 'json',
    timeout: 5000,
  })
    .done(function (data) {
      console.log(data)
    })
    .fail(function () {
      console.log('error')
    })
}
