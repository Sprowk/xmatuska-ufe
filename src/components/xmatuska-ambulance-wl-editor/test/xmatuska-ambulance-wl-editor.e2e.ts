import { newE2EPage } from '@stencil/core/testing';

describe('xmatuska-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmatuska-ambulance-wl-editor></xmatuska-ambulance-wl-editor>');

    const element = await page.find('xmatuska-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
