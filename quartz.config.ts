import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "@myrdin",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "myrdin.cx",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f0e9d6", // page background
          lightgray: "#faf6ed", //borders
          gray: "#ffead3", //graph links, heavier borders
          darkgray: "#010101", // body text
          dark: "#2b2b2b", // header text and icons
          secondary: "#0f9015", // link colour, current graph node
          tertiary: "#5cb25d", // hover states and visited, graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // internal link background, highlighted text, highlighted lines of code
          textHighlight: "#fff2368", // markdown highlighted text background
        },
        darkMode: {
          light: "#1e1e1eff",
          lightgray: "#505050",
          gray: "#242323",
          darkgray: "#f0e9d6",
          dark: "#f0e9d6",
          secondary: "#778745",
          tertiary: "#0f9015",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff2368",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ 
        markdownLinkResolution: "shortest",
        openLinksInNewTab: true
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages({
        colorScheme: "darkMode",
        excludeRoot: true,
      }),
    ],
  },
}

export default config
