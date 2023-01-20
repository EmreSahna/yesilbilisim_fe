export interface IImage {
    id: string;
    filename: string;
    folder: string;
}

export interface ITitledImage extends IImage {
    title: string;
}

export interface IDescriptionalImage extends ITitledImage {
    description: string;
}
