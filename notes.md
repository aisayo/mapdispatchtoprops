## Quick Review

[Redux Flow](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

- Redux is a state management library
- Redux flow: `action => reducer => new state`
- Store state is determined by reducers
- Actions are like events, when triggered will notify reducer and state will update accordingly
- Redux and React are separate libraries. We can connect them through methods provided by the `react-redux` library.
- Components are made aware of store with Provider component
- Component will have access to pieces of store state as props through `mapStateToProps`
- Components are only concerned with displaying things, redux abstracts state/data management from components and gives components access through read-only props

## Actions

- Payloads of data being sent from the application to the store
- Sent to the store using `store.dispatch()`
- An object with a required `type` property
- `type` must be a constant string

## Action Creators

- Functions that create actions
- Makes action reusability simple

## Dispatching actions

- Dispatch function is a store method
- The only way to trigger a state change
- Provided to store as a method 
- Component by default has access to dispatch through props when connected

# MapDispatchToProps

- Second argument to `connect()`
- Dispatches action to the store
- When connect calls this function, passes in `dispatch` as an argument
- Makes dispatch implementation more declarative
- Component is not concerned with being aware of dispatch anymore
- Encapsulates logic of talking to Redux store
- Two ways to utilize mapDispatchToProps: function or object
- Functions are better to use for customization but object is simpler

## Resources

- [mapDispatchToProps](https://react-redux.js.org/using-react-redux/connect-mapdispatch)