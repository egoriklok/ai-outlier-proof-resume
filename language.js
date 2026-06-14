(function () {
  const storageKey = "aiOutlierProofLang"
  const supported = new Set(["ru", "en"])

  function readInitialLanguage() {
    const params = new URLSearchParams(window.location.search)
    const queryLang = params.get("lang")
    if (supported.has(queryLang)) {
      return queryLang
    }

    try {
      const storedLang = window.localStorage.getItem(storageKey)
      if (supported.has(storedLang)) {
        return storedLang
      }
    } catch {
      return "ru"
    }

    return "ru"
  }

  function syncLinks(lang) {
    document.querySelectorAll("a[href]").forEach((link) => {
      const rawHref = link.getAttribute("href") || ""
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("http") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:")
      ) {
        return
      }

      const [withoutHash, hash = ""] = rawHref.split("#")
      const [path, query = ""] = withoutHash.split("?")
      const params = new URLSearchParams(query)
      if (lang === "en") {
        params.set("lang", "en")
      } else {
        params.delete("lang")
      }

      const nextQuery = params.toString()
      link.setAttribute(
        "href",
        `${path}${nextQuery ? `?${nextQuery}` : ""}${hash ? `#${hash}` : ""}`
      )
    })
  }

  function applyLanguage(lang) {
    const normalized = supported.has(lang) ? lang : "ru"
    document.documentElement.dataset.lang = normalized
    document.documentElement.lang = normalized

    try {
      window.localStorage.setItem(storageKey, normalized)
    } catch {
      // The page still works without storage; the query string remains enough.
    }

    document.querySelectorAll("[data-lang-switch]").forEach((button) => {
      const isActive = button.getAttribute("data-lang-switch") === normalized
      button.toggleAttribute("data-active", isActive)
      button.setAttribute("aria-pressed", String(isActive))
    })

    const visibleTitle = document.querySelector(
      `body > [data-lang="${normalized}"] h1`
    )
    if (visibleTitle && visibleTitle.textContent) {
      document.title = `${visibleTitle.textContent.trim()} | ${
        normalized === "en" ? "Egor Loktionov proof" : "Егор Локтионов proof"
      }`
    }

    syncLinks(normalized)
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(readInitialLanguage())

    document.querySelectorAll("[data-lang-switch]").forEach((button) => {
      button.addEventListener("click", function () {
        const lang = button.getAttribute("data-lang-switch")
        applyLanguage(lang)

        const url = new URL(window.location.href)
        if (lang === "en") {
          url.searchParams.set("lang", "en")
        } else {
          url.searchParams.delete("lang")
        }
        window.history.replaceState(null, "", url)
      })
    })
  })
})()
