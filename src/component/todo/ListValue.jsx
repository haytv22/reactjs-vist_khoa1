const ListValue = (props) => {
    // const { } = props // Destructuring
    return (
        <div className='list-container'>
            <div className='item'>hoc react</div>
            <div className='item'>Watch youtube</div>
            <div>{JSON.stringify(props.TodoList)}</div>
        </div>
    )
}
export default ListValue