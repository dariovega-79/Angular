export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

export function taxCalculation(options: TaxCalculationOptions): [number,number]{

    let total = 0;

    const {tax,products} = options;
    
    products.forEach( ({price}) => {
        total += price;
    })

    return [total, total * tax ];

}

const shoppingCart = [phone,tablet];
const tax = 0.15;

// const [total, taxTotal] = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// });

// console.log('Total', total);
// console.log('Tax', taxTotal);

