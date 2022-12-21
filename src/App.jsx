import { Fragment, useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log("file: App.jsx:15 ~ fetchData ~ tours", tours);

      setLoading(false);
      setTours(tours);
    } catch (error) {
      console.log("file: App.jsx:21 ~ fetchData ~ error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left for me</h2>
          <div className="underline"></div>
          <button className="btn" onClick={fetchData}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <Fragment>
      <Tours tours={tours} removeTour={removeTour} />
    </Fragment>
  );
}

export default App;
