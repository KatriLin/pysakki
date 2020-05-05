import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import "./style.css";

const ALL_BUSSES = gql`
  query {
    stop(id: "HSL:4610204") {
      name
      stoptimesWithoutPatterns {
        headsign
        realtimeArrival
        scheduledArrival
        serviceDay
      }
    }
  }
`;

function timeConvert(n) {
  var timestamp = n;
  var hours = Math.floor(timestamp / 60 / 60);
  var minutes = Math.floor(timestamp / 60) - hours * 60;
  var newTimeform =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  return newTimeform;
}

/*console.log(timeConvert(200));*/

function Busses() {
  const result = useQuery(ALL_BUSSES, {
    pollInterval: 15000,
  });
  console.log(result);

  return (
    <div>
      {result.loading ? (
        <div>data loading.....</div>
      ) : (
        <div>
          <h2 className="sedondary_header">Seuraavat saapuvat linja-autot</h2>
          {result.data.stop.stoptimesWithoutPatterns.map((bus, i) => {
            return (
              <div key={i}>
                <ul key={i}>
                  <li className="busses" key={i}>
                    <i className="fas fa-bus bus_icon"></i>
                    {bus.headsign} {timeConvert(bus.realtimeArrival)}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Busses;
