import { newSpecPage } from '@stencil/core/testing';
import { XmatuskaAmbulanceWlList } from '../xmatuska-ambulance-wl-list';

describe('xmatuska-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmatuskaAmbulanceWlList],
      html: `<xmatuska-ambulance-wl-list></xmatuska-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XmatuskaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
