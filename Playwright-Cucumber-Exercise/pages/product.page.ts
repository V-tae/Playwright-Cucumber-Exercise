import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page;
    private readonly sortDropdown: string = 'select[data-test="product_sort_container"]';
    private readonly itemPrices: string = '.inventory_item_price';

    constructor(page: Page) {
        this.page = page;
    }

    public async sortItemsBy(sortType: string) {
        await this.page.selectOption(this.sortDropdown, { label: sortType });
    }

    public async validateItemsSortedBy(sortType: string) {
        const prices = await this.page.$$eval(this.itemPrices, items => items.map(item => {
            const textContent = item.textContent;
            if (textContent !== null) {
                return parseFloat(textContent.replace('$', ''));
            }
            return 0;
        }));

        if (sortType === 'Price (low to high)') {
            for (let i = 0; i < prices.length - 1; i++) {
                if (prices[i] > prices[i + 1]) {
                    throw new Error(`Items are not sorted correctly by ${sortType}`);
                }
            }
        } else if (sortType === 'Price (high to low)') {
            for (let i = 0; i < prices.length - 1; i++) {
                if (prices[i] < prices[i + 1]) {
                    throw new Error(`Items are not sorted correctly by ${sortType}`);
                }
            }
        } else {
            throw new Error(`Invalid sort type: ${sortType}`);
        }
    }
}
