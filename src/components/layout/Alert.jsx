import { useContext } from "react"
import AlertContext from "../../context/Alert/AlertContext"

function Alert() {
    const {alert} = useContext(AlertContext)
  return alert !== null && (
    <p className="flex items-start mb-4 space-x-2">
        <p className="flex-1 text-base text-white font-semibold">
        <strong>{alert.msg}</strong>
        </p>
        
    </p>
  )
}

export default Alert