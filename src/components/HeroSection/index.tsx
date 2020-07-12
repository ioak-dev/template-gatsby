import React from "react"
import "./style.scss"
import Header from "./Header"
import Preview from "./Preview"
import OakButton from "../oakfly/OakButton"
import { faJediOrder } from "@fortawesome/free-brands-svg-icons"
import content from "../../assets/content/HeroSection.json"
import AppPreview from "./AppPreview"

export default function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section--container column-layout">
          <Header />
          <h1 className="heading--1 hero-section--container--title">
            {content.title}
          </h1>
          <p className="heading--2 hero-section--container--subtitle">
            {content.subtitle}
          </p>
          <div>
            <OakButton
              action={() => (window.location.href = "https://janus.ioak.org")}
              label={content.callToAction.label}
              faIcon={content.callToAction.faIcon}
              variant="primary"
            />
          </div>
        </div>
      </div>
      <AppPreview />
    </>
  )
}
