export interface IImage {
    id: string;
    filename: string;
    folder: string;
}

export interface IDescriptionalImage extends IImage {
    title: string;
    description: string;
}