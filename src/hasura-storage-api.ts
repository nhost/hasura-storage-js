import axios, { AxiosInstance } from 'axios';
import { ApiUploadParams, ApiUploadResponse } from './utils/types';

export class HasuraStorageApi {
  private url: string;
  private httpClient: AxiosInstance;
  private accessToken: string | undefined;

  constructor({ url }: { url: string }) {
    this.url = url;

    this.httpClient = axios.create({
      baseURL: this.url,
      timeout: 10000,
    });
  }

  public async upload(params: ApiUploadParams): Promise<ApiUploadResponse> {
    try {
      const res = await this.httpClient.post(
        '/',
        {
          file: params.file,
        },
        {
          headers: {
            'x-bucket-id': params.bucketId,
            'x-file-name': params.name,
            'x-file-id': params.id,
            ...this.generateAuthHeaders(),
          },
        }
      );

      return { fileMetadata: res.data, error: null };
    } catch (error) {
      return { fileMetadata: null, error };
    }
  }

  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  private generateAuthHeaders() {
    if (!this.accessToken) {
      return null;
    }

    return {
      Authorization: `Bearer ${this.accessToken}`,
    };
  }
}
