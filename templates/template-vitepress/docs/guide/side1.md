# 这是guide的side1


> 测试

## 测试

```javascript
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import type { SidebarConfig } from "@vuepress/theme-default";
import type { NavbarConfig } from "@vuepress/theme-default";
let sidebar: SidebarConfig = {
    "/guide": [
        { text: "侧边栏2", children: ["/guide/side1.md", "/guide/side2.md"] },
        { text: "侧边栏1", children: ["/guide/guide1.md", "/guide/guide2.md"] },
    ],
    "/plugin": [{ text: "插件", children: ["/plugin/side1.md", "/plugin/side2.md"] }],
    "/side": [{ text: "侧边", children: ["/side/side1.md", "/side/side2.md"] }],
};

let navbar: NavbarConfig = [
    {
        text: "主页",
        link: "/guide/side1",
    },
    {
        text: "插件",
        link: "/plugin/side1",
    },
    {
        text: "侧边",
        link: "/side/side1",
    },
];
export default defineUserConfig<DefaultThemeOptions>({
    base: "/vuepress/",

    // site-level locales config

    lang: "zh-CN",
    title: "VuePress",
    description: "Vue 驱动的静态网站生成器",

    themeConfig: {
        logo: "/images/logo.png",

        repo: "vuepress/vuepress-next",

        docsDir: "docs",

        // theme-level locales config

        // navbar
        navbar: navbar,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",

        // sidebar
        sidebar: sidebar,

        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",

        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",

        // 404 page
        notFound: ["这里什么都没有", "我们怎么到这来了？", "这是一个 404 页面", "看起来我们进入了错误的链接"],
        backToHome: "返回首页",
        darkMode: true,
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
    },

    plugins: [
        [
            "@vuepress/plugin-search",
            {
                locales: {
                    "/": {
                        placeholder: "搜索文档",
                        translations: {
                            button: {
                                buttonText: "搜索文档",
                                buttonAriaLabel: "搜索文档",
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: "清除查询条件",
                                    resetButtonAriaLabel: "清除查询条件",
                                    cancelButtonText: "取消",
                                    cancelButtonAriaLabel: "取消",
                                },
                                startScreen: {
                                    recentSearchesTitle: "搜索历史",
                                    noRecentSearchesText: "没有搜索历史",
                                    saveRecentSearchButtonTitle: "保存至搜索历史",
                                    removeRecentSearchButtonTitle: "从搜索历史中移除",
                                    favoriteSearchesTitle: "收藏",
                                    removeFavoriteSearchButtonTitle: "从收藏中移除",
                                },
                                errorScreen: {
                                    titleText: "无法获取结果",
                                    helpText: "你可能需要检查你的网络连接",
                                },
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                    closeText: "关闭",
                                    searchByText: "搜索提供者",
                                },
                                noResultsScreen: {
                                    noResultsText: "无法找到相关结果",
                                    suggestedQueryText: "你可以尝试查询",
                                    openIssueText: "你认为该查询应该有结果？",
                                    openIssueLinkText: "点击反馈",
                                },
                            },
                        },
                    },
                },
            },
        ],

        [
            "vuepress-plugin-clipboard",
            {
                align: "top",
            },
        ],
    ],
});

```