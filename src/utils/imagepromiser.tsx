const loadImage = (url : string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = () => {
        reject(new Error(`Could not load image at ${url}`));
      };
      image.src = url;
    });
};

const loadAllImages = async (allImages : string[]) => {
    await Promise.all(allImages.map((item, index) => loadImage(`http://localhost:8080/img/${item}`)));
};

export default loadAllImages;