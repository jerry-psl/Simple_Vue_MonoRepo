// import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import GridView from './gridView.vue';

storiesOf('GridView', module).add('as a component', () => ({
  components: {GridView},
  template: '<GridView></GridView>',
}));
