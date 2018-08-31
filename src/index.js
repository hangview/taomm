import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/nv'));
app.model(require('./models/mm'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
isMobile();

function isMobile () {
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
