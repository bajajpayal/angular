import { BeglammedPage } from './app.po';

describe('beglammed App', () => {
  let page: BeglammedPage;

  beforeEach(() => {
    page = new BeglammedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
