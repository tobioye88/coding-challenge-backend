export interface IResponseHelper<T> {
  message?: string;
  data: T;
  meta?: IResponseMeta;
  page?: number;
  size?: number;
  totalResults?: number;
}

export interface IResponseMeta {
  data_id: number,
  provider: string,
  source: string,
  created_on: Date,
  last_hit_on: Date,
  cache_hit: number
}