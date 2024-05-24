import { ReactNode } from "react"

interface Props {
    children: ReactNode
    title: string
    handleFilter?: (category: string) => void
}

function FormFilter({ children, title, handleFilter = () => {} }: Props) {
    return (
        <>
            <label className="form-label" htmlFor="">
                {title}
            </label>
            <select
                onChange={(e) => handleFilter(e.target.value)}
                className="form-select"
            >
                {children}
            </select>
        </>
    )
}

export default FormFilter
