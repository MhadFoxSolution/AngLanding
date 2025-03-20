
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
    'index.csr.html': {size: 26626, hash: '5d61fbf78c3ac0deee0c558d18f63613ce06c68e4ca21d9eec460dbb0132b0b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17153, hash: '70355bba8ea81aa2197ecb89da59234d798fa25ca817f75df8e782756b1c7859', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 71029, hash: 'f9babc7e291a345c0deb5d2edb829457d10d45cb2121598437db9f739f39ea19', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 82715, hash: 'bb29f7cf501fe4d3fcb1031606ee78148a7a10e41d6e1c099b84873b999ed17a', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 108441, hash: '79e440292f46c5dd40e1426fe345580db5161bd863491baada57dfff4eb22c2f', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 71029, hash: 'f9babc7e291a345c0deb5d2edb829457d10d45cb2121598437db9f739f39ea19', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UMNTAZLI.css': {size: 14100, hash: '/iq7EDotZ9M', text: () => import('./assets-chunks/styles-UMNTAZLI_css.mjs').then(m => m.default)}
  },
};
