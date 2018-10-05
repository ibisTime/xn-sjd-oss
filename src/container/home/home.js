import React from 'react';
import { getKindByUrl } from 'common/js/util';
import OwnComp from './ownComp';
import AgentComp from './agentComp';
import CuringComp from './curingComp';
import PlatformComp from './platformComp';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cnyAccount: {}
    };
    this.kind = getKindByUrl();
  }
  render() {
    const { cnyAccount } = this.state;
    return (
      <div className="home-wrapper">
        {
          this.kind === 'D'
            ? <AgentComp cnyAccount={cnyAccount} />
            : this.kind === 'O'
              ? <OwnComp cnyAccount={cnyAccount} />
              : this.kind === 'M'
                ? <CuringComp cnyAccount={cnyAccount} />
                : <PlatformComp cnyAccount={cnyAccount} />
        }

      </div>
    );
  }
}