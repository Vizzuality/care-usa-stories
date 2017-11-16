import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleModal } from 'components/modal/modal.duck';
import ArticleSidebar from './article-sidebar.component';

function mapDispatchToProps(dispatch) {
  const openGallery = () => toggleModal(true);
  return bindActionCreators({ openGallery }, dispatch);
}

export default connect(null, mapDispatchToProps)(ArticleSidebar);