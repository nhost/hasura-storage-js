/////////////////////
///// Storage
/////////////////////

export type StorageUploadParams = {
  file: File;
  id?: string;
  name?: string;
  bucketId?: string;
};

export type StorageUploadResponse =
  | { fileMetadata: FileResponse; error: null }
  | { fileMetadata: null; error: Error };

export type StorageGetUrlParams = {
  fileId: string;
};

export type StorageGetPresignedUrlParams = {
  fileId: string;
};

export type StorageGetPresignedUrlResponse =
  | { url: { url: string; expiration: number }; error: null }
  | { url: null; error: Error };

export type StorageDeleteParams = {
  fileId: string;
};

export type StorageDeleteResponse = { error: Error | null };

/////////////////////
///// API
/////////////////////

type FileResponse = {
  id: string;
  name: string;
  size: number;
  mimeType: string;
  etag: string;
  createdAt: string;
  bucketId: string;
};

export type ApiUploadParams = {
  file: FormData;
  id?: string;
  name?: string;
  bucketId?: string;
};

export type ApiUploadResponse =
  | { fileMetadata: FileResponse; error: null }
  | { fileMetadata: null; error: Error };

export type ApiGetPresignedUrlParams = {
  fileId: string;
};

export type ApiGetPresignedUrlResponse =
  | { url: { url: string; expiration: number }; error: null }
  | { url: null; error: Error };

export type ApiDeleteParams = {
  fileId: string;
};

export type ApiDeleteResponse = { error: Error | null };

/////////////////////
///// MISC
/////////////////////

export type UploadHeaders = {
  'x-nhost-bucket-id'?: string;
  'x-nhost-file-id'?: string;
  'x-nhost-file-name'?: string;
};
