import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.root = document.getElementById('modal-root');
    this.el = document.createElement('aside');
    this.onKeyUp = this.onKeyUp.bind(this);
    window.addEventListener('keyup', this.onKeyUp);
  }

  componentDidMount () {
    this.root.appendChild(this.el);
  }

  componentWillUnmount () {
    this.root.removeChild(this.el);
  }

  componentDidUpdate() {
    const modalOpened = '__modal-opened';
    if (this.props.open) document.body.classList.add(modalOpened);
    else document.body.classList.remove(modalOpened);
  }

  onKeyUp(e) {
    if (e.key === 'Escape') this.props.toggleModal(false);
  }

  render () {
    const { open, children } = this.props;
    const portalContent = (
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    );
    return open ? ReactDOM.createPortal(portalContent, this.el) : null
  }
}
export default Modal