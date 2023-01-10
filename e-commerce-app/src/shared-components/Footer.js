import classes from "./Footer.module.css";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import { Fragment } from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Fragment>
      <div className={classes.footer}>
        <Map />
        <div className={classes.list}>
          <div className={classes.left_list}>
            <ul>
              <li className={classes.list_title}>Navigation</li>
              <li>Main</li>
              <li>Rules</li>
              <li>Contact</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Delivery Rules</li>
              <li>News</li>
            </ul>
          </div>
          <div className={classes.right_list}>
            <ul>
              <li className={classes.list_title}>Contact Us</li>
              <li>+995 592 10 27 93</li>
              <li>il.pachulia@gmail.com</li>
              <li className={classes.icons}>
                <a href="https://www.facebook.com/ilo.pachulia98/">
                  <FaFacebookSquare />
                </a>
                <a href="https://www.linkedin.com/in/iliapachulia/">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/pachulia.io/">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.copyrights}>
        © Supported By GRIFFIN. All Rights Reserved.
      </div>
    </Fragment>
  );
}

export default Footer;
