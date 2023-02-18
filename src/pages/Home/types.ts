export interface ICard {
    url: string;
    title: string;
    icon: string;
}

export interface IHomePage{
    sliders: string[];
    companies: string[];
    cards: ICard[];
}
