const validationComponent = (props) => {
    let validation = "Text too short";
    if ((props.text).length>5){
        validation = "Text too long";
    }
    return (
        <p>{validation}</p>
    );
}

export default validationComponent;