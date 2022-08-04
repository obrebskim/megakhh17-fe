import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BioGrades from "./BioGrades";
import BioWorkPreferences from "./BioWorkPreferences";
import BioEducationAndExperience from "./BioEducationAndExperience";
import BioPersonalInfo from "./BioPersonalInfo";

const Container = styled.div`
  width: 1430px;
  height: auto;
  display: flex;
`;

const BioInfo = styled.div`
  width: 205px;
`;

const Preferences = styled.div`
  width: 85%;
`;

export default function Bio() {
  const [userBio, setUserBio] = useState({
    name: "",
    githubUsername: "",
    email: "",
    tel: "",
    bio: "",
    education: "",
    courses: "",
    workExperience: "",
    projectUrls: "",
    portfolioUrls: "",
  });

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3000`);
      const data = await res.json();

      setUserBio(data);
    })();
  }, []);
  return (
    <Container>
      <BioInfo>
        <BioPersonalInfo
          name={userBio.name}
          githubUsername={userBio.githubUsername}
          email={userBio.email}
          tel={userBio.tel}
          bio={userBio.bio}
        />
      </BioInfo>
      <Preferences>
        <BioGrades />
        <BioWorkPreferences />
        <BioEducationAndExperience
          education={userBio.education}
          courses={userBio.courses}
          workExperience={userBio.workExperience}
          githubUsername={userBio.githubUsername}
          projectUrls={userBio.projectUrls}
          portfolioUrls={userBio.portfolioUrls}
        />
      </Preferences>
    </Container>
  );
}
