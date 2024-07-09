import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I sort items by {string}', async (sortType: string) => {
  await new Product(getPage()).sortItemsBy(sortType);
});

Then('I validate all items are sorted correctly by {string}', async (sortType: string) => {
  await new Product(getPage()).validateItemsSortedBy(sortType);
});
