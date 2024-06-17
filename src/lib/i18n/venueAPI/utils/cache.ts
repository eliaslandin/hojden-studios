export const CacheTagDefinitions = {
  event: (domain: string, slug: string) => `${domain}-event-${slug}`,
  eventsOnProfile: (domain: string, id: string) =>
    `${domain}-events-profile-${id}`,
  profile: (domain: string, slug: string) => `${domain}-profile-${slug}`,
};
