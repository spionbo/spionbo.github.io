import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "小焱分享",
  description: "软件安装和项目教程分享",

  theme: defaultTheme({
    logo: "./images/logo.jpg",

    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        prefix: "guide/",
        children: [
          {
            text: "安装指南",
            link: "/guide/README.md",
          },
        ],
      },
      {
        text: "软件",
        link: "/software/",
      },
      {
        text: "更多",
        prefix: "more/",
        children: [
          {
            text: "关于我",
            link: "/more/about/README.md",
          },
        ],
      },
    ],

    contributors: false,
  }),

  bundler: viteBundler(),
});
