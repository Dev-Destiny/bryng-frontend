const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: BodyInit | Record<string, unknown> | null;
};

/** Minimal fetch wrapper placeholder; configure NEXT_PUBLIC_API_URL before connecting an API. */
export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const headers = new Headers(options.headers);
  const body = options.body;

  if (body && typeof body === "object" && !(body instanceof FormData) && !(body instanceof Blob)) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
    body: body && typeof body === "object" && !(body instanceof FormData) && !(body instanceof Blob)
      ? JSON.stringify(body)
      : body,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
