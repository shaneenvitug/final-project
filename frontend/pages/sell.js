import CreateActivity from '../components/CreateActivity';
import PleaseSignIn from '../components/PleaseSignIn';

const Sell = props => (
  <div>
    <PleaseSignIn>
      <CreateActivity />
    </PleaseSignIn>
  </div>
)

export default Sell;