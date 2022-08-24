import styles from "../styles/components/Navbar.module.scss"
import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [clicked, setClicked] = useState(false)

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
        <ul className={styles.links}>
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
        <div className={styles.ham} onClick={() => setClicked(!clicked)}>
          <span className={clicked ? styles.bar1 : undefined}></span>
          <span className={clicked ? styles.bar2 : undefined}></span>
          <span className={clicked ? styles.bar3 : undefined}></span>
        </div>
        {clicked ? (
          <div className={styles.navmenu}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </motion.nav>
  )
}
