export interface MeliDescriptionResponse {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: Snapshot;
}

export interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}
