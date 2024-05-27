import { forwardRef } from "react"

export default forwardRef(function Input(props, ref) {
    const styles = {
        'checkbox' : 'rounded border-gray-300 ml-2 text-gray-700 disabled:opacity-75',
        'default' : 'w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 disabled:opacity-75'
    }
    return (
        <input ref={ref} {...props} className={styles[props.type] ?? styles['default']}></input>
    )
})