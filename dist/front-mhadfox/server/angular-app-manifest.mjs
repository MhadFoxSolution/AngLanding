
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
    'index.csr.html': {size: 55643, hash: '7e1fc9d78c8e69d0ee17547f7cd67b661dddf0ed9bc6a5ccc813f15dc1f7e40b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17159, hash: '8ec4542f0ac5d8aa66c9e7aad09b1069074430822edbc92d30028be7eb42ff5b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 102729, hash: '32472b5e2d64f6d3089c6017ebbca7ef04b7b8980e4f06b61880dd08db91406b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 139341, hash: 'f53c103f2aeab0af09feed9a6317e070924054db01306579c29d6acb80972b7d', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 114415, hash: '08344582caa6ee8f0ad3f29c13887671926a8c7e92fba90a460a5a9378c782b6', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102729, hash: '32472b5e2d64f6d3089c6017ebbca7ef04b7b8980e4f06b61880dd08db91406b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-64GLBTEE.css': {size: 88041, hash: 'xkbt1z79ob8', text: () => import('./assets-chunks/styles-64GLBTEE_css.mjs').then(m => m.default)}
  },
};
