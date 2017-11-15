import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.root = document.getElementById('modal-root');
    this.el = document.createElement('aside');
  }
  componentDidMount () {
    this.root.appendChild(this.el);
  }

  componentWillUnmount () {
    this.root.removeChild(this.el);
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