import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetails from "../pages/EventDetails/EventDetails";
import Settings from "../pages/Settings/Settings";
import Subscription from "../pages/Subscription/Subscription";
import More from "../pages/More/More";

export const routes = [
  { path: '/', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetails /> },
  { path: '/settings', element: <Settings /> },
  { path: '/Subscription', element: <Subscription /> },
  { path: '/more', element: <More /> },
];
