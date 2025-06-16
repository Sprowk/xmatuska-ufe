import { newSpecPage } from '@stencil/core/testing';
import { XmatuskaAmbulanceWlList } from '../xmatuska-ambulance-wl-list';

describe('xmatuska-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmatuskaAmbulanceWlList],
      html: `<xmatuska-ambulance-wl-list></xmatuska-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xmatuska-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmatuska-ambulance-wl-list>
    `);
  });
});
