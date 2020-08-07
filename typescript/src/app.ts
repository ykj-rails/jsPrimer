import { Book } from './item'
const app = document.getElementById('app')
const item = new Book('はじめてのTypeScript', 1980)
const item2 = new Book('Ruby伝説のチェリー本', 3980)

item.say(app)
item2.say(app)
