import { NgHackernewsPage } from './app.po';

describe('ng-hackernews App', function() {
  let page: NgHackernewsPage;

  beforeEach(() => {
    page = new NgHackernewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
