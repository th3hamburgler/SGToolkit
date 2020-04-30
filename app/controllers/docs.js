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
            icon: 'icon.logo',
          }, {
            title: 'Typography',
            route: 'docs.brand.typography',
            icon: 'icon.typography',
          }, {
            title: 'Colour',
            route: 'docs.brand.colour',
            icon: 'icon.colour',
          },
          {
            title: 'Icons',
            route: 'docs.brand.icons',
            icon: 'icon.icons',
          }
        ],
      },
      {
        title: 'General',
        route: 'docs.general',
        items: [{
            title: 'UI Elements',
            route: 'docs.general.index',
            icon: 'icon.ui',
          },
          {
            title: 'Structure',
            route: 'docs.general.structure',
            icon: 'icon.structure',
          },
          {
            title: 'Navigation',
            route: 'docs.general.navigation',
            icon: 'icon.navigation',
          },
          {
            title: 'Tables',
            route: 'docs.general.tables',
            icon: 'icon.tables',
          },
          {
            title: 'Forms',
            route: 'docs.general.forms',
            icon: 'icon.forms',
          },
          {
            title: 'Images',
            route: 'docs.general.images',
            icon: 'icon.image',
          },
        ]
      },
      {
        title: 'Components',
        route: 'docs.components',
        items: [{
            title: 'Lists',
            route: 'docs.components.lists',
            icon: 'icon.list',
          }, {
            title: 'Pagination',
            route: 'docs.components.pagination',
            icon: 'icon.pagination',
          },
          {
            title: 'Cards',
            route: 'docs.components.cards',
            icon: 'icon.cards',
          },
          {
            title: 'Charts',
            route: 'docs.components.charts',
            icon: 'icon.charts',
          },
          {
            title: 'Widgets',
            route: 'docs.components.widgets',
            icon: 'icon.widgets',
          },
        ],
      }, {
        title: 'Info',
        route: 'docs.layouts',
        items: [{
            title: 'Alerts',
            route: 'docs.info.alerts',
            icon: 'icon.alerts',
          },
          {
            title: 'Errors',
            route: 'docs.info.errors',
            icon: 'icon.errors',
          },
        ],
      },
      {
        title: 'Layouts',
        route: 'docs.layouts',
        items: [{
          title: 'Booking App',
          route: 'docs.layouts',
          icon: 'icon.login.register',
        }, ],
      },
    ]
  },
});
