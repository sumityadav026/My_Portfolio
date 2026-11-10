import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const cert = this.props.certificate;
    const theme = this.props.theme;

    const isExternalLink =
      cert.certificate_link &&
      (cert.certificate_link.startsWith("http://") ||
        cert.certificate_link.startsWith("https://"));

    let certLink = cert.certificate_link;
    if (!isExternalLink && cert.certificate_link) {
      try {
        certLink = require(`../../assets/certificates/${cert.certificate_link.replace(
          /^.*[\\/]/,
          ""
        )}`);
      } catch (err) {
        certLink = `${
          process.env.PUBLIC_URL || ""
        }/${cert.certificate_link.replace(/^\//, "")}`;
      }
    }

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a href={certLink} target="_blank" rel="noopener noreferrer">
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: cert.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assets/images/${cert.logo_path}`)}
                  alt={cert.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  Certificate
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {cert.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {cert.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
