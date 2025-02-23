"use client";
import { motion } from "motion/react";
import Image from "next/image";

export interface JobProps {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

function JobCard({
  id,
  company,
  logo,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="job" id={id.toString()}>
      <div className="job-top">
        <Image src={logo} alt="company-logo" width={"50"} height={"50"} />
        <div className="job-top-text">
          <h4 className="company">{company}</h4>
          <h4 className="position">{position}</h4>
        </div>
      </div>
      <div className="job-subtext">
        <h4>{`${role} | ${level} | ${contract}`}</h4>
      </div>
      <div className="job-bottom">
        <p>{`📍${location}. Requirements: ${tools.join(" ")} ${languages.join(" ")}. Posted: ${postedAt}.`}</p>
      </div>
    </motion.div>
  );
}

export default JobCard;
