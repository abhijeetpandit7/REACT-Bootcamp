// This is a Functional Component we used
// const WithClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// )

// This is a JS function
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default withClass