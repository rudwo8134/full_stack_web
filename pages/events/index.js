import React from "react";
import EventSearch from "../../components/events/event-search";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
