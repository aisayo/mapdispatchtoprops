# MapDispatchToProps

## Quick Review

- Redux flow: `action => reducer => new state`
- Store state is determined by reducers
- Actions are like events, when triggered will notify reducer and state will update accordingly
- Redux and React are separate libraries. We can connect them through methods provided by the `react-redux` library.
- Components are made aware of store with Provider component
- Component will have access to pieces of store state as props through `mapStateToProps`