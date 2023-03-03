import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.js'

import zh from './zh.js'
import en from './en.js'

const messages = {
  en,
  zh
}

const i18n = createI18n({
  locale: 'zh',
  messages,
  legacy: false // composition 模式
})

export default i18n
