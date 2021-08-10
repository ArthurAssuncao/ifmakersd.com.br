import { Head } from 'next/document';

export class HeadWithoutPreload extends Head {
  getPreloadDynamicChunks(): [] {
    return [];
  }

  getPreloadMainLinks(): [] {
    return [];
  }
}
