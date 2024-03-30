'use client'
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ShowSection from "./components/ShowSection";
import EventSection from "./components/EventSection";
import Loader from "./components/Loader";

export default function Home() {
  const [events, setEvents] = useState();
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, sethasMore] = useState(true);
  const [Loading, setLoading] = useState(false);
  const fetchData = async () => {
    const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
    const data = await response.json();
    // console.log(data.events);
    setEvents(data.events);
  }
  const fetchEvents = async () => {
    try {
      if (!hasmore) return;
      setLoading(true);
      const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`)
      const data = await response.json();
      const event = data.events;
      console.log("Event: ", event)
      if (shows.length === 0) {
        setShows([...event]);
      } else {
        setShows((prev) => [...prev, ...event]);
      }
      setLoading(false)
    } catch (error) {
      sethasMore(false)
      setLoading(false)
    }
  }
  const handleInfiniteScroll = async () => {
    try {
      if (document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev + 1)
      }
    } catch (error) {
      sethasMore(false)
    }
  }
  
  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [page])

  return (
    <main className="">
      <Header />
      <ShowSection events={events}/>
      <EventSection shows={shows}/>
      {Loading &&
        <Loader/>
      }
    </main>
  );
}
