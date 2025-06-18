// Exportujeme Nuxt serverový event handler – obsluhuje HTTP požadavky na serveru
export default defineEventHandler((event) => {
  return $fetch(`https://api.coinlore.net${event.node.req.url}`)
})

// Proč [...] v názvu souboru? -> Tzv. catch-all route.
// $fetch je Nuxt verze fetch – funguje stejně, ale má výhody jako SSR, retry apod.