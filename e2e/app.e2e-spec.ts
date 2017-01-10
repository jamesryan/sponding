import { SpondingPage } from './app.po';

describe('sponding App', function() {
  let page: SpondingPage;

  beforeEach(() => {
    page = new SpondingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
