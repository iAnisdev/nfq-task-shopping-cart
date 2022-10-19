export interface ProductInterface {
    id: number,
    title: string,
    price: number,
    description: string
    category: string
    image: string
    rating: {
        rate: number,
        count: number
    }
}

export interface CartItemInterface extends ProductInterface {
    quanitity: number
}