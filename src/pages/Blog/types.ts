export interface IPost {
    title: string;
    description: string;
    created_date: string;
    thumbnail_image: string;
    url: string;
}

export interface IPostList {
    blog_responses: IPost[];
    total_pages: number;
    current_page: number;
}

export interface IDetailedPost extends IPost{
    blogContent: string;
}
