import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { mdiStar, mdiStarOutline, mdiStarHalfFull } from '@mdi/js';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      mdiStar,
      mdiStarOutline,
      mdiStarHalfFull
    }
  }
});
