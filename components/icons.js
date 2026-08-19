import {
  SiUbuntu, SiLinux, SiDocker, SiNginx, SiPhp, SiMariadb, SiMysql,
  SiJavascript, SiReact, SiNextdotjs, SiLeaflet,
} from "react-icons/si";
import {
  FaMicrosoft, FaWindows, FaGithub, FaLinkedin, FaEnvelope,
  FaXTwitter, FaTelegram, FaWhatsapp,
} from "react-icons/fa6";
import {
  FiTerminal, FiZap, FiServer, FiCode, FiCloud, FiBell, FiMap,
  FiUsers, FiShare2, FiBox, FiGitBranch, FiAward, FiBookOpen,
  FiUser, FiSettings, FiBriefcase, FiBarChart2, FiCalendar,
} from "react-icons/fi";

const map = {
  microsoft: FaMicrosoft, windows: FaWindows, ubuntu: SiUbuntu, linux: SiLinux,
  docker: SiDocker, nginx: SiNginx, php: SiPhp, mariadb: SiMariadb, mysql: SiMysql,
  javascript: SiJavascript, react: SiReact, nextjs: SiNextdotjs, n8n: FiZap,
  powershell: FiTerminal, leaflet: SiLeaflet,
  route: FiMap, bell: FiBell, terminal: FiTerminal, server: FiServer,
  cloud: FiCloud, code: FiCode, network: FiShare2, users: FiUsers, repo: FiGitBranch,
  cert: FiAward, education: FiBookOpen, user: FiUser, settings: FiSettings, experience: FiBriefcase, metabase: FiBarChart2, calendar: FiCalendar,
  github: FaGithub, linkedin: FaLinkedin, mail: FaEnvelope,
  x: FaXTwitter, telegram: FaTelegram, whatsapp: FaWhatsapp,
};

export function getIcon(key) {
  return map[key] || FiBox;
}
