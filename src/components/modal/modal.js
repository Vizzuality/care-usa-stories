import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from './modal.component';
import modalDuck, { toggleModal } from './modal.duck';

function mapStateToProps({ modal }) {
  return { open: modal.open };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleModal }, dispatch);
}
export { modalDuck };
export default connect(mapStateToProps, mapDispatchToProps)(Modal);