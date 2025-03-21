
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/quienes-somos"
  },
  {
    "renderMode": 2,
    "route": "/contacto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 55639, hash: '06586139ff973b57dd190d303c9987a859d1c5eeecfd5686956b9a90435da2fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17155, hash: 'cc49e7eb2330341feac71a7cd0046d9a3e29d1ca69f282089d9b9703d9e0f016', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 102725, hash: '238c65cb30e82be5151aade5a57b94095dbaa51efec123ae8a78e99802986343', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 102725, hash: '238c65cb30e82be5151aade5a57b94095dbaa51efec123ae8a78e99802986343', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 140138, hash: 'f91cbab09db0abdbfaead46fcab203052f8c89734380b1f32863ea61d105536f', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 114411, hash: '58e054d430df3394c3be63903a06765c6e65caeafe485d18fabf284c07586c42', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'styles-64GLBTEE.css': {size: 88041, hash: 'xkbt1z79ob8', text: () => import('./assets-chunks/styles-64GLBTEE_css.mjs').then(m => m.default)}
  },
};
