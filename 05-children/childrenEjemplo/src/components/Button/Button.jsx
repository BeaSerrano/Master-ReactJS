export const Button = (props) => {
    console.log('button children', props.children);
    
    return (
        <div>{props.children}</div>
    )
}
