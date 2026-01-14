export interface ApiTelefone {
  ddd?: string;
  numero?: string;
  is_fax?: boolean;

  [key: string]: unknown;
}
