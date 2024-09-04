import  {createI18n} from 'vue-i18n'
import ch from './zh.js'
import en from './en.js'


const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem('lang') || 'cn',
    messages: {
        ch,
        en
    }
})

export function t(args) {
    return i18n.global.t(args)
}

export default i18n