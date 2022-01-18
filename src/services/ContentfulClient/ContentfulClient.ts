import * as contentful from 'contentful';
import { env } from 'process';

class CmsClient {
  private static instance: contentful.ContentfulClientApi;
  private static spaceId = env.CONTENTFUL_SPACE_ID;
  private static accessTokenCode = env.CONTENTFUL_ACCESS_TOKEN;

  public static getInstance(): contentful.ContentfulClientApi {
    if (CmsClient.spaceId && CmsClient.accessTokenCode && !CmsClient.instance) {
      CmsClient.instance = contentful.createClient({
        space: CmsClient.spaceId,
        accessToken: CmsClient.accessTokenCode,
      } as contentful.CreateClientParams);
    }

    return CmsClient.instance;
  }
}

export { CmsClient };
