import { PANTALLAPRINCIPALPage } from './app.po';

describe('pantalla-principal App', () => {
  let page: PANTALLAPRINCIPALPage;

  beforeEach(() => {
    page = new PANTALLAPRINCIPALPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
