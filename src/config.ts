// types
import { DefaultConfigProps } from "@/types/config";

export const drawerWidth = 260;

// ==============================|| THEME CONFIG  ||============================== //

const config: DefaultConfigProps = {
  defaultPath: "/",
  fontFamily: "'Roboto', sans-serif",
  miniDrawer: false,
  container: true,
  themeDirection: "ltr",
  title: "魔法派",
  title_split: " - ",
  background_url: "",
  description: "slogan",
  logo: "logourl",
  api: "https://hsajsajc.mofapai.app/",
  languages: ["en-US","zh-CN","zh-TW"],
  emojiEndpoint: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/{{code}}.png",
  startYear: 2021
};

export default config;
