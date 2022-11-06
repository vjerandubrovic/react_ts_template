export const calculation = (dataProducts: any[], inputedProduct: any) => {

    const inputedName = inputedProduct.name;
    const inputedQuantity = inputedProduct.quantity.toString();
    const inputedMeasure = inputedProduct.measure;

    const proba = dataProducts
        .filter(el => el.product === inputedName)
        .map(el => {
            if (inputedMeasure === 'g') {
                return {
                    name: el.product,
                    quantity: inputedQuantity,
                    measure: inputedMeasure,
                    g: inputedQuantity,
                    kcal: ((inputedQuantity / 100) * el.calories).toFixed(2),
                    protein: ((inputedQuantity / 100) * el.protein).toFixed(2),
                    carbs: ((inputedQuantity / 100) * el.carbohydrates).toFixed(2),
                    fat: ((inputedQuantity / 100) * el.fat).toFixed(2),
                };
            }
            if (inputedMeasure === 'tsp') {
                return {
                    name: el.product,
                    quantity: inputedQuantity,
                    measure: inputedMeasure,
                    g: (inputedQuantity * (el.measureValue / 3)).toFixed(2),
                    kcal: ((inputedQuantity * (el.measureValue / 3) / 100) * el.calories).toFixed(2),
                    protein: ((inputedQuantity * (el.measureValue / 3) / 100) * el.protein).toFixed(2),
                    carbs: ((inputedQuantity * (el.measureValue / 3) / 100) * el.carbohydrates).toFixed(2),
                    fat: ((inputedQuantity * (el.measureValue / 3) / 100) * el.fat).toFixed(2),
                };
            }
            if (inputedMeasure !== 'g' && inputedMeasure !== 'tsp') {
                return {
                    name: el.product,
                    quantity: inputedQuantity,
                    measure: inputedMeasure,
                    g: (inputedQuantity * el.measureValue).toFixed(2),
                    kcal: ((inputedQuantity * el.measureValue / 100) * el.calories).toFixed(2),
                    protein: ((inputedQuantity * el.measureValue / 100) * el.protein).toFixed(2),
                    carbs: ((inputedQuantity * el.measureValue / 100) * el.carbohydrates).toFixed(2),
                    fat: ((inputedQuantity * el.measureValue / 100) * el.fat).toFixed(2),
                };
            }
            return null;
        });

    if (proba[0]) return proba[0];

    return {
        id: null,
        name: '',
        quantity: '0',
        measure: 'g',
        g: '0',
        kcal: '0.00',
        protein: '0.00',
        carbs: '0.00',
        fat: '0.00',
    };
};

export const calculateTotals = (allProducts: any[]) => {

    const totalGrams = allProducts
        .reduce((total, product) => total + Number(product.g), 0)
        .toFixed(2);
    const totalKcal = allProducts
        .reduce((total, product) => total + Number(product.kcal), 0)
        .toFixed(2);
    const totalProtein = allProducts
        .reduce((total, product) => total + Number(product.protein), 0)
        .toFixed(2);
    const totalCarbs = allProducts
        .reduce((total, product) => total + Number(product.carbs), 0)
        .toFixed(2);
    const totalFat = allProducts
        .reduce((total, product) => total + Number(product.fat), 0)
        .toFixed(2);

    return {
        totalGrams: totalGrams,
        totalKcal: totalKcal,
        totalProtein: totalProtein,
        totalCarbs: totalCarbs,
        totalFat: totalFat,
    };
};