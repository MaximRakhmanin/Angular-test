export class Book {
    id: number;
    title: string;
    ISBN: string;
    publicationYear: string;
    price: number;
    condition: number;
    category_id: number;
    discount: number | null;
    status: number;
    date: string;
    discount_price: number | null;
    publishers: string[];
    comments: string[];
    authors: string[];
}
