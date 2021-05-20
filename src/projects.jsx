import React, { Component } from "react";
import Project from "./project";
import "./projects.css";

import Finovo from "./images/Finovo.png";
import MoodSoup from "./images/MoodSoup.png";
import BudgetEats from "./images/BudgetEats.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <strong className="Project-title">Projects</strong>
        <div className="Project-row">
          <Project
            image={Finovo}
            alt="Finovo"
            background="#2A3642"
            border="none"
            borderColor="#2A3642"
            color="white"
            link="IQ3Ra_55THM"
            type="desktop"
            name="Finovo"
            technology="React / Django / PostgreSQL"
            description="Finovo is a financial-wellness application for regular employees who needs help managing their financial situation. The application has a feature such as reserving an appointment with a financial coach or filling out a questionnaire which will automatically generate a recommendation for a user. My main role for this application was with Back-end development where I developed different tools such as API views and token authentication."
            gitLink="https://github.com/UAlberta-CMPUT401/financial-wellness"
          />
          <Project
            image={MoodSoup}
            alt="MoodSoup"
            background="#F2F1F2"
            border="solid"
            borderColor="#179DF8"
            color="#179DF8"
            link="piEWOG5oRGI"
            type="phone"
            name="MoodSoup"
            technology="Android Studio / Firebase Storage"
            description="MoodSoup is a social networking service application for android where users can follow each other to see their post(Mood) which contains fields such as description, location, who they are with, and a photo. The difference between MoodSoup and other SNS application is that MoodSoup is a social networking app with more privacy where you only can view a Mood of other users who are following you. My main role in the development was mainly the backend which dealt with connecting the application to Firebase Storage."
            gitLink="https://github.com/CMPUT301F19T12/MoodSoup"
          />
        </div>
        <div className="Project-row">
          <Project
            image={BudgetEats}
            alt="BudgetEats"
            background="#343A40"
            border="solid"
            borderColor="#343A40"
            color="#FFFFFF"
            link="Bdz9XZumsmM"
            type="desktop"
            name="BudgetEats"
            technology="React / Django"
            description="BudgetEats is a hackathon project that was made to help poverty of not just the homeless people but the regular people nearby. The application lists the prices of grocery items in each of the stores so the user can select a grocery store with the lowest price. The feature includes adding the items to grocery bag, removing them and displaying the total price per store."
            gitLink="https://github.com/luketk97/budgeteats"
          />
        </div>
      </div>
    );
  }
}

export default Projects;
