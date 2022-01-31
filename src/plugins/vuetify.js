import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdiSvg',
    },
    theme: {
        dark: true,
        themes : {
            dark: {
                primary: '#a2ff00',
                background: '#1e2124'

            },
            light: {
                primary: '#a2ff00',
            },
        },

    },
}

export default new Vuetify(opts)
