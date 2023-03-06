export interface ICard {
    url: string;
    title: string;
    icon: string;
}

export interface IHomePage{
    blogs: IBlogNavigator[];
    companies: ICompanies[];
    cards: ICard[];
}

export interface IBlogNavigator {
    thumbnail_image: string;
    created_date: string;
    url: string;
    title: string;
}

export interface ICompanies {
    image: string;
    alt: string;
}