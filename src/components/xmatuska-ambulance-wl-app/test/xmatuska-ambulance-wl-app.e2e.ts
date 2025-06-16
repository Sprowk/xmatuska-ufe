import { newE2EPage } from '@stencil/core/testing';

describe('xmatuska-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmatuska-ambulance-wl-app></xmatuska-ambulance-wl-app>');

    const element = await page.find('xmatuska-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
