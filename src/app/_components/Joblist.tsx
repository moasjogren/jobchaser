"use client";

import { useEffect, useState } from "react";
import { JobsData } from "./data";
import JobCard, { JobProps } from "./JobCard";
import Result from "./Results";

interface JobListProps {
  filter: string;
  category: string | null;
}

export const JobList = ({ filter, category }: JobListProps) => {
  const [filteredJobs, setFilteredJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    const newFilteredJobs = JobsData.filter((item) => {
      const stringData = [
        item.company,
        item.position,
        item.role,
        item.level,
        item.contract,
        item.location,
        item.postedAt,
        ...item.languages,
        ...item.tools,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = stringData.includes(filter.toLowerCase());
      const matchesCategory = category ? item.role === category : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredJobs(newFilteredJobs);
  }, [filter, category]);

  return (
    <>
      <Result number={filteredJobs.length} />
      <ul className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((item: JobProps) => (
            <li key={item.id}>
              <JobCard {...item} />
            </li>
          ))
        ) : (
          <p className="no-avail">No available jobs.</p>
        )}
      </ul>
    </>
  );
};
