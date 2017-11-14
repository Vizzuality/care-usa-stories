import { createElement } from 'react';
import { connect } from 'react-redux';
import { routes } from 'router';

const mapStateToProps = ({ location }) => ({ page: location.type });

const Pages = ({ page }) => createElement(routes[page].component);

export default connect(mapStateToProps)(Pages);
