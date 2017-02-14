import { DataAdminPage } from './app.po';

describe('data-admin App', function() {
  let page: DataAdminPage;

  beforeEach(() => {
    page = new DataAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
