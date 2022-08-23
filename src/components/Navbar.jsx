import styles from "../styles/components/Navbar.module.scss"
import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  }, [])

  return (
    <motion.nav className={`${styles.navbar} ${scrolled && styles.darkbg}`}>
      <div>
        <h2>Ryan Leung</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
