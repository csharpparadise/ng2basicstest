import { SimplesitePage } from './app.po';

describe('simplesite App', function() {
  let page: SimplesitePage;

  beforeEach(() => {
    page = new SimplesitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
