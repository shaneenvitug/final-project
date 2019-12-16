import SingleActivity from '../components/SingleActivity';

const Activity = props => (
  <div>
    <SingleActivity id={props.query.id} />
  </div>
);

export default Activity;