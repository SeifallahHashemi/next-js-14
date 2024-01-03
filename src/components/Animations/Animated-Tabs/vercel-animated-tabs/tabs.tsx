'use client';

import React, { useState } from 'react';


import Activity from './activity';
import Domains from './domains';
import Integrations from './integrations';
import Overview from './overview';
import { useTabs } from "@/components/Animations/Animated-Tabs/vercel-animated-tabs/use-tabs";
import { Framer } from "@/components/Animations/Animated-Tabs/vercel-animated-tabs/tabs-container";

const Tabs = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'Overview',
        children: <Overview />,
        id: 'Overview',
      },
      {
        label: 'Integrations',
        children: <Integrations />,
        id: 'Integrations',
      },
      {
        label: 'Activity',
        children: <Activity />,
        id: 'Activity',
      },
      {
        label: 'Domains',
        children: <Domains />,
        id: 'Domains',
      },
    ],
    initialTabId: 'Matches',
  });
  const framer = useTabs(hookProps);

  return (
    <div className="w-full flex flex-col">
      <div className="border-b w-full items-start flex border-zinc-700 bg-zinc-950 px-8 pt-16">
        <Framer.TabsContainer {...framer.tabProps} />
      </div>

      <div className="pt-10">{framer.selectedTab.children}</div>
    </div>
  );
};

export default Tabs;
