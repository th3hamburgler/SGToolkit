import Controller from '@ember/controller';

export default Controller.extend({
  // Properties
  navigation: null,
  // Methods
  init() {
    this._super(...arguments);
    this.navigation = [{
        title: 'Brand',
        route: 'docs.brand',
        items: [{
            title: 'Logo',
            route: 'docs.brand.logo',
          }, {
            title: 'Typography',
            route: 'docs.brand.typography',
          }, {
            title: 'Colour',
            route: 'docs.brand.colour',
          },
          {
            title: 'Icons',
            route: 'docs.brand.icons',
          }
        ],
      },
      {
        title: 'General',
        route: 'docs.general',
        items: [{
            title: 'UI Elements',
            route: 'docs.general.index',
          },
          {
            title: 'Structure',
            route: 'docs.general.structure',
          },
          {
            title: 'Navigation',
            route: 'docs.general.navigation',
          },
          {
            title: 'Tables',
            route: 'docs.general.tables',
          },
          {
            title: 'Forms',
            route: 'docs.general.forms',
          },
          {
            title: 'Images',
            route: 'docs.general.images',
          },
        ]
      },
      {
        title: 'Components',
        route: 'docs.components',
        items: [{
            title: 'Lists',
            route: 'docs.components.lists',
          },
          {
            title: 'Cards',
            route: 'docs.components.cards',
          },
          {
            title: 'Charts',
            route: 'docs.components.charts',
          },
        ],
      }, {
        title: 'Info',
        route: 'docs.layouts',
        items: [{
            title: 'Alerts',
            route: 'docs.info.alerts',
          },
          {
            title: 'Errors',
            route: 'docs.info.errors',
          },
        ],
      }, {
        title: 'Layouts',
        route: 'docs.layouts',
        items: [{
          title: 'Login',
          route: 'docs.layouts.login',
        }, ],
      },
    ]
  },
});