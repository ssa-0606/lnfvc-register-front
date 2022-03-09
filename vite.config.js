import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import router from './src/router'
import importToCDN , { autoComplete } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({

  // build:{
  //   rollupOptions:{
  //     external: ['vue'],
  //     output:{
  //       globals:{
  //         vue: 'Vue',
  //       }
  //     }
  //   }
  // },

  plugins: [
    vue(),
    importToCDN({
      modules:[
        autoComplete("vue"),
        {
          name:'vue',
          var:'Vue',
          path:'https://unpkg.com/browse/vue@3.2.25/dist/vue.cjs.prod.js'
        },
        // {
        //   name:'vue-router',
        //   var:'VueRouter',
        //   path:'https://unpkg.com/browse/vue-router@4.0.13/dist/vue-router.cjs.prod.js'
        // }
      ]
    })
  ],
  base: "./"
})
