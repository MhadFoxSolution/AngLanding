
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
    'index.csr.html': {size: 55643, hash: 'bd7a10b9d50223ce7f8589a4bcf62978ee2e0be2e02a6ec92f9205c8a6e8a563', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17159, hash: '89f9ff465f95944081834bc900a4e81944bafca61c274616112c0ebd589b4d16', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 102729, hash: 'e2fa0aeb386a7053b316a386731a7b29d6981b4402daecddde94fde34549a662', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 102729, hash: 'e2fa0aeb386a7053b316a386731a7b29d6981b4402daecddde94fde34549a662', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 114415, hash: '973f866fea228c8ca0304ffd68374edf409b7496bb96f9e9696c923056181cb1', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 139073, hash: '07cf1214d7e2a2355be4941f25968ea8b4fde5043bf56a45a9843b22e90009cb', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-64GLBTEE.css': {size: 88041, hash: 'xkbt1z79ob8', text: () => import('./assets-chunks/styles-64GLBTEE_css.mjs').then(m => m.default)}
  },
};
