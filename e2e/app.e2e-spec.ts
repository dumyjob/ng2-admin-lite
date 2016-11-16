import { Ng2AdminltePage } from './app.po';

describe('ng2-adminlte App', function() {
  let page: Ng2AdminltePage;

  beforeEach(() => {
    page = new Ng2AdminltePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
