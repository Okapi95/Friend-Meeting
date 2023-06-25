import React, { useEffect, useState } from "react";

import PersonalPage from "./personalPage";
import { internalRequestAxios } from "../../API-request/internalRequestAxios";

function PersonalPageContainer() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    internalRequestAxios
      .get("/meetings")
      .then((response) => {
        return response.data.content;
      })
      .then((array) => {
        console.log(array);
        setMeetings(array);
      })
      .catch(() => {
        console.log("ошибка в запросе на встречи");
      });
  }, []);
  console.log(meetings);

  return <PersonalPage meetings={meetings} />;
}

export default PersonalPageContainer;
