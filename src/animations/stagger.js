export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.2,
            when: 'afterChildren'
        }
    }
}

export const item = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}