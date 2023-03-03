export interface ICard {
    url: string;
    title: string;
    icon: string;
}

export interface IHomePage{
    blogs: IBlogNavigator[];
    companies: string[];
    cards: ICard[];
}

export interface IBlogNavigator {
    thumbnailImage: string;
    createdDate: string;
    url: string;
    title: string;
}