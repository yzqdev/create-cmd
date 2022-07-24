import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
    "/guide": [
        {
            text: "theme配置",
            collapsible: true,
            items: [
                { text: "首页", link: "/guide/index" },
                { text: "side1", link: "/guide/side1" },
                { text: "side2", link: "/guide/side2" },
            ],
        },
        {
            text: "app配置",
            collapsible: true,
            items: [
                { text: "guide1", link: "/guide/guide1" },
                { text: "guide2", link: "/guide/guide2" },
            ],
        },
    ],
    "/plugin": [
        {
            text: "插件",
            collapsible: true,
            items: [
                { text: "plugin1", link: "/plugin/side1" },
                { text: "plugin2", link: "/plugin/side2" },
            ],
        },
    ],
    "/tutor": [
        {
            text: "教程",
            collapsible: true,
            items: [
                { text: "tutor1", link: "/tutor/side1" },
                { text: "tutor2", link: "/tutor/side2" },
            ],
        },
    ],
};
