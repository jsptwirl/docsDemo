import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.pngbbbbbbb" }]],
  title: "我的本地知识库",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { 
        text: '测试',
        items:[
          { text: '测试1', link: '/item-1' },
          { text: '测试2', link: '/item-2' },
        ]
      },
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      copyright:""
    },
    logo: "logo.png", // 配置logo位置，public目录
    search: {    //本地搜索
      provider: 'local',
      options:{
        translations: {
          button:{
            buttonText:"搜索文档",
            buttonAriaLabel:"搜索文档"
          },
          modal:{
            noResultsText:"未找到相关结果",
            resetButtonTitle:"清除查询条件",
            footer:{
              selectText:"选择",
              navigateText:"切换"
            }
          }
        }
      }
    },

   //###################美化文章页
   //文章左边栏
  //   sidebar: [
  //   {
  //     collapsed: true,//切换按钮来隐藏与显示子菜单
  //     text: 'vitepress',
  //     items: [
  //       { text: 'vitepress搭建与部署', link: '/notes/vitepressBuildAndDeploy/vitepress搭建与部署' }
  //     ]
  //   },{
  //     collapsed: true, 
  //     text: 'Examples',
  //     items: [
  //       { text: 'Markdown Examples', link: '/markdown-examples' },
  //       { text: 'Runtime API Examples', link: '/api-examples' }
  //     ]
  //   }
  //  ],
    sidebar:[
      {
        collapsed: true,//切换按钮来隐藏与显示子菜单
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },{
        collapsed: true,//切换按钮来隐藏与显示子菜单
        text: 'vitepress',
        items: set_sidebar("/notes/vitepressBuildAndDeploy")
      }
    ],
  
    //文章右边栏
    aside: true,
    outlineTitle:"文章目录", //文章右边栏标题
    outline:[2,6] //定义展示的标题级别，这里定义2-6级
  }
})
