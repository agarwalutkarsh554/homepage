export var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
export var isFirefox = typeof InstallTrigger !== 'undefined'

export function getBrowser() {
  // Thanks Bowser65 xd
  if (navigator.userAgent.includes('Edg/')) { return 'edge' }
  var match = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)
  return (match ? match[1] : 'browser').toLowerCase()
}
