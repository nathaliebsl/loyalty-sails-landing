const Calendar = () => {
  const googleCalendarSubscribeUrl =
    "https://calendar.google.com/calendar/u/0?cid=NzZlZGQwNGU0NjA4NmZiZWFmMTQzYzlhNzdmM2Q2ZTEyODk0Y2ZmZGYyYWY1NjRmOWNjZDFhYWFkOGVkODgzY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

  return (
    <section id="calendar" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Competition Calendar</h2>
          <p className="max-w-2xl opacity-80">
            Upcoming regattas, training periods, and official Loyalty Sailing Team events.
          </p>
        </div>

        {/* Add to Google Calendar */}
        <div className="mt-6">
          <a
            href={googleCalendarSubscribeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-bold uppercase text-sm tracking-wider rounded hover:bg-accent transition-colors duration-300 shadow-glow"
          >
            Add to Google Calendar
          </a>
        </div>

        {/* Embedded list-style calendar */}
       <iframe
  title="Loyalty Sailing — Competition Calendar"
  src="https://calendar.google.com/calendar/embed?mode=AGENDA&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%23000000&src=76edd04e46086fbeaf143c9a77f3d6e12894cffdf2af564f9ccd1aaad8ed883c%40group.calendar.google.com&ctz=America%2FSao_Paulo"
  style={{ border: 0 }}
  width="100%"
  height="760"
  frameBorder={0}
  scrolling="no"
/>
        {/* <div className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-card">
          <iframe
            title="Loyalty Sailing — Competition Calendar"
            src="https://calendar.google.com/calendar/embed?mode=AGENDA&src=76edd04e46086fbeaf143c9a77f3d6e12894cffdf2af564f9ccd1aaad8ed883c%40group.calendar.google.com&ctz=America%2FSao_Paulo"
            style={{ border: 0 }}
            width="100%"
            height="760"
            frameBorder={0}
            scrolling="no"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
