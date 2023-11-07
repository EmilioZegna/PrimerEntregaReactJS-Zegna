import styles from "./container.modules.css"

export const ItemContainerList = ({ greeting }) => {
    return (
        <div className = "d-flex justify-content-center p-4">
            <div className="greeting"> { greeting } </div>
        </div>
    )
}