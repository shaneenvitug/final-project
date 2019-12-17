import UpdateActivity from '../components/UpdateActivity';

const UpdatePage = props => (
  <div>
  <UpdateActivity id={props.query.id} />
  </div>
)

export default UpdatePage;