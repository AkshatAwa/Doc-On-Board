import React from 'react'
import "./News.css"
import { Link } from 'react-router-dom';

const News = ({ title, link, buttonText, imageSrc }) => {
    const FlexboxContainer = ({ heading, title, linkText, linkUrl }) => {
        return (
          <div style={{ display: 'flex', justifyContent:"center",flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
            <h2>{heading}</h2>
            <p>{title}</p>
            <a href={linkUrl}>{linkText}</a>
          </div>
        );
      };
      return (
        <>
        <div className="header" style={{display: "flex", height: "10rem", width:"100%",justifyContent:"center",alignItems:"center", fontFamily:"Comfortaa",fontSize:"24px"}}>News</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' ,background: "#fff", border: "2px solid #000", height: "20rem", width:"100%"}}>
          <FlexboxContainer
            heading="Flexbox Container 1"
            title="This is the first flexbox container."
            linkText="Learn more"
            linkUrl="https://example.com"
          />
          <div style={{display:"flex", height:"12rem",width:"5px", background:"#000"}}></div>
          <FlexboxContainer
            heading="Flexbox Container 2"
            title="This is the second flexbox container."
            linkText="Visit website"
            linkUrl="https://example.com"
          />
          <div style={{display:"flex", height:"12rem",width:"5px", background:"#000"}}></div>
          <FlexboxContainer
            heading="Flexbox Container 3"
            title="This is the third flexbox container."
            linkText="Check it out"
            linkUrl="https://example.com"
          />
            <div style={{display:"flex", height:"12rem",width:"5px", background:"#000"}}></div>
          <FlexboxContainer
            heading="Flexbox Container 3"
            title="This is the third flexbox container."
            linkText="Check it out"
            linkUrl="https://example.com"
          />
        </div>
        <div className="about">
            <div className="Name">DocOnBoard</div>
            <div className="content">Made with love and care</div>
        </div>
        </>
      );
    };
export default News
