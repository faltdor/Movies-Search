import { TheMovieFinderPage } from './app.po';

describe('the-movie-finder App', function() {
  let page: TheMovieFinderPage;

  beforeEach(() => {
    page = new TheMovieFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
