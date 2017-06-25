import { OnliTutePage } from './app.po';

describe('onli-tute App', () => {
  let page: OnliTutePage;

  beforeEach(() => {
    page = new OnliTutePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
