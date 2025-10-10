function TodoItem2() {
    let todoName = 'Go to School';
    let todoDate = '4/10/2025';
    return (
        <div class="container">
            <div class="row kg-row">
                <div class="col-4">
                    <p>{todoName}</p>
                </div>
                <div class="col-4">
                    <p>{todoDate}</p>
                </div>
                <div class="col-2">
                        <button type="button" class="btn btn-danger kg-button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem2;