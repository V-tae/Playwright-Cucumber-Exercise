import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

When('I select the cart', async () => {
  await new Purchase(getPage()).selectCart();
});

When('I select Checkout', async () => {
  await new Purchase(getPage()).selectCheckout();
});

When('I fill in the First Name, Last Name, and Zip/Postal Code', async () => {
  await new Purchase(getPage()).fillInCheckoutInformation('John', 'Doe', '12345');
});

When('I select Continue', async () => {
  await new Purchase(getPage()).selectContinue();
});

When('I select Finish', async () => {
  await new Purchase(getPage()).selectFinish();
});

Then("I validate the text 'Thank you for your order!'", async () => {
  await new Purchase(getPage()).validateOrderSuccessMessage();
});
