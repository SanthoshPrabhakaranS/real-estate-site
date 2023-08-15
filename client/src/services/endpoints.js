export const Endpoints = {
  getAllResidencies: "/residency/getAllResidencies",
  getSingleResidency: (id) => `/residency/${id}`,
  createUser: "/auth/register",
  bookVisit: (id) => `/auth/bookVisit/${id}`,
  getAllBookings: "/auth/getAllBookedVisits",
  cancelBooking: (id) => `/auth/cancelBooking/${id}`,
  addToFavourites: (id) => `/auth/favourites/${id}`,
  getAllFavourites: "/auth/getAllFavourites",
  createResidency: "/residency/create"
};
