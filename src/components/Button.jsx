import { useState } from "react"
import classes from "./Button.module.css"

export default function MyButton() {
  const [count, setCount] = useState(0)

  return (
    <div onClick={() => setCount(count + 1)} className={`${classes.noselect} ${classes.button}`}>
      Click Me {count}
    </div>
  )
}
