import type { SidebarConfig } from "@vuepress/theme-default";
export const sidebar: SidebarConfig = {
  "/guide/": [
    {
      text: "home",
      children: ["/guide/README.md", "/guide/lang.md", "/guide/header.md"],
    },
  ],
};
