import { useState, useEffect } from "react"
import Form from "./components/Form"
import Table from "./components/Table"
import FormFilter from "./components/FormFilter"

interface FormData {
    title: string
    amount: number
    category: string
}

function App() {
    const [items, setItems] = useState(() => {
        const localData = localStorage.getItem("items")
        return localData ? JSON.parse(localData) : []
    })

    const [filterCategory, setFilterCategory] = useState("")

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])

    const handleAddItem = (item: FormData) => {
        setItems([...items, item])
    }

    const handleRemoveItem = (index: number) => {
        const newItems = items.filter((_: FormData, i: number) => i !== index)
        setItems(newItems)
    }

    return (
        <>
            <Form onAddItem={handleAddItem} />
            <div className="mt-5">
                <FormFilter
                    title="filter category"
                    handleFilter={(category: string) =>
                        setFilterCategory(category)
                    }
                >
                    <option value="">Filter by category</option>
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </FormFilter>
            </div>
            <Table
                onRemoveItem={handleRemoveItem}
                items={items.filter((item: FormData) => {
                    return (
                        item.category === filterCategory ||
                        filterCategory === ""
                    )
                })}
            />
        </>
    )
}

export default App
