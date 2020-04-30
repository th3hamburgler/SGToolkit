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
            icon: 'docs.logo',
          }, {
            title: 'Typography',
            route: 'docs.brand.typography',
            icon: 'docs.typography',
          }, {
            title: 'Colour',
            route: 'docs.brand.colour',
            icon: 'docs.colour',
          },
          {
            title: 'Icons',
            route: 'docs.brand.icons',
            icon: 'docs.icons',
          }
        ],
      },
      {
        title: 'General',
        route: 'docs.general',
        items: [{
            title: 'UI Elements',
            route: 'docs.general.index',
            icon: 'docs.ui',
          },
          {
            title: 'Structure',
            route: 'docs.general.structure',
            icon: 'docs.structure',
          },
          {
            title: 'Navigation',
            route: 'docs.general.navigation',
            icon: 'docs.navigation',
          },
          {
            title: 'Tables',
            route: 'docs.general.tables',
            icon: 'docs.tables',
          },
          {
            title: 'Forms',
            route: 'docs.general.forms',
            icon: 'docs.forms',
          },
          {
            title: 'Images',
            route: 'docs.general.images',
            icon: 'docs.image',
          },
        ]
      },
      {
        title: 'Components',
        route: 'docs.components',
        items: [{
            title: 'Lists',
            route: 'docs.components.lists',
            icon: 'docs.list',
          }, {
            title: 'Pagination',
            route: 'docs.components.pagination',
            icon: 'docs.pagination',
          },
          {
            title: 'Cards',
            route: 'docs.components.cards',
            icon: 'docs.cards',
          },
          {
            title: 'Charts',
            route: 'docs.components.charts',
            icon: 'docs.charts',
          },
          {
            title: 'Widgets',
            route: 'docs.components.widgets',
            icon: 'docs.widgets',
          },
        ],
      }, {
        title: 'Info',
        route: 'docs.layouts',
        items: [{
            title: 'Alerts',
            route: 'docs.info.alerts',
            icon: 'docs.alerts',
          },
          {
            title: 'Errors',
            route: 'docs.info.errors',
            icon: 'docs.errors',
          },
        ],
      },
      {
        title: 'Layouts',
        route: 'docs.layouts',
        items: [{
          title: 'Booking App',
          route: 'docs.layouts',
          icon: 'docs.login.register',
        }, ],
      },
    ]
  },
});
