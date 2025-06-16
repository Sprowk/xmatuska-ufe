import { newE2EPage } from '@stencil/core/testing';

describe('xmatuska-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmatuska-ambulance-wl-list></xmatuska-ambulance-wl-list>');

    const element = await page.find('xmatuska-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
