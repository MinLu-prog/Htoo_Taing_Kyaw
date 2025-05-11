import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const OrganizationChart = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 60, // Increased spacing between nodes
        rankSpacing: 80, // Increased vertical spacing
      }
    });
    
    setTimeout(() => {
      mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    }, 200);
  }, []);

  return (
    <div className="org-chart-container">
      <div className="mermaid">
        {`
         graph TD
    classDef top fill:#f9d71c,stroke:#333,stroke-width:2px;
    classDef mid fill:#f6ab2e,stroke:#333,stroke-width:1px;
    classDef dept fill:#62c5e8,stroke:#333,stroke-width:1px;
    classDef team fill:#c8e6f5,stroke:#333,stroke-width:1px;

    MD["Managing Director"]
    ADI["Admin Director"]
    D["Director"]
    
    GM["General Manager"]
    OM["Operation Manager"]
    MD --> D
    MD --> ADI
    D --> GM
    ADI --> OM      
    OM --> AD["Admin Department"]
    OM --> OD["Operation Department"]
    GM --> HR["HR Department"]
    GM --> FIN["Finance"]
    GM --> ST["Store"]
    GM --> CD["Contracts Department"]

    AD --> AM["Admin Manager"]

    OD --> CC["Construction Consultant"]
    OD --> EC["Electrical Consultant"]
    OD --> PC["Plumbing & Sanitary Consultant"]

    CC --> PE1["Project Engineer"]
    PE1 --> ET1["Engineer Team"]

    EC --> PE2["Project Engineer"]
    PE2 --> ET2["Engineer Team"]

    PC --> PE3["Project Engineer"]
    PE3 --> ET3["Engineer Team"]

    class MD top;
    class D,GM mid;
    class AD,OD,HR,FIN,ST,CD dept;
    class AM,CC,EC,PC,PE1,PE2,PE3 team;
    class ET1,ET2,ET3 team;

        `}
      </div>
    </div>
  );
};

export default OrganizationChart;