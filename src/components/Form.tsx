import { useForm } from "react-hook-form"

interface FormData {
    title: string
    amount: number
    category: string
}

interface Props {
    onAddItem: (item: FormData) => void
}

function Form({ onAddItem }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    function onSubmit(data: FormData) {
        onAddItem(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Description
                </label>
                <input
                    {...register("title", {
                        required: "Title is required",
                    })}
                    id="title"
                    type="text"
                    className="form-control"
                />
                {errors.title?.message && (
                    <p className="text-danger">{errors.title.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input
                    {...register("amount", {
                        required: "Amount is required",
                        pattern: {
                            value: /^\d+$/,
                            message: "Only numeric values are allowed",
                        },
                    })}
                    id="amount"
                    type="text"
                    className="form-control"
                />
                {errors.amount?.message && (
                    <p className="text-danger">{errors.amount.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select
                    {...register("category", {
                        required: "Category is required",
                    })}
                    id="category"
                    className="form-select"
                    aria-label="type of item"
                >
                    <option value="">Select a category</option>
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                {errors.category?.message && (
                    <p className="text-danger">{errors.category.message}</p>
                )}
            </div>
            <button className="btn btn-primary">Add to Shopping cart</button>
        </form>
    )
}

export default Form
