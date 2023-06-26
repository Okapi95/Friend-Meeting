import React, { useEffect, useState } from "react";

import PersonalPage from "./personalPage";
import { sendMeetingsRequest } from "../../API-request/sendMeetingsRequest";
import { controlAuthorization } from "../../API-request/controlAuthorization";

function PersonalPageContainer() {
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    controlAuthorization().then(() => {
      sendMeetingsRequest(setMeetings);
    });
  }, []);
  console.log(meetings);

  return <PersonalPage meetings={meetings} />;
}

export default PersonalPageContainer;
