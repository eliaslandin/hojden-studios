import { unstable_cache } from "next/cache";
import { EventParams, createClient } from "./";
import { CacheTagDefinitions } from "./utils";
// import {
// getPublicEvent,
// getPublicEvents,
// getPublicProfile,
// getPublicProfiles,
// // getPublicPages,
// getPublicProducts,
// getPublicProduct,
// CacheTagDefinitions,
// getSite,
// } from "./venue";
const getPublicProducts = () => [];
const getPublicProduct = () => ({});

const DEFAULT_VALIDATION_TIME = 6;
const SITE_NAME = process.env.SITE_KEY || "hojden";

const client = createClient();

export async function getSite() {
  const data = await unstable_cache(client.site.fetch, [`site`], {
    revalidate: DEFAULT_VALIDATION_TIME,
    tags: [`site`],
  })();

  return data;
}

// EVENTS
export const getEvents = async (params: EventParams) => {
  return await unstable_cache(() => client.events.fetch(params), [`events`], {
    revalidate: DEFAULT_VALIDATION_TIME,
    tags: ["events"],
  })();
};

export const getUpcomingEvents = async ({ limit }: { limit?: number }) => {
  return await unstable_cache(
    () => client.events.fetch({ limit, upcoming: true }),
    ["upcoming-events"],
    {
      revalidate: DEFAULT_VALIDATION_TIME,
      tags: ["upcoming-events"],
    },
  )();
};

// Get all featured events
export const getFeaturedEvents = async ({ limit }: { limit?: number }) => {
  return await unstable_cache(
    () => client.events.fetch({ limit, featured: true }),
    ["featured-events"],
    {
      revalidate: DEFAULT_VALIDATION_TIME,
      tags: ["featured-events"],
    },
  )();
};

export async function getEvent(slug: string) {
  const cacheTag = CacheTagDefinitions.event(SITE_NAME, slug);
  return await unstable_cache(() => client.event.fetch({ slug }), [cacheTag], {
    revalidate: DEFAULT_VALIDATION_TIME,
    tags: [cacheTag],
  })();
}

// PROFILES
export async function getProfile({ slug }: { slug: string }) {
  const cacheTag = CacheTagDefinitions.profile(SITE_NAME, slug);
  return await unstable_cache(
    () => client.profile.fetch({ slug }),
    [cacheTag],
    {
      revalidate: DEFAULT_VALIDATION_TIME,
      tags: [cacheTag],
    },
  )();
}

export const getProfiles = async ({
  limit,
  type,
}: {
  limit?: number;
  type?: "member";
}) => {
  return await unstable_cache(
    () => client.profiles.fetch({ limit, type }),
    [`profiles`],
    {
      revalidate: DEFAULT_VALIDATION_TIME,
      tags: [`profiles`],
    },
  )();
};

export async function getEventsForProfile({
  slug,
  limit = 4,
}: {
  slug: string;
  limit?: number;
}) {
  const cacheTag = CacheTagDefinitions.eventsOnProfile(SITE_NAME, slug);
  return await unstable_cache(
    () => client.eventsForProfile.fetch({ slug, limit }),
    [cacheTag],
    {
      revalidate: DEFAULT_VALIDATION_TIME,
      tags: [cacheTag],
    },
  )();
}

// PRODUCTS
export const getProducts = async ({ limit }: { limit?: number }) => {
  return await unstable_cache(
    () => client.products.fetch({ limit }),
    [`events`],
    {
      revalidate: DEFAULT_VALIDATION_TIME,
      tags: [`products`],
    },
  )();
};

export async function getProduct(slug: string) {
  return await unstable_cache(
    () => client.product.fetch({ slug }),
    [`event-${slug}`],
    {
      revalidate: DEFAULT_VALIDATION_TIME,
      tags: [`event-${slug}`],
    },
  )();
}

export async function getPage(slug: string) {
  return await client.page.fetch({ slug });
}

export async function getPages({ limit }: { limit?: number } = {}) {
  return await client.pages.fetch();
}

// Get all featured pages
export const getFeaturedPages = async ({ limit }: { limit?: number }) => {
  return await client.pages.fetch({ limit, featured: true });
};
