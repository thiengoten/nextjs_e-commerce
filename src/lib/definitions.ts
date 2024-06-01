export type PostsDTO = {
    id: number
    title: string
    content: string
    userId: number
    createdAt: Date
    updatedAt: Date
}

export type Product = {
    id: string
    name: string
    price: number
    quantity: number
    imageURL: string
    createdAt: Date
    updatedAt: Date
}
