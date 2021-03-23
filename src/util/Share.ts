// https://gist.github.com/HoldOffHunger/1998b92acb80bc83547baeaff68aaaf4

const Share = (url: string, title: string, hash_tags: [string]) => {
  url = encodeURI(url);
  return {
    facebook: {
      generateUrl: (): string => `https://www.facebook.com/sharer.php?u=${url}`,
    },
    twitter: {
      generateUrl: (): string =>
        `https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=${hash_tags}`,
    },
    linkedin: {
      generateUrl: (): string =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    },
    instagram: {
      generateUrl: (): string => `https://instagram.com`,
    },
    whatsapp: {
      generateUrl: (): string => `https://web.whatsapp.com`,
    },
  };
};

export { Share };
