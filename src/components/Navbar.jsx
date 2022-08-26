import styles from "../styles/components/Navbar.module.scss"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { container, item } from "../animations/stagger"

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 330) {
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
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.ham} onClick={() => setClicked(!clicked)}>
          <span className={clicked ? styles.bar1 : undefined}></span>
          <span className={clicked ? styles.bar2 : undefined}></span>
          <span className={clicked ? styles.bar3 : undefined}></span>
        </div>
        <AnimatePresence>
          {clicked ? (
            <div className={styles.navmenu}>
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.li variants={item}>
                  <a href="/#">Home</a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="/about">About</a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="#contact">Contact</a>
                </motion.li>
              </motion.ul>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
