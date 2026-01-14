export class ApiError extends Error {
  readonly status?: number | undefined;
  constructor(message: string, options?: { status?: number; cause?: unknown }) {
    super(message, options);
    this.name = "CnpjApiError";
    this.status = options?.status;
  }
}
