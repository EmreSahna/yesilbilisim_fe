export interface IPost {
    title: string;
    description: string;
    createdDate: string;
    thumbnailImage: string;
    url: string;
}

export interface IDetailedPost extends IPost{
    blogContent: string;
}
