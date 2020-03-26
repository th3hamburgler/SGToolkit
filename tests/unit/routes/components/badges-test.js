import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | components/badges', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:components/badges');
    assert.ok(route);
  });
});
