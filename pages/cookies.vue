<template>
  <div>
    <div class="col">
      <h2>Co jsou soubory cookies</h2>
      <p>
        Cookies jsou textové soubory obsahující malé množství informací, které
        se při návštěvě webové stránky stáhnou do počítače, mobilu nebo jiného
        zařízení uživatele. Následně, při každé další návštěvě této webové
        stránky, se soubory cookies zasílají zpět na původní webovou stránku
        nebo na jinou stránku, která cookies rozpozná. Tyto soubory umožňují
        identifikaci zařízení a správné zobrazení webové stránky uživatelům,
        přizpůsobené jejich individuálním preferencím.
      </p>
      <h2>Proč cookies používáme</h2>
      <p>
        Soubory cookies používáme k optimalizaci využití webových stránek.
        Používáme je také k získání anonymních, souhrnných statistických údajů,
        které pomohou analyzovat, jakým způsobem uživatel používá webové
        stránky. Informace tak pomohou zlepšit strukturu a obsah stránek.
      </p>
      <h2>Jaké cookies používáme</h2>
      <p>
        Používají se v zásadě dva typy cookies – dočasné a trvalé. První z nich
        jsou dočasné soubory, které zůstávají na vašem zařízení, dokud se
        neodhlásíte z webových stránek, či je nezakážete ve webovém prohlížeči.
        Trvalé, nebo také fixní soubory zůstávají na vašem zařízení po dobu
        zadanou v parametrech cookies, nebo dokud je ručně nesmažete.
      </p>
      <h2>Jak cookies odstranit</h2>
      <p>
        Ukládání cookies můžete upravit přímo ve svém webovém prohlížeči, ve
        výchozím nastavení bývá zpravidla povolené. Odkazy na návody pro
        nastavení cookies v nejpoužívanějších prohlížečích jsou&nbsp;
        <a
          href="https://support.google.com/chrome/answer/95647?hl=cs"
          target="_blank"
          rel="noreferrer noopener"
          >Chrome</a
        >,&nbsp;
        <a
          href="https://support.mozilla.org/cs/kb/Pr%C3%A1ce%20s%20cookies"
          target="_blank"
          rel="noreferrer noopener"
          >Firefox</a
        >,&nbsp;
        <a
          href="https://support.microsoft.com/cs-cz/kb/278835"
          target="_blank"
          rel="noreferrer noopener"
          >Internet Explorer</a
        >,&nbsp;
        <a
          href="http://safari.helpmax.net/en/privacy-and-security/managing-cookies/"
          target="_blank"
          rel="noreferrer noopener"
          >Safari</a
        >,&nbsp;
        <a
          href="http://help.opera.com/Linux/9.22/cs/cookies.html"
          target="_blank"
          rel="noreferrer noopener"
          >Opera</a
        >.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$gtm.push({ event: "contentGrouping", pageType: "other" });
  },
  head() {
    return {
      title: "Cookies",
      meta: [
        {
          name: "robots",
          hid: "robots",
          content: "noindex, nofollow"
        }
      ]
    };
  }
};
</script>
