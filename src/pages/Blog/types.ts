export interface IPost {
    title: string;
    description: string;
    pubDate: string;
    image: string;
    link: string;
}

export interface IBlog {
    username: string;
    profileImage: string;
    profileLink: string;
    posts: IPost[];
}
