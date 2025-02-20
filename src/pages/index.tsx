import PageSEO from 'src/components/PageSEO';
import Team from '../components/home/Team';
import Ticker from '../components/home/Ticker';
import HelpOut from '../components/home/HelpOut';
import WhatWeDo from '../components/home/WhatWeDo';
import Vision from '../components/home/Vision';
import Supporters from '../components/home/Supporters';
import CurrentActicity from '../components/home/CurrentActivity';

export default function HomePage() {
  const teams = {
    new: {
      name: 'new',
      title: 'Meet the team',
      background: 'bg-black-0',
    },
    old: {
      name: 'old',
      title: 'The Giants',
      background: 'bg-black-0',
      description: (
        <>
          You know the saying with shoulders and giants? <br />
          Without the team below, CollAction wouldn’t exist.
        </>
      ),
    },
  };

  return (
    <>
      <PageSEO title="CollAction | Sustainable choices made easy" />

      <div className="bg-white text-black-400">
        <Ticker />
        <WhatWeDo />
        <Vision />
        <Supporters />
        <CurrentActicity />
        <Team {...teams.new} />
        <HelpOut />
        <Team {...teams.old} />
      </div>
    </>
  );
}
