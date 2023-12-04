import BestProjectItem from './BackgroundItems/BestProjectItem';
import GithubItem from './BackgroundItems/GithubItem';
import LastProjectItem from './BackgroundItems/LastProjectItem';
import LinkedInItem from './BackgroundItems/LinkedInItem';

export default function Background() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'grid',
        gridTemplate: '"a b" 1fr "c d" 1fr',
        gridTemplateColumns: '1fr 1fr',
        gap: '25%'
      }}
    >
      {/* Github */}
      <GithubItem />
      {/* LinkedIn */}
      <LinkedInItem />
      {/* Best project */}
      <BestProjectItem />
      {/* Latest project */}
      <LastProjectItem />
    </div>
  )
}