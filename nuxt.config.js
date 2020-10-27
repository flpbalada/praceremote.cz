const axios = require("axios");

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  trailingSlashes: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: "cs"
    },
    title: "Práce Remote | Česká online sbírka remote pracovních nabídek.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/manifest.json"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/main.scss",
    "~/assets/css/_variables.scss",
    "~/assets/css/_spacing.scss",
    ,
    "~/assets/css/NeueHaasDisplay/NeueHaasDisplay.scss"
  ],
  serverMiddleware: ["~/servermiddleware/seo.js"],
  router: {
    middleware: "anonymousAuth",
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/vueSession.js", mode: "client" },
    { src: "~/plugins/jsonLd.js", mode: "client" },
    { src: "~/plugins/components", mode: "client" },
    { src: "~/plugins/components", mode: "client" }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@aceforth/nuxt-optimized-images"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/component-cache",
    "nuxt-fontawesome",
    "@nuxtjs/markdownit",
    "@nuxtjs/gtm",
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "nuxt-lazy-load",
    [
      "nuxt-cookie-control",
      {
        barPosition: "bottom-full",
        colors: {
          barTextColor: "#fff",
          barBackground: "#001c54",
          barButtonColor: "#fff",
          barButtonBackground: "#fff",
          barButtonHoverColor: "#fff",
          barButtonHoverBackground: "#6cc950",
          modalButtonBackground: "#6cc950",
          modalButtonHoverColor: "#fff",
          controlButtonBackground: "#6cc950",
          controlButtonHoverBackground: "#6cc950",
          controlButtonIconHoverColor: "#fff",
          controlButtonIconColor: "#fff",
          modalButtonHoverBackground: "#6cc950",
          checkboxActiveBackground: "#6cc950",
          checkboxInactiveBackground: "#ff5151",
          checkboxActiveCircleBackground: "#fff",
          checkboxInactiveCircleBackground: "#fff",
          checkboxDisabledBackground: "#ddd",
          checkboxDisabledCircleBackground: "#fff"
        },
        text: {
          barTitle: "Cookies",
          barDescription:
            "Tato webová stránka používá cookies k personalizaci obsahu a reklam, poskytování funkcí sociálních médií a analýze naší návštěvnosti využíváme soubory cookie. Informace o tom, jak náš web používáte, sdílíme se svými partnery pro sociální média, inzerci a analýzy. Partneři tyto údaje mohou zkombinovat s dalšími informacemi, které jste jim poskytli nebo které získali v důsledku toho, že používáte jejich služby.",
          acceptAll: "Příjmout vše",
          declineAll: "smazat nastavení",
          manageCookies: "Upravit cookies",
          unsaved: "Nastavení není uložené",
          close: "Zavřít",
          save: "Uložit",
          necessary: "Nezbytné cookies",
          optional: "Marketingové cookies",
          functional: "Funčkní cookies",
          blockedIframe: "Pro zobrazení povolte funčkní cookies",
          here: "zde"
        }
      }
    ],
    [
      "storyblok-nuxt",
      {
        accessToken: "oNYj1e6HOKgHwz3xk92s7Att",
        cacheProvider: "memory"
      }
    ],
  
  ],
  cookies: {
    necessary: [
      {
        name: "Nezbytné Cookies",
        description:
          "Tyto soubory cookie jsou nezbytné pro různé základní funkce našeho webu a pro správné poskytování našich služeb. Bez nich by naše webové stránky nefungovaly, proto je nemůžete vypnout.",
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      }
    ],
    optional: [
      {
        name: "Marketingové Cookies",
        //if you don't set identifier, slugified name will be used
        identifier: "ga",
        //else
        description:
          "Marketingové cookies jsou používány pro sledování návštěvníků na webových stránkách. Záměrem je zobrazit reklamu, která je relevantní a zajímavá pro jednotlivého uživatele a tímto hodnotnější pro vydavatele a inzerenty třetích stran.",
        src: "https://www.googletagmanager.com/gtag/js?id=GTM-NRGQV8B",
        async: true,
        cookies: ["_ga", "_gat", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
          });
        },
        declined: () => {}
      }
    ]
  },
  sitemap: {
    hostname: "https://praceremote.cz",
    exclude: ["/ui", "/store", "/kontakt"],
    filter ({ routes }) {
      return routes.map(route => {
        route.url = `${route.url}/`
        return route
      })
    }
  },
  gtm: {
    id: "GTM-NRGQV8B"
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      }
    ]
  },
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: "empty"
      };

      // ....
    }
  },
  generate: {
    routes: function(callback) {
      const token = `oNYj1e6HOKgHwz3xk92s7Att`;
      const version = "published";
      let cache_version = 0;

      let toIgnore = ["cookies"];

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"]; // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push("/" + res.data.links[key].slug);
                }
              });

              callback(null, routes);
            });
        });
    }
  },
  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000
    }
  }
};

