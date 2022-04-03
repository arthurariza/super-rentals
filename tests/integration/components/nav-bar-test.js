import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with Header and Links', async function (assert) {
    await render(hbs`<NavBar />`);

    assert.dom('.menu .menu-index').hasText('SuperRentals');
    assert.dom('.menu .links .menu-about').hasText('About');
    assert.dom('.menu .links .menu-contact').hasText('Contact');
  });
});
