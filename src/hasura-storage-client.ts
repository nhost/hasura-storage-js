import { HasuraStorageApi } from './hasura-storage-api';
import { StorageUploadParams, StorageUploadResponse } from './utils/types';

export class HasuraStorageClient {
  private api: HasuraStorageApi;

  constructor({ url }: { url: string }) {
    this.api = new HasuraStorageApi({ url });
  }

  /**
   *
   * Use `.upload` to upload a file.
   *
   * @example
   *
   * storage.upload({ file })
   *
   */
  public async upload(
    params: StorageUploadParams
  ): Promise<StorageUploadResponse> {
    let file = new FormData();
    file.append('file', params.file);

    const { fileMetadata, error } = await this.api.upload({
      ...params,
      file,
    });
    if (error) {
      return { fileMetadata: null, error };
    }

    if (!fileMetadata) {
      return { fileMetadata: null, error: new Error('Invalid file returned') };
    }

    return { fileMetadata, error: null };
  }

  public setAccessToken(accessToken: string | undefined): void {
    this.api.setAccessToken(accessToken);
  }
}
