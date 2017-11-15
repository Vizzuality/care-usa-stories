import { connect } from 'react-redux';
import Modal from './modal.component';

function mapStateToProps({ modal }) {
  return { open: modal.open };
}

export default connect(mapStateToProps)(Modal);