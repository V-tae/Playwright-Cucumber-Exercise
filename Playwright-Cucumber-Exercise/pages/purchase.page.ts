import { Page } from '@playwright/test';

export class Purchase {
    private readonly page: Page;
    private readonly cartButton: string = 'a.shopping_cart_link';
    private readonly checkoutButton: string = 'button[data-test="checkout"]';
    private readonly firstNameField: string = 'input[data-test="firstName"]';
    private readonly lastNameField: string = 'input[data-test="lastName"]';
    private readonly postalCodeField: string = 'input[data-test="postalCode"]';
    private readonly continueButton: string = 'input[data-test="continue"]';
    private readonly finishButton: string = 'button[data-test="finish"]';
    private readonly orderSuccessMessage: string = '.complete-header';

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.click(this.cartButton);
    }

    public async selectCheckout() {
        await this.page.click(this.checkoutButton);
    }

    public async fillInCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill(this.firstNameField, firstName);
        await this.page.fill(this.lastNameField, lastName);
        await this.page.fill(this.postalCodeField, postalCode);
    }

    public async selectContinue() {
        await this.page.click(this.continueButton);
    }

    public async selectFinish() {
        await this.page.click(this.finishButton);
    }

    public async validateOrderSuccessMessage() {
        const message = await this.page.textContent(this.orderSuccessMessage);
        if (message !== 'Thank you for your order!') {
            throw new Error(`Expected order success message to be 'Thank you for your order!', but got '${message}'`);
        }
    }
}
