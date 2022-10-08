import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser"

export default function ContactMe(props) {

  const form = useRef();
  console.log(form, "form");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vteje9v', 'template_zlc4irh', form.current, 'sBP68nEYVOA115g_8')
      .then((result) => {
        console.log(result.text);
        console.log("done")

      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["For any queries and further information.", 1000]} wrapper="b" />
          </h2>
          <a href="https://www.facebook.com/RawalKritik" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a>

          <a href="https://www.instagram.com/kritikrawal" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a>

          <a href="https://twitter.com/RawalKritik/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" /></a>

        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Message!</h4>
            <img src={imgBack} alt="image_not_found" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <p>{banner}</p>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="user_name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" />

            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image_not_responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
