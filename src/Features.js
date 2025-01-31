import react from "react";
import "./Features.css";

// Importing updated images from src/images
import ec2 from "./images/EC2.png";
import virtualPrivateCloud from "./images/Virtual Private Cloud.png";
import git from "./images/git.png";
import AutoScaling from "./images/AutoScaling.jpg";
import SSLcertificate from "./images/SSLcertificate.jpg";
import CustomDomains from "./images/CustomDomains.png"

const Features = () => {
  const features = [
    {
      icon: ec2, // Replace with the actual path to your image/icon
      title: "EC2 Hosting",
      description: "Scalable compute capacity in the AWS Cloud",
    },
    {
      icon: AutoScaling, // Replace with the actual path to your image/icon
      title: "Auto Scaling",
      description: "Automatically adjust capacity to maintain performance",
    },
    {
      icon: virtualPrivateCloud, // Replace with the actual path to your image/icon
      title: "CDN Integration",
      description: "Global content delivery with low latency",
    },
    {
      icon: SSLcertificate, // Replace with the actual path to your image/icon
      title: "SSL Certificates",
      description: "Secure your applications with free SSL",
    },
    {
      icon: CustomDomains, // Replace with the actual path to your image/icon
      title: "Custom Domains",
      description: "Use your own domain name for deployments",
    },
    {
      icon: git, // Replace with the actual path to your image/icon
      title: "Git Integration",
      description: "Deploy directly from your Git repository",
    },
  ];

  return (
    <div className="features-container">
      <h1 className="features-heading">Everything You Need to Deploy</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;