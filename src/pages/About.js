import React from "react";
import Multiplebooks from "../assets/multiplebooks.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Multiplebooks})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our book haven—a sanctuary for readers where every page holds the promise
        of discovery, imagination, and wonder. Here, we celebrate the magic of storytelling, 
        believing that books are more than just words on paper—they are gateways to uncharted 
        worlds, endless learning, and profound inspiration.

        Our platform is a treasure trove of literary delights, offering a diverse collection 
        of titles spanning every genre imaginable. Whether you crave the adrenaline rush of 
        a gripping thriller, the warmth of a heartfelt romance, or the transformative power 
        of thought-provoking non-fiction, we have something special just for you.

        But we’re more than just a place to find books—we’re a thriving community of book 
        lovers united by our shared passion for stories. From personalized recommendations 
        to exclusive book clubs, from author spotlights to lively discussions, we’re here 
        to make your reading experience truly unforgettable.

        Our mission is to connect every reader with the perfect book, ignite the joy of 
        reading, and create a space where stories come alive. So, step into our world, 
        embark on new adventures, and let’s make every book a journey worth remembering. 
        Your next great read awaits!
        </p>
      </div>
    </div>
  );
}

export default About;
