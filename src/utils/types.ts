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
