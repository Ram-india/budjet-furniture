import React from "react";

function FeatureBox({ icon, title, desc }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-8 items-center">
      <div className="text-4xl text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-primary text-xl">{title}</h3>
        <p className="text-theme text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default FeatureBox;