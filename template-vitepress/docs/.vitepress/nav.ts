import { DefaultTheme } from "vitepress/types/default-theme";
export const navbar: DefaultTheme.NavItem[] = [
    {
        text: "主页",
        activeMatch: "^/guide/",
        link: "/guide/",
    },
    {
        text: "插件",
        activeMatch: "^/plugin/",
        link: "/plugin/side1",
    },
    {
        text: "侧边",
        activeMatch: "^/tutor/",
        link: "/tutor/side1",
    },
];
