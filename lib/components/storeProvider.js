import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => {
    // create a container component 
    return (Component) => {
        return class extends React.PureComponent {
            static contextTypes = {
                store: PropTypes.object
            };

            onStoreChange = () => {
                if (this.subscriptionId) {
                    this.setState(this.usedState());
                }
            };

            usedState = () => {
                return extraProps(this.context.store, this.props);
            };

            componentDidMount() {
                this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
            }

            componentWillUnmount() {
                this.context.store.unsubscribe(this.subscriptionId);
                this.subscriptionId = null;
            }

            static displayName = `${Component.name}Container`;

            render() {
                return <Component {...this.props} {...this.usedState()} store={this.context.store} />;
            }
        };
    };
};

export default storeProvider;