import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | components/alerts-with-links', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:components/alerts-with-links');
    assert.ok(route);
  });
});
