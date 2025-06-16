import { newSpecPage } from '@stencil/core/testing';
import { XmatuskaAmbulanceWlApp } from '../xmatuska-ambulance-wl-app';

describe('xmatuska-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XmatuskaAmbulanceWlApp],
      html: `<xmatuska-ambulance-wl-app base-path="/"></xmatuska-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xmatuska-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XmatuskaAmbulanceWlApp],
      html: `<xmatuska-ambulance-wl-app base-path="/ambulance-wl/"></xmatuska-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xmatuska-ambulance-wl-list");
  });
});