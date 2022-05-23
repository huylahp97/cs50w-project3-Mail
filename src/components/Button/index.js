import styles from './Button.module.css'
import clsx from 'clsx'

function Button({primary}) {
    const classes = clsx(styles.btn, 'd-flex', {
        [styles.primary]: primary,
        'big': true,
    })
    return (
        <div>
            <button className={styles.btn}>
                Click me!
            </button>
            <button className={clsx(styles.btn, styles.active)}>
                Click me!
            </button>
            <button className={classes}>
                Click me!
            </button>
        </div>
    )
}

export default Button;