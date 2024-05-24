interface Props {
    items: {
        title: string
        amount: number
        category: string
    }[]
    onRemoveItem: (index: number) => void
}

function Table({ items, onRemoveItem }: Props) {
    return (
        <table className="table table-bordered mt-5">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => {
                    return (
                        <tr key={i}>
                            <th>{item.title}</th>
                            <td>{item.amount}</td>
                            <td>{item.category}</td>
                            <td>
                                <button
                                    onClick={() => onRemoveItem(i)}
                                    className="btn btn-outline-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}

                <tr>
                    <th scope="row">Total</th>
                    <td>
                        $
                        {items.reduce(
                            (acc, item) => Number(item.amount) + acc,
                            0
                        )}
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
