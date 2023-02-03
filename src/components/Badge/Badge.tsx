import React from "react";
import "./badge.scss";

export interface BadgeInterface {
  title: string;
}

const Badge: React.FC<BadgeInterface> = ({ title }) => {
  return (
    <div className="badge">
      <span className="badge__title">{title}</span>
    </div>
  );
};

export default Badge;
