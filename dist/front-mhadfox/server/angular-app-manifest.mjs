
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
    'index.csr.html': {size: 55639, hash: '93182d3e711d2e405a04aa17ad5142a3a60304d486872249b2b13193259d9464', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17155, hash: 'cd9ee3e0eb3e1f74e6a3efbdc12bdd6f50df1c65f9d13d0137ea82c01654c34b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 101105, hash: '5ad5d3d7fb5c26ff4ecdaa64526e9e443dcca65623d0ccc69dd4f3143fefc8ea', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 101105, hash: '5ad5d3d7fb5c26ff4ecdaa64526e9e443dcca65623d0ccc69dd4f3143fefc8ea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 112791, hash: '6c27a1251cfb062d66c86caa8ef1036f45461f9cc765a27271e46cd0ee80af5f', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 138518, hash: '29c0774970160a97da87d0d093f90f0570ade9d4523c16208d4e3e66b7ccf946', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-TOFX27DQ.css': {size: 85544, hash: 'pCbf32TDnfU', text: () => import('./assets-chunks/styles-TOFX27DQ_css.mjs').then(m => m.default)}
  },
};
