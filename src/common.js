export function isMobile () {
  const ua = navigator.userAgent

  const android = ua.match(/Android/i),
    pad = !ua.match(/Mobile/),
    ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)

  if(android) {
    window.IS_MOBILE = true
  }
  if(ipad || iphone || ipod) {
    window.IS_MOBILE = true
  }
  if(iphone || ipod) {
    window.IS_MOBILE = true
  }
  if(ipad) {
    window.IS_MOBILE = true
  }
}
