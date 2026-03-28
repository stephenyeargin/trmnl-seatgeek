function transform(input) {
  const MAX_EVENTS = 10;

  const toArray = (value) => (Array.isArray(value) ? value : []);

  const slimEvent = (event) => {
    const venue = event?.venue ?? {};
    const performers = toArray(event?.performers);
    const firstPerformer = performers[0] ?? {};

    return {
      short_title: event?.short_title ?? null,
      datetime_local: event?.datetime_local ?? null,
      venue: {
        name: venue?.name ?? null,
        display_location: venue?.display_location ?? null,
      },
      performers: [
        {
          image: firstPerformer?.image ?? null,
        },
      ],
    };
  };

  const slimResponse = (response) => {
    const events = toArray(response?.events).slice(0, MAX_EVENTS).map(slimEvent);
    return { events };
  };

  return {
    IDX_0: slimResponse(input?.IDX_0),
    IDX_1: slimResponse(input?.IDX_1),
  };
}
