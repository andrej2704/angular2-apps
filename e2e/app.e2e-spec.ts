import { BoostrapTestPage } from './app.po';

describe('boostrap-test App', function() {
  let page: BoostrapTestPage;

  beforeEach(() => {
    page = new BoostrapTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
