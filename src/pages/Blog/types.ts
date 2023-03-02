export interface IPost {
    title: string;
    description: string;
    createdDate: string;
    thumbnailImage: string;
    url: string;
}

export interface IPostList {
    blogResponses: IPost[];
    totalPages: number;
    currentPage: number;
}

export interface IDetailedPost extends IPost{
    blogContent: string;
}
