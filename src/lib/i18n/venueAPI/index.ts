import { headers } from "next/headers";

type Direction = "asc" | "desc";

type APIParams = {
  path: string;
  page?: number;
  limit?: number;
  orderBy?: string;
  direction?: Direction;
};

const fetchData = async ({ path, ...params }: APIParams) => {
  const nonNullParams = Object.entries(params).reduce((accum, param) => {
    if (param[1]) {
      accum[param[0]] = param[1];
    }
    return accum;
  }, {});

  try {
    const searchParams = new URLSearchParams(nonNullParams);
    const endpoint = `${path}?${searchParams.toString()}`;

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      next: { revalidate: 0 },
    });

    const data = await response.json();

    const records = data.records;
    if (records.startDate) {
      records.startDate = records.startDate + 2 * 3600 * 1000;
      records.endDate = records.endDate + 2 * 3600 * 1000;
    }
    return records;
  } catch (e) {
    console.error("ERROR", e);
    return [];
  }
};

export type EventParams = Omit<APIParams, "path"> & {
  featured?: boolean;
  upcoming?: boolean;
};

export const createClient = () => {
  const publicRoot = `${process.env.API_ROOT}/api/v1/${process.env.SITE_KEY}/public`;

  return {
    site: {
      fetch: (params?: Omit<APIParams, "path">) => {
        const path = `${publicRoot}/site`;

        return fetchData({ ...params, path });
      },
    },

    events: {
      fetch: (params?: EventParams) => {
        const path = `${publicRoot}/events`;

        return fetchData({ ...params, path });
      },
    },

    event: {
      fetch: (params: Omit<APIParams, "path"> & { slug: string }) => {
        const { slug } = params;
        const path = `${publicRoot}/events/${slug}`;

        return fetchData({ ...params, path });
      },
    },

    profiles: {
      fetch: (params?: Omit<APIParams, "path"> & { type?: "member" }) => {
        const path = `${publicRoot}/profiles`;

        return fetchData({ ...params, path });
      },
    },

    profile: {
      fetch: (params: Omit<APIParams, "path"> & { slug: string }) => {
        const { slug } = params;
        const path = `${publicRoot}/profiles/${slug}`;

        return fetchData({ ...params, path });
      },
    },

    pages: {
      fetch: (params?: Omit<APIParams, "path"> & { featured?: boolean }) => {
        const path = `${publicRoot}/pages`;

        return fetchData({ ...params, path });
      },
    },

    page: {
      fetch: (params: Omit<APIParams, "path"> & { slug: string }) => {
        const { slug } = params;
        const path = `${publicRoot}/pages/${encodeURIComponent(slug)}`;

        return fetchData({ ...params, path });
      },
    },

    // TODO
    eventsForProfile: {
      fetch: ({
        slug,
        ...params
      }: Omit<APIParams, "path"> & { slug: string }) => {
        const path = `${publicRoot}/profiles/${slug}/events`;

        return fetchData({ ...params, path });
      },
    },

    products: {
      fetch: (params?: Omit<APIParams, "path"> & { featured?: boolean }) => {
        const path = `${publicRoot}/products`;

        return fetchData({ ...params, path });
      },
    },

    product: {
      fetch: (params?: Omit<APIParams, "path"> & { slug: string }) => {
        const path = `${publicRoot}/products`;

        return fetchData({ ...params, path });
      },
    },
  };
};

export * from "./hooks";
export * from "./types";
