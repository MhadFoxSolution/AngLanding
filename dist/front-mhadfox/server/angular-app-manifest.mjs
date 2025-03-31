
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
    'index.csr.html': {size: 55639, hash: 'ec9ee91a13bc5edbc6f50c30ea061cf99fa6e813e013eb914265ff1f2447589a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17155, hash: '10df80c224bead89f50fec8a5b58768d7d6d9f13a51bbb4c1cfcc6ec660d1997', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 102725, hash: 'f8034bf7034b629d3d91f7cf1717f960c067c349774b810c8a32c6534c4dff04', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102725, hash: 'f8034bf7034b629d3d91f7cf1717f960c067c349774b810c8a32c6534c4dff04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 114411, hash: 'dfca285f47fe9337136a554f3cbbcf3995b563433bb1eb22e36df5d0f69b5ca5', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 140138, hash: '0578a8df0417501c69345b01781849ab6af254d994429340107c95d15ff8f44a', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-64GLBTEE.css': {size: 88041, hash: 'xkbt1z79ob8', text: () => import('./assets-chunks/styles-64GLBTEE_css.mjs').then(m => m.default)}
  },
};
