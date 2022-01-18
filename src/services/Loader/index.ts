interface CustomImageLoader {
  src: string;
  width: number | undefined;
  quality?: number | undefined;
}

const Loader = {
  imageLoader: ({ src, width, quality }: CustomImageLoader): string => {
    return `${src}?w=${width}&q=${quality || 75}`;
  },
};

export default Loader;
